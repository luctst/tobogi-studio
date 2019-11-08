import React from 'react';
import Container from "./../styles/Container";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../components/Header/Header';
import {Provider} from "react-redux";
import store from "./../state/store";

function App() {
  return (
    <Container>
      <BrowserRouter forceRefresh={false}>
        <Provider store={store}>
          <Header/>
          <Switch>
            <Route exact strict path="/" render={() => <h1>Hello world</h1>}/>
          </Switch>
        </Provider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
