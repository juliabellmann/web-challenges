console.clear();

const form = document.querySelector('[data-js="form"]');

//add event listener for form submission

form.addEventListener('submit', handleSubmitForm);


//create handleSubmitForm function

function handleSubmitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    const formData = new FormData(form);
    
    // Convert FormData to an object
    const formDataObject = Object.fromEntries(formData.entries());
    
    // Log form data to the console
    console.log('Form Data:', formDataObject);
    
    // Reset the form
    form.reset();
    
    // Focus on the First Name input
    document.getElementById('first-name').focus();
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('[data-js="form"]');
    
    form.addEventListener('submit', handleSubmitForm);
  
    function handleSubmitForm(event) {
      event.preventDefault(); // Prevent default form submission behavior
      
      const formData = new FormData(form);
      
      // Convert FormData to an object
      const formDataObject = Object.fromEntries(formData.entries());
      
      // Log form data to the console
      console.log('Form Data:', formDataObject);
      
      // Reset the form
      form.reset();
      
      // Focus on the First Name input
      document.getElementById('first-name').focus();
    }
  });
  