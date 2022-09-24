$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
var $=jQuery.noConflict();jQuery(function($){"use strict";$(window).load(function(){$("#preloader").delay(500).fadeOut("slow");setTimeout(function(){$(".home").addClass("selected")},0);setTimeout(function(){$("#logo h1").addClass("animated fadeInDown")},1300);setTimeout(function(){$("#logo img").addClass("animated fadeInDown")},1300);setTimeout(function(){$("#logo p").addClass("animated fadeInDown")},1600);setTimeout(function(){$("#textslider").addClass("animated fadeInDown")},1900);})
$("#bubble").each(function(){$(".cover").pobubble({color:"#ffffff",ammount:10,min:.1,max:.2,time:60,vertical:true,horizontal:true,style:'circle'});});$("#snow").each(function(){posnow();});$("#star").each(function(){postars($('.cover')[0]).init();});$(".video").each(function(){$(".stop-button").click(function(){$(".stop-button").toggleClass('fa-play').toggleClass('fa-pause');var videoBG=document.getElementById("video");if(videoBG.paused)
videoBG.play();else
videoBG.pause();});$(".volume-button").click(function(){$(".volume-button").toggleClass('fa-volume-off').toggleClass('fa-volume-up');$("video").prop('muted',!$("video").prop('muted'));});});$("#imageslider").superslides({play:6000,animation:"fade",animation_speed:"slow",pagination:false,usekeyboard:false});$("#textslider").superslides({play:6000,animation:"fade",animation_speed:"slow",pagination:false,usekeyboard:false});var pofloor=$("#sections").pofloor({time:1000,childType:"section",easing:"easeInOutExpo",wheelNavigation:true,direction:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]});var pofloorInstance=$("#sections").data("pofloor");$(".direction").click(function(){pofloorInstance.scrollToDirection($(this).data("direction"));});pofloor.on("scrollStart",function(event,floor){$("section").removeClass("selected");$("section:eq("+floor.to+")").addClass("selected");});$("#newsletter").each(function(){var $form=$('#subscribe');$('.newsletter .submit').on('click',function(event){if(event)
event.preventDefault();register($form);});function register($form){$.ajax({type:$form.attr('method'),url:$form.attr('action'),data:$form.serialize(),cache:false,dataType:'json',contentType:"application/json; charset=utf-8",error:function(err){$('.newsletter .message').hide().html('<p class="error alert alert-danger"> Could not connect to server. Please try again later.</p>').fadeIn("slow");$(".newsletter .message").delay(1500).slideDown("slow");},success:function(data){if(data.result!="success"){var message=data.msg.substring(4);$(".newsletter .message").delay(0).slideUp("fast");$(".newsletter .waiting").delay(0).slideDown("slow");$(".newsletter .waiting").delay(600).slideUp("fast");$(".newsletter .message").delay(1500).slideDown("slow");setTimeout(function(){$(".newsletter .message").html('<p class="error alert alert-danger"><i class="fa fa-exclamation-triangle"></i> '+message+'</p>');},1500);}else{var message=data.msg.substring(4);$(".newsletter .message").delay(0).slideUp("fast");$("#subscribe").delay(300).slideUp("slow");$(".newsletter .waiting").delay(0).slideDown("slow");$(".newsletter .waiting").delay(900).slideUp("fast");$(".newsletter .message").delay(1500).slideDown("slow");setTimeout(function(){$('.newsletter .message').html('<p class="success alert alert-success"><i class="fa fa-thumbs-up"></i> '+'Awesome! We sent you a confirmation email.'+'</p>');},1500);}}});}});$("#contactform").each(function(){$('#contactform').validate({highlight:function(element,errorClass){$(element).fadeOut(function(){$(element).fadeIn();});},rules:{name:{required:true,minlength:2},email:{required:true,email:true},number:{required:true,minlength:8},message:{required:true,minlength:5}},messages:{name:"<i class='fa fa-exclamation-triangle'></i> Please specify your name",email:{required:"<i class='fa fa-exclamation-triangle'></i> We need your email address to contact you",email:"<i class='fa fa-exclamation-triangle'></i> Please enter a valid email address"},number:"<i class='fa fa-exclamation-triangle'></i> Please specify your phone",message:"<i class='fa fa-exclamation-triangle'></i> Please enter your message"},submitHandler:function(form){$(form).ajaxSubmit({type:"POST",data:$(form).serialize(),url:"inc/contact.php",success:function(){$('#contactform :input').attr('disabled','disabled');$('#contactform').fadeTo("slow",0.15,function(){$(this).find(':input').attr('disabled','disabled');$(this).find('label').css('cursor','default');$(".contactform").delay(1000).slideUp("slow");$(".contact .message").delay(1500).slideDown("slow");$('.success').delay(1500).slideDown("slow");});},error:function(){$('#contactform').fadeTo("slow",0.15,function(){$(".contactform").delay(1000).slideUp("slow");$(".contact .message").delay(1500).slideDown("slow");$('.error').delay(1500).slideDown("slow");});}});}});});$(".timer").potimer({day:29,month:12,year:2015,onChange:function(){countPOAnimate($('.timer').find('.number span'));}});function countPOAnimate($el){$el.each(function(index){var $this=$(this),fieldText=$this.text(),fieldData=$this.attr('data-value'),fieldOld=$this.attr('data-old');if(typeof fieldOld==='undefined'){$this.attr('data-old',fieldText);}
if(fieldText!=fieldData){$this.attr('data-value',fieldText).attr('data-old',fieldData).addClass('animate');window.setTimeout(function(){$this.removeClass('animate').attr('data-old',fieldText);},300);}});}});
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);


})
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 