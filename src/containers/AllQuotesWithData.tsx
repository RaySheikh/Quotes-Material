import React, { useEffect } from "react";

import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CardUi from "../components/Card";
import { GET_ALLQUOTES } from "../actions/constants";
import { API_KEY } from "../env";

type Quote = {
  id: "string";
  body: "string";
  author: "string";
  catagory: {
    name: "string";
  };
};

interface AllQuotesState {
  data: Array<Quote>;
  fetchQuotes: any;
}

const AllQuotesWithData = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: AllQuotesState) => ({
    ...state.fetchQuotes,
  }));
  const getQuotes = () => {
    return (dispatch: any) => {
      fetch("https://myquotesapi.herokuapp.com/api/Quotes/AllQuotes", {
        method: "GET",
        headers: {
          "API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: GET_ALLQUOTES,
            payload: data,
          })
        );
    };
  };

  useEffect(() => {
    dispatch(getQuotes());
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((e: Quote, i: number) => {
        return (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <CardUi
              author={e.author}
              quote={e.body}
              catagory={e.catagory.name}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AllQuotesWithData;
