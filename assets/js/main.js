$(document).ready(function() {
    $(".project-details").hide();
    $(".excerpt").click(function() {
        $(this).siblings(".project-details").slideToggle("slow", function () {});
        $(this).children(".visual-cue").slideToggle("slow", function() {});
    });

    $(".project-details").click(function() {
        $(this).slideToggle("slow", function () {});
        $(this).siblings(".excerpt").children(".visual-cue").slideToggle("slow", function() {});
    });

    $(".about-me").hide();
    $(".site-title").click(function() {
        $(".about-me").slideToggle("slow", function() {});
    })
});


