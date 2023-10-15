
      /*
      // function for booking-confirmation-message
            function bookingFunction() {
              document.getElementById("booking-confirmation-message").innerHTML = "Dear our customer, thank you so much. Booking form has been successfully submitted!";
              }
        */



    // function for booking-confirmation-message (OPENS a NEW Window)
            
     /*       function bookingFunction() {
              var a = window.open("", a, "width=500, height=150");
              a.document.write("<h2>Dear our customer, your booking form has been successfully submitted! Thank you. </h2> Confirmation Number: HGFD45278ihg");
              a.document.body.style.background = "green";
              a.document.body.style.color = "white";
              setTimeout(function () { a.close() }, 5000);
          }

            // function for cancellation-confirmation-message (OPENS a NEW Window)
                        
            function cancelbookingFunction() {
              var girma = window.open("", girma, "width=500, height=150,");
              girma.document.write("<h2>Dear our customer, your cancellation form has been successfully submitted. Thank you.</h2>Confirmation Number: 876HGFDaabb");
              girma.document.body.style.background = "salmon";
              girma.document.body.style.color = "white";
              setTimeout(function () { girma.close() }, 5000);
            }
           



          //document.body.style.background = "skyblue";

            // function for thank-you-image-from-dog ID (on index page)
        setTimeout(() => {
          let get = document.getElementById('thank-you-image-from-dog');
          get.style.display = 'none';
          }, 6000);
         



        /*
          //Here is an example that uses the visibility property to make the element invisible after a few seconds.

          setTimeout(() => {
            const box = document.getElementById('booking-confirmation-message');
          
            // hides element (still takes up space on the page)
            box.style.visibility = 'hidden';
          }, 4000);
          */


          /*
          const submitButton = document.querySelector('.submit')

                    // If all form elements are valid, enable the submit button; otherwise, disable it
            if (allInputsValid()) {
              submitButton.removeAttribute('disabled', '')
            } else {
              submitButton.setAttribute('disabled', '')
            }
          }
            
    // Define a function to handle form submission
const handleSubmit = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault()


  // Add submit listener to the form
form.addEventListener('submit', (e) => handleSubmit(e))

*/

/* javaScript code to handle Contact Form start here*/
// Get all the necessary DOM elements
const form = document.getElementById('exampleForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')

// Store all form elements in an array by spreading the elements property of the form
const formElements = [ ...form.elements ]

// Create function to check if all form elements are valid
const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if (element.nodeName === 'SELECT') {
      //return element.value !== 'Please select an option'
    } else {
      return element.checkValidity()
    }
  })
  return valid
}


// Define a function to handle changes to any form element
const handleChange = () => {
  // Use the forEach() function to execute the provided function once for each element in the formElements array
  formElements.forEach((element) => {
    // If the element is invalid and is not a button, a select dropdown, a checkbox, or a radio button, style it with a red border and red text
    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'
          
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    // If the element is valid, reset its style to the original colors
    // The conditions are the same as above for excluding certain elements
    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
          
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }
    
  })

  // If all form elements are valid, enable the submit button; otherwise, disable it
  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}
// Define a function to handle form submission
const handleSubmit = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault()

  // If all form elements are valid after the form submission, display a success message, reset the form, and disable the submit button
  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

    // Hide the success message after 10 seconds
    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 4000)
  }
}
// Add event listener to each form element
formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

// Add submit listener to the form
form.addEventListener('submit', (e) => handleSubmit(e))

/* javaScript code to handle Cntact Form end here*/






        
        
