import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, CardMedia } from "@material-ui/core";

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

interface Props {
  quote: string;
  author: string;
  image: string;
}

const CardUi = ({ quote, author, image }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography className={classes.quote} color="textPrimary">
            {quote}
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            -{author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUi;
