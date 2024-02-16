$(".intro_btn a").click(function () {
  if ($(".intro_btn i").hasClass("active")) {
    $(".intro_btn i").removeClass("active");
  } else {
    $(".intro_btn i").addClass("active");
  }
});


$(".intro_btn a").click(function () {
  setTimeout(function () {
    $.scrollTo(this.hash || 5950, 1000);
  }, 10000);
});



$(".plus").click(function () {
  if ($(".nav_btn a").hasClass("active")) {
    $(".nav_btn a").removeClass("active");
  } else {
    $(".nav_btn a").addClass("active");
  }
});
$(".nav_btn a").click(function () {
  $.scrollTo(this.hash || 0, 900);
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 1500) {
    $(".nav_btn").addClass("active");
  } else {
    $(".nav_btn").removeClass("active");
  }
})