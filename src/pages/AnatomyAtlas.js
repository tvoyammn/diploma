import React, { Component, useState } from "react";
import PropTypes from 'prop-types'

import AnatomyAtlasWindow from "../components/AnatomyAtlasWindow";
import ModelPicker from '../components/anatomyAtlas/ModelPicker'

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Skin from "../components/anatomyAtlasModels/Skin";
import Heart from "../components/anatomyAtlasModels/Heart";
import Airways from "../components/anatomyAtlasModels/Airways";

const styles = theme => ({
  ...theme.spreadIt,
  modelPicker: {
    flexGrow: 1,
    backgroundColor: theme.spreadIt.palette.main,
    display: "flex",
    height: '80%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
});

class anatomyAtlas extends Component {
  state = {
    modelName: "Skin",
    currentTab: 0
  };

  setModelHeart = () => this.setState({ modelName: "Heart" });
  setModelSkin = () => this.setState({ modelName: "Skin" });
  setModelAirways = () => this.setState({ modelName: "Airways" });

  

  handleChange = (event, newValue) => {
    this.setState({ currentTab: newValue});
  };

  render() {
    const { classes } = this.props

    let ModelsSwitch = () => {
      if (this.state.currentTab === 0) return <Skin />;
      else if (this.state.currentTab === 1) return <Heart />;
      else if (this.state.currentTab === 2) return <Airways />;
    };

    return (
      <Grid container>
        <Grid item sm={4}>
        <div className={classes.modelPicker}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={this.state.currentTab}
        onChange={this.handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Skin" value={0}/>
        <Tab label="Heart" value={1}/>
        <Tab label="Airways" value={2}/>
        {/* <Tab label="Item Four" value={3}/>
        <Tab label="Item Five" value={4}/>
        <Tab label="Item Six" value={5}/>
        <Tab label="Item Seven" value={6}/> */}
      </Tabs>
    </div>
        </Grid>
        <Grid item sm={8}>
          <ModelsSwitch />
        </Grid>
      </Grid>
    );
  }
}

anatomyAtlas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(anatomyAtlas);

{
  /* <Container>
<h1>Anatomy Atlas</h1>
<ModelsSwitch modelName={modelName}/>
<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item onClick={setModelHeart}>Heart</Dropdown.Item>
  <Dropdown.Item onClick={setModelSkin}>Skin</Dropdown.Item>
  <Dropdown.Item onClick={setModelAirways}>Airways</Dropdown.Item>
</DropdownButton>
</Container> */
}
