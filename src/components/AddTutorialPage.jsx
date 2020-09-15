import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddTutorialPage = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Titulo" variant="outlined" />
        <TextField id="outlined-basic" label="Profesor" variant="outlined" />
        <TextField id="outlined-basic" label="Materia" variant="outlined" />
        <TextField id="outlined-basic" label="Fecha" variant="outlined" />
      </form>
    </div>
  );
};

export default AddTutorialPage;
