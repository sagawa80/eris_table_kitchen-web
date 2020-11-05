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


var orientation_landscape = false;
if (window.innerWidth > window.innerHeight) {
  orientation_landscape = true;
}

if (body_elements[0].classList.contains('top')) {
  document.getElementsByClassName('top-mv')[0].style.height = window.innerHeight;
  document.getElementsByClassName('inner-sd-top')[0].style.height = window.innerHeight;
  document.getElementsByClassName('inner-sd-bottom')[0].style.height = window.innerHeight;
}

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

}

window.addEventListener('load', function () {
  page_loaded = true;
}, false);

window.addEventListener('resize', function () {
  resize_mb();
}, false);

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
    if ($('body').hasClass('onpicdetail')) {
      $('body,html').scrollTop(current_scroll_top);
    }
  });

  $('.lesson-activity-detail .pics-wrap a').on('click', function () {
    var img_url = $(this).children('img').attr('src');
    var tag_str = '<img src="' + img_url + '">';
    $('.pic_detail .pic-wrap').html(tag_str);
    $('.pic_detail').show();
    current_scroll_top = $(window).scrollTop();
    if (!$('body').hasClass('onpicdetail')) {
      $('body').addClass('onpicdetail');
    }
    return false;
  });

  $('.pic_detail .close').on('click', function () {
    $('.pic_detail').hide();
    if ($('body').hasClass('onpicdetail')) {
      $('body').removeClass('onpicdetail');
    }
  });

  $('.pic_detail').on('click', function () {
    $('.pic_detail').hide();
    if ($('body').hasClass('onpicdetail')) {
      $('body').removeClass('onpicdetail');
    }
  });

});

