document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-nav a");
  const tabContents = document.querySelectorAll(".tab_content");

  tabLinks.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("tab-id");

      // Remove active class from all tabs and contents
      tabLinks.forEach((link) => link.parentElement.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked tab and corresponding content
      this.parentElement.classList.add("active");
      document
        .querySelector(`.tab_content[content-id="${tabId}"]`)
        .classList.add("active");
    });
  });
});

$(".u4m-top-tab .page-center .tabber_section .tab-nav > ul > li > a").click(
  function () {
    $(this)
      .next()
      .slideToggle(250)
      .parent()
      .siblings()
      .children(".toggle_content")
      .slideUp(250);
    $(this).parent().toggleClass("mobactive").siblings().removeClass("mobactive");
  }
);
