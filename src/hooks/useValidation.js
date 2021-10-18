// Use validation hook for validating email and password
const useValidation = () => {
  //Validation email with regex
  const isMail = (mail) => {
    return /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i.test(
      mail
    );
  };

  //Validation password wih regex
  //This is the validation for determining the stongness
  //Of a password. The password should at least one uppercase,
  //One lowecase, one number, one special character and at least 6
  //Character long
  const isPassword = (pass) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      pass
    );
  };

  return {
    isMail,
    isPassword,
  };
};

export default useValidation;
