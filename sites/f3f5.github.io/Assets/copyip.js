"use strict";

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var o = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0
    }
}

function _iterableToArray(t) {
    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) return _arrayLikeToArray(t)
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
    return n
}! function() {
    const t = document.querySelectorAll(".ndzn-js--age");
    Array.from(t).forEach(function(t) {
        t.innerHTML = function(t, e) {
            var o = new Date(new Date(t).toISOString().substr(0, 10));
            e || (e = (new Date).toISOString().substr(0, 10));
            var n = new Date(e);
            if (o > n) {
                var i = o;
                o = n, n = i
            }
            var a = o.getFullYear(),
                r = n.getFullYear() - a,
                s = n.getMonth() - o.getMonth();
            return s < 0 && (r--, s += 12), "".concat(r, " years ").concat(s, " months")
        }(t.dataset.born)
    })
}(), window.registerDropdowns = function() {
        const t = document.body.getElementsByClassName("ndzn-js--dd");
        for (let e of t) {
            const t = Math.floor(1e5 + 9e5 * Math.random());
            e.setAttribute("data-id", t)
        }
    },
    function() {
        let t = [];
        window.registerDropdowns(), document.body.addEventListener("click", function(e) {
            let o = e.target.closest(".ndzn-js--ddToggle"),
                n = e.target.closest(".ndzn-js--ddMenu"),
                i = [];
            if (e.target.closest(".ndzn-js--ddClose"));
            else if (o || n) {
                if (o) {
                    const e = o.closest(".ndzn-js--dd");
                    e.classList.toggle("open") && t.push(e)
                }
                let e = o || n;
                for (; e;) {
                    let t = e.getAttribute("data-id");
                    (e = e.closest(".ndzn-js--dd" + (t ? ':not([data-id="'.concat(t, '"])') : ""))) && i.push(e.getAttribute("data-id"))
                }
            }
            t = t.filter(function(t) {
                return !!i.includes(t.getAttribute("data-id")) || (t.classList.remove("open"), !1)
            })
        })
    }();
const MicroModal = function() {
    const t = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'];
    class e {
        constructor({
            targetModal: t,
            triggers: e = [],
            onShow: o = function() {},
            onClose: n = function() {},
            openTrigger: i = "data-modal-trigger",
            closeTrigger: a = "data-modal-close",
            openClass: r = "is-open",
            disableScroll: s = !0,
            disableFocus: c = !0,
            awaitCloseAnimation: l = !0,
            awaitOpenAnimation: d = !0,
            debugMode: u = !1
        }) {
            this.modal = document.getElementById(t), this.config = {
                debugMode: u,
                disableScroll: s,
                openTrigger: i,
                closeTrigger: a,
                openClass: r,
                onShow: o,
                onClose: n,
                awaitCloseAnimation: l,
                awaitOpenAnimation: d,
                disableFocus: c
            }, e.length > 0 && this.registerTriggers.apply(this, _toConsumableArray(e)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
        }
        registerTriggers(...t) {
            var e = this;
            t.filter(Boolean).forEach(function(t) {
                t.addEventListener("click", function(t) {
                    return e.showModal(t)
                })
            })
        }
        showModal(t = null) {
            var e = this;
            if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                const t = function() {
                    e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode()
                };
                this.modal.addEventListener("animationend", t, !1)
            } else this.setFocusToFirstNode();
            this.config.onShow(this.modal, this.activeElement, t)
        }
        closeModal(t = null) {
            var e = this;
            const o = this.modal;
            this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, t);
            const n = function() {
                return e.scrollBehaviour("enable")
            };
            if (this.config.awaitCloseAnimation) {
                let t = this.config.openClass;
                this.modal.addEventListener("animationend", function e() {
                    n(), o.classList.remove(t), o.removeEventListener("animationend", e, !1)
                }, !1)
            } else scrollBehaviour("enable"), n()
        }
        closeModalById(t) {
            this.modal = document.getElementById(t), this.modal && this.closeModal()
        }
        scrollBehaviour(t) {
            if (!this.config.disableScroll) return;
            const e = document.querySelector("body");
            switch (t) {
                case "enable":
                    Object.assign(e.style, {
                        overflow: "",
                        paddingRight: 0
                    });
                    break;
                case "disable":
                    var o = window.innerWidth - document.documentElement.clientWidth;
                    Object.assign(e.style, {
                        overflow: "hidden",
                        paddingRight: o + "px"
                    })
            }
        }
        addEventListeners() {
            this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown)
        }
        removeEventListeners() {
            this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
        }
        onClick(t) {
            t.target.hasAttribute(this.config.closeTrigger) && this.closeModal(t)
        }
        onKeydown(t) {
            27 === t.keyCode && this.closeModal(t), 9 === t.keyCode && this.retainFocus(t)
        }
        getFocusableNodes() {
            const e = this.modal.querySelectorAll(t);
            return Array.apply(void 0, _toConsumableArray(e))
        }
        setFocusToFirstNode() {
            var t = this;
            if (this.config.disableFocus) return;
            const e = this.getFocusableNodes();
            if (0 === e.length) return;
            const o = e.filter(function(e) {
                return !e.hasAttribute(t.config.closeTrigger)
            });
            o.length > 0 && o[0].focus(), 0 === o.length && e[0].focus()
        }
        retainFocus(t) {
            let e = this.getFocusableNodes();
            if (0 !== e.length)
                if (e = e.filter(function(t) {
                        return null !== t.offsetParent
                    }), this.modal.contains(document.activeElement)) {
                    const o = e.indexOf(document.activeElement);
                    t.shiftKey && 0 === o && (e[e.length - 1].focus(), t.preventDefault()), !t.shiftKey && e.length > 0 && o === e.length - 1 && (e[0].focus(), t.preventDefault())
                } else e[0].focus()
        }
    }
    let o = null;
    const n = function(t) {
            if (!document.getElementById(t)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(t, '"></div>')), !1
        },
        i = function(t, e) {
            if (function(t) {
                    if (t.length <= 0) console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>')
                }(t), !e) return !0;
            for (var o in e) n(o);
            return !0
        };
    return {
        init: function(t) {
            const n = Object.assign({}, {
                    openTrigger: "data-micromodal-trigger"
                }, t),
                a = _toConsumableArray(document.querySelectorAll("[".concat(n.openTrigger, "]"))),
                r = function(t, e) {
                    const o = [];
                    return t.forEach(function(t) {
                        const n = t.attributes[e].value;
                        void 0 === o[n] && (o[n] = []), o[n].push(t)
                    }), o
                }(a, n.openTrigger);
            if (!0 !== n.debugMode || !1 !== i(a, r))
                for (var s in r) {
                    let t = r[s];
                    n.targetModal = s, n.triggers = _toConsumableArray(t), o = new e(n)
                }
        },
        show: function(t, i) {
            const a = i || {};
            a.targetModal = t, !0 === a.debugMode && !1 === n(t) || (o && o.removeEventListeners(), (o = new e(a)).showModal())
        },
        close: function(t) {
            o && (t ? o.closeModalById(t) : o.closeModal())
        }
    }
}();
window.MicroModal = MicroModal, document.addEventListener("click", function(t) {
    const e = t.target.closest(".ndzn-js--modal");
    if (!e) return;
    t.preventDefault();
    const o = e.getAttribute("data-href") || e.getAttribute("href");
    if (o && o.includes("#")) {
        const t = o.replace("#", "");
        MicroModal.show(t)
    } else if (o) {
        let t;
        (t = document.querySelector("#main-modal .modal-dialog")).innerHTML = "", MicroModal.show("main-modal"), axios.get(o).then(function(e) {
            let o, n = (new DOMParser).parseFromString(e.data, "text/html").querySelector("#main-modal .modal-dialog");
            o = n ? n.innerHTML : e.data, setTimeout(function() {
                t.innerHTML = o
            }, window.NDZN_DEV ? 1e3 : 0)
        })
    } else {
        const t = e.getAttribute("data-id");
        t ? MicroModal.show(t) : console.error("No modal target specified (use href, data-href or data-modal)")
    }
});
const $notification = document.querySelector("#ndzn-notification"),
    notifAnimationDuration = 600,
    notifClearAfterDuration = 5e3;
let notifTimeout;

function checkoutFields() {
    return {
        states: [],
        showStates: !1,
        get autofilledState() {
            return this.states.length ? this.states[0].id : "X"
        },
        handleCountryChange(t) {
            var e = this;
            const o = t.target.value;
            this.showStates = "39" === o,
                function(t) {
                    const e = new FormData;
                    e.append("country", t);
                    return axios({
                        method: "POST",
                        url: "/ajax/states",
                        data: e
                    }).then(function(t) {
                        return t.data
                    })
                }(o).then(function(t) {
                    e.states = t
                })
        }
    }
}
window.clearNotificationInstantly = function() {
        $notification && Array.from($notification.querySelectorAll(".alert")).forEach(function(t) {
            t.style.transitionDuration = "0.6s", t.style.maxHeight = t.clientHeight + "px", setTimeout(function() {
                t.classList.add("fadeout")
            }, 50), setTimeout(function() {
                t.remove()
            }, 650)
        })
    }, window.clearNotificationAfterTimeout = function() {
        clearTimeout(notifTimeout), notifTimeout = setTimeout(function() {
            window.clearNotificationInstantly()
        }, 5e3)
    }, clearNotificationAfterTimeout(), window.notification = {
        show: function(t, e) {
            const o = document.createElement("DIV");
            o.classList.add("alert"), o.innerText = e, $notification.appendChild(o), window.scrollTo({
                top: 0,
                behavior: "smooth"
            }), clearNotificationAfterTimeout()
        },
        clear: window.clearNotificationInstantly
    }, new ClipboardJS(".ndzn-js--copyip", {
        text: function(t) {
            return t.getAttribute("data-ip")
        }
    }).on("success", function(t) {
        t.trigger.classList.add("is-copied"), setTimeout(function() {
            t.trigger.classList.remove("is-copied")
        }, 2e3)
    }), document.addEventListener("click", function(t) {
        t.target.closest(".ndzn-js--toggleGiftForm") && document.getElementById("gift-form").classList.toggle("hidden")
    }), _toConsumableArray(document.querySelectorAll(".ndzn-js--countdown")).forEach(function(t) {
        let e = parseInt(t.getAttribute("data-ends"));
        const o = function() {
            let o = Math.floor(e / 86400),
                n = Math.floor(e % 86400 / 3600),
                i = Math.floor(e % 3600 / 60),
                a = Math.floor(e % 60);
            t.innerHTML = "".concat(o, "d ").concat(n, "h ").concat(i, "m ").concat(a, "s"), e--, t.setAttribute("data-ends", e)
        };
        o(), setInterval(o, 1e3)
    }),
    function() {
        const t = document.querySelectorAll('#checkout-form input[type="radio"][name="gateway"]');

        function e(t) {
            const e = document.querySelector("#checkout-form #paypal-button");
            e && (e.style.display = t ? null : "none")
        }

        function o(t) {
            const e = document.querySelector("#checkout-form .btn-pay");
            e && (e.style.display = t ? null : "none")
        }

        function n(t) {
            const e = document.querySelector("#checkout-form .panel-checkout-finish");
            e && (e.style.display = t ? null : "none")
        }
        if (!t || !t.length) {
            const t = document.querySelector('#checkout-form input[type="hidden"][name="gateway"]');
            if (!t) return;
            return "24" === t.getAttribute("data-gateway") ? (e(!0), o(!1)) : (e(!1), o(!0)), void n(!0)
        }
        Array.from(t).forEach(function(t) {
            t.addEventListener("change", function(i) {
                n(!0), "24" === t.getAttribute("data-gateway") ? (e(!0), o(!1)) : (e(!1), o(!0))
            })
        })
    }(),
    function() {
        const t = document.getElementById("checkout-form");
        t && t.addEventListener("submit", function(t) {
            "/checkout/pay" === t.target.getAttribute("action") && (t.preventDefault(), checkout.pay())
        })
    }(), window.checkout = {
        setOverlay(t) {
            document.getElementById("checkout-overlay").classList.toggle("shown", t)
        },
        pay() {
            checkout.setOverlay(!0);
            const t = document.getElementById("checkout-form"),
                e = new FormData(t);
            axios.post("/checkout/pay", e, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function(t) {
                const e = t.data;
                if ("error" === e.type && "redirect" === e.success_url) window.top.location.replace("/checkout/basket");
                else if ("error" === e.type) "undefined" != typeof reRenderWidgets && "rerender" === e.success_url && reRenderWidgets(), checkout.setOverlay(!1), notification.show("danger", e.message);
                else if ("success" === e.type)
                    if ("xsolla" === e.gateway) {
                        const t = document.createElement("div");
                        t.innerHTML = e.data.html, document.body.appendChild(t)
                    } else window.top.location.replace(e.data)
            }).catch(function(t) {
                console.log("Failed to checkout with this response:\n", t.response), notification.show("danger", "We could not send you to the payment gateway - please refresh the page and try again.")
            })
        }
    }, window.jQuery = function(t) {
        return {
            eq(t) {
                return this
            },
            remove(t) {
                return this
            }
        }
    };
