/*------ loader --------*/
window.addEventListener("load", function () {
    setTimeout(() => {
      $(".loader").fadeOut(800);
    }, 500);
    setTimeout(() => {
      $(".loader-back").fadeOut(800);
      $("body").css({
        height: "auto",
        overflow: "visible",
      });
    }, 1500);
    /*------ home-animation --------*/
    setTimeout(() => {
      $(".an1,.an2,.an3,.an4,.an5").addClass(
        "animate__animated animate__fadeInUp"
      );
    }, 1550);
    setTimeout(() => {
      $(".an6,.an7").addClass("animate__animated animate__fadeIn");
      $(".an8").addClass("animate__animated animate__flipInX");
    }, 1580);
  });
  $(document).ready(function () {
    /*------ scroll-animation --------*/
    $(window).scroll(function () {
      var abc = [
        ".an9",
        ".an10",
        ".an11",
        ".an12",
        ".an13",
        ".an14",
        ".an15",
        ".an16",
        ".an17",
        ".an18",
        ".an19",
        ".an20",
        ".an21",
        ".an22",
        ".an23",
        ".an24",
        ".an25",
        ".an26",
        ".an27",
        ".an28",
      ];
      for (i = 0; i < abc.length; i++) {
        if ($(window).scrollTop() > $(abc[i]).offset().top - $(window).height()) {
          $(abc[i]).addClass("animate__animated animate__fadeInUp");
        }
      }
    });
    $(".project1").mouseover(function () {
      $(".project1").css({
        transform: "translateY(-5px)",
      });
    });
    /*------ navigation-bar --------*/
    var prescroll = $(window).scrollTop();
    $(window).scroll(function () {
      var curscroll = $(window).scrollTop();
      if (curscroll > prescroll) {
        $("header").css({
          top: "-11vh",
        });
      } else {
        $("header").css({
          top: "0vh",
        });
      }
      prescroll = curscroll;
      if ($(window).scrollTop() > 50) {
        $("header").css({
          "padding-top": "2vh",
          "padding-bottom": "2vh",
        });
        $("header").addClass("header-color-change");
      } else {
        $("header").css({
          "padding-top": "4vh",
          "padding-bottom": "4vh",
        });
        $("header").removeClass("header-color-change");
      }
    });
    /*------ toggle --------*/
    var x = true;
    $(".toggle").click(function () {
      $(".toggle").toggleClass("close");
      $("header>section").toggleClass("sideclose");
      if (x == true) {
        $("body").css({
          height: "100%",
          overflow: "hidden",
        });
        x = false;
      } else {
        $("body").css({
          height: "auto",
          overflow: "visible",
        });
        x = true;
      }
    });
    /*------- navigate --------*/
    $(".navi").click(function () {
      var val = $(this).attr("value");
      $("body,html").animate(
        {
          scrollTop: $(val).offset().top,
        },
        1500
      );
      $(".toggle").toggleClass("close");
      $("header>section").toggleClass("sideclose");
      $("body").css({
        height: "auto",
        overflow: "visible",
      });
    });
  });