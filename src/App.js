import React, { useContext } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import { ThemeContext } from "./context/ThemeContext";
import { AppLayout, AppContent } from "./styles/contentStyles";
import Header from "./components/Header";
import Search from "./components/Search";
import Details from "./components/Details";
import Jobs from "./components/Jobs";
import { JobsContextProvider } from "./context/JobsContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AppLayout>
        <Header />
        <JobsContextProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <AppContent>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <>
                      <Search />
                      <Jobs />
                    </>
                  )}
                />
                <Route path="/:id" exact component={Details} />
              </AppContent>
            </Switch>
          </Router>
        </JobsContextProvider>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
