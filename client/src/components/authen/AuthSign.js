import { useRef, useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import "./auth.css";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
export default function AuthSign() {
  const errorMessage = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let userSchema = yup.object({
    email: yup.string().email("Email not valid").required("Email is required"),
    password: yup.string().min(6).max(10),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const getPlayerDataFromStorage = () => {
    try {
      const playerDataString = localStorage.getItem("player");
      const playerData = JSON.parse(playerDataString);
      return playerData;
    } catch (error) {
      console.error("Error retrieving player data from LocalStorage:", error);
      return null;
    }
  };
  const playerAuth = getPlayerDataFromStorage();

  const { player, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (playerAuth !== null && playerAuth.active === false) {
      window.location.href = "/initplayer";
    } else if (
      !player == null ||
      isSuccess ||
      (playerAuth !== null && playerAuth.active === true)
    ) {
      navigate("/homepage");
    } else if (isError) {
      handleOpenModal();
    } else {
      navigate("/");
    }
    // console.log("effect");
    // console.log([player, isError, isLoading, isSuccess, message]);
  }, [player, isError, isLoading, isSuccess, message]);

  function handleOpenModal() {
    errorMessage.current.open();
  }

  return (
    <>
      <ErrorMessage ref={errorMessage} />
      <div id="login">
        <form className="login__form" onSubmit={formik.handleSubmit}>
          <h1 className="login__title">
            Login <em>Cow</em> Game
          </h1>
          <p className="slogan">
            Game is funny, enjoy and learning vocabulary for upgrade yourself !
          </p>
          <p className="login__email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleChange("email")}
              value={formik.values.email}
              required
            />
          </p>
          <div className="error_message--login">
            {formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </div>
          <p className="login__password">
            <label htmlFor="image">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange("password")}
              onBlur={formik.handleChange("password")}
              value={formik.values.password}
              required
            />
          </p>
          <div className="error_message--login">
            {formik.errors.password ? <p>{formik.errors.password}</p> : null}
          </div>

          <div className="login__btn">
            <a href="/signup">
              <button className="login__signup" type="button">
                Sign up
              </button>
            </a>
            <button className="login__signin" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
