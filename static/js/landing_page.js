$(document).ready(function () {
  $(window).resize(function () {
    const windowWidth = $(window).width();
    const isMobile = windowWidth < 768;

    $('header').toggleClass('header', !isMobile).toggleClass('header-mobile', isMobile);
    $('#header_auth').toggleClass('header_auth', !isMobile).toggleClass('header_auth-mobile', isMobile);
    $('#logo-menu').toggleClass('logo-menu', !isMobile).toggleClass('logo-menu-mobile', isMobile);
    $('#user_auth').toggleClass('user_auth', !isMobile).toggleClass('user_auth-mobile', isMobile);
  }).resize();
});