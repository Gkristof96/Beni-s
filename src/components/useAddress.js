import { useState, useEffect } from 'react';

const useAddress = (validateAddress, addAddress) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    street: '',
    other: '',
    ir: '',
    city: '',
    country: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateAddress(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        addAddress();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useAddress;