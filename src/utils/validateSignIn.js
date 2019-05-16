export const validate = values => {
  const errors = {};

  // USERNAME
  if (!values.username) {
    errors.username = "Username is required";
  }

  // PASSWORD
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};
