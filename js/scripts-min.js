(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _isMobile = require("./modules/isMobile");

var _initialVariables = require("./modules/initialVariables");

var _loading = require("./modules/loading");

var _slider = require("./modules/slider");

var _scrollSmooth = require("./modules/scrollSmooth");

var _activeMenu = require("./modules/active-menu");

(0, _isMobile.setMobileClass)(_initialVariables.dd, "mobile", "desktop");
(0, _activeMenu.activeMenu)();
var loadingEle = document.getElementById("loading");
addEventListener("load", function () {
  (0, _initialVariables.cssScrollBarWidth)();
  if (loadingEle) (0, _loading.loading)(loadingEle, 500);
});
addEventListener("resize", function () {
  (0, _initialVariables.cssScrollBarWidth)();
  (0, _isMobile.setMobileClass)(_initialVariables.dd, "mobile", "desktop");
});

var setCurrentYear = function setCurrentYear(ele) {
  ele.innerText = new Date().getFullYear();
};

var currentYearElement = (0, _initialVariables.id)("currentYear");
if (currentYearElement) setCurrentYear(currentYearElement);

(function () {
  (0, _scrollSmooth.scrollTo)(".scroll", false, ".main-header");
})();

(0, _activeMenu.toggleMenu)((0, _isMobile.verifyMobile)(), "#toggle", "#main-menu");

_initialVariables.d.addEventListener('DOMContentLoaded', function (e) {
  (0, _slider.slider)((0, _initialVariables.id)('slider'));
}); //
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     nav: true,
//     dots: true,
//     dotsEach: true,
//     responsive:{
//       0:{
//         items:1,
//       },
//       600:{
//         items:3,
//       },
//       1000:{
//         items:3,
//       }
//     }
//   });
// });


var owl = $(".uno").owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: false,
  margin: 48,
  center: true,
  // navText: ["<img src='img/Siguiente.2.png'>","<img src='img/Siguiente.png'>"],
  dots: true,
  dotsEach: true,
  responsive: {
    0: {
      items: 1
    },
    640: {
      items: 3
    },
    1024: {
      items: 3
    }
  }
});
$('.btn-prev').click(function () {
  owl.trigger('prev.owl.carousel', [300]);
});
$('.btn-next').click(function () {
  owl.trigger('next.owl.carousel', [300]);
});
var owl1 = $(".dos").owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: false,
  margin: 48,
  center: false,
  // navText: ["<img src='img/Siguiente.2.png'>","<img src='img/Siguiente.png'>"],
  dots: true,
  dotsEach: true,
  responsive: {
    0: {
      items: 1
    },
    640: {
      items: 3,
      loop: false,
      touchDrag: false
    },
    1024: {
      loop: false,
      items: 3,
      touchDrag: false
    }
  }
});
$('.btn-prev1').click(function () {
  owl1.trigger('prev.owl.carousel', [300]);
});
$('.btn-next1').click(function () {
  owl1.trigger('next.owl.carousel', [300]);
});
var owl3 = $(".store-slider").owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: false,
  margin: 10,
  center: false,
  // navText: ["<img src='img/Siguiente.2.png'>","<img src='img/Siguiente.png'>"],
  dots: false,
  dotsEach: false,
  responsive: {
    0: {
      items: 3
    },
    640: {
      items: 3,
      loop: false,
      touchDrag: false
    },
    1024: {
      loop: false,
      items: 3,
      touchDrag: false
    }
  }
});
$('.arrow-left').click(function () {
  owl3.trigger('prev.owl.carousel', [300]);
});
$('.arrow-right').click(function () {
  owl3.trigger('next.owl.carousel', [300]);
});

},{"./modules/active-menu":2,"./modules/initialVariables":3,"./modules/isMobile":4,"./modules/loading":5,"./modules/scrollSmooth":6,"./modules/slider":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMenu = exports.activeMenu = void 0;

var activeMenu = function activeMenu() {
  var $toggle = $('#toggle');
  var $menu = $('#main-menu');
  $toggle.on('click', function () {
    $menu.slideToggle();
  });
};

exports.activeMenu = activeMenu;

var toggleMenu = function toggleMenu(isMobile, toggleElement, mainMenu) {};

exports.toggleMenu = toggleMenu;

var toggleMenuAction = function toggleMenuAction(toggle, menu) {};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssScrollBarWidth = exports.body = exports.all = exports.q = exports.id = exports.dd = exports.dir = exports.log = exports.c = exports.w = exports.d = void 0;
var d = document,
    w = window,
    c = console,
    log = console.log,
    dir = console.dir,
    dd = document.documentElement,
    id = document.getElementById.bind(document),
    q = document.querySelector.bind(document),
    all = document.querySelectorAll.bind(document),
    body = document.body;
exports.body = body;
exports.all = all;
exports.q = q;
exports.id = id;
exports.dd = dd;
exports.dir = dir;
exports.log = log;
exports.c = c;
exports.w = w;
exports.d = d;

var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.getBoundingClientRect().width;
}; // funcion para asignar ese valor a una variable css


var cssScrollBarWidth = function cssScrollBarWidth() {
  return document.documentElement.style.setProperty("--scrollbar", "".concat(getScrollBarWidth(), "px"));
};

exports.cssScrollBarWidth = cssScrollBarWidth;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMobileClass = exports.verifyMobile = exports.isMobile = void 0;
var isMobile = {
  mobilecheck: function mobilecheck() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
};
exports.isMobile = isMobile;

var verifyMobile = function verifyMobile() {
  return isMobile.mobilecheck();
};

exports.verifyMobile = verifyMobile;

var setMobileClass = function setMobileClass(ele, classNameMobile, classNameDesktop) {
  if (verifyMobile()) {
    ele.classList.add(classNameMobile);
    ele.classList.remove(classNameDesktop);
  } else {
    ele.classList.remove(classNameMobile);
    ele.classList.add(classNameDesktop);
  }
};

exports.setMobileClass = setMobileClass;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = void 0;

var loading = function loading(ele, time) {
  ele.style.transition = "opacity ".concat(time, "ms");
  ele.style.opacity = "0";
  setTimeout(function () {
    ele.remove();
  }, time);
};

exports.loading = loading;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTo = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var scrollAnchors = function scrollAnchors(e) {
  var respond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var history = arguments.length > 2 ? arguments[2] : undefined;
  var hh = arguments.length > 3 ? arguments[3] : undefined;

  var distanceToTop = function distanceToTop(el) {
    return Math.floor(el.getBoundingClientRect().top);
  };

  e.preventDefault();
  var targetID = respond ? respond.getAttribute("href") : e.target.getAttribute("href");
  var targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop - hh,
    left: 0,
    behavior: "smooth"
  });
  if (history) window.history.pushState("", "", targetID);
  var checkIfDone = setInterval(function () {
    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      // targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      clearInterval(checkIfDone);
    }
  }, 100);
};

var scrollTo = function scrollTo(scrollEle) {
  var history = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var elementOffSetId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var links = _toConsumableArray(document.querySelectorAll(scrollEle));

  var elementOffSetHeight = elementOffSetId ? document.querySelector(elementOffSetId).clientHeight : 0;
  if (elementOffSetHeight !== 0) document.documentElement.style.setProperty("--header-height", "".concat(elementOffSetHeight, "px"));
  links.map(function (each) {
    return each.addEventListener("click", function (e) {
      e.preventDefault();
      scrollAnchors(e, each, history, elementOffSetHeight);
    });
  });
};

exports.scrollTo = scrollTo;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carroucel = exports.slider = void 0;

var _initialVariables = require("./initialVariables");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slider = function slider(sliderC) {
  var images = Array.from(sliderC.querySelectorAll('img'));
  navSlider(sliderC, images.length);
  sliderAction(sliderC, images, Array.from(sliderC.querySelectorAll('.slider__nav li')));
};

exports.slider = slider;

var bullFragment = function bullFragment(i) {
  var li = document.createElement('li');
  li.setAttribute('data-index', i);
  return li;
};

var navSlider = function navSlider(sliderC, imgTotal) {
  var navigation = document.createElement('ul');
  navigation.classList = "slider__nav";

  for (var i = 0; i < imgTotal; i++) {
    navigation.appendChild(bullFragment(i));
  }

  navigation.querySelector('li:first-child').className = 'active';
  sliderC.appendChild(navigation);
};

var sliderAction = function sliderAction(sliderC, images, bullets) {
  bullets.map(function (el) {
    el.addEventListener('click', function (e) {
      var Target = e.target.dataset.index;
      imgActive(Target, images, bullets);
    });
  });
  var active;
  setInterval(function () {
    active = parseInt(sliderC.querySelector('img.active').dataset.index);

    if (active < images.length - 1) {
      imgActive(active + 1, images, bullets);
    } else {
      imgActive(0, images, bullets);
    }
  }, 5000);
};

var imgActive = function imgActive(Target, images, bullets) {
  images.map(function (el) {
    return el.classList.remove('active');
  });
  bullets.map(function (el) {
    return el.classList.remove('active');
  });
  images[Target].classList.add('active');
  bullets[Target].classList.add('active');
};

var matchMedia = function matchMedia() {
  var columns;
  window.matchMedia("(min-width: 500px)").matches ? columns = 3 : columns = 1;
  return columns;
};

var bullCarroucel = function bullCarroucel(itemsTotal) {
  var li = document.createElement('li');
  li.className = 'bullet';
  return li;
};

var buttonsCarrucel = function buttonsCarrucel(buttonSide) {
  var btn = document.createElement('img');
  btn.className = 'carrocelNav';

  if (buttonSide === 'right') {
    btn.src = 'img/Siguiente.png';
    btn.classList.add('next');
  } else {
    btn.src = 'img/Siguiente.2.png';
    btn.classList.add('prev');
  }

  return btn;
};

var carroucel = function carroucel(cElement) {
  console.log(cElement);

  var products = _toConsumableArray(cElement.querySelectorAll('figure')); // products[0].classList.add('active')


  var widthFactor = matchMedia() === 1 ? products.length : products.length / 3;
  cElement.style.width = "".concat(100 * widthFactor, "%");
  var bullets = document.createElement('ul');
  bullets.className = 'seleccion__nav';
  products.map(function (el) {
    return bullets.appendChild(bullCarroucel());
  });
  bullets.querySelector('li:first-child').className = 'active';
  cElement.parentElement.appendChild(buttonsCarrucel('left'));
  cElement.parentElement.appendChild(buttonsCarrucel('right'));
  cElement.parentElement.appendChild(bullets);
  carroucelEvents(_toConsumableArray(bullets.querySelectorAll('li')), _toConsumableArray(cElement.parentElement.querySelectorAll('.carrocelNav')), widthFactor);
};

exports.carroucel = carroucel;

var carroucelEvents = function carroucelEvents(bullets, button, factor) {
  document.addEventListener('click', function (e) {
    var Target = e.target;

    if (Target.classList.contains('bullet')) {
      var index = bullets.indexOf(Target); // dd.setAttribute('', `-${facto}`)

      index ? console.log(index) : console.log(0);
    }

    if (Target.classList.contains('carrocelNav')) {}
  });
};

},{"./initialVariables":3}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
