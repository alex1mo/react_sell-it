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
  if (!values.password1) {
    errors.password1 = "Password is required";
  } else if (values.password1.length < 8) {
    errors.password1 = "Enter more than 8 characters!";
  } else if (!passwordRegex.test(values.password1)) {
    errors.password1 = "Must include  one letter and one numeric";
  }

  // PASSWORD CONFIRMATION
  if (!values.password2) {
    errors.password2 = "Please, confirm your password";
  } else if (values.password1 !== values.password2) {
    errors.password2 = "Your passwords don't match";
  }

  return errors;
};
