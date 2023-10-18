import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
  Checkbox,
  IconButton,
  InputAdornment,
  Paper,
  FormHelperText,
} from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";
import apiConfigs from "src/apiConfig/ApiConfig";
import { AuthContext } from "src/context/Auth";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import ScreenLoader from "src/component/ScreenLoader";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginmainBox: {
    height: "100%",
    position: "relative",
    zIndex: "888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
  },
  iconsclass1: {
    color: "#ffffff",
    fontSize: "20px",
  },
  loginBox: {
    height: "initail",

    margin: "15px auto",
    maxWidth: " 95%",
    width: "600px",
    maxHeight: "100%",
    "& .mainBox": {
      padding: "50px 40px 50px",
      [theme.breakpoints.down("xs")]: {
        padding: "20px 10px 50px",
      },
      "& h2": {
        textAlign: "center",
        paddingBottom: "50px",
      },
    },
    "& .displaySpacebetween": {
      padding: "15px 0px",
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(
    window.localStorage.getItem("email") ? true : false
  );
  const [errMess, seterrMess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);

  const handleChangeCheck = (event) => {
    setChecked(!checked);
  };

  const formInitialSchema = {
    email: window.localStorage.getItem("email")
      ? window.localStorage.getItem("email")
      : "",
    password: window.localStorage.getItem("password")
      ? window.localStorage.getItem("password")
      : "",
    // password: "",
  };
  const formValidationSchema = yup.object().shape({
    email: yup.string().required("Email address is required."),
    password: yup.string().required("Password is required."),
  });
  const handleFormSubmit = async (values) => {
    try {
      if (checked) {
        window.localStorage.setItem("email", values.email);
        window.localStorage.setItem("password", values.password);
      }

      console.log(values);
      setIsLoading(true);
      const respo = await axios({
        method: "POST",
        url: apiConfigs.login,
        data: {
          email: values.email,
          password: values.password,
        },
      });
      if (respo.data.responseCode === 200) {
        if (!checked) {
          window.localStorage.removeItem("email");
          window.localStorage.removeItem("password");
        }
        setIsLoading(false);
        // window.sessionStorage.setItem("token", respo.data.result.token);
        seterrMess(
          respo?.data?.result?.status === "BLOCK"
            ? toast.error("You have been blocked by admin.")
            : ""
        );
        if (respo.data.result.status !== "BLOCK") {
          window.sessionStorage.setItem("token", respo.data.result.token);
          window.localStorage.setItem("token", respo.data.result.token);
          toast.success(respo.data.responseMessage);
          auth.userLogIn(true, respo?.data?.result?.token);
          history.push("/dashboard");
          auth.getUserProfileDatahandler(
            window.sessionStorage.getItem("token")
          );
        }
      }
      if (respo.data.responseCode === 404) {
        toast.error(respo?.data?.responseMessage);
      }

      setIsLoading(false);
    } catch (err) {
      toast.error(err?.response?.data?.responseMessage);
      console.error(err.res);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      window.sessionStorage.removeItem("token");
    }
  }, [window.sessionStorage.getItem("token")]);

  return (
    <Box className={classes.loginmainBox}>
      <Box className={classes.loginBox}>
        <Paper className="mainBox" elevation={2}>
          <Typography variant="h2" color="primary">
            Login
          </Typography>

          <Formik
            initialValues={formInitialSchema}
            initialStatus={{
              success: false,
              successMsg: "",
            }}
            validationSchema={formValidationSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values,
              setFieldValue,
            }) => (
              <Form>
                <Box>
                  <Box>
                    <Typography variant="body2" color="secondary">
                      Email
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
                    className="webkitcss"
                    placeholder="Please enter your email address."
                    name="email"
                    value={values.email}
                    error={Boolean(touched.email && errors.email)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // disabled={isLoading}
                    disabled={isLoading}
                  />
                  <FormHelperText error className={classes.helperText}>
                    {touched.email && errors.email}
                  </FormHelperText>
                </Box>
                <Box mt={3}>
                  <Box>
                    <Typography variant="body2">Password</Typography>
                  </Box>
                  <TextField
                    fullWidth
                    className="webkitcss"
                    placeholder="Please enter your password."
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={values.password}
                    error={Boolean(touched.password && errors.password)}
                    onBlur={handleBlur}
                    disabled={isLoading}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            <Box>
                              {showPassword ? (
                                <HiEye className={classes.iconsclass1} />
                              ) : (
                                <HiEyeOff className={classes.iconsclass1} />
                              )}
                            </Box>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormHelperText error className={classes.helperText}>
                    {touched.password && errors.password}
                  </FormHelperText>
                </Box>
                <Box className="displaySpacebetween">
                  <Box className="displayStart" style={{ marginLeft: "-10px" }}>
                    <Checkbox checked={checked} onChange={handleChangeCheck} />
                    <Typography variant="body2" color="secondary">
                      Remember me
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    style={{ color: "#ffffff", cursor: "pointer" }}
                    onClick={() => history.push("/forget")}
                  >
                    Forgot Password?
                  </Typography>
                </Box>
                <Box mt={2} align="center">
                  <Button variant="contained" color="primary" type="submit">
                    Login
                  </Button>
                </Box>
                <Box
                  mt={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <Typography style={{ fontSize: "16px" }}>
                    Don’t have an account?{" "}
                    <Link
                      to="/register"
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
        {isLoading && <ScreenLoader />}
      </Box>
    </Box>
  );
}
