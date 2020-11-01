export default function validate(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Kötelező kitölteni';
    } else if (values.email !== 'user@email.hu') {
      errors.email = 'Helytelen email cím';
    }
    if (!values.password) {
      errors.password = 'Kötelező kitölteni';
    } else if (values.password !== 'jelszo') {
      errors.password = 'Helytelen jelszó';
    }
    
    return errors;
  }