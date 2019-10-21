import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchTransaction,
  changeTransactionStatus
} from "../../actions/transactionDetail";

// Component
import TransactionDetailStep from "./TransactionDetailStep";
import TransactionDetailInfo from "../TransactionDetailInfo";
import TransactionDetailProduct from "../TransactionDetailProduct";
import TransactionDetailPayment from "../TransactionDetailPayment";
import TransactionDetailTab from "../TransactionDetailTab";
import TransactionDetailStatusModal from "../TransactionDetailStatusModal";

// Material UI
import { Container, Grid, Paper, ButtonGroup, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TransactionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      tabIndex: 0,
      modalStatus: false,
      selectedStatus: "",
      status: ["Diterima", "Ditolak", "Dikirim"]
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchTransaction } = this.props;

    fetchTransaction(id);
  }

  handleChangeTransactionStatus = status => {
    const { id } = this.props.match.params;
    const { changeTransactionStatus } = this.props;

    changeTransactionStatus(id, status);
  };

  a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  };

  handleChange = (event, newValue) => {
    this.setState({ tabIndex: newValue });
  };

  handleModalOpen = status => {
    this.setState({ selectedStatus: status, modalStatus: true });
  };

  handleModalClose = () => {
    this.setState({ modalStatus: false });
  };

  getStepper = () => {
    const { transaction } = this.props;

    if (!transaction) return "";

    if (transaction.processStatus === this.state.status[1]) return "";

    return <TransactionDetailStep activeStep={this.state.activeStep} />;
  };

  render() {
    const { classes, transaction } = this.props;

    return (
      <Fragment>
        <Container maxWidth="lg" className={classes.container}>
          {this.getStepper()}
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs
                    value={this.state.tabIndex}
                    onChange={this.handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="Info" {...this.a11yProps(0)} />
                    <Tab label="Products" {...this.a11yProps(1)} />
                    <Tab label="Payments" {...this.a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <TransactionDetailTab value={this.state.tabIndex} index={0}>
                  <TransactionDetailInfo transaction={transaction} />
                </TransactionDetailTab>
                <TransactionDetailTab value={this.state.tabIndex} index={1}>
                  {transaction.products
                    ? transaction.products.map(product => {
                        return (
                          <TransactionDetailProduct
                            key={product._id}
                            product={product}
                          />
                        );
                      })
                    : ""}
                </TransactionDetailTab>
                <TransactionDetailTab value={this.state.tabIndex} index={2}>
                  <TransactionDetailPayment
                    total={transaction.total}
                    payments={transaction.payments}
                  />
                </TransactionDetailTab>
              </div>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ButtonGroup
                  fullWidth
                  aria-label="large outlined secondary button group"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => this.handleModalOpen(this.state.status[0])}
                  >
                    Terima
                  </Button>
                  <Button
                    color="secondary"
                    size="large"
                    onClick={() => this.handleModalOpen(this.state.status[1])}
                  >
                    Tolak
                  </Button>
                </ButtonGroup>
              </Paper>
            </Grid>

            <TransactionDetailStatusModal
              open={this.state.modalStatus}
              handleClose={this.handleModalClose}
              status={this.state.selectedStatus}
              handleStatusChange={this.handleChangeTransactionStatus}
            />
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { transaction } = state.transaction;

  return { transaction };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTransaction,
      changeTransactionStatus
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TransactionDetail));
