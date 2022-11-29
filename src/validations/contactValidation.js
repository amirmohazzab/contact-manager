import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  photo: Yup.string()
    .required("contact image is required"),
  mobile: Yup.number().required("Mobile number is required"),
  email: Yup.string()
    .email("Email Address is not valid")
    .required("Email Address is required"),
  job: Yup.string().required("job is required"),
  group: Yup.string().required("choose one group"),
});
