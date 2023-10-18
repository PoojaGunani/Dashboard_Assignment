import _ from "lodash";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import typography from "./typography";

const baseOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiAppBar: {
      positionFixed: {
        // background: "transparent !important",
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: "auto",
      },
    },
    MuiPickersModal: {
      dialogRoot: {
        padding: "0px",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "460px",
      },
    },
    MuiFormControl: {
      root: {
        // width: "100%",
      },
    },
    paperWidthSm: {
      maxWidth: "600px",
      padding: "20px 30px",
    },
    MuiCollapse: {
      wrapperInner: {
        paddingLeft: "44px",
      },
    },

    MuiInputAdornment: {
      positionStart: {
        paddingLeft: "14px",
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "none",
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: "0px !important",
        // color: "rgb(255, 125, 104) !important",
      },
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "transparent",
      },
    },
    MuiPickerDTToolbar: { toolbar: { borderRadius: "8px 8px 0px 0px" } },

    MuiButton: {
      root: {
        "&.Mui-disabled": {
          color: "rgb(112, 107, 107)",
        },
      },
      contained: {
        fontSize: "14px !important",
        fontWeight: "300",
        borderRadius: "5px",
        whiteSpace: "pre",
        padding: "8px 32px",
      },
      outlined: {
        fontSize: "14px !important",
        fontWeight: "300",
        borderRadius: "50px",
        whiteSpace: "pre",
        padding: "10px 20px",
      },
      outlinedSizeLarge: {
        padding: "7px 35px",
      },
      containedSizeLarge: {},
    },
  },
};

const themesOptions = [
  {
    name: "DARK",
    overrides: {
      MuiMenu: {
        list: {
          outline: "0",
          background: "#2e1921",
        },
      },

      MuiDialog: {
        paper: {
          padding: "20px 30px",
          background: "rgba(255, 255, 255, 0.06)",
          boxShadow: "0px 10.4469px 26.1172px rgba(0, 0, 0, 0.03)",
          borderRadius: "0px",
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(75px)",
            zIndex: "-1",
          },
          "@media(max-width:767px)": {
            padding: "10px",
          },
        },
      },
      MuiSwitch: {
        switchBase: {
          color: "#2F8BBE !important",
        },
        track: {
          backgroundColor: "#E5E5E5",
          opacity: "1",
        },
      },
      MuiPickersDay: {
        day: {
          color: "#fff",
        },
      },
      MuiPickersCalendarHeader: {
        dayLabel: { color: "#fff" },
      },
      MuiTableHead: {
        root: {
          background: "transparent",
          borderTop: "1px solid #636262",
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      MuiTableBody: {
        root: {
          background:
            "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        },
      },
      MuiTableRow: {
        root: {
          borderBottom: "1px solid #636262",
          "&:hover": {
            backgroundColor: "#ffffff14",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
      MuiTableCell: {
        head: {
          padding: "8px 16px",
          fontWeight: "400",
          whiteSpace: 'pre'
        },
        body: {
          whiteSpace: "pre"

        },
      },
      MuiInputBase: {
        input: {
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "16px",
          fontFamily: "Lexend",
        },
        root: {
          color: "#52565c",
          cursor: "text",
          display: "inline-flex",
          position: "relative",
          fontSize: "12px",

          boxSizing: "border-box",
          alignItems: "center",
          fontFamily: "'Saira', sans-serif !important",
          fontWeight: "300",
          lineHeight: "1.1876em",
          borderRadius: "50px",
          height: "50px",

          borderRadius: "0px !important",
          // height: "50px !important",
        },
      },
      MuiSelect: {
        icon: {
          color: "#fff",
        },
      },

      MuiButton: {
        containedPrimary: {
          // background:
          //   "linear-gradient(102.31deg, #0D9C7A -5.05%, #0D9C7A 87.59%)",
          background:
          "linear-gradient(102.31deg, #0D9C7A -5.05%, #0D9C7A 87.59%)",
          borderRadius: "10px",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          height: "45px",
          lineHeight: " 21px",
          // padding: "10px 39px",
          padding: "24px 50px",
          backgroundColor: "transparent",
          boxShadow: "inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            color: "#ffffff",
            background: "transparent",
            border: "2px solid #0D9C7A",
            backgroundColor: "transparent",
          },
        },
        containedSecondary: {
          borderRadius: "10px",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          height: "45px",
          lineHeight: " 21px",
          padding: "10px 39px",

          background: "transparent",
          boxShadow:
            "0 1px 0 0 #ad5165, 0 -1px 0 0 #7e46a1, 1px 0 0 0 #f5673f, -1px 0 0 0 #f5673f, 1px -1px 0 0 #f5673f, -1px 1px 0 0 #f5673f, 1px 1px 0 0 #f5673f, -1px -1px 0 0 #f5673f",
          backgroundColor: "transparent",
          "&:hover": {
            color: "#fff",
            background:
              "linear-gradient(359.12deg, #FF6600 9.14%, #3333FF 110.76%)",
          },
        },
        contained: {
          "&.Mui-disabled": {
            backgroundColor: "rgba(255, 255, 255, 0.025) ",
            color: "#ffffff45",
          },
        },
      },
      MuiPaginationItem: {
        root: {
          color: "#ffffff",
        },
      },
      MuiPaper: {
        root: {
          color: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        },
        elevation2: {
          padding: "40px",
          zIndex: "999",
          overflow: "hidden",
          position: "relative",
          background: "rgba(255, 255, 255, 0.04)",
          boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.03)",
          borderRadius: "0px !important",
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
          "@media(max-width:767px)": {
            padding: "20px !important",
          },
        },
      },
      MuiIconButton: {
        root: {
          color: "#fff",
        },
      },
      MuiOutlinedInput: {
        inputMultiline: {
          padding: "1px !important",
        },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            boxShadow: "none",
          },
        },
        notchedOutline: {
          background: "rgba(255, 255, 255, 0.025)",
          borderColor: "rgba(255, 255, 255, 0.025)",
        },
        input: {
          borderRadius: "10px",
          color: "rgba(255, 255, 255, 0.6)",
          padding: "16px 14px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "rgba(255, 255, 255, 0.6)",
          },
          "&:-internal-autofill-selected": {
            color: "rgba(255, 255, 255, 0.6)",
          },
        },
      },
    },
    typography: {
      fontFamily: "'K2D', sans-serif",
    },
    palette: {
      background: {
        card: "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        tab: "rgba(255, 255, 255, 0.07)",
        header: "#2A2A2B",
        default:
          "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        price: "#2B2B2B",
        pricename: "#474747",
        blackCard: "#1E1E1E",
        tablehead: "#1B1A1A",
      },
      primary: {
        main: "#ffffff", //black
      },
      secondary: {
        main: "#D9D9D9", //white
        icons: "#FFFFFF", //white
      },
      text: {
        primary: "#FFFFFF", //white
        secondary: "rgba(255, 255, 255, 0.6)", //white
        gray: " #A9A9A9",
        graydark: "#A7A7A7",
        white: "#fff",
      },
    },
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
