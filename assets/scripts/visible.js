jQuery(($) => {
  const $animate = $('.animate');
  const $window = $(window);

  function visibleTest() {
    const scrollTop = $window.scrollTop();

    $animate.each(function () {
      const elementOffset = ($(this).position().top - $window.height());

      if (elementOffset < scrollTop) {
        $(this).addClass('animated');
      }
    });

    requestAnimationFrame(visibleTest);
  }

  visibleTest();
});
