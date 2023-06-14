class Validator {
    static validateQuantity(
        value,
        minQuantity,
        maxQuantity,
        messageInvalidNumber,
        messageOutOfRange,
    ) {
        const numberRegex = /^[0-9]+$/; // Biểu thức chính quy cho số
        if ( !numberRegex.test(value) || value == '' ) {
            return { isValid: false, errorMessage: messageInvalidNumber };
        }
        const quantity = parseInt(value);
        if (quantity > maxQuantity || quantity < minQuantity) {
            return { isValid: false, errorMessage: messageOutOfRange };
        }
        return { isValid: true};
    }
}
export default Validator;