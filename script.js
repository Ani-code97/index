window.addEventListener("scroll", function () {
  let scroll = scrollY;
  console.log(scroll);
  let home_link = document.getElementById("home_link");
  let about_link = document.getElementById("about_link");
  let team_link = document.getElementById("team_link");
  let down_link = document.getElementById("down_link");
  let contact_link = document.getElementById("contact_link");
  if (scroll < 605) {
    home_link.classList.add = "active";
  }
  if (scroll < 755 && scroll > 557) {
    about_link.classList.toggle = "active";
  }
});
