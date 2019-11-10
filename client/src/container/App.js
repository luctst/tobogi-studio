import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./../state/store";
import Header from './../components/Header/Header';
import SidebarHandler from './SidebarHandler/Sidebar';

function App() {
  return (
    <BrowserRouter forceRefresh={false}>
      <Provider store={store}>
        <Header/>
        <Switch>
          <Route exact strict path="/" render={() => null}/>
        </Switch>
        <SidebarHandler/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
