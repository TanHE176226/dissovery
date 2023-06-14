class Validator {
    static validateNumber(value) {
      const numberRegex = /^[0-9]+$/; // Biểu thức chính quy cho số
      return numberRegex.test(value);
    }
    static validateString(value){
        return;
    }
  }
  
export default Validator;
  