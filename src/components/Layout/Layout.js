import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      };
    });
  }

  render() {
    return (
      <>
        <Toolbar menuClick={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
        <main className="Builder">{this.props.children}</main>
      </>
    )
  }
}

export default Layout;
