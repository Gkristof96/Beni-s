import { useState, useEffect } from 'react';

const useFormAddress = (validateAddress, addAddress) => {
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

  useEffect(() => {
      // új cím felvétele ha nincs error
      if (Object.keys(errors).length === 0 && isSubmitting) {
        addAddress();
      }
      // eslint-disable-next-line
  },[errors]);


  return { handleChange, handleSubmit, values, errors };
};

export default useFormAddress;