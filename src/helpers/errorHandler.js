const handleErrors = (errors) => {
  const fields = Object.keys(errors);
  const errorMessages = fields.map(field => errors[field].message);
  return errorMessages;
};

export default handleErrors;
