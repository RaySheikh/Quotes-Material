import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CardUi from "../components/Card";
import { GET_ALLQUOTES } from "../actions/constants";
import Loading from "../components/Loading";

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
  const [loading, setloading] = useState(false);
  const getQuotes = () => {
    setloading(true);
    return (dispatch: any) => {
      fetch("https://myquotesapi.herokuapp.com/api/Quotes/AllQuotes", {
        method: "GET",
        headers: {
          "API-KEY": "5c316ab0-32ac-49e4-b3e4-a4f6aeec9a6d",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setloading(false);
          dispatch({
            type: GET_ALLQUOTES,
            payload: data,
          });
        });
    };
  };

  useEffect(() => {
    dispatch(getQuotes());
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ marginTop: "30vh" }}>
          <Loading />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default AllQuotesWithData;
