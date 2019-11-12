import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./../state/store";
import Header from './../components/Header/Header';
import ProjectsHandler from "./ProjectsHandler/ProjectsHandler";
const SidebarHandler = React.lazy(() => import('./SidebarHandler/Sidebar'));

function App() {
  return (
    <BrowserRouter forceRefresh={false}>
      <Provider store={store}>
        <Header/>
        <Switch>
          <Route exact strict path="/" component={ProjectsHandler}/>
        </Switch>
        <React.Suspense fallback={<p>Chargement...</p>}>
          <SidebarHandler/>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
