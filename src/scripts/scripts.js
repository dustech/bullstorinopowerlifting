import 'responsive-slides';
// import   'jarallax';
import 'smoothscroll';

// $(
// );

const bindHome =
function (jarallax) {
  $(".menu-icon").on("click", function () {
    $(this).toggleClass("open");
    $(".container").toggleClass("nav-open");
    $("nav ul li").toggleClass("animate");
  });


  $("#slider4").responsiveSlides({
    auto: true,
    pager: true,
    nav: false,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });


  $("#slider3").responsiveSlides({
    auto: true,
    pager: false,
    nav: false,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });

  /* init Jarallax */
  /* $('.jarallax').jarallax({
     speed: 0.5,
     imgWidth: 1366,
     imgHeight: 768
   })*/

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
    imgWidth: 1366,
    imgHeight: 768
  });

};



export default bindHome;
