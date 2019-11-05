import React from "react";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

export default function TransactionDetailAction({
  step,
  handleModalOpen,
  handleModalOpenResi,
  handleChange
}) {
  const classes = useStyles();

  if (step === 0 || step === 2)
    return (
      <Paper className={classes.paper}>
        <ButtonGroup
          fullWidth
          aria-label="large outlined secondary button group"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleModalOpen("Diterima")}
          >
            Terima
          </Button>
          <Button
            color="secondary"
            size="large"
            onClick={() => handleModalOpen("Ditolak")}
          >
            Tolak
          </Button>
        </ButtonGroup>
      </Paper>
    );

  if (step === 1)
    return (
      <Paper className={classes.paper}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="resi"
          label="resi"
          name="resi"
          autoFocus
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleModalOpenResi}
        >
          Kirim
        </Button>
      </Paper>
    );

  return "";
}
