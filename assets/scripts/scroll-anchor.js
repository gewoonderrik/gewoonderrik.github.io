jQuery(($) => {
  $('a[href^="#"]').on('click', function scrollToAnchor(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top,
    }, 500);
  });
});

jQuery(($) => {
  const $timeline = $('#timeline');

  if ($timeline.visible(true)) {
    console.log('test');
  }
});
