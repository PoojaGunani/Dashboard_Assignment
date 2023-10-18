import {
  Box,
  Typography,
  makeStyles,
  Grid,
  FormControl,
  Select,
  Paper,
  MenuItem,
  InputLabel,
  TextField,
  InputAdornment,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import Pie from "./Piechart";
import React, { useContext } from "react";
import SettingsContext from "src/context/SettingsContext";
import Page from "src/component/Page";
import SearchIcon from "@material-ui/icons/Search";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CommentIcon from '@material-ui/icons/Comment';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ReactApexChart from 'react-apexcharts';

const useStyles = makeStyles((theme) => ({
  Titlediv: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  Searchdiv: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  SearchField: {
    background: "lightgray !important",
    borderRadius: "10px",
    height: "38px",
    "& .MuiIconButton-root ": {
      color: "gray"
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: "0px !important",
      height: "38px",
    },
    "& .MuiInputAdornment-positionStart": {
      paddingLeft: "0px !important",
      color: "gray !important"
    },
    "& .MuiOutlinedInput-input": {
      color: "#06060699 !important"
    }
  },
  searchField: {
    background: "white !important",
    height: "40px",
    borderRadius: "9px",
    "& .MuiIconButton-root ": {
      color: "lightgray"
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: "0px !important",
      height: "40px",
    },
    "& .MuiInputAdornment-positionStart": {
      paddingLeft: "0px !important",
      color: "gray !important"
    },
    "& .MuiOutlinedInput-input": {
      color: "#06060699 !important"
    }
  },
  gridItem: {
    background: "white"
  },
  divChart: {
    display: "flex",
    justifyContent: "space-between",
  },
  overText: {
    color: "black",
  },
  monthText: {
    color: "lightGray"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    background: "lightgray",
    borderRadius: "9px",
    height: "47px",
    "& .MuiInput-formControl": {
      marginTop: "6px !important"
    }
  },
  CustomerDiv: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  PieDiv: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  percentText: {
    color: "black",
    fontSize: "34px",
    textAlign: "center",
  },
  productName: {
    Width: "70% !important",
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: "black"
  },
  pieText: {
    position: "absolute",
    top: "227px",
    left: "138px",
    [theme.breakpoints.down("sm")]: {
      left: "300px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  producttext: {
    color: "black",
  },
  spanText: {
    fontSize: "12px"
  },
  typoTitle: {
    color: "black"
  },
  typodata: {
    color: "lightgray",
    fontSize: "12px",
  },


  typoNumber: {
    fontSize: "25px",
    color: "black"
  },
  imageDiv: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  typoText: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    gap: "2px"
  },
  iconDisplay: {
    width: "inherit",
    height: "50px",
  },
  dashboardBox: {
    position: "relative",
    zIndex: "999",
    "& .mainBox": {
      borderRadius: "10px !important",
      background: "white",

      padding: "30px",
      height: "426px",

      "& .apexcharts-canvas": {
        width: "100% !important",
      },
      "& .apexcharts-legend": {
        display: "none",
      },
      "& .apexcharts-toolbar": {
        display: "none !important",
      },
    },
    dataDiv: {
      display: "flex",
    },
    "& .countBox": {
      background: "rgba(255, 255, 255, 0.04)",
      borderRadius: "0px",
      padding: "30px 10px",
      transition: "0.5s",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    },
    "& .countBox1": {
      background: "white",
      borderRadius: "10px",
      padding: "30px 10px",
      transition: "0.5s",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    },

    "& .tabButtonBox": {
      background: theme.palette.background.tab,
      borderRadius: "5px",
      padding: "6px 25px",
      marginLeft: "10px",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        padding: "6px 15px",
      },
    },
    "& .tabActive": {
      // background: "linear-gradient(102.31deg, #2F8BBE -5.05%, #0D9C7A 87.59%)",
      borderRadius: "5px",
      padding: "6px 25px",
      color: "#fff !important",
      marginLeft: "10px",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        padding: "6px 15px",
      },
      "&:hover": {
        color: "#ffffff",
        background: "transparent",
        border: "2px solid #0D9C7A",
        backgroundColor: "transparent",
      },
    },
    "& .pieBox": {
      padding: "20px 0px 12px",
    },
    "& .piedata": {
      padding: "6px",
      borderRadius: "5px",
      [theme.breakpoints.down("xs")]: {
        padding: "5px",
      },
    },
    "& .filterBox": {
      position: "relative",
      background: "rgba(255, 255, 255, 0.04)",
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.03)",
      borderRadius: "0px",
      "& .MuiOutlinedInput-input": {
        color: "rgba(255, 255, 255, 0.6)",
      },
      "&::before": {
        position: "absolute",
        backdropFilter: "blur(10px)",
        content: "'' ",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "-1",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "7px 0px !important",
      },
    },
    "& .datepickerBox": {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.text.gray,
      },
      "& .buttonBox": {
        margin: "0px 14px",
        [theme.breakpoints.down("xs")]: {
          margin: "10px 0px",
        },
      },
    },
  },
  "& .apexcharts-series apexcharts-pie-series": {
    fill: "#8b3b91 !important"
  },

  filterMain: {
    backgroundColor: 'lightgray',
    color: '#000',
    padding: '0 10px',
    height: "40px",
    borderRadius: '5px !important',
    width:'110px',
  },
  menuItem: {
    background: '#FFF',
    color: '#000',

    "& .MuiMenu-list": {
      background: '#FFF !important',
      color: '#000 !important',
    },
  },
}));



const options = {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },

    }
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      }
    }
  }

};

const series = [{
  name: 'Inflation',
  data: [8.3, 5.1, 7.0, 10.1, 6.0, 8.6, 9.2, 4.3, 8.4, 7.8, 5.5, 6.2],
}];

const options1 = {
  series: [20, 43, 40],
  chart: {
    type: 'donut',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
  dataLabels: {
    enabled: false, // Set this to false to hide labels and values
  },
  legend: {
    show: false, // Set this to false to hide color descriptions
  },
  colors: ['#f04399', '#643be8', '#f1efff'],
};

const tableData = [
  { imageUrl: 'images/svg.jpeg', productName: 'Abstarct 3D', stock: "32 in stock", price: 45.99, sales: 20 },
  { imageUrl: 'images/svg.jpeg', productName: 'Sarphens Illustartions', stock: "32 in stock", price: 45.99, sales: 20 },

];



export default function DashdoardHome() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);
  const [age, setAge] = React.useState('');





  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Page title="Dashboard">
      <Box className={classes.dashboardBox}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={9}>
            <Typography variant="h3" color="black">
              Hello Shahrukh 👋,
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField className={classes.searchField}
              variant="outlined"
              fullWidth
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>


        </Grid>
        <Box mt={2.5}>

          <Grid container spacing={3}>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                className={
                  themeSeeting.settings.theme === "LIGHT"
                    ? "countBox"
                    : "countBox1"
                }
                align="left"
              >
                <div className={classes.dataDiv} style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                  <div style={{
                    borderRadius: "50%",
                    background: "#92be95",
                    width: "87px",
                    height: "76px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <MonetizationOnIcon className={classes.iconDisplay} />
                  </div>
                  <div className={classes.typoText}>
                    <Typography className={classes.typodata}> Earning</Typography>
                    <Typography className={classes.typoNumber}>$198k</Typography>
                    <Typography variant="h6" className={classes.typoTitle}>
                      <span className={classes.spanText} style={{ color: "green" }}>↑ 37.8% </span> this month
                    </Typography>
                  </div>

                </div>
                <Box mt={1}>
                  <Typography variant="body2" color="primary">

                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                className={
                  themeSeeting.settings.theme === "LIGHT"
                    ? "countBox"
                    : "countBox1"
                }
                align="left"
              >
                <div className={classes.dataDiv} style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                  <div style={{
                    borderRadius: "50%",
                    background: "rgb(162 140 215)",
                    width: "87px",
                    height: "76px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <CommentIcon className={classes.iconDisplay} />
                  </div>
                  <div className={classes.typoText}>
                    <Typography className={classes.typodata}> Orders</Typography>
                    <Typography className={classes.typoNumber}>$2.4k</Typography>
                    <Typography variant="h6" className={classes.typoTitle}>
                      <span className={classes.spanText} style={{ color: "red" }}>↓ 2% </span> this month
                    </Typography>
                  </div>

                </div>
                <Box mt={1}>
                  <Typography variant="body2" color="primary">

                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                className={
                  themeSeeting.settings.theme === "LIGHT"
                    ? "countBox"
                    : "countBox1"
                }
                align="left"
              >
                <div className={classes.dataDiv} style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                  <div style={{
                    borderRadius: "50%",
                    background: "rgb(166 191 242)",
                    width: "87px",
                    height: "76px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <WifiTetheringIcon className={classes.iconDisplay} />
                  </div>
                  <div className={classes.typoText}>
                    <Typography className={classes.typodata}> Balance</Typography>
                    <Typography className={classes.typoNumber}>$2.4k</Typography>
                    <Typography variant="h6" className={classes.typoTitle}>
                      <span className={classes.spanText} style={{ color: "red" }}>↓ 2% </span> this month
                    </Typography>
                  </div>

                </div>
                <Box mt={1}>
                  <Typography variant="body2" color="primary">

                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                className={
                  themeSeeting.settings.theme === "LIGHT"
                    ? "countBox"
                    : "countBox1"
                }
                align="left"
              >
                <div className={classes.dataDiv} style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                  <div style={{
                    borderRadius: "50%",
                    background: "rgb(210 126 126)",
                    width: "87px",
                    height: "76px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <ShoppingBasketIcon className={classes.iconDisplay} />
                  </div>
                  <div className={classes.typoText}>
                    <Typography className={classes.typodata}> Total Sales</Typography>
                    <Typography className={classes.typoNumber}>$89k</Typography>
                    <Typography variant="h6" className={classes.typoTitle}>
                      <span className={classes.spanText} style={{ color: "green" }}>↑ 11% </span> this month
                    </Typography>
                  </div>

                </div>
                <Box mt={1}>
                  <Typography variant="body2" color="primary">

                  </Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>

        </Box>

        <Box mt={2.5}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={12} md={8} lg={8} >
              <Paper elevation={2} className="mainBox" >
                <div className={classes.divChart}>
                  <div className={classes.textDiv}>
                    <Typography variant="h5" className={classes.overText}>Overview</Typography>
                    <Typography className={classes.monthText}>Monthly Earning</Typography>
                  </div>
                  <Select
                    value={age || "quaterly"}
                    onChange={handleChange}
                    defaultValue='quaterly'
                    className={classes.filterMain}
                    disableUnderline='true'
                  >
                    <MenuItem className={classes.menuItem} value="quaterly">Quaterly</MenuItem>
                    <MenuItem className={classes.menuItem} value={10}>Ten</MenuItem>
                    <MenuItem className={classes.menuItem} value={20}>Twenty</MenuItem>
                    <MenuItem className={classes.menuItem} value={30}>Thirty</MenuItem>
                  </Select>
                </div>
                <ReactApexChart options={options} series={series} type="bar" height={350} />



              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}  >
              <Box className={classes.gridItem} style={{ borderRadius: "10px" }}>
                <Paper elevation={2} className="mainBox" >
                  <Box
                    sx={{
                      textAlign: "start",
                    }}
                  >
                    <div className={classes.CustomerDiv}>
                      <Typography variant="h5" className={classes.overText}>Customers</Typography>
                      <Typography className={classes.monthText}>Customers that buy products</Typography>
                    </div>
                    <Pie />
                  </Box>
                </Paper>
              </Box>

            </Grid>


          </Grid>
        </Box>



        <Box mt={2.5}>
          <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Paper elevation={2} className="mainBox" style={{ height: "max-content" }} >
                <div className={classes.Titlediv} >
                  <div>
                    <Typography variant="h4" className={classes.producttext}>Product Sell</Typography>
                  </div>
                  <div className={classes.Searchdiv}>
                    <TextField className={classes.SearchField}
                      variant="outlined"
                      fullWidth
                      placeholder="Search"

                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                     <Select
                    value={age || "last 30 days"}
                    onChange={handleChange}
                    defaultValue='last 30 days'
                    className={classes.filterMain}
                    disableUnderline='true'
                    style={{width: "160px"}}
                  >
                    <MenuItem className={classes.menuItem} value="last 30 days">Last 30 days</MenuItem>
                    <MenuItem className={classes.menuItem} value={10}>Ten</MenuItem>
                    <MenuItem className={classes.menuItem} value={20}>Twenty</MenuItem>
                    <MenuItem className={classes.menuItem} value={30}>Thirty</MenuItem>
                  </Select>
                  </div>
                </div>


                <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.productName}>Product Name</TableCell>
                        <TableCell style={{ color: "black" }}>Stock</TableCell>
                        <TableCell style={{ color: "black" }}>Price</TableCell>
                        <TableCell style={{ color: "black" }}>Total Sales</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody style={{ border: "none" }}>
                      {tableData.map((row, index) => (
                        <TableRow key={index} style={{ border: "none" }}>
                          <TableCell style={{ color: "black", width: "70%" }}>
                            <div className={classes.imageDiv}>
                              <img src={row.imageUrl} alt={row.productName} width="50" height="50" />
                              <div>
                                {row.productName}
                                <Typography style={{ color: "gray" }}> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form </Typography>
                              </div>
                            </div>
                          </TableCell>

                          <TableCell style={{ color: "black" }}>{row.stock}</TableCell>
                          <TableCell style={{ color: "black" }}>${row.price.toFixed(2)}</TableCell>
                          <TableCell style={{ color: "black" }}>{row.sales}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                );



              </Paper>
            </Grid>




          </Grid>
        </Box>
      </Box>
    </Page>
  );
}
