import React, { Component } from "react";
import axios from "axios";

// Compoenents

// Material UI
import { Container, Paper, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  bio: {
    padding: theme.spacing(2)
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  paper: {
    padding: theme.spacing(2)
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
});

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {}
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.id;

    axios
      .get(`http://localhost:5000/api/users/${userId}`)
      .then(res => {
        this.setState({ customer: res.data.data });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    const { classes } = this.props;
    const imgsrc =
      "https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg";

    return (
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={3}>
              <img src={imgsrc} alt="Thumbnail" className={classes.imgFluid} />
            </Grid>
            <Grid item xs={9}>
              <div className={classes.bio}>
                <p>{this.state.customer.firstName}</p>
                <p>{this.state.customer.address}</p>
                <p>{this.state.customer.email}</p>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(CustomerDetail);
