// import { useState } from "react";
// import styles from "../Signup/styles.module.css";
// import { Await, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import React from "react";

// const Signup = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
//   const handleSubmission = () => {
//     if (!data.firstName || !data.lastName || !data.email || !data.password) {
//       setError("Fill all fields");
//       return;
//     }
//     setError("");

//     try {
//       const url = "http://localhost:8080/api/users";
//       const { data: res } = axios.post(url, data);
//       navigate("/");
//       console.log(res.message);
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   // const handleChange = ({currentTarget: input}) => {
//   //     setData({...data, [input.name]: input.value});
//   //     try{
//   //         const url = "http://localhost:8080/api/users";
//   //         const {data: res} = axios.post(url, data);
//   //         navigate("/login")
//   //         console.log(res.message);
//   //     } catch (error){
//   //         if(error.response &&
//   //            error.response.status >=400 &&
//   //            error.response.status <= 500
//   //            )
//   //            {
//   //             setError(error.response.data.message)
//   //            }
//   //     }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className={styles.signup_container}>
//       <div className={styles.signup_form_container}>
       
//         <div className={styles.right}>
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Create Account</h1>
//             <input
//               type="text"
//               placeholder="First Name"
//               name="firstName"
//               onChange={(event) =>
//                 setData((prev) => ({ ...prev, firstName: event.target.value }))
//               }
//               value={data.firstName}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lastName"
//               onChange={(event) =>
//                 setData((prev) => ({ ...prev, lastName: event.target.value }))
//               }
//               value={data.lastName}
//               required
//               className={styles.input}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={(event) =>
//                 setData((prev) => ({ ...prev, email: event.target.value }))
//               }
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={(event) =>
//                 setData((prev) => ({ ...prev, password: event.target.value }))
//               }
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             {error && <div className="styles.error_msg"> {error} </div>}
//             <button
//               type="submit"
//               className={styles.green_btn}
//               onClick={handleSubmission}
//               disabled={submitButtonDisabled}
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//         <div className={styles.left}>
//           <h1>Welcome Back</h1>
//           <Link to="/login">
//             <button type="button" className={styles.white_btn}>
//               Sign in
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import { useState } from "react";
import styles from "../Signup/styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "Entrepreneur", // Default value
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async () => {
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      setError("Fill all fields");
      return;
    }
    setError("");

    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmission();
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={(event) =>
                setData((prev) => ({ ...prev, firstName: event.target.value }))
              }
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={(event) =>
                setData((prev) => ({ ...prev, lastName: event.target.value }))
              }
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(event) =>
                setData((prev) => ({ ...prev, email: event.target.value }))
              }
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event) =>
                setData((prev) => ({ ...prev, password: event.target.value }))
              }
              value={data.password}
              required
              className={styles.input}
            />
            <div>
              <label>Select:</label>
              <select
                name="userType"
                onChange={(event) =>
                  setData((prev) => ({ ...prev, userType: event.target.value }))
                }
                value={data.userType}
                className={styles.input}
              >
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Businessman">Businessman</option>
              </select>
            </div>
            {error && <div className={styles.error_msg}> {error} </div>}
            <button
              type="submit"
              className={styles.green_btn}
              disabled={submitButtonDisabled}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
