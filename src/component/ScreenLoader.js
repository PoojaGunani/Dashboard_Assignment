import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Loader from "react-js-loader";


const useStyles = makeStyles(() => ({
    mainBox: {
        display: "flex", justifyContent: "center",
        height: "100%",
        width: "100%",
        zIndex: "999",
        position: "absolute",
        "top": "0",
        "left": "0",
        "&::before": {
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "content": "' '",
            "position": "absolute",
            // "background": "#0000002e",
            "backdropFilter": "blur(3px)"
        }


    }
}))
export default function ScreenLoader() {
    const classes = useStyles();
    return (
        <Box className={classes.mainBox} >
            <Loader
                type="spinner-circle"
                bgColor={"#fff"}
                // title={"Loading..."}
                color={"#fff"}
                size={100}
            />
        </Box>
    );
}
