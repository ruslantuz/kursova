$(function() {
    $('a[data-modal]').on('click', function() {
      $($(this).data('modal')).modal({
    fadeDuration: 250
  });
      return false;
    });
  });

