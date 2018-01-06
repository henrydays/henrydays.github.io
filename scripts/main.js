$(document).ready(function() {


    var expanded = false;
    $("#nav-toggle").click(moveSlider);

    console.log(expanded);


    function moveSlider() {

        if (!expanded) {
            $(".nav-bar .logo").css({
                "width": "100%"
            });

            $(".nav-bar .menu ").show(500);


            if ($('#page-header') != null) {

                $(".page-header").animate({
                    "padding-top": "270px"
                });

                $(".subtitle").animate({
                    "top": "350"

                })

                expanded = true;


            }

            $(".slideshow").animate({
                "padding-top": "270px"
            });
            $(".slideshow .subtitle").animate({
                "top": "450"

            })

            $(".slideshow .button").animate({
                "top": "450"
            })

            expanded = true;
        } else {

            if ($('#page-header') != null) {
                $(".page-header").animate({
                    "padding-top": "0px"
                });

                $(".subtitle").animate({
                    "top": "130"

                })
                expanded = false;

            }

            $(".nav-bar .menu ").css({
                "display": "none"
            });

            $(".nav-bar .menu").css({
                "float": "left"
            });


            $(".slideshow .button").animate({
                "top": "200"
            })

            $(".slideshow .subtitle").animate({
                "top": "200"

            })

            $(".slideshow").animate({
                "padding-top": "0px"
            });

            expanded = false;

        }

    }




});

function toggleBurger(x) {
    x.classList.toggle("change");
}