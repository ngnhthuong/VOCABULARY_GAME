import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import "./init.css";
import { initplayer } from "../../features/player/initPlayerSlice";
import user1IMG from "../../assets/images/player/user1.png";
import user2IMG from "../../assets/images/player/user2.png";
import user3IMG from "../../assets/images/player/user3.png";
import user4IMG from "../../assets/images/player/user4.png";
import user5IMG from "../../assets/images/player/user5.png";
import user6IMG from "../../assets/images/player/user6.png";
import user7IMG from "../../assets/images/player/user7.png";
import { base_url } from "../../utils/api_service";

export default function InitPlayer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState({
    avatar: user1IMG,
  });

  const validationSchema = Yup.object().shape({
    playerName: Yup.string()
      .required("Player Name is required <3")
      .test(
        "no-spaces",
        "Player Name cannot contain spaces!",
        (value) => String(value).indexOf(" ") === -1
      ),
    avatar: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      playerName: "",
      avatar: selectedAvatar.avatar,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(initplayer(values));
    },
  });

  const { initPlayer, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.initplayer
  );

  const handleAvatarClick = (image) => {
    setSelectedAvatar(() => {
      return { avatar: image };
    });
    formik.setFieldValue("avatar", image);
  };

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

  useEffect(() => {
    if (playerAuth !== null && playerAuth.active === true) {
      setTimeout(() => {
        window.location.href = "/homepage";
      }, 2000);
    }
  }, [initPlayer, isError, isLoading, isSuccess, message]);

  return (
    <>
      <div className="init-form">
        <form onSubmit={formik.handleSubmit} className="init-information">
          <label>PLAYER NAME</label>
          <input
            maxLength={7}
            className="init-name box--shadow"
            type="text"
            name="playerName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.playerName}
          />
          <button type="submit" className="init-btn box--shadow">
            Create
          </button>
          <div className="error-signup__message">
            {formik.touched.playerName && formik.errors.playerName ? (
              <p>{formik.errors.playerName}</p>
            ) : null}
          </div>
        </form>

        <ul className="init-avatar box--shadow">
          {[
            user1IMG,
            user2IMG,
            user3IMG,
            user4IMG,
            user5IMG,
            user6IMG,
            user7IMG,
          ].map((image, index) => (
            <li
              key={index}
              onClick={() => handleAvatarClick(image)}
              className={`avatar box--shadow ${
                selectedAvatar.avatar === image ? "selected flash" : ""
              }`}
            >
              <img src={image} alt={`avatar-${index}`} />
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}
