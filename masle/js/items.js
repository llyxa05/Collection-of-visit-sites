

$(document).ready(function () {
  $('.folder').click(function () {
    if (!$(".folder-opener").hasClass("active-2")) {

      $(".folder-opener").addClass("active-2");
      $(".folder-opener").removeClass("inactive-2");
      $(".folder-opener-text").addClass("t-active-2");
      $(".folder-opener-text").removeClass("t-inactive-2");

    }

    else if ($(".folder-opener").hasClass("active-2")) {

      $('.folder').dblclick(function () {

        $("#window-1").css("display", "block");
        $("#window-1").removeClass("animated zoomOut").addClass("animated zoomIn");
      });
    }
  });

  $("#container").click(function () {
    $(".folder-opener").removeClass("active-2");
    $(".folder-opener-text").removeClass("t-active-2");
  });

  $('.item').click(function () {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
    $(this).children('.item-arrow').hide();
    $(this).children('.item-arrow-blue').show();
    $('.column-1').children('.column-2-holder').show();
    $(this).siblings().children('.item-arrow').show();
    $(this).siblings().children('.item-arrow-blue').hide();
  });

  $('.item-icon-folder, .item-icon-normal').on('dragstart', function (event) { event.preventDefault(); });

  $(".item.item-link").dblclick(function () {
    window.open($(this).attr("data-url"))
  })

  /* column-1 */

  /* projects */

  $('#item-1-projects').click(function () {
    $('#item-1-projects').removeClass("old-selected");
    $('#item-1-projects').children(".item-arrow-grey").hide();
    $('#item-1-projects').siblings().removeClass("old-selected");
    $('#item-1-projects').siblings().children(".item-arrow-grey").hide();
    $('.folder-projects').show();
    $('.folder-projects').siblings().hide();
    $('.folder-projects').children().removeClass("selected");
    $('.folder-projects').children().removeClass("old-selected");
    $('.folder-projects').children().children(".item-arrow-grey").hide();
    $('.folder-projects').children().children(".item-arrow-blue").hide();
    $('.folder-projects').children().children(".item-arrow").show();
  });

  /* about */

  $('#item-1-about').click(function () {
    $('#item-1-about').removeClass("old-selected");
    $('#item-1-about').children(".item-arrow-grey").hide();
    $('#item-1-about').siblings().removeClass("old-selected");
    $('#item-1-about').siblings().children(".item-arrow-grey").hide();
    $('.folder-about').show();
    $('.folder-about').siblings().hide();
    $('.folder-about').children().removeClass("selected");
    $('.folder-about').children().removeClass("old-selected");
    $('.folder-about').children().children(".item-arrow-grey").hide();
    $('.folder-about').children().children(".item-arrow-blue").hide();
    $('.folder-about').children().children(".item-arrow").show();
  });

  /* contact */

  $('#item-1-contact').click(function () {
    $('#item-1-contact').removeClass("old-selected");
    $('#item-1-contact').children(".item-arrow-grey").hide();
    $('#item-1-contact').siblings().removeClass("old-selected");
    $('#item-1-contact').siblings().children(".item-arrow-grey").hide();
    $('.folder-contact').show();
    $('.folder-contact').siblings().hide();
    $('.folder-contact').children().removeClass("selected");
    $('.folder-contact').children().removeClass("old-selected");
    $('.folder-contact').children().children(".item-arrow-grey").hide();
    $('.folder-contact').children().children(".item-arrow-blue").hide();
    $('.folder-contact').children().children(".item-arrow").show();
  });

  $('#item-1-portfolio').click(function () {
    $('#item-1-portfolio').removeClass("old-selected");
    $('#item-1-portfolio').children(".item-arrow-grey").hide();
    $('#item-1-portfolio').siblings().removeClass("old-selected");
    $('#item-1-portfolio').siblings().children(".item-arrow-grey").hide();
    $('.folder-portfolio').show();
    $('.folder-portfolio').siblings().hide();
    $('.folder-portfolio').children().removeClass("selected");
    $('.folder-portfolio').children().removeClass("old-selected");
    $('.folder-portfolio').children().children(".item-arrow-grey").hide();
    $('.folder-portfolio').children().children(".item-arrow-blue").hide();
    $('.folder-portfolio').children().children(".item-arrow").show();
  });


  /* Column-2 */

  /* projects */

  var container = $('.folder-projects');
  var path = $('#item-1-projects');
  container.click(function () {
    path.removeClass("selected");
    path.addClass("old-selected");
    path.children(".item-arrow-blue").hide();
    path.children(".item-arrow").hide();
    path.children(".item-arrow-grey").show();
  });

  /* videos */

  $('#item-2-videos').click(function () {
    $('.column-3-holder').show();
    $('.folder-videos').show();
    $('.folder-videos').siblings().hide();
    $('.folder-videos').children().removeClass("old-selected");
    $('.folder-videos').children().removeClass("selected");
    $('#item-2-videos').removeClass("old-selected");
    $('#item-2-videos').children(".item-arrow-grey").hide();
    $('#item-2-videos').children(".item-arrow").hide();
    $('#item-2-videos').siblings().removeClass("old-selected");
    $('#item-2-videos').siblings().children(".item-arrow-grey").hide();
  });

  /* websites */

  $('#item-2-websites').click(function () {
    $('.column-3-holder').show();
    $('.folder-websites').show();
    $('.folder-websites').siblings().hide();
    $('.folder-websites').children().removeClass("old-selected");
    $('.folder-websites').children().removeClass("selected");
    $('#item-2-websites').removeClass("old-selected");
    $('#item-2-websites').children(".item-arrow-grey").hide();
    $('#item-2-websites').children(".item-arrow").hide();
    $('#item-2-websites').siblings().removeClass("old-selected");
    $('#item-2-websites').siblings().children(".item-arrow-grey").hide();
  });


  /* about */

  var container = $('.folder-about');
  container.click(function () {
    $('#item-1-about').removeClass("selected");
    $('#item-1-about').addClass("old-selected");
    $('#item-1-about').children(".item-arrow-blue").hide();
    $('#item-1-about').children(".item-arrow").hide();
    $('#item-1-about').children(".item-arrow-grey").show();
  });

  $('#about').dblclick(function () {

    $("#window-2").css("display", "block");
    $("#window-2").addClass("animated zoomIn");
  });

  /* Contact */

  var container = $('.folder-contact');
  container.click(function () {
    $('#item-1-contact').removeClass("selected");
    $('#item-1-contact').addClass("old-selected");
    $('#item-1-contact').children(".item-arrow-blue").hide();
    $('#item-1-contact').children(".item-arrow").hide();
    $('#item-1-contact').children(".item-arrow-grey").show();
  });

  /*email*/

  $('#item-2-email').dblclick(function () {
    alert("check your clipboard");
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#email-address").text()).select();
    document.execCommand("copy");
    $temp.remove();
  });



  $('#item-instagram').dblclick(function () {
    window.open('https://instagram.com/maslexoxo');
  });


  $('#item-2-youtube').dblclick(function () {
    window.open('https://www.youtube.com/channel/UCXacGf26fh4DPUKYvvrnk3Q');
  });


  $('#item-2-discord').dblclick(function () {
    window.open('https://discord.gg/F8CxJ3BWC5');
  });


  $('#item-2-spotify').dblclick(function () {
    window.open('spotify:user:qvsfspob44tpcds8jh8xrwvzs:playlist:1jBuDFkDQf2xIZufQ4MVHz');
  });

  /* column-3 */

  $('.column-3').click(function () {
    $('.column-2-holder').show();
    $('.column-3-holder').show();
  });

  /* projects */

  /* videos */

  var container = $('.folder-videos');
  container.click(function () {
    $('.folder-projects').show();
    $('#item-2-videos').removeClass("selected");
    $('#item-2-videos').addClass("old-selected");
    $('#item-2-videos').children(".item-arrow-blue").hide();
    $('#item-2-videos').children(".item-arrow").hide();
    $('#item-2-videos').children(".item-arrow-grey").show();
    $('#item-1-projects').addClass("old-selected");
    $('#item-1-projects').children(".item-arrow-blue").hide();
    $('#item-1-projects').children(".item-arrow").hide();
    $('#item-1-projects').children(".item-arrow-grey").show();
  });


  /* websites */

  var container = $('.folder-websites');
  container.click(function () {
    $('.folder-projects').show();
    $('#item-2-websites').removeClass("selected");
    $('#item-2-websites').addClass("old-selected");
    $('#item-2-websites').children(".item-arrow-blue").hide();
    $('#item-2-websites').children(".item-arrow").hide();
    $('#item-2-websites').children(".item-arrow-grey").show();
    $('#item-1-projects').addClass("old-selected");
    $('#item-1-projects').children(".item-arrow-blue").hide();
    $('#item-1-projects').children(".item-arrow").hide();
    $('#item-1-projects').children(".item-arrow-grey").show();
  });

});

/*

function openNewWindow(sizeX, sizeY, title, src, id){
  $('#window-3 .title').html(title);
  $('#window-3 .title-icon').attr("src",$(id + " .item-icon-normal").attr("src"));
  $('#window-3 .window-content').attr("src", src);
  var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
  $('#window-3').css('left', positionX);
  var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2 + 20;
  $('#window-3').css('top', positionY);
  $('#window-3').width(sizeX);
  $('#window-3').height(sizeY);
  $('#window-3').show();
  $('#window-3').click();
}
*/
