
$(document).ready(function($){

	$('.header-nav a').each(function highlightSelectedListItem(index) {
        if(this.href.trim() == window.location){
            $(this).addClass("selected");

            console.log("class added")
        }
            
    });

});