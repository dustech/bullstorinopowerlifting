

const bindMenu =
  function (){
  //unbind first to prevent multi binding.

    $(".menu-icon").unbind("click");
    $(".menu-icon").on("click", function () {
      $(this).toggleClass("open");
      $(".container").toggleClass("nav-open");
      $("nav ul li").toggleClass("animate");
    });
  };

export default bindMenu;
