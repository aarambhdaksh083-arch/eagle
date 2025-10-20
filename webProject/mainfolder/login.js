function loginUser() {
  let name = document.getElementById('name').value;
  localStorage.setItem("username", name);
  window.location.href = "home.html"; // दूसरी पेज पर भेज देगा
}

function saveUserData() {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;

  if (name && email) {
    const userData = { name, email };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = "home.html";
  } else {
    alert("कृपया नाम और ईमेल दोनों भरें!");
  }
}