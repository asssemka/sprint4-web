// Функция для проверки аутентификации пользователя
function login() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
  
    // Здесь вы можете проверить правильность введенных данных
    // и сравнить их с сохраненными данными пользователей
  
    // В данном примере просто сохраняем email в localStorage
    localStorage.setItem("email", email);
  
    // Переключаемся на страницу профиля
    showProfilePage();
  }
  
  // Функция для выхода из аккаунта
  function logout() {
    // Очищаем данные пользователя в localStorage
    localStorage.removeItem("email");
  
    // Переключаемся на страницу входа
    showLoginPage();
  }
  
  // Функция для отображения страницы входа
  function showLoginPage() {
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("profilePage").style.display = "none";
  }
  
  // Функция для отображения страницы профиля
  function showProfilePage() {
    // Получаем сохраненный email из localStorage
    var email = localStorage.getItem("email");
  
    document.getElementById("emailDisplay").textContent = "Email: " + email;
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("profilePage").style.display = "block";
  }
  
  // Проверяем, сохранен ли email в localStorage
  var email = localStorage.getItem("email");
  if (email) {
    showProfilePage();
  } else {
    showLoginPage();
  }
  