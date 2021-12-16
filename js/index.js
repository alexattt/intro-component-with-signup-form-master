window.addEventListener('load', function () {
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  var submitBtn = this.document.getElementById('free-trial-btn');

  submitBtn.addEventListener('click', function() {
    var nameFieldVal = document.querySelector("#name-input").value;
    var lastnameFieldVal = document.querySelector("#lastname-input").value;
    var emailFieldVal = document.querySelector("#email-input").value;
    var pswFieldVal = document.querySelector("#psw-input").value;


    var nameErrorField = document.querySelector("#error-msg-name");
    var nameErrorIcon = document.querySelector("#error-icon-name");
    var nameInputField = document.querySelector("#name-input");

    function cleanNameInput() {
      nameErrorField.innerHTML = ""
      nameErrorIcon.classList.add("element-invisible")
      nameErrorIcon.classList.remove("element-visible")
      nameInputField.classList.remove("input-warning")
    }

    if (nameFieldVal === '') {
      nameErrorField.innerHTML = "First Name cannot be empty"
      nameErrorIcon.classList.remove("element-invisible")
      nameErrorIcon.classList.add("element-visible")
      nameInputField.classList.add("input-warning")
    }
    else {
      cleanNameInput()
    }

    var lastnameErrorField = document.querySelector("#error-msg-lastname");
    var lastnameErrorIcon = document.querySelector("#error-icon-lastname");
    var lastnameInputField = document.querySelector("#lastname-input");

    function cleanLastNameInput() {
      lastnameErrorField.innerHTML = ""
      lastnameErrorIcon.classList.add("element-invisible")
      lastnameInputField.classList.remove("element-visible")
      lastnameInputField.classList.remove("input-warning")
    }

    if (lastnameFieldVal === '') {
      lastnameErrorField.innerHTML = "Last Name cannot be empty"
      lastnameErrorIcon.classList.remove("element-invisible")
      lastnameInputField.classList.add("element-visible")
      lastnameInputField.classList.add("input-warning")
    }
    else {
      cleanLastNameInput()
    }

    var emailErrorField = document.querySelector("#error-msg-email");
    var emailErrorIcon = document.querySelector("#error-icon-email");
    var emailInputField = document.querySelector("#email-input");

    function cleanEmailInput() {
      emailErrorField.innerHTML = ""
      emailErrorIcon.classList.add("element-invisible")
      emailInputField.classList.remove("element-visible")
      emailInputField.classList.remove("input-warning")
    }

    if (emailFieldVal === '') {
      emailErrorField.innerHTML = "Email cannot be empty"
      emailErrorIcon.classList.remove("element-invisible")
      emailInputField.classList.add("element-visible")
      emailInputField.classList.add("input-warning")
    }
    else {
      cleanEmailInput()
    }
    
    if (!emailFieldVal.match(emailRegex)) {
      emailErrorField.innerHTML = "Looks like this is not an email"
      emailErrorIcon.classList.remove("element-invisible")
      emailInputField.classList.add("element-visible")
      emailInputField.classList.add("input-warning")

      document.querySelector("#email-input").style.color = "rgb(255, 122, 122)"

      setTimeout(function(){
        document.querySelector("#email-input").style.color = "black"
      }, 5000); 
    }
    else {
      cleanEmailInput()
    }

    var pswErrorField = document.querySelector("#error-msg-psw");
    var pswErrorIcon = document.querySelector("#error-icon-psw");
    var pswInputField = document.querySelector("#psw-input");

    function cleanPswInput() {
      pswErrorField.innerHTML = ""
      pswErrorIcon.classList.add("element-invisible")
      pswInputField.classList.remove("element-visible")
      pswInputField.classList.remove("input-warning")
    }

    if (pswFieldVal === '') {
      pswErrorField.innerHTML = "Password cannot be empty"
      pswErrorIcon.classList.remove("element-invisible")
      pswInputField.classList.add("element-visible")
      pswInputField.classList.add("input-warning")
    }
    else {
      cleanPswInput()
    }

    if (nameFieldVal != '' &&  lastnameFieldVal != '' && emailFieldVal != '' && pswFieldVal != '' && emailFieldVal.match(emailRegex)) {
      cleanNameInput()
      document.querySelector("#name-input").value = ""
      cleanLastNameInput()
      document.querySelector("#lastname-input").value = ""
      cleanEmailInput()
      document.querySelector("#email-input").value = ""
      cleanPswInput()
      document.querySelector("#psw-input").value = ""

      document.querySelector("#thanks-msg").innerHTML = "Thank you for subscribing!"

      setTimeout(function(){
        document.querySelector("#thanks-msg").innerHTML = ""
      }, 5000); 
    }
  })
})