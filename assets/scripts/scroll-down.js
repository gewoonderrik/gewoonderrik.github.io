jQuery(($) => {
  const $scrollDown = $('.scroll-down');
  const windowHeight = $(window).height();

  $scrollDown.click(() => {
    $('html, body').animate({
      scrollTop: windowHeight + 10,
    }, 500);
  });
});
