import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";
import { Link } from "react-router-dom";

function ProductListItem({ product, match, handleModalOpen }) {
  const classes = useStyles();

  return (
    <TableRow key={product._id}>
      <TableCell>
        <img
          className={classes.productImage}
          src={`${process.env.REACT_APP_API_URL}/images/${product.image}`}
          alt={product.name}
        />
      </TableCell>
      <TableCell>{product.code}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.material}</TableCell>
      <TableCell>{product.width}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{product.description.substring(0, 60)}</TableCell>
      <TableCell align="center">
        <Button
          size="small"
          variant="contained"
          color="primary"
          component={Link}
          to={`${match.url}/${product._id}/edit`}
        >
          <EditIcon />
        </Button>

        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => handleModalOpen(product._id)}
        >
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ProductListItem;
