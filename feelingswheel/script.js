let nodeIdCounter = 0;
let flatEmotions = [];

function initializeData(node, parentNode, passedColor) {
  node.id = 'node_' + (nodeIdCounter++);
  node.parent = parentNode;
  if (parentNode && parentNode.name === "Center") node.color = node.color; 
  else if (parentNode) node.color = passedColor; 
  else node.color = "#ffffff";
  if (node.name !== "Center") flatEmotions.push(node);
  if (node.children) node.children.forEach(c => initializeData(c, node, node.color));
}
initializeData(emotionsData, null, null);

function countLeaves(node) {
  if (!node.children) { node.leaves = 1; return 1; }
  let sum = 0;
  node.children.forEach(c => sum += countLeaves(c));
  node.leaves = sum;
  return sum;
}

function assignAngles(node, startAngle, totalLeaves) {
  const anglePerLeaf = 360 / totalLeaves;
  node.startAngle = startAngle;
  node.endAngle = startAngle + (node.leaves * anglePerLeaf);
  let currentAngle = startAngle;
  if (node.children) {
    node.children.forEach(c => {
      assignAngles(c, currentAngle, totalLeaves);
      currentAngle += (c.leaves * anglePerLeaf);
    });
  }
}
countLeaves(emotionsData);
assignAngles(emotionsData, 0, emotionsData.leaves);

const wheelGroup = document.getElementById('wheelGroup');
const cx = 500, cy = 500;

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return { x: centerX + (radius * Math.cos(angleInRadians)), y: centerY + (radius * Math.sin(angleInRadians)) };
}

function describeArc(x, y, innerRadius, outerRadius, startAngle, endAngle){
  const startInner = polarToCartesian(x, y, innerRadius, startAngle);
  const endInner   = polarToCartesian(x, y, innerRadius, endAngle);
  const startOuter = polarToCartesian(x, y, outerRadius, startAngle);
  const endOuter   = polarToCartesian(x, y, outerRadius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", startInner.x, startInner.y,
    "L", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 1, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 0, startInner.x, startInner.y,
    "Z"
  ].join(" ");
}

function drawWheel(node, depth) {
  if (depth > 0) {
    let ir, or;
    if (depth === 1) { ir = 75; or = 200; }
    else if (depth === 2) { ir = 200; or = 345; }
    else { ir = 345; or = 495; }
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", describeArc(cx, cy, ir, or, node.startAngle, node.endAngle));
    path.setAttribute("fill", node.color);
    path.setAttribute("stroke", "#ffffff"); 
    path.setAttribute("stroke-width", "1.5");
    path.setAttribute("class", "wheel-segment");
    path.setAttribute("data-id", node.id);
    path.onclick = () => { if (!isDraggingWheel) selectEmotion(node); };
    wheelGroup.appendChild(path);

    const midAngle = (node.startAngle + node.endAngle) / 2;
    const midRadius = depth === 1 ? or * 0.65 : (ir + or) / 2;
    const pos = polarToCartesian(cx, cy, midRadius, midAngle);
    
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", pos.x);
    text.setAttribute("y", pos.y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("alignment-baseline", "middle");
    
    text.setAttribute("font-size", depth === 1 ? "18" : (depth === 2 ? "11.5" : "9"));
    text.setAttribute("font-family", "'Outfit', sans-serif");
    text.setAttribute("font-weight", depth === 1 ? "700" : "600");
    text.setAttribute("fill", "#ffffff");
    text.style.pointerEvents = "none";
    text.setAttribute("class", "wheel-text");
    text.setAttribute("data-id", node.id);
    
    let rot = midAngle - 90;
    text.setAttribute("transform", `rotate(${rot} ${pos.x} ${pos.y})`);
    text.textContent = node.name;
    wheelGroup.appendChild(text);
  }
  if (node.children) node.children.forEach(c => drawWheel(c, depth + 1));
}
drawWheel(emotionsData, 0);

// Fixed Center "Reset" Button
const centerGroup = document.getElementById('centerResetGroup');
centerGroup.style.cursor = "pointer";
centerGroup.onclick = () => {
  if (!isDraggingWheel) {
    currentRotation = 0;
    wheelGroup.setAttribute('transform', `rotate(0 500 500)`);
    wheelGroup.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    setTimeout(() => { wheelGroup.style.transition = "none"; }, 500);
    resetSelection();
  }
};

const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
centerCircle.setAttribute("cx", 500);
centerCircle.setAttribute("cy", 500);
centerCircle.setAttribute("r", 72);
centerCircle.setAttribute("fill", "#ffffff");

const centerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
centerText.setAttribute("x", 500);
centerText.setAttribute("y", 500);
centerText.setAttribute("text-anchor", "middle");
centerText.setAttribute("alignment-baseline", "middle");
centerText.setAttribute("font-size", "22");
centerText.setAttribute("font-family", "'Outfit', sans-serif");
centerText.setAttribute("font-weight", "700");
centerText.setAttribute("fill", "#2c3e50");
centerText.style.pointerEvents = "none";
centerText.textContent = "Reset";

centerGroup.appendChild(centerCircle);
centerGroup.appendChild(centerText);

// Interaction & Breadcrumb Logic
let currentEmotion = null;

function getAllRelatedIds(node) {
  const ids = new Set();
  let current = node;
  while (current && current.name !== "Center") {
    ids.add(current.id);
    current = current.parent;
  }
  function addDescendants(n) {
    if(!n || n.name === "Center") return;
    ids.add(n.id);
    if(n.children) n.children.forEach(addDescendants);
  }
  addDescendants(node);
  return ids;
}

function updateWheelOpacities(activeNode) {
  const elements = document.querySelectorAll('.wheel-segment, .wheel-text');
  if (!activeNode) {
    elements.forEach(el => el.style.opacity = '1');
    return;
  }
  const relatedIds = getAllRelatedIds(activeNode);
  elements.forEach(el => {
    const id = el.getAttribute('data-id');
    el.style.opacity = relatedIds.has(id) ? '1' : '0.15';
  });
}

function renderBreadcrumbs(node) {
  const breadcrumbContainer = document.getElementById('breadcrumb');
  if (!node || node.name === "Center") {
    breadcrumbContainer.innerHTML = '<h2>Unselected</h2>';
    return;
  }
  
  const path = [];
  let curr = node;
  while (curr && curr.name !== "Center") {
    path.unshift(curr);
    curr = curr.parent;
  }
  
  const html = path.map((n, i) => {
    const isLast = i === path.length - 1;
    const arrow = isLast ? '' : `<span class="arrow">→</span>`;
    return `<span class="badge" style="background: ${n.color}">${n.name}</span> ${arrow}`;
  }).join(' ');
  
  breadcrumbContainer.innerHTML = html;
}

function resetSelection() {
  currentEmotion = null;
  renderBreadcrumbs(null);
  document.getElementById('emotionDef').textContent = "Select an emotion from the wheel or search to read how it physically manifests in your body.";
  document.getElementById('searchInput').value = '';
  updateWheelOpacities(null);
}

function selectEmotion(node) {
  if (currentEmotion === node) {
    resetSelection();
    return;
  }
  
  currentEmotion = node;
  renderBreadcrumbs(node);
  document.getElementById('emotionDef').textContent = node.def;
  document.getElementById('searchInput').value = node.name;
  updateWheelOpacities(node);
}

function searchEmotions() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  if(!query) {
    updateWheelOpacities(null);
    return;
  }
  const match = flatEmotions.find(e => e.name.toLowerCase() === query || e.name.toLowerCase().includes(query));
  if(match) {
    currentEmotion = match;
    renderBreadcrumbs(match);
    document.getElementById('emotionDef').textContent = match.def;
    updateWheelOpacities(match);
  }
}

// Spinning Logic
const container = document.getElementById('wheelContainer');
let isPointerDown = false;
let isDraggingWheel = false;
let currentRotation = 0;
let startAngle = 0;

function getAngle(e) {
  const rect = container.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const x = clientX - (rect.left + rect.width / 2);
  const y = clientY - (rect.top + rect.height / 2);
  return Math.atan2(y, x) * (180 / Math.PI);
}

function onPointerDown(e) {
  isPointerDown = true;
  isDraggingWheel = false;
  startAngle = getAngle(e) - currentRotation;
  wheelGroup.style.transition = "none";
}

function onPointerMove(e) {
  if (!isPointerDown) return;
  if (e.touches && e.touches.length > 1) return; // Native pinch-to-zoom
  
  isDraggingWheel = true;
  e.preventDefault(); 
  currentRotation = getAngle(e) - startAngle;
  wheelGroup.setAttribute('transform', `rotate(${currentRotation} 500 500)`);
}

function onPointerUp() {
  isPointerDown = false;
  setTimeout(() => isDraggingWheel = false, 50); 
}

container.addEventListener('mousedown', onPointerDown);
document.addEventListener('mousemove', onPointerMove, {passive: false});
document.addEventListener('mouseup', onPointerUp);
container.addEventListener('touchstart', onPointerDown, {passive: false});
document.addEventListener('touchmove', onPointerMove, {passive: false});
document.addEventListener('touchend', onPointerUp);

// Logging Logic
function logEmotion() {
  if(!currentEmotion) return;
  const noteInput = document.getElementById('emotionNote');
  const log = JSON.parse(localStorage.getItem('emotionLog') || '[]');
  
  log.unshift({ 
    time: new Date().toLocaleString(), 
    emotion: currentEmotion.name, 
    color: currentEmotion.color,
    note: noteInput.value.trim()
  });
  
  localStorage.setItem('emotionLog', JSON.stringify(log));
  noteInput.value = ''; 
  renderLog();
  
  const btn = document.getElementById('logBtn');
  btn.textContent = "Logged!";
  btn.style.background = "#237a44";
  setTimeout(() => {
    btn.textContent = "Log this Emotion";
    btn.style.background = "#3a4163";
  }, 2000);
}

function renderLog() {
  const log = JSON.parse(localStorage.getItem('emotionLog') || '[]');
  const list = document.getElementById('logList');
  list.innerHTML = '';
  log.slice(0, 10).forEach(entry => {
    const li = document.createElement('li');
    li.className = 'log-item';
    
    let noteHtml = entry.note ? `<div class="log-note">"${entry.note}"</div>` : '';
    
    li.innerHTML = `
      <div class="log-header">
        <span><strong style="color:${entry.color}">●</strong> ${entry.emotion}</span> 
        <span class="log-time">${entry.time}</span>
      </div>
      ${noteHtml}
    `;
    list.appendChild(li);
  });
}
renderLog();

document.addEventListener('click', function(event) {
  const isSvgClick = event.target.closest('svg');
  const isSearchClick = event.target.closest('.search-bar');
  const isCardClick = event.target.closest('.card');
  
  if (!isSvgClick && !isSearchClick && !isCardClick && currentEmotion) {
    resetSelection();
  }
});