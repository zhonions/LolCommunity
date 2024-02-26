const signInForm = document.querySelector("form");

signInForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isMediumPassword(password)) {
    console.log("Email:", email);
    console.log("Password:", password);
  } else {
    alert("A senha deve ter pelo menos 8 caracteres e incluir uma combinação de letras minúsculas e números.");
  }
});

function isMediumPassword(password) {
  if (password.length < 8) {
    return false;
  }

  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);

  return hasLowerCase && hasNumbers;
}
