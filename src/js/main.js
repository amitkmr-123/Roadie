// Smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.querySelector(this.getAttribute("href"))) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  });
});
// Load
window.addEventListener("load", function () {
  document.body.classList.add("window-loaded");
  //
  AOS.init({
    duration: 1000,
    once: true,
    disable: "mobile",
  });
});
// Scroll
window.addEventListener("scroll", function () {
  const html = document.documentElement;
  const top = html.scrollTop;
  if (top > 100) {
    document.body.classList.add("page-scrolled");
  } else {
    document.body.classList.remove("page-scrolled");
  }
});

// Header------

$(".navTrigger").click(function () {
  $(this).toggleClass("cm_active");
  $(".menuWrapper").toggleClass("cm_active");
  $(".menuWrapper").slideToggle();
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 40) {
    $("header.globalHeader").addClass("stickyHeader");
  } else {
    $("header.globalHeader").removeClass("stickyHeader");
  }
});

$("header.header .topInnerWrap .hs-menu-wrapper ul li").each(function () {
  var aText = $(this).children("a").text().toLowerCase().replace(/\s/g, "-");
  $(this).addClass(aText);
});

// ------

var banner = document.querySelector(".u4m-hero, .split_form_wrapper");
var bannerv2 = document.querySelector(".u4m-hero.bg_gradient");
if (banner) {
  document.body.classList.remove("no-banner");
} else {
  document.body.classList.add("no-banner");
}
if (bannerv2) {
  document.body.classList.add("no-banner");
}

function headerHeight() {
  var elm = $("header.header").outerHeight(true);
  $(" .no-banner .headerOuterWrapper").css("min-height", elm);
}
$(window).on("load resize", function () {
  headerHeight();
});
