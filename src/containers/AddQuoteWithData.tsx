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
import { API_KEY } from "../env";

interface AddQuoteState {
  quote: string;
  catagory: string;
  author: string;
  loading: boolean;
  message: string;
  color: string;
  createQuote: any;
  messageBox: any;
}

//TODO: cleanup createQuote and messageBox, dispatch

const AddQuoteWithData = () => {
  const { quote, catagory, author, loading, message, color } = useSelector(
    (state: AddQuoteState) => ({
      ...state.createQuote,
      ...state.messageBox,
    })
  );
  const dispatch = useDispatch();
  const onTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    dispatch({
      type: UPDATE_QUOTE,
      payload: e.target.value,
    });
  };
  const onAuthorChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    dispatch({
      type: UPDATE_AUTHOR,
      payload: e.target.value,
    });
  };
  const onCatagoryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    dispatch({
      type: UPDATE_CATAGORY,
      payload: e.target.value,
    });
  };

  const addQuote = () => {
    return (dispatch: any) => {
      fetch("https://myquotesapi.herokuapp.com/api/Quotes", {
        method: "POST",
        headers: {
          "API-KEY": API_KEY,
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
