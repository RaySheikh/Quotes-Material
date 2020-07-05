import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import GetAppIcon from "@material-ui/icons/GetApp";
import CardUi from "./Card";

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

const RandomQuote = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate>
        <Grid spacing={5} container>
          <Grid item xs={12}>
            <CardUi catagory="my catagory" quote="test" author="test" />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              /*  disabled={loading}
            className={classes.button}
            onClick={onAdd}
            */
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
