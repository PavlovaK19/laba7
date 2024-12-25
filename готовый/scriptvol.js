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
