import React, { useContext, useState } from "react";
import {
  Typography,
  Dialog,
  DialogContent,
  makeStyles,
  FormControl,
  Button,
  Box,
  Slide,
  Paper,
  Grid,
  IconButton,
} from "@material-ui/core";
import OTPInput from "otp-input-react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "src/context/Auth";
import { Formik, Form } from "formik";
import axios from "axios";
import moment from "moment";
import Apiconfigs from "src/apiConfig/ApiConfig";
import { toast } from "react-toastify";
import ButtonCircularProgress from "./ButtonCircularProgress";
import { BsArrowUpRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { handleNegativeValue } from "src/utils";
const useStyles = makeStyles((theme) => ({
  chamgepassBox: {
    height: "100%",
    position: "relative",
    zIndex: "999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
  },
  forgetBox: {
    height: "initail",

    margin: "15px auto",
    maxWidth: " 95%",
    width: "487px",
    maxHeight: "100%",
    "& .mainBox": {
      padding: "50px 40px 100px",
      [theme.breakpoints.down("xs")]: {
        padding: "20px 10px 50px",
      },
      "& h2": {
        textAlign: "center",
      },
    },
    // "& .buttonBox": {
    //   padding: "70px 0px 0px",
    // },
    "& .textbox": {
      padding: "20px 0px 50px",
    },
  },
  otpFormControl: {
    "& input": {
      color: theme.palette.primary.main,
      width: "60px !important",
      height: "49px !important",
      marginRight: "10px !important",
      border: "0px",
      background: theme.palette.background.card,
      // boxShadow: "0px 0px 53px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      "@media(max-width:460px)": {
        width: "41px !important",
        height: "41px !important",
      },
      "@media(max-width:380px)": {
        width: "31px !important",
        height: "31px !important",
      },
    },
  },
}));
export default function VerifyMoadal({ open, setOpen, emails, openData }) {
  const history = useHistory();
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const [OTP, setOTP] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isloading, setLoader] = useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const formInitialSchema = {
    otp: "",
    email: "",
  };
  const onSubmitForm = async (values) => {
    try {
      setIsLoading(true);
      const res = await axios({
        url: Apiconfigs.verifyOTP,
        method: "POST",
        data: {
          email: openData.email,
          otp: OTP,
        },
      });

      if (res.data.responseCode === 200) {
        toast.success(res.data.responseMessage);

        auth.userLogIn(true, res.data.result.token);
        history.push("/dashboard");
        // history.push({
        //   pathname: "/reset-password",
        //   state: { data: res?.data?.result?.token },
        // });
        setIsLoading(false);
      } else {
        toast.warn(res.data.responseMessage);
      }
    } catch (error) {
      if (error.response) {
        console.log(error);
        toast.error(error.response.data.responseMessage);
      } else {
        toast.error(error.responseMessage);
      }
      setIsLoading(false);
    }
  };
  const resendOtpSubmit = async (values) => {
    try {
      const res = await axios({
        url: Apiconfigs.resendOTP,
        method: "PUT",
        data: {
          email: openData.email,
        },
      });
      if (res.data.statusCode === 200) {
        toast.success(res.data.responseMessage);

        auth.setEndtime(moment().add(3, "m").unix());
      } else {
        toast.success(res.data.responseMessage);
      }
    } catch (error) {
      if (error.response) {
        console.log(error);
        toast.error(error.response.data.responseMessage);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogContent>
        <Box style={{ position: "absolute", right: "0px", top: "0" }}>
          <IconButton onClick={() => setOpen(false)}>
            <IoClose />
          </IconButton>
        </Box>
        <Box className={classes.chamgepassBox}>
          <Box className={classes.forgetBox}>
            <Typography
              variant="h2"
              color="primary"
              style={{ textAlign: "center" }}
            >
              Verification code
            </Typography>
            <Box className="textbox" align="center">
              <Typography variant="body2" color="secondary">
                A 4- digit OTP has been sent to your registered email.
              </Typography>
            </Box>
            <Formik initialValues={formInitialSchema} onSubmit={onSubmitForm}>
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
                    <FormControl fullWidth className={classes.otpFormControl}>
                      <OTPInput
                        value={OTP}
                        inputVariant="standard"
                        autoComplete="off"
                        onChange={setOTP}
                        style={{ display: "flex", justifyContent: "center" }}
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        secure
                        error={Boolean(touched.otp && errors.otp)}
                        onBlur={handleBlur}
                        onKeyPress={(event) => {
                          if (
                            event?.key === "-" ||
                            event?.key === "+" ||
                            event?.key === "*" ||
                            event?.key === "/"
                          ) {
                            event.preventDefault();
                          }
                        }}
                        onKeyDown={(event) => handleNegativeValue(event)}
                      />
                    </FormControl>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box
                          className="displaySpacebetween"
                          style={{ padding: "30px 19px" }}
                        >
                          <Box className={classes.timerbox}>
                            <Typography className={classes.timertypo}>
                              {auth?.timeLeft &&
                              auth?.timeLeft?.minutes >= 0 &&
                              auth?.timeLeft?.seconds >= 0 ? (
                                "OTP will expire in"
                              ) : (
                                <span style={{ color: "#FF6600" }}>
                                  If you don't receive any OTP?
                                </span>
                              )}
                            </Typography>
                          </Box>
                          {auth?.timeLeft &&
                          auth?.timeLeft?.minutes >= 0 &&
                          auth?.timeLeft?.seconds >= 0 ? (
                            <Box className={classes.registerLink1}>
                              <Typography
                                variant="body2"
                                disabled={isLoading || isLoading}
                                className={classes.timertypo}
                                style={{
                                  color: "#FF6600",
                                  fontWeight: "500",
                                }}
                              >
                                {auth?.timeLeft?.minutes}:{" "}
                                {auth?.timeLeft?.seconds}
                              </Typography>
                            </Box>
                          ) : (
                            <Box
                              onClick={() => {
                                resendOtpSubmit();
                                auth.setEndtime(moment().add(3, "m").unix());
                              }}
                              style={{ cursor: "pointer" }}
                              variant="contained"
                              color="primary"
                              className={classes.registerLink}
                              disabled={isLoading || isLoading}
                            >
                              <Typography
                                variant="body2"
                                style={{
                                  color: "#FF6600",
                                  fontWeight: "500",
                                }}
                              >
                                {" "}
                                Resend OTP
                              </Typography>
                              {isLoading && <ButtonCircularProgress />}
                            </Box>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box className="buttonBox">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                      disabled={isLoading}
                    >
                      Submit
                      {isLoading && <ButtonCircularProgress />}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
            {/* </Paper> */}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
