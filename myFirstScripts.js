function validateMyForm() {
    // Get form elements
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthday = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Check if form elements are empty
    if (firstName === "" || lastName === "" || email === "" || message === "") {
      // Display alert box with missing fields
      alert("Please fill in all fields.");
    } else {
      // Display alert box with form summary
      alert(`First Name: ${firstName}\Last Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`);
    }
}
