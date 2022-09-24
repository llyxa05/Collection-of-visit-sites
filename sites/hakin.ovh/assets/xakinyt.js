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

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Функция не вызывается :(");
    }
}

var TextScramble = function () {
    function TextScramble(el) {
        _classCallCheck(this, TextScramble);
        this.el = el;
        //Тут можно добавить свои символы для анимации
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    _createClass(TextScramble, [{
        key: 'setText', value: function setText(
            newText) {
            var _this = this;
            var oldText = this.el.innerText;
            var length = Math.max(oldText.length, newText.length);
            var promise = new Promise(function (resolve) {
                return _this.resolve = resolve;
            });
            this.queue = [];
            for (var i = 0; i < length; i++) {
                var from = oldText[i] || '';
                var to = newText[i] || '';
                var start = Math.floor(Math.random() * 40);
                var end = start + Math.floor(Math.random() * 40);
                this.queue.push({from: from, to: to, start: start, end: end});
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
    }, {
        key: 'update', value: function update() {
            var output = '';
            var complete = 0;
            for (var i = 0, n = this.queue.length; i < n; i++) {
                var _queue$i =
                        this.queue[i], from = _queue$i.from, to = _queue$i.to, start = _queue$i.start,
                    end = _queue$i.end, char = _queue$i.char;
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += '<span class="ТЫ ХУЙ">' + char + '</span>';
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }, {
        key: 'randomChar', value: function randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }]);
    return TextScramble;
}();

}
/*
     FILE ARCHIVED ON 21:35:54 Mar 24, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:04:37 Dec 15, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 64.725
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.073
  RedisCDXSource: 1.953
  esindex: 0.006
  LoadShardBlock: 45.771 (3)
  PetaboxLoader3.datanode: 75.216 (4)
  CDXLines.iter: 15.076 (3)
  load_resource: 60.521
  PetaboxLoader3.resolve: 22.856
*/