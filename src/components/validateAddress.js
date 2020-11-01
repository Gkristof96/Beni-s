export default function validateAddress(values) {
    let errors = {};
  
    if(!values.firstname) {
        errors.firstname = 'Keresztnév kötelező';
    }
    if(!values.lastname) {
        errors.lastname = 'Vezetéknév kötelező';
    }
    if(!values.street) {
        errors.street = 'Utca, házszám kötelező';
    }
    if(!values.ir) {
        errors.ir = 'Irányítószám kötelező';
    }
    if(!values.city) {
        errors.city = 'Város kötelező';
    }
    if(!values.country) {
        errors.country = 'Ország kötelező';
    }
    
    return errors;
  }