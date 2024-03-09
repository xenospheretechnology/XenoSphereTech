document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form inputs
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    var resume = document.getElementById('resume').files[0];

    // Validate email using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
      return false;
    } else {
      document.getElementById('emailError').textContent = '';
    }

    // Validate phone number using a regular expression
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
      return false;
    } else {
      document.getElementById('phoneError').textContent = '';
    }

    // Here you can handle form submission, e.g., sending data to a server
    // For now, let's just log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
    console.log('Resume:', resume);
    
    // Reset form after submission
    document.getElementById('contactForm').reset();
    alert("Your Application has been sent and will go under review. Feel free to contact us for any more information.")
  });