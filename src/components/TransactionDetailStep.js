import React from "react";

// Material UI
import { Stepper, Step, StepLabel, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
    marginBottom: theme.spacing(2)
  }
}));

const steps = [
  "Menunggu Konfirmasi Admin",
  "Pesanan Di Proses",
  "Pesanan Di Kirim",
  "Pesanan Sampai"
];

export default function TransactionDetailStep(props) {
  const classes = useStyles();
  const { activeStep } = props;

  return (
    <Paper>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
}
