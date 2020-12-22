
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
    if ($('body').hasClass('spnav')) {
      $('body,html').scrollTop(current_scroll_top);
    }
  });

  $('.lesson-activity-detail .pics-wrap a').on('click', function () {
    var img_url = $(this).children('img').attr('src');
    var tag_str = '<img src="' + img_url + '">';
    $('.pic_detail .pic-wrap').html(tag_str);
    /*$('.pic_detail').show();*/
    current_scroll_top = $(window).scrollTop();
    if (!$('body').hasClass('onpicdetail')) {
      $('body').addClass('onpicdetail');
    }
    return false;
  });

  $('.pic_detail .close').on('click', function () {
    /*$('.pic_detail').hide();*/
    if ($('body').hasClass('onpicdetail')) {
      $('body').removeClass('onpicdetail');
    }
  });

  $('.pic_detail').on('click', function () {
    /*$('.pic_detail').hide();*/
    if ($('body').hasClass('onpicdetail')) {
      $('body').removeClass('onpicdetail');
    }
  });

  $('.hamburger-menu').on('click', function () {
    if ($('body').hasClass('spnav')) {
      $('body').removeClass('spnav');
    } else {
      current_scroll_top = $(window).scrollTop();
      $('body').addClass('spnav');
    }
  });

});

/* TOP MV */
function top_mv_anim_end() {
  var anim_dom = document.getElementById('animation_container');
  anim_dom.classList.add('is-end');
  var sns_dom = document.getElementById('sns-links');
  sns_dom.classList.add('is-show');
  var top_message_dom = document.getElementById('mv-message');
  top_message_dom.classList.add('is-show');
  setTimeout(top_kv_slider,5000);
}

var loader_count = 0;
var loader_count_id = null;
var page_loaded = false;

var container;
var camera, scene, renderer;
var material;
var uniforms;
var top_slide_count = 0;

loading_counter();
function loading_counter() {
  loader_count++;
  if (loader_count > 500) {
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

window.addEventListener('load', function () {
  page_loaded = true;
});

function loaded_init() {
  if (document.getElementById("slidecontainer") != null) {
    top_kv_slide_init();
    top_kv_animate();
  }
}

function top_kv_slide_init() {
  var intensity = 1;
  var speedIn = 1.6;
  var speedOut = 1.2;
  var userHover = false;
  var easing = Expo.easeOut;

  //DOM
  container = document.getElementById('slidecontainer') || canvas.getContext("slidecontainer") || canvas.getContext('experimental-slidecontainer');

  //SCENE
  scene = new THREE.Scene();

  //CAMERA
  camera = new THREE.OrthographicCamera(
    container.offsetWidth / -2,
    container.offsetWidth / 2,
    container.offsetHeight / 2,
    container.offsetHeight / -2,
    1,
    1000
  );
  camera.position.z = 1;

  //RENDERER
  renderer = new THREE.WebGLRenderer({
    alpha: false,
    antialias: false
  });
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( container.offsetWidth, container.offsetHeight );
  renderer.setClearColor(0xffffff, 0);
  container.appendChild(renderer.domElement);

  //TEXTURE
  var dispImage = '/_assets/images/displacement1.jpg';
  var dispImage2 = '/_assets/images/displacement2.jpg';
  var dispImage3 = '/_assets/images/displacement3.jpg';
  var dispImage4 = '/_assets/images/displacement4.jpg';
  var image1 = '/_assets/images/top-mv.jpg';
  var image2 = '/_assets/images/top-mv2.jpg';
  var image3 = '/_assets/images/top-mv3.jpg';
  var image4 = '/_assets/images/top-mv4.jpg';

  var loader = new THREE.TextureLoader();
  loader.crossOrigin = "";

  var texture1 = loader.load(image1);
  var texture2 = loader.load(image2);
  var texture3 = loader.load(image3);
  var texture4 = loader.load(image4);

  texture1.magFilter = THREE.LinearFilter;
  texture2.magFilter = THREE.LinearFilter;
  texture3.magFilter = THREE.LinearFilter;
  texture4.magFilter = THREE.LinearFilter;
  texture1.minFilter = THREE.LinearFilter;
  texture2.minFilter = THREE.LinearFilter;
  texture3.minFilter = THREE.LinearFilter;
  texture4.minFilter = THREE.LinearFilter;

  var disp = loader.load(dispImage);
  disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
  var disp2 = loader.load(dispImage2);
  disp2.wrapS = disp2.wrapT = THREE.RepeatWrapping;
  var disp3 = loader.load(dispImage3);
  disp3.wrapS = disp3.wrapT = THREE.RepeatWrapping;
  var disp4 = loader.load(dispImage4);
  disp4.wrapS = disp4.wrapT = THREE.RepeatWrapping;

  // OBJECT
  var geometry = new THREE.PlaneBufferGeometry(
    container.offsetWidth,
    container.offsetHeight,
    1
  );
  geometry.verticesNeedUpdate = true;
  geometry.elementNeedUpdate = true;

  uniforms = {
    resolution: {
      type: 'v2',
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    imageResolution: {
      type: 'v2',
      value: new THREE.Vector2(1500, 938),
    },
    effectFactor: { type: "f", value: intensity },
    dispFactor: { type: "f", value: 0.0 },
    texture: { type: "t", value: texture1 },
    texture2: { type: "t", value: texture2 },
    disp: { type: "t", value: disp }
  };

  material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
    transparent: true,
    opacity: 1.0
  });
  material.transparent = true;
  material.blending = THREE.NormalBlending;

  var mesh = new THREE.Mesh( geometry, material );
  scene.add(mesh);

  window.addEventListener('resize', top_kv_onWindowResize, false);

  this.kv_slide_next = function () {
    TweenMax.to(material.uniforms.dispFactor, speedIn, {
      value: 1,
      ease: easing,
      onComplete: endofNextTM
    });
  }

  function endofNextTM() {
    if (top_slide_count == 0) {
      uniforms.texture.value = texture2;
      uniforms.texture2.value = texture3;
      uniforms.dispFactor.value = 0.0;
      uniforms.disp.value = disp2;
      top_slide_count = 1;
    } else if (top_slide_count == 1) {
      uniforms.texture.value = texture3;
      uniforms.texture2.value = texture4;
      uniforms.dispFactor.value = 0.0;
      uniforms.disp.value = disp3;
      top_slide_count = 2;
    } else if (top_slide_count == 2) {
      uniforms.texture.value = texture4;
      uniforms.texture2.value = texture1;
      uniforms.dispFactor.value = 0.0;
      uniforms.disp.value = disp4;
      top_slide_count = 3;
    } else {
      uniforms.texture.value = texture1;
      uniforms.texture2.value = texture2;
      uniforms.dispFactor.value = 0.0;
      uniforms.disp.value = disp;
      top_slide_count = 0;
    }
  }
}

function top_kv_animate() {
  requestAnimationFrame( top_kv_animate );
  render();
}

function render() {
  renderer.render( scene, camera );
}

function top_kv_onWindowResize() {
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
  material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize( container.offsetWidth, container.offsetHeight );
}

function top_kv_slider() {
  kv_slide_next();
  setTimeout(top_kv_slider,8000);
}

var next_clickElement = document.getElementById("mv-message");
next_clickElement.addEventListener("click", function(event) {
  //kv_slide_next();
}, false);

