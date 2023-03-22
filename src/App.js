import React from "react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuithemeProvider } from "@material-ui/core/styles";
import UserCredential from "./componente/seguridad/UserCredential";
import UserGame from "./componente/seguridad/UserGame";
import { Grid } from '@material-ui/core';
import AppNavbar from "./componente/navegacion/AppNavbar";
import Game from "./componente/seguridad/Game";
import Plan from "./componente/seguridad/Plan";

function App() {

  return (
    <React.Fragment>
      <Router>
      <MuithemeProvider theme={theme}>
        <AppNavbar/>
        <Grid container>
            <Switch>
                <Route exact path="/" component={Plan} />
                <Route exact path="/auth/plan" component={Plan} />
                <Route exact path="/auth/usercredential" component={UserCredential} />
                <Route exact path="/auth/usergame" component={UserGame} /> 
                <Route exact path="/auth/game" component={Game} />
            </Switch>
        </Grid>
      </MuithemeProvider>
    </Router>
    </React.Fragment>
  );
}

export default App;