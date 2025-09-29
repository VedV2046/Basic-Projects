document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    // Character counter for message
    messageInput.addEventListener('input', function() {
        const count = this.value.length;
        charCount.textContent = count;
        
        if (count > 950) {
            charCount.style.color = '#e74c3c';
        } else {
            charCount.style.color = '#666';
        }
    });

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitFeedback();
        }
    });

    function validateName() {
        const name = nameInput.value.trim();
        const error = document.getElementById('nameError');
        
        if (name.length < 2) {
            showError(nameInput, error, 'Name must be at least 2 characters long');
            return false;
        } else {
            showSuccess(nameInput, error);
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const error = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            showError(emailInput, error, 'Please enter a valid email address');
            return false;
        } else {
            showSuccess(emailInput, error);
            return true;
        }
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        const error = document.getElementById('messageError');
        
        if (message.length < 10) {
            showError(messageInput, error, 'Message must be at least 10 characters long');
            return false;
        } else {
            showSuccess(messageInput, error);
            return true;
        }
    }

    function showError(input, errorElement, message) {
        input.classList.add('form-invalid');
        input.classList.remove('form-valid');
        errorElement.textContent = message;
    }

    function showSuccess(input, errorElement) {
        input.classList.add('form-valid');
        input.classList.remove('form-invalid');
        errorElement.textContent = '';
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        return isNameValid && isEmailValid && isMessageValid;
    }

    function submitFeedback() {
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            form.reset();
            charCount.textContent = '0';
            
            // Remove validation classes
            document.querySelectorAll('.form-valid, .form-invalid').forEach(el => {
                el.classList.remove('form-valid', 'form-invalid');
            });
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Feedback';
            
            // Scroll to top to show success message
            document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    }
});
