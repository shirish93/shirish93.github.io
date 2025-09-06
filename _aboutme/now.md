---
layout: summary
title:  "What am I up to this moment?"
author: shirish
categories: [ now ]
permalink: /now
---

<style>
:root {
  --bubble-bg: #2c3e50;
  --bubble-border-color: #34495e;
  --text-color: #ecf0f1;
  --meta-text-color: #bdc3c7;
  --bubble-border-radius: 12px;
  --bubble-padding: 1.5rem;
  --arrow-size: 12px;
}

/* Container for all update messages */
.updates-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem; /* Vertical space between bubbles */
  padding: 1rem 0;
  font-family: 'Merriweather', serif; /* Match site font */
}

/* Individual message bubble */
.message {
  background-color: var(--bubble-bg);
  border: 1px solid var(--bubble-border-color);
  border-radius: var(--bubble-border-radius);
  padding: var(--bubble-padding);
  max-width: 75%;
  position: relative;
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
}

/* Align bubbles left and right */
.tooltip-left {
  align-self: flex-start;
}

.tooltip-right {
  align-self: flex-end;
}

/* Arrow Border - creates the outer triangle */
.message::before {
  content: '';
  position: absolute;
  bottom: 25px;
  width: 0;
  height: 0;
  border: calc(var(--arrow-size) + 1px) solid transparent;
}

/* Arrow Fill - creates the inner, background-colored triangle */
.message::after {
  content: '';
  position: absolute;
  bottom: calc(25px + 1px);
  width: 0;
  height: 0;
  border: var(--arrow-size) solid transparent;
}

/* Left-aligned arrow positioning */
.tooltip-left::before {
  right: 100%;
  border-right-color: var(--bubble-border-color);
}
.tooltip-left::after {
  right: 100%;
  margin-right: -8px;
  border-right-color: var(--bubble-bg);
}

/* Right-aligned arrow positioning */
.tooltip-right::before {
  left: 100%;
  border-left-color: var(--bubble-border-color);
  margin-left: -10%;
}
.tooltip-right::after {
  left: 100%;
  margin-left: -8px;
  border-left-color: var(--bubble-bg);
}

/* Content text */
.cont {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: var(--text-color);
}

/* Image styling */
.img img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Softer corners for images */
  margin-bottom: 1rem;
  display: block;
}

/* Date and location box */
.date-box {
  font-size: 0.875rem;
  color: var(--meta-text-color);
  text-align: right;
  font-style: italic;
  width: 100%;
  margin-top: auto; /* Pushes to the bottom of the flex container */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

/* Styles for the share link */
.share-link {
  color: var(--meta-text-color);
  cursor: pointer;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-style: normal;
  transition: color 0.2s ease-in-out;
}

.share-link:hover {
  color: #d9230f; /* A theme color from your site */
}

.share-link svg {
  width: 1em;
  height: 1em;
}

/* Styles for the hike log entries */
.log-entry {
  display: flex;
  align-items: flex-start; /* Aligns time and text to the top */
  margin-bottom: 1.5rem; /* Space between each timestamped entry */
}

.log-time {
  font-weight: bold;
  color: #d9230f; /* Using a theme color from your site */
  flex-shrink: 0; /* Prevents the time from shrinking on smaller screens */
  width: 80px; /* A fixed width helps align all the log text */
  text-align: right;
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 2px solid #e9ecef; /* A subtle vertical separator */
  line-height: 1.7; /* Match text line-height */
}

.log-text p {
  margin-top: 0;
  margin-bottom: 0.5rem; /* Space between paragraphs within the same entry */
}

.log-text p:last-child {
  margin-bottom: 0;
}

</style>

<div class="updates-container">
  {% for update in site.data.updates %}
  <div id="update-{{ forloop.rindex }}" class="message tooltip-{% cycle 'left', 'right' %}">
    <div class='cont'>
    {{update.content}}
    </div>
    {% if update.image %}
    <div class="img">
      <img src="{{update.image}}">
    </div>
    {% endif %}
    <div class="date-box">
      <span>-Shirish on {{ update.date | default: "now" | date: "%B %d, %Y" }} from {{ update.location | default: "Seattle, WA" }}</span>
      <a href="#update-{{ forloop.rindex }}" class="share-link" title="Copy link to this update" onclick="copyLink(event, this)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16"><path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/></svg>
          <span>Share</span>
      </a>
    </div>
  </div>
  {% endfor %}
</div>

---

With no social media presence, this is where I will post my professional and personal updates. Everything one puts on social media should be considered 'public' by default, and any semblance of privacy is an illusion we are misled buying into. If there's something I feel comfortable sharing in social media, that'll go here.

I have lovingly hand-crafted css+html+jekyll templates for the post above so that each individual entries I post here appear as a 'social media post' stylistically. The goal is to make the experience of viewing this feel more 'authentic'. Ask me about the importance of placemaking, and why companies should focus on 'digital spaces with character' and how that relates to people's perception of physical spaces. My thesis is that blandness is beneficial, but it has rapidly dimishing returns.

In this space, I will talk about the following:
What I am up to right now, over the course of the recent two weeks or so
  * Talk about hobbies progress.
    * Walking? How is it going? New Routes? New discoveries? New experiences?
    * Fermentation. What's new there? Found any cool new options, made discoveries etc?
    * Plants, hydroponics etc, done any new cool things there?
    * Reading, read any new books recently? What did I think about them? Quick reviews that I might not want to post in the other section.
    * Any updates on the artistic side?
  * Writing progress
  * Work updates.
  * Volunteering updates
  * Activism updates
  * The weather and how it's influencing my choices

<script>
function copyLink(event, element) {
  event.preventDefault();
  const urlToCopy = window.location.href.split('#')[0] + element.getAttribute('href');
  
  navigator.clipboard.writeText(urlToCopy).then(() => {
    const originalContent = element.innerHTML;
    const originalTitle = element.title;
    element.innerHTML = 'Copied!';
    element.title = 'Link copied to clipboard!';
    element.style.color = '#28a745'; // Green for success
    
    setTimeout(() => {
      element.innerHTML = originalContent;
      element.title = originalTitle;
      element.style.color = ''; // Revert color
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy link: ', err);
    const originalContent = element.innerHTML;
    const originalTitle = element.title;
    element.innerHTML = 'Copy Failed';
    element.title = 'Could not copy link.';
    element.style.color = '#dc3545'; // Red for error

    setTimeout(() => {
      element.innerHTML = originalContent;
      element.title = originalTitle;
      element.style.color = ''; // Revert color
    }, 2000);
  });
}
</script>