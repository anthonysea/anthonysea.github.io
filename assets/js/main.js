$(document).ready(function() {
    $(".project-details").hide();
    $(".excerpt").click(function() {
        $(this).siblings(".project-details").slideToggle("slow", function () {
            //if ($(this).is(':visible'))
              //  $(this).css('display', 'flex');
        });
    });
    $(".about-me").hide();
    $(".site-title").click(function() {
        $(".about-me").slideToggle("slow", function() {});
    })
});


