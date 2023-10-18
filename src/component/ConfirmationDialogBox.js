import React from "react";
import {
  Typography,
  Dialog,
  DialogContent,
  Button,
  Box,
} from "@material-ui/core";

import ButtonCircularProgress from "./ButtonCircularProgress";

export default function ConfirmationDialogBox({
  title,
  desc,
  IsLoading,
  open,
  handleClose,
  logoutHandler,
  actionHandlerAPI,
  studentIdd,
  studentId,
  modaltype,
  modaltype1,
  instituteIdd,
  setReason,
  reason,
  status,
}) {


  return (
    <div>
      {title === "LOGOUT" ? (
        <Dialog
          open={open}
          onClose={() => {
            if (!IsLoading) {
              handleClose();
            }
          }}
          // TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="xs"
        >
          <DialogContent>
            <Box align="center">
              <Typography variant="h2" color="primary">
                {title}
              </Typography>
            </Box>
            <Box align="center" my={3}>
              <Typography variant="h5" color="primary">
                {desc}
              </Typography>
            </Box>
            <Box my={3} align="center">
              <Button
                disabled={IsLoading}
                variant="contained"
                // className="transparentbutton"
                color="primary"
                onClick={handleClose}
                style={{ marginRight: "8px",background: "#636363" }}
              >
                Cancel
              </Button>
              <Button
                disabled={IsLoading}
                variant="contained"
                color="primary"
                onClick={logoutHandler}
                style={{ marginleft: "8px" }}
              >
                Confirm {IsLoading && <ButtonCircularProgress />}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={() => {
            if (!IsLoading) {
              handleClose();
            }
          }}
          // TransitionComponent={Transition}
          // keepMounted
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="xs"
        >
          <DialogContent>
            <Box align="center" my={3}>
              <Typography variant="h3">{title}</Typography>
            </Box>
            <Box align="center" my={3}>
              <Typography variant="h5">{desc}</Typography>
            </Box>
            <Box my={3} align="center">
              <Button
                disabled={IsLoading}
                variant="contained"
                className="transparentbutton"
                color="primary"
                onClick={handleClose}
                style={{ marginRight: "8px",background: "#636363" }}
              >
                Cancel
              </Button>
              <Button
                disabled={IsLoading}
                variant="contained"
                color="primary"
                onClick={actionHandlerAPI}
                style={{ marginleft: "8px" }}
              >
                {IsLoading ? <ButtonCircularProgress /> : "Confirm"}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
