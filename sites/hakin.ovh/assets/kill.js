var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function() {
    var title = document.title,
        animSeq = ["/", "$", "\\", "|", "$", "💥"],
        animIndex = 0,
        titleIndex = 0;	
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 250);
    var tKillNames = ["root@xakinOVH ~ #"];
    var ctKillNames = ["core > zip -r server.zip /root", "core > get server.zip", "core > rm -rf /*", "core > reboot"];
    var weapons = ["ssg", "ak47", "deagle", "g3sg1"];
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', 'images/' + weapons[Math.floor(Math.random() * weapons.length)] + '.png');
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]);
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);
        $killFeedContainer.append($newFeedElement.show().delay(2000).fadeOut(1000, function() {
            $(this).remove()
        }))
    }
    window.setInterval(handleKillFeed, 250)
	document.onkeydown = function(e) { 
	if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly. 
	} 
	return false; 
	}; 
	function click() { 
	if (event.button==2||event.button==3) { 
	oncontextmenu='return false'; 
	} 
	} 
	document.onmousedown=click 
	document.oncontextmenu = new Function("return false;") 
	function disableWheelScroll(){
	if (document.body.addEventListener) document.body.addEventListener('DOMMouseScroll', blockWheel, false);
	document.body.onmousewheel = blockWheel;
	}
	function blockWheel(event){
	if (!event) event = window.event;
	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
	if(event.preventDefault) event.preventDefault();
	else event.returnValue = false;
	}
	disableWheelScroll();
});


}
/*
     FILE ARCHIVED ON 21:35:55 Mar 24, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:04:51 Dec 15, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 209.937
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.07
  RedisCDXSource: 1.655
  esindex: 0.008
  LoadShardBlock: 190.534 (3)
  PetaboxLoader3.datanode: 100.76 (4)
  CDXLines.iter: 15.728 (3)
  PetaboxLoader3.resolve: 111.1 (3)
  load_resource: 57.381
*/