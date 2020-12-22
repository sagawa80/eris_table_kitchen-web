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
  content = "width=1400";
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

window.addEventListener('resize', function () {
  resize_sp();
});

function resize_sp() {
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