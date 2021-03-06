import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import CardUi from "./Card";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

interface Props {
  quote: string;
  author: string;
  onClick: () => void;
  loading: boolean;
  image: string;
}

const RandomQuote = ({ quote, author, image, onClick, loading }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate>
        <Grid spacing={5} container>
          <Grid item xs={12}>
            {loading ? (
              <div style={{ marginTop: "9vh", marginBottom: "9vh" }}>
                <Loading />
              </div>
            ) : (
              <CardUi image={image} quote={quote} author={author} />
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              /*  disabled={loading}
            className={classes.button}
            */
              onClick={onClick}
              startIcon={<GetAppIcon />}
            >
              Get Random
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RandomQuote;
