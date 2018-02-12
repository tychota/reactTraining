// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { addListener } from 'reactTraining/src/modules/Nav/module';

import * as Pages from 'reactTraining/src/pages';

export const AppNavigator = StackNavigator({
  home: {
    screen: Pages.Home,
  },
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
