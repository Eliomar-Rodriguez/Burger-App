import React, { Component } from 'react';
import Aux from '../Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => { 
            return {showSideDrawer: !prevState.showSideDrawer }
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar
                drawerToggleclicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );

    }
}
export default layout;