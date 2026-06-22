// Smooth nav active toggle
document.querySelectorAll(".navbar-nav .nav-link").forEach((l) => {
  l.addEventListener("click", () => {
    document
      .querySelectorAll(".navbar-nav .nav-link")
      .forEach((x) => x.classList.remove("active"));
    l.classList.add("active");
  });
});

emailjs.init('BMMhy6i5V_E7uXaKc');

const enquiryForms = document.querySelectorAll('.enquiry_form');
enquiryForms.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = e.target.from_name.value;
    let email = e.target.from_email.value;
    let phone = e.target.phone_number.value;

    let allerror = e.target.querySelectorAll('.error');
    allerror.forEach(err => {
      err.classList.add('hide');
    })

    let isSubmit = true;

    if (name.trim() === "") {
      e.target.querySelector('.name-error').classList.remove('hide');
      isSubmit = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      e.target.querySelector('.email-error').classList.remove('hide');
      isSubmit = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      e.target.querySelector('.phone-error').classList.remove('hide');
      isSubmit = false;
    }

    if (!isSubmit) {
      return;
    }



    form.querySelector('.submit-btn').textContent = "Sending...";

    const serviceID = 'service_hfzmm6y';
    const templateID = 'template_rjio747';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        form.querySelector('.submit-btn').textContent = "Submit";
        form.reset()
        alert('Thankyou for contacting us we will get to you soon');
      }, (err) => {
        form.querySelector('.submit-btn').textContent = "Submit";
        alert("Something went wrong please try again later");
      })
  })
})