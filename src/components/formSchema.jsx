import * as Yup from "yup";



const formSchema = Yup.object().shape({
    userName: Yup
        .string()
        .required("Must enter a username"),
    password: Yup
        .string()
        .test("minimumLength", "Must be at least 6 characters", val => val.length >= 6)
        .required(),
})

export default formSchema