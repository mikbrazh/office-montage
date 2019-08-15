$(function() {

  // Custom JS

  // Вычесление высоты элемента .overlay-frame (левого фонового поля с границей)
  // При загрузки страницы
  $('.overlay-frame').height( $('.main-screen').height() - 80 );
  // При изменении размеров окна браузера
  $(window).resize(function(){
    $('.overlay-frame').height( $('.main-screen').height() - 80 );
  });

  // Прокрутка главного экрана вниз до футера при нажатии на стрелку прокрутки
  $('.icon-scroll').click( function() {

    $('html, body').animate({
      scrollTop: $('.main-screen').height() + 50
    }, 'slow');
  
    return false;
  });

  // Появление кнопки прокрутки экрана наверх
  $(window).scroll(function() {
    if ( $(window).scrollTop()>120 ) {
      $('.scroll-to-top-btn').addClass('scroll-to-top-btn_active')
    }
    else {
      $('.scroll-to-top-btn').removeClass('scroll-to-top-btn_active')
    }
  });

  // Прокрутка экрана наверх при нажатии на кнопку .scroll-to-top-btn
  $('.scroll-to-top-btn').click( function() {
    $('html, body').animate({
        scrollTop: 0
      }, 'slow');

      return false;
  });

  // Анимация меню – гамбургера при нажатии на него
  $('.hamburger').on( 'click', function() {

    $(this).toggleClass('is-active');

  // Отмена скроллинга сайта при открытом меню
  $('body').toggleClass('scroll-disabled');

  });
    // Анимация меню – гамбургера при нажатии на фоновую паранджу (.site-overlay)
  $('.site-overlay').on('click', function() {

    $('.hamburger').toggleClass('is-active');
    // $('body').css('overflow-y', 'visible');
    $('body').toggleClass('scroll-disabled');

  });

});