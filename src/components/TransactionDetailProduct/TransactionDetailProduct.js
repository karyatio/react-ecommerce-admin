import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function TransactionDetailProduct({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={`${process.env.REACT_APP_API_URL}/images/${product.image}`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Harga Item : Rp. {product.price}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Panjang : {product.quantity} cm
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Harga Total : Rp. {product.price * product.quantity}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
