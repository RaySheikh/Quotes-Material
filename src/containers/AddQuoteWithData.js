import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_QUOTE,
  UPDATE_AUTHOR,
  UPDATE_CATAGORY,
  SET_LOADING,
  RESET_CREATEQUOTE,
  UPDATE_MESSAGE,
} from "../actions/constants";
import Message from "../components/Message";
import AddQuote from "../components/AddQuote";

const AddQuoteWithData = () => {
  const { quote, catagory, author, loading, message, color } = useSelector(
    (state) => ({
      ...state.createQuote,
      ...state.messageBox,
    })
  );
  const dispatch = useDispatch();
  const onTextChange = (e) => {
    dispatch({
      type: UPDATE_QUOTE,
      payload: e.target.value,
    });
  };
  const onAuthorChange = (e) => {
    dispatch({
      type: UPDATE_AUTHOR,
      payload: e.target.value,
    });
  };
  const onCatagoryChange = (e) => {
    dispatch({
      type: UPDATE_CATAGORY,
      payload: e.target.value,
    });
  };

  const addQuote = () => {
    return (dispatch) => {
      fetch("https://myquotesapi.herokuapp.com/api/Quotes", {
        method: "POST",
        headers: {
          "API-KEY": "5c316ab0-32ac-49e4-b3e4-a4f6aeec9a6d",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: quote,
          author: author,
          catagory: {
            name: catagory,
          },
        }),
      }).then((response) => {
        dispatch({
          type: SET_LOADING,
          payload: false,
        });

        if (response.status === 200) {
          dispatch({
            type: UPDATE_MESSAGE,
            payload: {
              message: "Quote added successfully!",
              color: "success",
            },
          });
          dispatch({
            type: RESET_CREATEQUOTE,
          });
        } else if (response.status === 401) {
          dispatch({
            type: UPDATE_MESSAGE,
            payload: {
              message: "Not Authorized!",
              color: "error",
            },
          });
        } else {
          dispatch({
            type: UPDATE_MESSAGE,
            payload: {
              message: "An error occured. Please try again.",
              color: "error",
            },
          });
        }
      });
    };
  };
  const onAdd = () => {
    if (quote && author && catagory) {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      dispatch(addQuote());
    } else {
      dispatch({
        type: UPDATE_MESSAGE,
        payload: { message: "Please fill out all fields", color: "error" },
      });
    }
  };
  return (
    <>
      <AddQuote
        onTextChange={onTextChange}
        quote={quote}
        author={author}
        onAuthorChange={onAuthorChange}
        catagory={catagory}
        onCatagoryChange={onCatagoryChange}
        loading={loading}
        onAdd={onAdd}
      >
        <Message message={message} color={color} />
      </AddQuote>
    </>
  );
};

export default AddQuoteWithData;
