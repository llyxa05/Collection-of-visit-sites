


$(document).ready(function() {


    
    
  $('.window').children('.buttons').mouseenter(function(){
    $(this).children('.buttons_hover_yes').show();
  });

  $('.window').children('.buttons').mouseleave(function(){
    $(this).children('.buttons_hover_yes').css("display","none")
  });


  $('.button-close').click(function(){
    $(this).parents().parents('.window').css("display","none")
      
 
    
    if ($(this).parents().parents('.window').attr("id") == "window-3") $("#window-3 .window-content").attr("src", "");
    $('.show').show();
      
    
  });

  $('.show').click(function(){
    $('.window').show();
    $(this).hide()
  });

  $(function() {
    $(".window").draggable({handle: ".handle"});
    $(".folder").draggable();
    $(".window").resizable({
      minWidth: 300,
      minHeight: 200,
      create: function( event, ui ) {
          $(".ui-resizable-s").css("cursor","ns-resize");
          $(".ui-resizable-se").css("cursor","nwse-resize");
          $(".ui-resizable-e").css("cursor","ew-resize");
      },
      resize: function(event, ui ){
        var properHeight = $(".column-1").width();
        $(".column-2").height("100%");
        $(".column-3").height("100%");
     
        $(".column-2-holder").height("100%");
        $(".column-3-holder").height("100%");
      }
    });
    $(".column-1").resizable({
      containment: ".content-area",
      minWidth: 130,
      handles: "e",
        create: function( event, ui ) {
    
            $(".ui-resizable-e").css("cursor","ew-resize");
        },
        resize: function (event, ui){
          $(".column-2-holder").css("left",$(".column-1").width()+"px");
          $(".column-3-holder").css("left",$(".column-2").width()+"px");
          $(".column-4-holder").css("left",$(".column-3").width()+"px");
        }
      });
    $(".column-2-holder").css("left","150px");
    $(".column-2-holder").resizable({
      containment: ".content-area",
      alsoResize: ".column-2",
      minWidth: 150,
      handles: "e",
        create: function( event, ui ) {
       
            $(".ui-resizable-e").css("cursor","ew-resize");
        },
        resize: function (event, ui) {
            $(".column-3-holder").css("left",$(".column-2").width()+"px");
            $(".column-4-holder").css("left",$(".column-3").width()+"px");
        }
      });
    $(".column-3-holder").css("left","150px");
    $(".column-3-holder").resizable({
      containment: ".content-area",
      alsoResize: ".column-3",
      minWidth: 150,
      handles: "e",
        create: function( event, ui ) {
         
            $(".ui-resizable-e").css("cursor","ew-resize");
        },
        resize: function (event, ui) {
            $(".column-4-holder").css("left",$(".column-3").width()+"px");
        }
      });

    });
});
