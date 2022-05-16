$(document).ready(function(){var w=$(window);$('body').css('overflow','')
$('.loader').css({"animation":'fadeOut 1s',"opacity":'0',"z-index":'-1'})
setTimeout(()=>{$('.loader').remove()},1500)
$(".om").on('click',function(e){var button=$(this)
if(button.hasClass("is-active")){button.removeClass("is-active")
$("body").removeClass("menu-opened")}else{button.addClass("is-active")
$("body").addClass("menu-opened")}})
$(".content").on("click",function(e){var body=$("body");if(body.hasClass("menu-opened")){body.removeClass("menu-opened")
$(".om").removeClass("is-active")}});$('[data-animate]').each(function(){var current=$(this)
var animation=current.data('animate')
var duration=current.data('duration')
var delay=current.data('delay')
var width=current.data('width')
if(width!=='undefined'&&w.width()<width){current.addClass('animated')
return}
duration=duration=='undefined'?'.6':duration
delay=delay=='undefined'?'.0':delay
current.waypoint(function(){current.addClass('animated '+animation).css({'animation-duration':duration+'s','animation-delay':delay+'s'})},{offset:'100%'})})})