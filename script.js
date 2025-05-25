$(document).ready(function () {
  // Toggle navigation on mobile
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // Reset nav on scroll or load
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  // Theme toggle (dark/light mode)
  $('#theme-toggler').click(function () {
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
  });

  // Smooth scroll for internal links
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if ($(target).length) {
      $('html, body').animate({
        scrollTop: $(target).offset().top,
      }, 500, 'linear');
    }
  });

  // Set dynamic current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Typed.js animation for company taglines
var typed = new Typed(".typing", {
  strings: [
    "<span style='color:#00b894;'>Africa's Digital Future</span>",
    "<span style='color:#00a8ff;'>AI Solutions</span>",
    "<span style='color:crimson;'>Data Analytics</span>",
    "<span style='color:#6c5ce7;'>Blockchain Integration</span>",
    "<span style='color:#fd79a8;'>IoT & Edge Computing</span>",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
