

const bindJarallax =
  function (jarallax){
    //unbind first to prevent multi binding.


    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      imgWidth: 1366,
      imgHeight: 768
    });

  };

export default bindJarallax;
