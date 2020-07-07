import React, { useEffect } from "react";
import RandomQuote from "../components/RandomQuote";
import { GET_RANDOMQUOTE } from "../actions/constants";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "../env";

type Quote = {
  id: "string";
  body: "string";
  author: "string";
  catagory: {
    name: "string";
  };
};

interface RandomQuoteState {
  quote: Quote;
  getRandomQuote: any;
}

export const RandomQuoteWithData = () => {
  const dispatch = useDispatch();
  const { quote } = useSelector((state: RandomQuoteState) => ({
    ...state.getRandomQuote,
  }));
  const getRandomQuote = () => {
    return (dispatch: any) => {
      fetch("https://myquotesapi.herokuapp.com/api/Quotes/RandomQuote", {
        method: "GET",
        headers: {
          "API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: GET_RANDOMQUOTE,
            payload: data,
          });
        });
    };
  };
  useEffect(() => {
    dispatch(getRandomQuote());
  }, []);

  const onClickRandomQuote = (): void => {
    dispatch(getRandomQuote());
  };
  return (
    <RandomQuote
      author={quote.author}
      catagory={quote.catagory ? quote.catagory.name : ""}
      quote={quote.body}
      onClick={onClickRandomQuote}
    />
  );
};
