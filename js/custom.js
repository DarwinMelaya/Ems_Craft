// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Simulate a 2-second delay (you can replace this with your actual content loading logic)
    setTimeout(function () {
        // Hide the loading screen
        document.getElementById("loadingScreen").style.display = "none";
        // Show the main content
        document.getElementById("mainContent").style.display = "block";
    }, 2000);
});