import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchTransaction,
  changeTransactionStatus,
  setResi
} from "../../actions/transactionDetail";

// Component
import TransactionDetailStep from "./TransactionDetailStep";
import TransactionDetailInfo from "../TransactionDetailInfo";
import TransactionDetailProduct from "../TransactionDetailProduct";
import TransactionDetailPayment from "../TransactionDetailPayment";
import TransactionDetailTab from "../TransactionDetailTab";
import TransactionDetailStatusModal from "../TransactionDetailStatusModal";
import TransactionDetailResiModal from "../TransactionDetailResiModal";
import TransactionDetailAction from "../TransactionDetailAction";

// Material UI
import { Container, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TransactionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0,
      modalStatus: false,
      modalResi: false,
      selectedStatus: "",
      status: ["Menunggu diterima", "Diterima", "Ditolak", "Dikirim", "Sampai"]
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

  handleResi = () => {
    const { id } = this.props.match.params;
    const { changeTransactionStatus } = this.props;

    changeTransactionStatus(id, "Dikirim");
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

  handleModalOpenResi = () => {
    this.setState({ modalResi: true });
  };

  handleModalCloseResi = () => {
    this.setState({ modalResi: false });
  };

  getStepper = () => {
    const { transaction } = this.props;
    let activeStep = 0;

    if (!transaction) return "";

    switch (transaction.processStatus) {
      case this.state.status[0]:
        activeStep = 0;
        break;
      case this.state.status[1]:
        activeStep = 1;
        break;
      case this.state.status[2]:
        activeStep = 2;
        break;
      case this.state.status[3]:
        activeStep = 3;
        break;
      default:
        activeStep = 4;
        break;
    }

    return <TransactionDetailStep activeStep={activeStep} />;
  };

  getActions = () => {
    const { transaction } = this.props;
    let activeStep = 0;

    if (!transaction) return "";

    switch (transaction.processStatus) {
      case this.state.status[0]:
        activeStep = 0;
        break;
      case this.state.status[1]:
        activeStep = 1;
        break;
      case this.state.status[2]:
        activeStep = 2;
        break;
      case this.state.status[3]:
        activeStep = 3;
        break;
      default:
        activeStep = 4;
        break;
    }

    console.log(activeStep);
    return (
      <TransactionDetailAction
        step={activeStep}
        handleModalOpen={this.handleModalOpen}
        handleModalOpenResi={this.handleModalOpenResi}
      />
    );
  };

  render() {
    const { classes, transaction, setResi } = this.props;

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
              {this.getActions()}
            </Grid>
            <TransactionDetailStatusModal
              open={this.state.modalStatus}
              handleClose={this.handleModalClose}
              status={this.state.selectedStatus}
              handleStatusChange={this.handleChangeTransactionStatus}
            />
            <TransactionDetailResiModal
              open={this.state.modalResi}
              handleClose={this.handleModalCloseResi}
              status={this.state.selectedStatus}
              handleResi={this.handleResi}
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
      changeTransactionStatus,
      setResi
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TransactionDetail));
