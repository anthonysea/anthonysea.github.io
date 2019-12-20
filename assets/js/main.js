$(document).ready(function() {
    $(".project-details").hide();
    $(".excerpt").click(function() {
        $(this).siblings(".project-details").slideToggle("slow", function () {
            //if ($(this).is(':visible'))
              //  $(this).css('display', 'flex');
        });
    });
});


