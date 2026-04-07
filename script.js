document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");

    // Just one quick timer
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.4s";
        
        // Hide it completely once it's see-through
        setTimeout(() => {
            loader.style.display = "none";
        }, 400);
    }, 400); // 0.5 second total wait time
});