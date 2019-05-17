export const validate = values => {
  const errors = {};

  // USERNAME
  if (!values.email) {
    errors.email = "Email is required";
  }

  // PASSWORD
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};
