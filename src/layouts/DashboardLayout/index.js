import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { Box } from "@material-ui/core";
import SettingsContext from "src/context/SettingsContext";
import ScrollArrowButton from "src/component/ScrollArrowButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  root1: {
    overflow: "hidden",
    position: "relative",
    backgroundSize: "cover",
    // background: "white",
    // backgroundImage: "url(/images/banner_back.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  },
  wrapper1: {
    backgroundColor: "#eceff1",
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative",
    paddingTop: 70,
    minHeight: "calc(100vh - 75px)",
    backgroundAttachment: "fixed",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
    "@media (max-width:767px)": {
      paddingTop: "70px !important",
    },
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#171717",
    backgroundSize: "cover",
    backgroundImage: "url(/images/banner_back.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    paddingTop: 70,
    minHeight: "calc(100vh - 75px)",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
    "@media (max-width:767px)": {
      paddingTop: "70px !important",
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    // padding: "40px 25px 25px ",
    padding: "27px 40px 25px",
    [theme.breakpoints.down("md")]: {
      padding: "30px 10px 10px ",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 10px 10px ",
    },
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const themeSeeting = useContext(SettingsContext);

  return (
    <div
      className={
        themeSeeting.settings.theme === "DARK"
          ? `${classes.root1}`
          : `${classes.root}`
      }
    >
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div
        className={
          themeSeeting.settings.theme === "DARK"
            ? `${classes.wrapper1}`
            : `${classes.wrapper}`
        }
      >
        <div className={classes.contentContainer}>
          <Box className="orangeshadeBox1"></Box>
          <Box className="purpleBox1"></Box>
          <div className={classes.content} id="main-scroll">
            {children}
            <ScrollArrowButton />
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
