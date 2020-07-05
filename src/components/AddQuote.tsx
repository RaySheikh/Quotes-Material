import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

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

type Props = {
  onTextChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  quote: string;
  author: string;
  onAuthorChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  catagory: string;
  onCatagoryChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  loading: boolean;
  onAdd: () => void;
  children: ReactNode;
};

const AddQuote = ({
  onTextChange,
  quote,
  author,
  onAuthorChange,
  catagory,
  onCatagoryChange,
  loading,
  onAdd,
  children,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate>
        <Grid spacing={5} container>
          <Grid item xs={12}>
            <TextField
              onChange={onTextChange}
              value={quote}
              fullWidth
              id="quote"
              label="Quote"
              required
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="Author"
              label="Author"
              value={author}
              onChange={onAuthorChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={catagory}
              onChange={onCatagoryChange}
              fullWidth
              required
              id="Catagory"
              label="Catagory"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              onClick={onAdd}
              startIcon={
                loading ? <CircularProgress size={24} /> : <SaveIcon />
              }
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
      {children}
    </div>
  );
};

export default AddQuote;
