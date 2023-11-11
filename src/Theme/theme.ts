import { createTheme, responsiveFontSizes } from "@mui/material";

let Theme= createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#f86d6d',
        },
        secondary: {
          main: '#f89c6d',
        },
      },
      typography: {
        fontFamily: 'Karla',
        fontWeightLight: 500,
        fontWeightRegular: 600,
        fontWeightMedium: 700,
        fontWeightBold: 800,
      },
      shape: {
        borderRadius: 15,
      },
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderColor:'#f86d6d',
              width: '100%',
              maxWidth: 300,
              margin: '0 auto',
              '@media (max-width: 576px)': {
                maxWidth: 250,
              },
              '@media (max-width: 375px)': {
                maxWidth: 200,
              }
            }
          }
        }
      },
})

Theme= responsiveFontSizes(Theme)
export default Theme