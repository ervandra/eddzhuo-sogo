'use strict';

var jQvan = jQuery.noConflict();
jQvan(document).ready(function ($) {
  $('body').addClass('ready');
  $('.dashboard-toggle, .dashboard-wrapper, .close-dashboard-menu a').on('click', function (e) {
    e.preventDefault();
    if ($('.dashboard-menu').hasClass('show')) {
      $('.dashboard-wrapper, .dashboard-menu').removeClass('show');
    } else {
      $('.dashboard-wrapper, .dashboard-menu').addClass('show');
    }
  });
});