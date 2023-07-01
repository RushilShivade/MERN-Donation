// // // DonateForm.js
// import React from 'react';
// import NavBar from './Components/NavBar';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import './assets/DonateNow.css'

// const DonateForm = () => {
//   // Define the validation schema using yup
//   const validationSchema = yup.object({
//     name: yup.string().required('Name is required'),
//     number: yup
//       .string()
//       .required('Number is required')
//       .matches(/^\d{10}$/, 'Number must be 10 digits'),
//     email: yup.string().email('Invalid email').required('Email is required'),
//     amount: yup
//       .number()
//       .positive('Amount must be a positive number')
//       .required('Amount is required'),
//   });

//   // Initialize formik
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       number: '',
//       email: '',
//       amount: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values); // You can perform form submission here
//     },
//   });

//   return (
//     <div>
//       <NavBar />
//       <h1>Hello</h1>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />
//           {formik.touched.name && formik.errors.name && (
//             <div className="error">{formik.errors.name}</div>
//           )}
//         </div>
//         <div>
//           <label htmlFor="number">Number:</label>
//           <input
//             type="text"
//             id="number"
//             name="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.number}
//           />
//           {formik.touched.number && formik.errors.number && (
//             <div className="error">{formik.errors.number}</div>
//           )}
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className="error">{formik.errors.email}</div>
//           )}
//         </div>
//         <div>
//           <label htmlFor="amount">Amount:</label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.amount}
//           />
//           {formik.touched.amount && formik.errors.amount && (
//             <div className="error">{formik.errors.amount}</div>
//           )}
//         </div>
//         <button type="submit">Donate</button>
//       </form>
//     </div>
//   );
// };

// export default DonateForm;


// DonateForm.js
import React from 'react';
import NavBar from './Components/NavBar';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import './assets/DonateNow.css';

const DonateForm = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required!"),
        email: yup.string().email().required("Email is required!"),
        number: yup.string()
            .required('Number is required')
            .test('is-min-10-digits', 'Number must have a minimum of 10 digits', (value) => {
                if (value) {
                    return value.replace(/\D/g, '').length >= 10; // Remove non-digit characters and check length
                }
                return false;
            }),
        amount: yup
            .number()
            .required('Amount is required')
            .min(100, 'Minimum amount is 100')
            .test('is-greater-than-min', 'Minimum donation amount is 100', function (value) {
                return value >= 100;
            }),

    })


    const { register, handleSubmit, formState: { errors } } = useForm({ //Errors are used to print the error message.
        resolver: yupResolver(schema),//Integrating yup with react hook form. yupResolver is a package we import from the hookform resolvers.
    });


    const onSubmit = (data) => {
        console.log("Form submitted");
        console.log(data);
    }

    return (
        <div>
            <NavBar />
            <div id='main'>
                <h2 id='heading'>Your donation today will change the tomorrow of the needy.</h2>
                <form
                    className="form-container"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="text" placeholder="Full name" className="form-input" {...register("fullName")} />
                    {errors.fullName && <p id="errorMsg">{errors.fullName.message}</p>}
                    <input type="text" placeholder="Email" className="form-input" {...register("email")} />
                    {errors.email && <p id="errorMsg">{errors.email.message}</p>}
                    <input type="string" placeholder="Number" className="form-input" {...register("number")} />
                    {errors.age && <p id="errorMsg">{errors.age.message}</p>}
                    <input type="string" placeholder="Amount you want to donate" className="form-input" {...register("amount")} />
                    {errors.amount && <p>Please enter correct amount (Minimum is 100)</p>}
                    <input type="submit" className="form-button" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default DonateForm;
