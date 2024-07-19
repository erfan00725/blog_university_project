export default class FormValidation {
  private ValidImageTypes = ["image/jpeg", "image/png", "image/webp"];

  private emailValidation = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  private passValidation = (pass: string): boolean => {
    return pass.length > 6;
  };

  public imageValidation = (image: File): string => {
    console.log(image.type);
    if (this.ValidImageTypes.includes(image.type)) {
      return "unvalid image format!";
    }
    if (image.size > 5000000) {
      return "image is to large!";
    }

    return "";
  };

  public isValidated = (errors: { [key: string]: string }) => {
    let validated = false;

    validated = Object.values(errors).every((error) => error === "");

    return validated;
  };

  public validation = (
    inputName: string,
    value: string
    // setErrors?: React.Dispatch<
    //   React.SetStateAction<{
    //     [key: string]: string;
    //   }>
    // >
  ) => {
    let validated: boolean = true;

    switch (inputName) {
      case "password":
        validated = this.passValidation(value);
        break;
      case "email":
        validated = this.emailValidation(value);
        break;

      default:
        validated = true;
        break;
    }

    if (value.length <= 0) validated = false;

    // if (setErrors) {
    //   if (validated) {
    //     setErrors(()=>)
    //   }
    // }

    if (validated) {
      return "";
    } else {
      return "enter a valid " + inputName;
    }
  };
}
