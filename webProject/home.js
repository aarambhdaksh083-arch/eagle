 // Hamburger menu toggle
 function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }

  // Profile menu toggle
  function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  // Change profile picture
  function changePic(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      document.getElementById('profilePic').src = reader.result;
      localStorage.setItem('profilePic', reader.result);
    }
    reader.readAsDataURL(file);
  }

  // Load saved data
  window.onload = () => {
    const savedPic = localStorage.getItem('profilePic');
    if(savedPic) document.getElementById('profilePic').src = savedPic;

    const user = JSON.parse(localStorage.getItem('userData'));
    if(user) {
      document.getElementById('userName').textContent = user.name;
      document.getElementById('userEmail').textContent = user.email;
    }
  }

  // Logout
  function logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('profilePic');
    window.location.href = 'index.html';
  }


  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    document.getElementById('userName').innerText = userData.name;
    document.getElementById('profileName').innerText = userData.name;
  }

  function logout() {
    localStorage.removeItem('userData');
    window.location.href = "index.html";
  }

  // पहले चेक करो user data है या नहीं
  const user = JSON.parse(localStorage.getItem('userData'));
  if (!user) {
    alert("कृपया पहले फॉर्म भरें!");
    window.location.href = "index.html";
  }


  function about (){
  let about = document.getElementById('myabout');
  about.style.display = "block"
  }
  function show1(){
    let women = document.getElementById('women-section');
  women.style.display = "block"
  }
  function show2(){
    let toy = document.getElementById('toys-section');
  toy.style.display = "block"
  }
  function show3(){
    let watch = document.getElementById('watches-section');
  watch.style.display = "block"
  }
  function show4(){
    let shoes = document.getElementById('shoes-section');
  shoes.style.display = "block"
  }
  





 