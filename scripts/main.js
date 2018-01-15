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

                $(".page-header").css({
                    "padding-top": "270px"
                });

                $(".subtitle").css({
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


(function() {
            var contact = document.forms['sub'].elements['contact'];
        
            for (var i=0, len=contact.length; i<len; i++) {
                contact[i].onclick = function() {
                   if(this.value=="other")
                   {
                   document.getElementById("text-area").style.display = "block";
                  }
                  else{
                    document.getElementById("text-area").style.display = "none";
                  }
        
                  
                };   
            }
            
            for (var i=0, len=document.forms.length; i<len; i++) {
                document.forms[i].onsubmit = function() { return false; };
            }   



function toggleBurger(x) {
    x.classList.toggle("change");
}