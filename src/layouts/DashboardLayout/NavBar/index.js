import React, { useEffect, useState, useContext } from "react";
import { useLocation, matchPath, useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaBarcode, FaBars, FaSquarespace } from "react-icons/fa";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PropTypes from "prop-types";
import EcoIcon from '@material-ui/icons/Eco';
import PersonIcon from '@material-ui/icons/Person';
import MoneyIcon from '@material-ui/icons/Money';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import HelpIcon from '@material-ui/icons/Help';
import {
  Box,
  Drawer,
  Hidden,
  List,
  Button,
  ListSubheader,
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@material-ui/core";
import { AiFillDashboard, AiFillHome, AiOutlineFileDone } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import NavItem from "./NavItem";
import { MdHistory } from "react-icons/md";
import { RiWallet3Line, RiSettingsLine } from "react-icons/ri";
import { AuthContext } from "src/context/Auth";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Avatar,

  Menu,
  MenuItem,
  ListItemText,
} from "@material-ui/core";

const sections = [
  {
    items: [
      // {
      //   title: "Home",
      //   modules: "",
      //   icon: AiFillHome,
      //   href: "/",
      // },
      {
        title: "Dashboard",
        modules: "dashboard",
        icon: AiFillDashboard,
        href: "/dashboard",
      },
      // {
      //   title: "Exchanges",
      //   modules: "exchange",
      //   icon: FaSquarespace,
      //   img: <img src="images/dash1.png"/>,
      //   href: "/exchange-first",
      // },
      // {
      //   title: "Pair Details",
      //   modules: "",
      //   icon: CgDetailsMore,
      //   img: <img src="images/dash1.png"/>,
      //   href: "/pair-details",
      // },
      {
        title: "Product",
        modules: "arbitrage",
        icon: EcoIcon,
        // img: "./../../../../public/images/arb.png",

        items: [
          {
            title: "Direct",
            href: "/direct",
          },
          {
            title: "Intra Exchange",
            href: "/intra",
          },

        ],
      },
      {
        title: "Customers",
        modules: "arbitrage",
        icon: PersonIcon,
        // img: "images/dash2.png",

        items: [
          {
            title: "Triangular",
            href: "/triangular",
          },

          {
            title: "Martingale",
            href: "/select-coin",
          },

        ],
      },
      {
        title: "Income",
        modules: "arbitrage",
        icon: MoneyIcon,
        // img: "images/dash2.png",

        items: [
          {
            title: "Triangular",
            href: "/triangular",
          },

          {
            title: "Martingale",
            href: "/select-coin",
          },

        ],
      },
      {
        title: "Promote",
        modules: "arbitrage",
        icon: ShuffleIcon,
        // img: "images/dash2.png",

        items: [
          {
            title: "Triangular",
            href: "/triangular",
          },

          {
            title: "Martingale",
            href: "/select-coin",
          },

        ],
      },
      {
        title: "Help",
        modules: "arbitrage",
        icon: HelpIcon,
        // img: "images/dash2.png",

        items: [
          {
            title: "Triangular",
            href: "/triangular",
          },

          {
            title: "Martingale",
            href: "/select-coin",
          },

        ],
      },

    ],
  },
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }
  return acc;
}
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 290,
    // background:
    //   "white",
  },
  desktopDrawer: {
    top: "76px",
    width: "256px",
    height: "calc(100% - 115px)",
    margin: "5px 10px 10px 15px",
    // background: "white",
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.03)",
    borderRadius: "0px",
    marginTop: "21px",
    marginLeft: "13px",
    "&::before": {
      position: "absolute",
      // backdropFilter: "blur(10px)",
      content: "'' ",
      height: "100%",
      width: "100%",
      top: "0",
      left: "0",
      zIndex: "-1",
    },
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "45px",
    paddingLeft: "17px",
    borderRadius: "12px",
    marginTop: "-30px",
    "&:hover": {
      color: "#F5C843",
    },
    "& svg": {
      color: "#F5C843",
      fontSize: "20px",
    },
  },
  btnBox: {
    position: "relative",
    left: "30%",
    bottom: "-250px",
  },
  logoutButton: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    position: "absolute",
    bottom: "19px",
    left: "9px",
    // background: "transparent",
    background: "rgba(255, 255, 255, 0.20)",

    fontWeight: "400",
    fontSize: "13px",
  },
  sideMenuBox: {
    "& .MuiCollapse-wrapperInner": {
      marginLeft: "45px",
    },
  },
  nameDiv: {
    width: "100%",
    display: "flex",
  justifyContent: "space-between"  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  let permission = auth.userData.permissions;
  let connectedExchange = auth.userData?.connectedExchange?.length;
  const location = useLocation();
  const history = useHistory();
  // const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isLogout, setIsLogout] = useState(false);

  const confirmHandler = () => {
    history.push("/");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location?.pathname]);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const content = (
    <Box height="100%" display="flex" flexDirection="column" >
      <PerfectScrollbar options={{ suppressScrollX: true }} style={{backgroundColor:"#181C32"}}>
        <Box pt={2} pb={2}>
          <Box className="sideMenuBox">
          <div style={{    textAlign: "center",
    marginBottom: "25px",}}>
          <Typography variant="h4" style={{color: "white"}}>Dashboard</Typography>
          </div>
            {sections.map((section, index) => (
              <List
                key={index}
                subheader={<ListSubheader>{section.title}</ListSubheader>}
                disablePadding
              >
                {renderNavItems({
                  items: section.items,
                  pathname: location.pathname,
                })}
              </List>
            ))}
          </Box>
        </Box>
    
        <div className={classes.lastDiv}>


        </div>
        <div style={{ display: "flex", alignItems: "center", paddingBottom:"12px", paddingLeft: "12px", paddingRight: "12px"}}>
          <Avatar alt="Profile Picture" src="images/profileimage.png" />
          <div style={{ marginLeft: 10 }} className={classes.nameDiv}>
            <div>
              <div>
                Evano
              </div>
              <div>Project Manager</div>
            </div>
       
            <ExpandMoreIcon />

          </div>
        </div>

      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <Box p={2}>{content}</Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
