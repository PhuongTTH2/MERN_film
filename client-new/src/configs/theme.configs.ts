import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }: any) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#ff0000",
        // contrastText: "#ffffff",
       
      },
      // secondary: {
      //   main: "#f44336",
      //   contrastText: "#ffffff"
      // },
      background: {
        default: "#ff0000",
        paper: "#131313"
      },
      error: {
        main:  "#ff0000",         // custom button color (red)
      },
    } : {
      primary: {
        main: "#fff",
        
      },
      // secondary: {
      //   main: "#f44336"
      // },
      background: {
        default: "#ff0000",
        paper: "#131313"
      },
      error: {
        main:  "#ff0000",         // custom button color (red)
      },
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette,
        
      },
    
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;