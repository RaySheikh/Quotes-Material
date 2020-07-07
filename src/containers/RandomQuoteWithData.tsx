import React, { useEffect } from "react";
import RandomQuote from "../components/RandomQuote";
import { GET_RANDOMQUOTE } from "../actions/constants";
import { useSelector, useDispatch } from "react-redux";

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
          "API-KEY": "5c316ab0-32ac-49e4-b3e4-a4f6aeec9a6d",
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
