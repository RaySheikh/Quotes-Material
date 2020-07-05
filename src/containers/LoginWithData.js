import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_LOGIN,
  LOGIN_ERROR,
} from "../actions/constants";
import Login from "../components/Login";

const LoginWithData = () => {
  const { username, password, errorMessage } = useSelector((state) => ({
    ...state.loginReducer,
  }));
  const dispatch = useDispatch();
  const clearErrorMessage = () => {
    dispatch({
      type: LOGIN_ERROR,
      payload: "",
    });
  };
  const onUserChange = (e) => {
    dispatch({
      type: UPDATE_USERNAME,
      payload: e.target.value,
    });
    if (errorMessage) {
      clearErrorMessage();
    }
    e.preventDefault();
  };
  const onPwChange = (e) => {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: e.target.value,
    });
    if (errorMessage) {
      clearErrorMessage();
    }
    e.preventDefault();
  };
  const onLogin = (e) => {
    const name = "Ray";
    const pwd = "dreamscometrue";
    if (username === name && password === pwd) {
      dispatch({
        type: UPDATE_LOGIN,
        payload: true,
      });
    } else if (username || password) {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Invalid username or password.",
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Please enter a username and password",
      });
    }
    e.preventDefault();
  };
  return (
    <Login
      onLogin={onLogin}
      username={username}
      onUserChange={onUserChange}
      password={password}
      onPwChange={onPwChange}
      errorMessage={errorMessage}
    />
  );
};

export default LoginWithData;
