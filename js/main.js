$(function() {

  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
  });


  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(this).fadeOut();
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
  });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if($(".sideNav").hasClass("open")){
      $(".menuTriger").fadeIn();
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("body").css("overflow", "auto");
    }
  });

  // Search
  $(".searBtn").on("click", function() {
    $(".search").toggleClass("open");
    $(".overlay").fadeIn();
  });

  if($(window).width() < 992){
    $(".overlay, .bar").on("click", function(e) {
      $(".search").removeClass("open");
      $(".overlay").fadeOut();
    });
  }

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 1,
    margin: 20,
    dots: true,
    navText: ["<span></span>","<span></span>"]
  });

  // clients Slider
  $('.categories .owl-carousel, .disc .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 4,
    margin: 30,
    dots: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      992:{
          items:3,
      },
      1200:{
        items:4
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  // Categories Slider
  if($(window).width() < 992){
    $(".categories .row").addClass("owl-carousel");
    $(".categories .row").css("margin", "auto");
  }else{
    $(".categories .row").removeClass("owl-carousel");
  }

  $('.categories .owl-carousel').owlCarousel({
    rtl:true,
    autoplay: false,
    loop:true,
    nav:false,
    dots: true,
    responsive:{
      0:{
        items:1,
        margin:0
      },
      600:{
        items:2,
        margin:30,
      },
      768:{
        items:3,
        margin:10,
      }
    }
  });

  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
      $(this).toggleClass("trans");
      $(this).parent().parent().siblings().find('.collapse').collapse('hide');
      $(this).parent().parent().siblings().find('button').removeClass("trans");
  });


  // Animation On Scroll
  if($(window).width() < 992){
    $("#aosLink").remove();
    $("#aosScript").remove();
    $("html").css("overflow-x", "auto");
  }else{
    AOS.init();
  }

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove()
    });
  });

})