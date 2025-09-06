document.addEventListener('DOMContentLoaded', function() {
    // Find the image element on the page
    const authorImage = document.getElementById('homepage-image');
    // Check if the image element exists on the current page
    if (authorImage) {
        const imageUrls = [
            '/assets/images/profile/1.jpg', 
            '/assets/images/profile/2.jpg',
            '/assets/images/profile/3.jpg',
            '/assets/images/profile/4.jpg',
            '/assets/images/profile/5.jpg'
        ];
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        authorImage.src = imageUrls[randomIndex];
    }
});
