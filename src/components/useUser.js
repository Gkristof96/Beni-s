import { useState, useEffect } from 'react';

const useUser = (validateUser, user, changeUser) => {
  const [values, setValues] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    tel: user.tel,
    email: user.email
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

    setErrors(validateUser(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        changeUser();
      }
      // eslint-disable-next-line
},[errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useUser;