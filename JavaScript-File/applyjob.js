
// Countries list
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
  "Canada", "Chad", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
  "Czech Republic", "Denmark", "Ecuador", "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Haiti", "Honduras", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Myanmar", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman",
  "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Singapore", "Slovakia", "Slovenia",
  "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Indian states list
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

// Populate dropdowns when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('country');
  const stateSelect = document.getElementById('cityState');

  // Populate countries
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  // Populate states
  indianStates.forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });

  // Set default country (optional)
  countrySelect.value = 'India';
});

// Validation functions
function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function isValidPhone(phone) {
  return /^(\+91|91)?[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''));
}

function isValidDOB(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 18;
}

// OTP handling
let phoneOTP = '';
let emailOTP = '';

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendPhoneOTP() {
  const phoneInput = document.getElementById('phone');
  const phone = phoneInput.value.trim();

  if (!phone) {
    showError(phoneInput, 'Phone number is required');
    return;
  }

  if (!isValidPhone(phone)) {
    showError(phoneInput, 'Please enter a valid Indian phone number');
    return;
  }

  phoneOTP = generateOTP();
  alert(`Your phone OTP is: ${phoneOTP}`);
  showSuccess(phoneInput);
}

function sendEmailOTP() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (!email) {
    showError(emailInput, 'Email is required');
    return;
  }

  if (!isValidEmail(email)) {
    showError(emailInput, 'Please enter a valid email address');
    return;
  }

  emailOTP = generateOTP();
  alert(`Your email OTP is: ${emailOTP}`);
  showSuccess(emailInput);
}

// Error/Success display functions
function showError(input, message) {
  const formGroup = input.closest('.form-group');
  const errorDisplay = formGroup.querySelector('.error-message');
  input.classList.add('error');
  input.classList.remove('success');
  errorDisplay.textContent = message;
  errorDisplay.style.display = 'block';
}

function showSuccess(input) {
  const formGroup = input.closest('.form-group');
  const errorDisplay = formGroup.querySelector('.error-message');
  input.classList.remove('error');
  input.classList.add('success');
  errorDisplay.style.display = 'none';
}

// Form submission handler
document.getElementById('idVerificationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  // Validate all required fields
  const validations = [
    { id: 'firstName', validate: value => value.length >= 2, message: 'First name must be at least 2 characters' },
    { id: 'dob', validate: isValidDOB, message: 'You must be at least 18 years old' },
    { id: 'gender', validate: value => value !== '', message: 'Please select your gender' },
    { id: 'phone', validate: isValidPhone, message: 'Please enter a valid Indian phone number' },
    { id: 'phoneOtp', validate: value => value === phoneOTP, message: 'Invalid phone OTP' },
    { id: 'email', validate: isValidEmail, message: 'Please enter a valid email address' },
    { id: 'emailOtp', validate: value => value === emailOTP, message: 'Invalid email OTP' },
    { id: 'address', validate: value => value.length >= 5, message: 'Address must be at least 5 characters' },
    { id: 'cityState', validate: value => value !== '', message: 'Please select your state' },
    { id: 'country', validate: value => value !== '', message: 'Please select your country' }
  ];

  // Perform all validations
  validations.forEach(field => {
    const input = document.getElementById(field.id);
    const value = input.value.trim();

    if (!value || !field.validate(value)) {
      showError(input, field.message);
      isValid = false;
    } else {
      showSuccess(input);
    }
  });

  // Additional validation for country-state relationship
  const country = document.getElementById('country').value;
  const state = document.getElementById('cityState').value;

  if (country === 'India' && !indianStates.includes(state)) {
    showError(document.getElementById('cityState'), 'Please select a valid Indian state');
    isValid = false;
  }

  if (isValid) {
    // Collect form data
    const formData = new FormData(this);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    // Log form data (in production, you would send this to your server)
    console.log('Form Data:', formDataObj);

    // Show success message
    alert('Form submitted successfully!');

    // Reset form
    this.reset();

    // Clear all success/error states
    document.querySelectorAll('input, select').forEach(element => {
      element.classList.remove('success', 'error');
    });

    // Reset OTP values
    phoneOTP = '';
    emailOTP = '';

    // Reset country to India (optional)
    document.getElementById('country').value = 'India';
  }
});

// Real-time validation for email and phone
document.getElementById('email').addEventListener('input', function () {
  const value = this.value.trim();
  if (value && !isValidEmail(value)) {
    showError(this, 'Please enter a valid email address');
  } else if (value) {
    showSuccess(this);
  }
});

document.getElementById('phone').addEventListener('input', function () {
  const value = this.value.trim();
  if (value && !isValidPhone(value)) {
    showError(this, 'Please enter a valid Indian phone number');
  } else if (value) {
    showSuccess(this);
  }
});

// Country change handler
document.getElementById('country').addEventListener('change', function () {
  const stateSelect = document.getElementById('cityState');
  const selectedCountry = this.value;

  // Clear state selection
  stateSelect.innerHTML = '<option value="">Select your state</option>';

  // If India is selected, populate states
  if (selectedCountry === 'India') {
    indianStates.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
    stateSelect.disabled = false;
  } else {
    // For other countries, disable state selection
    stateSelect.disabled = true;
  }
});

// Prevent form submission on enter key
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    return false;
  }
});
