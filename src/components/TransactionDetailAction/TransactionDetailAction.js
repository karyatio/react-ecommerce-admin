import React from "react";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

export default function TransactionDetailAction({
  step,
  handleModalOpen,
  handleModalOpenResi
}) {
  const classes = useStyles();

  if (step === 0)
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
