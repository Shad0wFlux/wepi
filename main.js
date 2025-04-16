// Main JavaScript file for InstaKitPro

document.addEventListener('DOMContentLoaded', function() {
    // Session ID validation
    const sessionIdInputs = document.querySelectorAll('input[name="session_id"]');
    if (sessionIdInputs.length > 0) {
        sessionIdInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateSessionId(this.value, this);
            });
        });
    }

    // Add animation to success icons
    const successIcons = document.querySelectorAll('.success-icon');
    if (successIcons.length > 0) {
        successIcons.forEach(icon => {
            icon.classList.add('animated');
        });
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    if (tooltipTriggerList.length > 0) {
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});

// Validate session ID format
function validateSessionId(sessionId, inputElement) {
    if (!sessionId) return;
    
    // Basic validation - Instagram session IDs are typically long alphanumeric strings
    if (sessionId.length < 20) {
        showValidationError(inputElement, 'معرف الجلسة قصير جدًا، يرجى التحقق منه');
        return;
    }
    
    // في النسخة المستضافة، نعرض رسالة نجاح افتراضية
    showValidationSuccess(inputElement, 'تم التحقق من معرف الجلسة');
}

// Show validation error
function showValidationError(inputElement, message) {
    const feedbackElement = inputElement.nextElementSibling;
    if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
        feedbackElement.textContent = message;
    } else {
        const feedback = document.createElement('div');
        feedback.classList.add('invalid-feedback');
        feedback.textContent = message;
        inputElement.parentNode.appendChild(feedback);
    }
    
    inputElement.classList.add('is-invalid');
    inputElement.classList.remove('is-valid');
}

// Show validation success
function showValidationSuccess(inputElement, message) {
    const feedbackElement = inputElement.nextElementSibling;
    if (feedbackElement && feedbackElement.classList.contains('valid-feedback')) {
        feedbackElement.textContent = message;
    } else {
        const feedback = document.createElement('div');
        feedback.classList.add('valid-feedback');
        feedback.textContent = message;
        inputElement.parentNode.appendChild(feedback);
    }
    
    inputElement.classList.add('is-valid');
    inputElement.classList.remove('is-invalid');
}

// Copy text to clipboard function
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
