import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AddCircle from "@material-ui/icons/AddCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import ThemeSwitchToggleWithData from "../containers/ThemeToggleWithData";

interface TabProps {
  children: ReactNode;
  value: number;
  index: number;
  other?: any;
}
//TODO: Remove other
export function TabPanel(props: TabProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  switch: { marginTop: 10, float: "right" },
});

interface Props {
  tabsChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  value: number;
  children: ReactNode;
}

export default function MobilMenu({ tabsChange, value, children }: Props) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" color="default">
        <Grid container>
          <Grid item xs={11}>
            <Tabs
              value={value}
              onChange={tabsChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              aria-label="scrollable force tabs"
            >
              <Tab label="Quotes" icon={<FavoriteIcon />} {...a11yProps(1)} />
              <Tab
                label="Random Quote"
                icon={<PersonPinIcon />}
                {...a11yProps(2)}
              />
              <Tab label="Add Quote" icon={<AddCircle />} {...a11yProps(0)} />
            </Tabs>
          </Grid>
          <Grid item xs={1} style={{ right: 0 }}>
            <div className={classes.switch}>
              <ThemeSwitchToggleWithData />
            </div>
          </Grid>
        </Grid>
      </AppBar>
      {children}
    </>
  );
}
