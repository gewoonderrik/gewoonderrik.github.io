jQuery(($) => {
  const $scrollDown = $('.scroll-down');

  $scrollDown.click(() => {
    $('html, body').animate({
      scrollTop: ($(window).height() + 10),
    }, 500);
  });
});
