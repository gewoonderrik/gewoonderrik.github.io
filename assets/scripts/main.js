jQuery(($) => {
  const $body = $('body');
  const $intro = $('.intro');
  const $window = $(window);

  let introHeight;
  let isFixed;

  function calculateHeight() {
    introHeight = $intro.outerHeight();
  }

  function scrolling() {
    const scrollTop = $window.scrollTop();

    if (scrollTop > introHeight) {
      if (! isFixed) {
        $body.addClass('change-nav');
        isFixed = true;
      }
    } else {
      if (isFixed) {
        $body.removeClass('change-nav');
        isFixed = false;
      }
    }

    requestAnimationFrame(scrolling);
  }

  $window.resize(() => {
    calculateHeight();
  });

  calculateHeight();
  requestAnimationFrame(scrolling);
});
