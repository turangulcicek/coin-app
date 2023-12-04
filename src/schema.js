import * as yup from "yup";
// şifreyi kısıtlamak için kurallar
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$"; // doğrulama şeması oluşturma

export const schema = yup
  .object()
  //   email için gerekli koşulları belirleme
  .shape({
    email: yup
      .string()
      .email("Please Enter a Valid Email")
      .required("Email is a must"),
    age: yup
      .number("age must be a number")
      .min(18, "age must be greater than 18")
      .max(100, "age must be less than 100")
      .integer("age must be an integer"),
    password: yup
      .string()
      .min(5, "must consist of 5 characters at least")
      // şifre yeterince güçlü mü (regexle yaptık)
      .matches(regex, "password is not strong enough")
      .required(),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "password does not match")
      .required(),
  });
