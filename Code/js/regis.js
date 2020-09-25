var username, email, password, gender, country, address, dob, result;

function submit() {
  username = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("pass").value;
  gender = document.getElementById("gender").value;
  country = document.getElementById("country").value;
  address = document.getElementById("address").value;
  dob = document.getElementById("birthday").value;
  checkbox = document.getElementById("checkbox").checked;
  result = document.getElementById("result");
  if (username === "") {
    alert("Username empty!");
  } else if (username.length < 5) {
    alert("Username must be more than 5 characters!");
  } else if (email === "") {
    alert("Email empty!");
  } else if (!email.includes("@")) {
    alert("That's not an email, please try again");
  } else if (password === "") {
    alert("Password empty!");
  } else if (gender === "Empty") {
    alert("Choose Gender");
  } else if (country === "Empty") {
    alert("Choose Country!");
  } else if (address === "") {
    alert("Address empty!");
  } else if (dob === ""){
    alert("Date of Birt is not valid!");
  } else if (checkbox === false){
    alert("You need to Agree to the Terms of Services");
  } else {
    window.setTimeout((window.location.href = "index.html"), 500);
  }
}
