import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First Name is required!"),
      middleName: yup.string().required("middle Name is required!"),
      lastName: yup.string().required("last Name is required!"),
    }),
    email: yup.string().email().required("Email is required!"),
    gender: yup.string().required("gender is required!"),
    designation: yup.string().required("designation is required!"),
    dateOfBirth: yup.string().required("Date Of Birth is required!"),
    contactNo: yup.string().required("Contact No is required!"),
    emergencyContactNo: yup
      .string()
      .required("emergency Contact No is required!"),
    managementDepartment: yup
      .string()
      .required("management Department is required!"),

    bloodGroup: yup.string().required("bloodGroup is required!"),
    permanentAddress: yup.string().required("permanent Address is required!"),
    presentAddress: yup.string().required("present Address is required!"),
  }),
});
