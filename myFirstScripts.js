function validateMyForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthday = document.getElementById("birthday").value;
  const gender = document.querySelector('input[name="gender"]:checked');

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

  // If all fields are filled out, display an alert with the form summary
  const summary = `First Name: ${firstName}\nLast Name: ${lastName}\nBirthday: ${birthday}\nGender: ${gender.value}`;
  alert(summary);

  return true;
}