import React, { useState } from "react";

import LoginWithData from "./LoginWithData";
import MobilMenu from "../components/MobilMenu";
import { Container, CssBaseline } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TabPanel } from "../components/MobilMenu";
import RandomQuote from "../components/RandomQuote";
import AddQuoteWithData from "./AddQuoteWithData";
import AllQuotesWithData from "./AllQuotesWithData";
import ThemeSwitchToggleWithData from "./ThemeToggleWithData";

function App() {
  const [tabValue, setTabValue] = useState(0);

  const tabsChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const { loggedIn } = useSelector((state) => ({
    ...state.loginReducer,
  }));

  const loginCheck = () => {
    if (loggedIn) {
      return (
        <>
          <MobilMenu
            loggedIn={loggedIn}
            tabsChange={tabsChange}
            value={tabValue}
          >
            <TabPanel value={tabValue} index={0}>
              <AllQuotesWithData />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Container maxWidth="xs">
                <RandomQuote />
              </Container>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <Container maxWidth="xs">
                <AddQuoteWithData />
              </Container>
            </TabPanel>
          </MobilMenu>
        </>
      );
    } else {
      return (
        <div style={{ marginLeft: 10 }}>
          <Container maxWidth="xs">
            <div style={{ textAlign: "right", paddingTop: 20 }}>
              <ThemeSwitchToggleWithData />
            </div>
          </Container>
          <LoginWithData />
        </div>
      );
    }
  };

  return (
    <div style={{ marginTop: 5 }}>
      <CssBaseline />
      {loginCheck()}
    </div>
  );
}

export default App;
