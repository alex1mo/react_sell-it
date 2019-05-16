export const validate = values => {
  const errors = {};
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/i;

  // USERNAME
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 5) {
    errors.username = "Enter more than 5 characters!";
  }

  // EMAIL
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email";
  }

  // PASSWORD
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Enter more than 8 characters!";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Must include  one letter and one numeric";
  }

  // PASSWORD CONFIRMATION
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please, confirm your password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Your passwords don't match";
  }

  return errors;
};
