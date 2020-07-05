import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign: "center",
  },
  quote: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  header: {
    textAlign: "center",
    paddingTop: 10,
  },
});

type Props = {
  quote: string;
  author: string;
  catagory: string;
};

const CardUi = ({ quote, author, catagory }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography className={classes.header} variant="h5" component="h2">
        {catagory}
      </Typography>
      <CardContent>
        <Typography className={classes.quote} color="textPrimary">
          {quote}
        </Typography>
        <br />
        <Typography className={classes.pos} color="textSecondary">
          -{author}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default CardUi;
