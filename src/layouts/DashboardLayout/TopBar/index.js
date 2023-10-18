import React, { useContext, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  makeStyles,
  IconButton,
  Typography,
  SvgIcon,
  Toolbar,
  AppBar,
  Hidden,
  Avatar,
  Grid,
  Box,
  Badge,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu as MenuIcon } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "src/context/Auth";
import Logo from "src/component/Logo";
import { BiBell, BiWalletAlt } from "react-icons/bi";
import apiConfigs from "src/apiConfig/ApiConfig";
import axios from "axios";



const useStyles = makeStyles((theme) => ({
  mainTopBox1: {
    "& .MuiPopover-paper": {
      top: "61px !important",
    },
  },
  mainTopBox: {
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
    },
  },
  toolbar: {
    padding: "10px 30px 7px 30px",

    background: "white",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px 0px 10px",
    },
    "& .MuiMenuItem-root": {
      minHeight: "34px",
    },
  },                                                                                                                                                                                                                                           
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  mainheader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    "& svg": {
      color: "black",
    },
    "& .leftBox": {
      width: "306px",
      [theme.breakpoints.down("md")]: {
        width: "200px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "150px",
      },
      "& img": {
        width: "100px",
        [theme.breakpoints.down("xs")]: {
          width: "70px",
          paddingLeft: "0 !important",
        },
      },
    },
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const readNotificationHandler = async () => {
    try {
      setIsLoading(true);
      const res = await axios({
        method: "GET",
        url: apiConfigs.readNotification,

        headers: {
          token: window.localStorage.getItem("token"),
        },
      });
      if (res.data.responseCode === 200) {
        history.push("/notification");
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  

  return (
    <Box className={classes.mainTopBox}>
      <AppBar
        elevation={0}
        className={clsx(classes.root, className)}
        color="inherit"
        style={
          colorChange
            ? {
                background:
                  "linear-gradient(90deg, rgba(145,79,80,1) 0%, rgba(93,33,90,1) 26%, rgba(35,38,45,1) 95%)",
              }
            : {}
        }
        {...rest}
      >
        <Toolbar className={classes.toolbar}>
          <Hidden lgUp>
            <IconButton
              color="#00e0b0"
              onClick={onMobileNavOpen}
              style={{ padding: "0px" }}
            >
              <SvgIcon>
                <MenuIcon style={{ color: "#E91E63", fontSize: "25px" }} />
              </SvgIcon>
            </IconButton>
          </Hidden>
          &nbsp; &nbsp;
          <Box className={classes.mainheader}>
            <Grid container alignItems="center">
              <Grid item lg={3} md={3} sm={4} xs={6}>
                <Box className="leftBox">
                  {/* <Link to="/"> */}
                  <Logo width="125" />
                  {/* </Link> */}
                </Box>
              </Grid>
              <Hidden xsDown>
                <Grid lg={4} md={6} sm={5}>
                  {/* <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Please enter Password"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ paddingLeft: "3px" }}
                      >
                        <FiSearch style={{ fontSize: "20px" }} />
                      </InputAdornment>
                    ),
                  }}
                /> */}
                </Grid>
              </Hidden>
              <Grid lg={5} md={3} sm={3} xs={6}>
                <Box className="displayEnd">
                  {/* <Box className="themeButton">
                  {themeSeeting.settings.theme === "DARK" ? (
                    <IconButton
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        changeTheme("LIGHT");
                      }}
                    >
                      <FiSun />
                    </IconButton>
                  ) : (
                    <IconButton
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        changeTheme("DARK");
                      }}
                    >
                      <FaRegMoon />
                    </IconButton>
                  )}
                </Box> */}
                  <IconButton>
                    <Badge
                      // badgeContent={}
                      color="error"
                
                    >
                      <BiWalletAlt />
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge
                      // badgeContent={}
                      color="error"
                      
                    >
                      <BiBell />
                    </Badge>
                  </IconButton>

                  <Box
                    ml={2}
                    className={classes.mainTopBox1}
                    // onClick={() => history.push("/profile")}
                    style={{ cursor: "pointer" }}
                    
                  >
                    <Avatar
                      src={
                        auth?.userData?.profilePic
                          ? auth?.userData?.profilePic
                          : "images/profileimage.png"
                      }
                    />
                  </Box>
                  <Box className={classes.mainTopBox1}>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={() => history.push("/profile")}>
                        Profile
                      </MenuItem>
                      {/* {auth?.userData?.permissions?.staticContentManagement === true && (
                        <> */}
                      <MenuItem
                        onClick={() => history.push("/term-and-condition")}
                      >
                        Terms and Conditions
                      </MenuItem>
                      <MenuItem onClick={() => history.push("/privacy-policy")}>
                        Privacy Policy
                      </MenuItem>
                      <MenuItem onClick={() => history.push("/Faq")}>
                        FAQ
                      </MenuItem>
                      {/* </>
                      )} */}
                    </Menu>
                  </Box>

                  {/* <Box
                  ml={2}
                  onClick={() => history.push("/profile")}
                  style={{ cursor: "pointer" }}
                >
                  <Avatar src="images/profileimage.png" />
                </Box> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default TopBar;

export function TopBarData() {
  const classes = useStyles();
  // const history = useHistory();
  const auth = useContext(AuthContext);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Hidden xsDown>
          <Box>
            <Typography variant="h5">NFT Marketplace</Typography>
            <Typography variant="body1" style={{ color: "#ffffff9c" }}>
              example@gmail.com
            </Typography>
          </Box>
        </Hidden>
        &nbsp; &nbsp;
        <Avatar
          src={
            auth?.userData?.profilePic
              ? `${auth?.userData?.profilePic}`
              : "https://picsum.photos/533/357"
          }
          className={classes.avatar}
          // onClick={() => history.push("/admin-profile")}
        />
      </Box>
    </>
  );
}
