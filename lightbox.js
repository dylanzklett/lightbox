$(document).ready(
function(){
	$(".lightbox_link").on("click", function(){
		if($('.outer_lightbox').css("display") == "none"){
			$('.outer_lightbox').show();
	}
	});
	$(".exit").on("click", function(){
		if($('.outer_lightbox').css("display") == "block"){
			$('.outer_lightbox').hide();
		}
	});




})