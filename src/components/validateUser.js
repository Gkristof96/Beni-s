export default function validate(values) {
    let errors = {};
  
    if (!values.firstname) {
      errors.firstname = 'Kötelező kitölteni';
    }
    if (!values.lastname) {
        errors.lastname = 'Kötelező kitölteni';
    }
    if (!values.tel) {
        errors.tel = 'Kötelező kitölteni';
    }
    if (!values.email) {
        errors.email = 'Kötelező kitölteni';
    }
    
    return errors;
  }