const useValidation = () => {
  const isMail = (mail) => {
    return /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i.test(
      mail
    );
  };

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
