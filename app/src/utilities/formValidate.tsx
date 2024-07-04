export default class FormValidation {
  private emailValidation = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  private passValidation = (pass: string): boolean => {
    return pass.length > 6;
  };

  public isValidated = (errors: { [key: string]: string }) => {
    let validated = false;

    validated = Object.values(errors).every((error) => error === "");

    return validated;
  };

  public validation = (inputName: string, value: string) => {
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

    if (validated) {
      return "";
    } else {
      return "enter a valid " + inputName;
    }
  };
}
