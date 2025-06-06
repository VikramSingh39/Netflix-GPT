
export const checkValidData = (name, email, password) => {
 const isNameValid = /^[a-zA-Z ]{2,30}.*$/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if (name && !isNameValid) return "Please enter your full name (first/last) using only letters and more than 2 characters";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

