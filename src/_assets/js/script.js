var modePC = false;
var modeSP = false;
var isTouchUA = false;
var isClickUA = false;
var isAndroidUA = false;
var os_windows = false;
var ie_edge = false;

var current_zoom = 1;

var ua = window.navigator.userAgent.toLowerCase();
var content = "width=device-width, initial-scale=1";

var body_elements = document.getElementsByTagName('body');

if (ua.indexOf("windows nt") !== -1) {
  os_windows = true;
}

if (
  ua.indexOf("iphone") != -1 ||
  ua.indexOf("ipod") != -1 ||
  ua.indexOf("blackberry") != -1 ||
  ua.indexOf("iemobile") != -1
) {
  isTouchUA = true;
  modeSP = true;
  if (window.innerWidth > window.innerHeight) {
    content = "width=1400";
  }
} else if (
  ua.indexOf("android") != -1 && ua.indexOf("mobile") != -1
) {
  isTouchUA = true;
  modeSP = true;
  if (window.innerWidth > window.innerHeight) {
    content = "width=1400";
  }
} else if (
  ua.indexOf("ipad") != -1 ||
  ua.indexOf("android") != -1
) {
  isTouchUA = true;
  modePC = true;
  //content = "width=1450";
} else {
  isClickUA = true;
  modePC = true;
  if (ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
    ie_edge = true;
  } else if (ua.indexOf('edge') != -1) {
    ie_edge = true;
  }
}

if (content) {
  var metaDiscre = document.head.children;
  var metaLength = metaDiscre.length;
  for (var i = 0; i < metaLength; i++) {
    var proper = metaDiscre[i].getAttribute('name');
    if (proper === 'viewport') {
      var dis = metaDiscre[i];
      dis.setAttribute('content', content);
    }
  }
}

if (os_windows) {
  body_elements[0].classList.add('os_win');
}

var orientation_landscape = false;
if (window.innerWidth > window.innerHeight) {
  orientation_landscape = true;
}


dec_fit();

var loader_count = 0;
var loader_count_id = null;
var page_loaded = false;
loading_counter();
function loading_counter() {
  loader_count++;
  if (loader_count > 800) {
    loaded_init();
    clearTimeout(loader_count_id);
  } else {
    if (page_loaded) {
      clearTimeout(loader_count_id);
      loaded_init();
    } else {
      loader_count_id = setTimeout(loading_counter, 10);
    }
  }
}

function loaded_init() {
  dec_fit();
  setTimeout(after100fut, 1000);
}

window.addEventListener('load', function () {
  page_loaded = true;
  dec_fit();
}, false);

window.addEventListener('resize', function () {
  dec_fit();
  resize_mb();
}, false);

function dec_fit() {
  if (isClickUA) {
    if (modePC) {
      if (window.innerWidth > 768) {
        if (window.innerWidth < 1400) {
          if (ie_edge) {
            wb_full();
          } else {
            wb_fit();
          }
        } else {
          wb_full();
        }
      } else {
        wb_full();
      }
    }
  }
  if (isTouchUA) {
    if (modePC) {
      wb_fit();
    }
  }
}

function wb_fit() {
  let wo = window.innerWidth;
  let bc = document.body.clientWidth;
  var sa = wo - bc;
  let scale = (window.innerWidth - sa) / 1400;
  let body_style = document.body.style;
  if (current_zoom != scale) {
    current_zoom = scale;
    let pheader = document.getElementById('header');
    pheader.style.transform = "scale(" + scale + ")";
    let pwrap = document.getElementById('wrapper');
    pwrap.style.transform = "scale(" + scale + ")";
    body_style.height = Math.floor(pwrap.clientHeight * scale) + 'px';
    if (document.getElementsByClassName('low-mv').length) {
      if (window.innerWidth < 900) {
        document.getElementsByClassName('low-mv')[0].style.backgroundSize = 100 + (170 * scale) + "% auto";
      } else {
        document.getElementsByClassName('low-mv')[0].style.backgroundSize = 100 + (100 * scale) + "% auto";
      }
    }
  }
}

function wb_full() {
  let body_style = document.body.style;
  if (current_zoom != 1) {
    current_zoom = 1;
    let pheader = document.getElementById('header');
    pheader.style.transform = "scale(1)";
    let pwrap = document.getElementById('wrapper');
    pwrap.style.transform = "scale(1)";
    body_style.height = pwrap.clientHeight * 1 + 'px';
    if (document.getElementsByClassName('low-mv').length) {
      document.getElementsByClassName('low-mv')[0].style.backgroundSize = "100% auto";
    }
  }
}

function resize_mb() {
  if (modeSP) {
    if (window.innerWidth > window.innerHeight) {
      if (!orientation_landscape) {
        orientation_landscape = true;
        setTimeout(doReload, 500);
      }
    } else {
      if (orientation_landscape) {
        orientation_landscape = false;
        setTimeout(doReload, 500);
      }
    }
  }
}

function adjustment_window_h() {
  if (isClickUA) {
    if (modePC) {
      if (window.innerWidth > 768) {
        if (window.innerWidth < 1400) {
          if (ie_edge) {
            adjustment_window_h_full();
          } else {
            adjustment_window_h_fit();
          }
        } else {
          adjustment_window_h_full();
        }
      } else {
        adjustment_window_h_full();
      }
    }
  }
  if (isTouchUA) {
    if (modePC) {
      adjustment_window_h_fit();
    }
  }
}

function adjustment_window_h_fit() {
  let wo = window.innerWidth;
  let bc = document.body.clientWidth;
  var sa = wo - bc;
  let scale = (window.innerWidth - sa) / 1400;
  let body_style = document.body.style;
  let pwrap = document.getElementById('wrapper');
  body_style.height = Math.floor(pwrap.clientHeight * scale) + 'px';
}

function adjustment_window_h_full() {
  let body_style = document.body.style;
  let pwrap = document.getElementById('wrapper');
  body_style.height = Math.floor(pwrap.clientHeight * 1) + 'px';
}

function doReload() {
  window.location.reload();
}

function after100fut() {
  dec_fit();
}


$(function () {

  if ($('.top-lesson-slider').length) {
    $('.slider__inner').each(function(){
      var sliderWidth = $(this).width();
      $(this).clone(true).insertBefore(this);
      $(this).clone(true).insertAfter(this);
    });
  }

  /* scroll */
  var current_scroll_top = 0;
  var winScrollTop = 0;
  $(window).on('load scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop > 300) {
      if ($('body').hasClass('top')) {
        if (!$('header').hasClass('defmn')) {
          $('header').addClass('defmn');
        }
      }
    } else {
      if ($('body').hasClass('top')) {
        if ($('header').hasClass('defmn')) {
          $('header').removeClass('defmn');
        }
      }
    }
  });
});

