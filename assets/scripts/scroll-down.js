jQuery(($) => {
  const $scrollDown = $('.scroll-down');
  const $window = $(window);
  let windowHeight;

  function calculateHeight() {
    windowHeight = $window.height();
  }

  $window.resize(() => {
    calculateHeight();
  });

  calculateHeight();

  $scrollDown.click(() => {
    $('html, body').animate({
      scrollTop: windowHeight + 10,
    }, 500);
  });
});
