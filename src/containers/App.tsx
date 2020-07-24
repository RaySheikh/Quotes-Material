import React, { useState } from "react";

import LoginWithData from "./LoginWithData";
import MobilMenu from "../components/MobilMenu";
import { Container, CssBaseline } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TabPanel } from "../components/MobilMenu";
import AddQuoteWithData from "./AddQuoteWithData";
import AllQuotesWithData from "./AllQuotesWithData";
import ThemeSwitchToggleWithData from "./ThemeToggleWithData";
import { RandomQuoteWithData } from "./RandomQuoteWithData";

interface LoggedInState {
  loggedIn: boolean;
  loginReducer: any;
}

function App() {
  const [tabValue, setTabValue] = useState<number>(0);

  const tabsChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setTabValue(newValue);
  };

  const { loggedIn } = useSelector((state: LoggedInState) => ({
    ...state.loginReducer,
  }));

  const loginCheck = (isLoggedIn: boolean) => {
    /* if (isLoggedIn) { */
    return (
      <>
        <MobilMenu tabsChange={tabsChange} value={tabValue}>
          <TabPanel value={tabValue} index={0}>
            <AllQuotesWithData />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Container maxWidth="xs">
              <RandomQuoteWithData />
            </Container>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Container maxWidth="xs">
              {isLoggedIn ? (
                <AddQuoteWithData />
              ) : (
                <div style={{ textAlign: "right", paddingTop: 20 }}>
                  <LoginWithData />
                </div>
              )}
            </Container>
          </TabPanel>
        </MobilMenu>
      </>
    );
    /*  } else {
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
    } */
  };

  return (
    <div style={{ marginTop: 5 }}>
      <CssBaseline />
      {loginCheck(loggedIn)}
    </div>
  );
}

export default App;
