import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { register } from "../../features/register/signUpSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let registSchema = yup.object({
    email: yup.string().email("Email not valid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be at most 15 characters")
      .required("Password is required"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: registSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  function handleLoginWin(){
    navigate("/");
  }

  const { registerPlayer, isError, isLoading, isSuccess, message } =
    useSelector((state) => state.register);
  useEffect(() => {
    if (isSuccess === true) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [registerPlayer, isError, isLoading, isSuccess, message]);

  return (
    <>
      <div id="login">
        <form
          method="post"
          className="signup__form"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="login__title">
            Sign Up <em>Cow</em> Game
          </h1>
          <p className="slogan">
            Game is funny, enjoy and learn vocabulary for self-improvement!
          </p>
          <div className="login__email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleChange("email")}
              value={formik.values.email}
              required
            />
            <div className="error-signup__message">
              {formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
          </div>
          <div className="login__password">
            <label htmlFor="password">Password</label>
            <input
              maxLength={15}
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange("password")}
              onBlur={formik.handleChange("password")}
              value={formik.values.password}
              required
            />
            <div className="error-signup__message">
              {formik.errors.password ? <p>{formik.errors.password}</p> : null}
            </div>
          </div>
          <div className="login__password">
            <label htmlFor="password">Confirm Password</label>
            <input
              maxLength={15}
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onChange={formik.handleChange("confirmpassword")}
              onBlur={formik.handleChange("confirmpassword")}
              value={formik.values.confirmpassword}
              required
            />
            <div className="error-signup__message">
              {formik.errors.confirmpassword ? (
                <p>{formik.errors.confirmpassword}</p>
              ) : null}
            </div>
          </div>
          <div className="login__btn">
            <button className="login__signup" onClick={handleLoginWin} >
              Login
            </button>
            <button className="login__signup" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
