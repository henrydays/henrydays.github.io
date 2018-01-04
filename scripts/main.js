  $(document).ready(function(){
    
    $("#nav-toggle").click(toggle);

    var expanded=false;

    function toggle()
    {
    	if(!expanded)
    	   {
		
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

  function toggleBurger(x) {
    x.classList.toggle(	"change");
}

