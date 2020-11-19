// Java script for contact form, fields list to take input
var fields = {};

document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  fields.phone = document.getElementById('phone');
 })
// Checking that field is not left empty
 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }
// checking that the number field is more than 0 and a number
 function isNumber(num) {
  return (num.length > 0) && !isNaN(num);
 }
// Used regex i found onlinwe to validate email
 function isEmail(email) {
   let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return regex.test(String(email).toLowerCase());
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  return valid;
 }

 class User {
  constructor(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  }
 }
// function that runs in onsubmit, gives alert using first name value inputed by user
function submitForm() {
  if (isValid()) {
    let usr = new User(firstName.value, lastName.value, email.value);

    alert(`${usr.firstName} thanks for submitting.`)

  } else {
    alert(`Please fill in form correctly!`)
  }
}


// This is the code for my JS feature for creating a object with an array, and passing info into it
const services = [
  {
    service: 'Tuning',
    duration: '2hrs',
    cost: '$150',
    frequecy: 'once a year'
  },
  {
    service: 'Pitch Raise',
    duration: '30min',
    cost: '$75',
    frequecy: 'Piano not tuned for over 4yrs'
  },
  {
    service: 'Regulation',
    duration: '5hrs',
    cost: '$450',
    frequecy: 'Once every 10yrs'
  },
  {
    service: 'Voicing',
    duration: '3hrs',
    cost: '$300',
    frequecy: 'Once every 5yrs'
  }
];
const main = document.querySelector('main');
let html = '';
// Added class servicesBlock to style h3 and h2's
for ( let i = 0; i < services.length; i++ ) {
  let service = services[i];
    html += `
      <div class="servicesBlock"><h2>${service.service}</h2>
      <h3>Duration: ${service.duration}</h3>
      <h3>Cost: ${service.cost}</h3>
      <h3>Frequecy: ${service.frequecy}</h3></div>
    `;
}

main.insertAdjacentHTML('beforeend', html);

