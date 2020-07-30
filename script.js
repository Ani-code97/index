window.addEventListener("scroll", function () {
  let scroll = scrollY;
  // console.log(scroll);
});
function validation() {
  let username = document.getElementById("username").value;
  let uservalid = document.getElementById("user-valid");
  let email = document.getElementById("email").value;
  let emailvalid = document.getElementById("email-valid");
  let password = document.getElementById("password").value;
  let passvalid = document.getElementById("pass-valid");
  if (username == "") {
    uservalid.innerHTML = "This filled is neccesary";
    return false;
  } else if (email == "") {
    email.innerHTML = "This filled is neccesary";
    return false;
  } else if (email.indexOf("@") <= 0) {
    emailvalid.innerHTML = "The position of '@' is invalid or is not entered";
  }
}
