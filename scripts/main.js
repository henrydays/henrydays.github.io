  $(document).ready(function(){
    

    var expanded=false;
    $("#nav-toggle").click(moveSlider);

	console.log(expanded);

   	




    function moveSlider()
    {

    	if(!expanded)
    	   {
			$(".nav-bar .logo").css({"width":"100%"});

			$(".nav-bar .menu ").show(500);
		
		 $(".slideshow").animate(
		 {
		 	"padding-top":"400px"
		 }
		 );
		 $(".slideshow .subtitle").animate({
		 	"top":"600"

		 })

		 $(".slideshow .button").animate({
		 	"top":"600"})
		  
		 expanded=true;
    	}
    	else
    	{


   		$(".nav-bar .menu ").css({"display":"none"});
   		$(".nav-bar .menu").css({"float":"left"});


		 $(".slideshow .button").animate({
		 	"top":"200"})
    		$(".slideshow .subtitle").animate({
		 	"top":"200"

		 })
    		 $(".slideshow").animate(
		 {
		 	"padding-top":"0px"
		 }
		 );
		 expanded=false;
		
    	}

    }


}
);
  function toggleBurger(x) 
  {
    x.classList.toggle(	"change");
}

