document.addEventListener('DOMContentLoaded', () => {    
    
    
    
    const validateFields = () => {

        //variables de formulaire
        const fields = document.querySelectorAll('input, textarea, select');
        let allFieldsFilled = true;
        const passwordField = document.getElementById('password');
        const genderField = document.querySelector('input[name="gender"]:checked');
        const countryField = document.getElementById('country');
        const selectedCourses = document.querySelectorAll('input[type="checkbox"]:checked');
        const fileInput = document.getElementById('file');

        // Effacer les messages d'erreur
        document.querySelectorAll('.error-message').forEach(message => message.remove());

        fields.forEach(field => {
            if (field.required && !field.value.trim()) {
                allFieldsFilled = false;
                displayErrorMessage(field, 'Required field.');
            }
        });

        // Validation du mot de passe
        if (passwordField.value.length !== 8) {
            allFieldsFilled = false;
            displayErrorMessage(passwordField, 'Password must have exactly 8 characters.');
        }

        // Validation du genre
        if (!genderField) {
            allFieldsFilled = false;
            displayErrorMessage(document.querySelector('input[name="gender"]'), 'Choose a gender.');
        }

        // Validation du pays
        if (countryField.value === '') {
            allFieldsFilled = false;
            displayErrorMessage(countryField, 'Select a country.');
        }

        // Validation du cours choisi
        if (selectedCourses.length === 0) {
            allFieldsFilled = false;
            displayErrorMessage(document.querySelector('input[type="checkbox"]'), 'Choose at least one course.');
        }

        // Validation d'image
        if (!fileInput.value) {
            allFieldsFilled = false;
            displayErrorMessage(fileInput, 'Upload an image.');
        }

        allFieldsFilled ? alert('All fields are filled correctly. Form can be submitted.') : alert('Please correct the required fields.');
    };

    // Fonction pour afficher le message d'erreur sous le champ
    const displayErrorMessage = (field, message) => {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
        field.parentNode.appendChild(errorMessage);
    };

    // Ajouter le bouton de vérification
    const form = document.querySelector('form');
    const verifyButton = document.createElement('button');
    verifyButton.textContent = 'Vérifier les champs';
    verifyButton.type = 'button';
    verifyButton.addEventListener('click', validateFields);

    form.appendChild(verifyButton);

    // Des événements pour mettre en surbrillance la bordure
    const fieldsWithGreenBorder = document.querySelectorAll('input[type="text"], textarea');
    fieldsWithGreenBorder.forEach(field => {
        field.addEventListener('blur', () => {
            if (field.value.trim() !== '') {
                field.style.border = '1px solid green';
            } else {
                field.style.border = ''; 
            }
        });
    });
});
