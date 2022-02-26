const _ = require('lodash')


const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (pwd) => {
    const regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    const valid = regex.test(pwd) && pwd.length > 7;
    return valid;
  };

function onsubmitValidation(value, validateFields, setError) {
	const err = {}
		Object.keys(validateFields).forEach((validate) => {
	    if (!_.isEmpty(value)) {
			if (validateFields[validate].required) {
				if (
					(typeof value[validate] !== 'boolean' &&
						!value[validate] &&
						validateFields[validate].required) ||
					value[validate] === '' || !value[validate].length
				) {
					const { errorMessage } = validateFields[validate]
					err[validate] = errorMessage
					setError({ ...err })
					return err
				}
			}
			return err
        }else if(validateFields[validate].required){
            const { errorMessage } = validateFields[validate]
                    err[validate] = errorMessage
                    setError({ ...err })
        }
		})
	
	return err
}

export {validateEmail, validatePassword, onsubmitValidation}