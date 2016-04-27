
$(document).ready(function($){

	$('.header-nav a, .side-nav a').each(function highlightSelectedListItem(index) {
        if(this.href.trim() == window.location){
            $(this).addClass("selected");

            console.log("class added")
        }
            
    });

    var sn = $('.side-nav');

    $(window).scroll(function(){
        if( $(this).scrollTop() > 242){
            sn.css('display','block');
        }
        else{
            sn.css('display','none');
        }
    })

});