function validateMyForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthday = document.getElementById("birthday").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  // Checks if there are any blank fields and points it out on an alert
  if (!firstName || !lastName || !birthday || !gender) {
      let message = "";
      if (!firstName) {
      message += "- First Name\n";
      }
      if (!lastName) {
      message += "- Last Name\n";
      }
      if (!birthday) {
      message += "- Birthday\n";
      }
      if (!gender) {
      message += "- Gender\n";
      }
      alert(`Please fill out the following fields:\n${message}`);
      return false;
  }

  // If all fields are filled out, displays an alert with the form summary
  const summary = `First Name: ${firstName}\nLast Name: ${lastName}\nBirthday: ${birthday}\nGender: ${gender.value}`;
  alert(summary);

  return true;
}


function toggleFM() {
  const fieldsets = document.querySelectorAll("fieldset");

  fieldsets.forEach(function(fieldset) {
    const legend = fieldset.querySelector("legend");
    const inputs = document.querySelectorAll("input");

    if (document.getElementById("female").checked) {
      // Female is selected
      fieldset.style.borderColor = "var(--blue)";
      legend.style.color = "var(--blue)";
      inputs.forEach(function(input) {
        input.style.borderColor = "var(--blue)";
        input.style.backgroundColor = "var(--blue-lower)";
      });
      document.querySelector("h1").textContent = "Hello Madam";
    } else {
      // Male is selected
      fieldset.style.borderColor = "var(--red)";
      legend.style.color = "var(--red)";
      inputs.forEach(function(input) {
        input.style.borderColor = "var(--red)";
        input.style.backgroundColor = "var(--red-lower)";
      });
      document.querySelector("h1").textContent = "Hello Sir";
    }
  });
}
