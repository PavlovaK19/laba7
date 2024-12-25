const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('volunteerForm');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы по умолчанию
      
      let isValid = true;
      
      // Сброс сообщений об ошибках
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
      
      // Валидация имени
      const firstNameInput = document.getElementById('firstName');
      if (!validateName(firstNameInput.value)) {
          document.getElementById('firstNameError').textContent = 'Введите имя только на русском языке и без специальных символов.';
          isValid = false;
      }

      // Валидация фамилии
      const lastNameInput = document.getElementById('lastName');
      if (!validateName(lastNameInput.value)) {
          document.getElementById('lastNameError').textContent = 'Введите фамилию только на русском языке и без специальных символов.';
           isValid = false;
      }

      // Валидация почты
      const emailInput = document.getElementById('email');
      if (!validateEmail(emailInput.value)) {
          document.getElementById('emailError').textContent = 'Введите корректный адрес электронной почты.';
          isValid = false;
      }
      // Валидация выбора мероприятия
      const eventSelect = document.getElementById('event');
      if (!eventSelect.value) {
          document.getElementById('eventError').textContent = 'Выберите мероприятие.';
         isValid = false;
     }
      // Валидация загрузки документов
     const documentsInput = document.getElementById('documents');
      if (!documentsInput.files || documentsInput.files.length === 0) {
          document.getElementById('documentsError').textContent = 'Загрузите хотя бы один документ.';
          isValid = false;
     }

     if(isValid){
          // Если все валидации пройдены, можно отправить форму или выполнить другие действия
         alert('Форма успешно отправлена!');
      }
  });

  function validateName(name) {
      const nameRegex = /^[а-яёА-ЯЁ]+$/;
      return nameRegex.test(name);
  }
  
  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
