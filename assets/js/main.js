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

    overlay.init();
});

let overlay = {
    init() {
        console.log("overlay initialized.");

        // $("body").append('<div class="overlay"><div class="modal-video"><div class="video-wrapper"></div></div></div>');
        $("body").append('<div class="overlay"><div class="video-wrapper"></div></div>');

        var self = this;

        // display video
        $(".enlarge-screen").on("click", function(e) {
            e.preventDefault();
            console.log("show");
            // pass a copy of the capture (img/video) to be enlarged
            self.show($(this).clone().removeClass("enlarge-screen"));
        });

        // hide video
        $(".overlay").on("click", function(e) {
            e.preventDefault();
            console.log("hide");
            self.hide();
        });
    },
    show(capture) {
        console.log(capture);
        // make overlay and video wrapper visible
        $(".overlay").addClass("active");
        $(".video-wrapper").addClass("active");
        // append the cloned capture element to the overlay
        $(".video-wrapper").append(capture);
    },
    hide() {
        // hide the overlay
        $(".overlay").removeClass("active"); 
        $(".video-wrapper").removeClass("active"); 
        // remove the video 
        $(".video-wrapper").children().remove(); 

    }
}


