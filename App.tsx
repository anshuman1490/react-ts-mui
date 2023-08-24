import * as React from 'react';
import './style.css';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import BasicCard from './BasicCard';
import Select from './Select';
import Modal from './Modal';
import Dialog from './Dialog';
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#0E6BF1',
      dark: '#0B55C0',
      light: '#E2EDFD',
    },
    secondary: {
      main: '#232830',
      dark: '#0B111A',
      light: '#F2F2F2',
    },
    error: {
      main: '#E5415E',
      dark: '#C91B3A',
      light: '#EF8D9E',
    },
    warning: {
      main: '#F2AE24',
      dark: '#BF8000',
      light: '#F7CE7B',
    },
    info: {
      main: '#0E6BF1',
      dark: '#0B55C0',
      light: '#B2D0FB',
    },
    success: {
      main: '#51C071',
      dark: '#38854D',
      light: '#85D29B',
    },
    text: {
      primary: '#232830',
      secondary: 'rgba(35,40,48,0.6)',
      disabled: 'rgba(35,40,48,0.4)',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 96,
      lineHeight: '116.7%',
      fontFamily: 'Hellix',
      letterSpacing: -1.5,
    },
    h2: {
      fontWeight: 500,
      fontSize: 60,
      fontFamily: 'Hellix',
      lineHeight: '120%',
      letterSpacing: -0.5,
    },
    h3: {
      fontWeight: 600,
      fontSize: 32,
      lineHeight: '116.7%',
      fontFamily: 'Hellix',
    },
    h4: {
      fontWeight: 600,
      fontSize: 24,
      fontFamily: 'Hellix',
      lineHeight: '123.5%',
      letterSpacing: 0.25,
    },
    h5: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: '133.4%',
      fontFamily: 'Hellix',
    },
    h6: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '160%',
      letterSpacing: 0.15,
      fontFamily: 'Hellix',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '175%',
      letterSpacing: 0.15,
      fontFamily: 'Arial',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '157%',
      letterSpacing: 0.1,
      fontFamily: 'Arial',
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '150%',
      letterSpacing: 0.15,
      fontFamily: 'Arial',
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '143%',
      letterSpacing: 0.17,
      fontFamily: 'Arial',
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '166%',
      letterSpacing: 0.4,
      fontFamily: 'Arial',
    },
    overline: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '266%',
      letterSpacing: 1,
      fontFamily: 'Arial',
    },
    button: {
      fontWeight: 700,
      fontFamily: 'Arial',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSizeMedium: {
          borderRadius: '16px',
          fontSize: '14px',
          letterSpacing: '0.4px',
          lineHeight: '171%',
        },
        containedSizeLarge: {
          borderRadius: '20px',
          fontSize: '15px',
          letterSpacing: '0.46px',
          lineHeight: '186%',
        },
        containedSizeSmall: {
          borderRadius: '12px',
          fontSize: '13px',
          letterSpacing: '0.46px',
          lineHeight: '183%',
        },
        outlinedSizeMedium: {
          borderRadius: '16px',
          fontSize: '14px',
          letterSpacing: '0.4px',
          lineHeight: '171%',
        },
        outlinedSizeLarge: {
          borderRadius: '20px',
          fontSize: '15px',
          letterSpacing: '0.46px',
          lineHeight: '186%',
        },
        outlinedSizeSmall: {
          borderRadius: '12px',
          fontSize: '13px',
          letterSpacing: '0.46px',
          lineHeight: '183%',
        },
        textSizeMedium: {
          borderRadius: '16px',
          fontSize: '14px',
          letterSpacing: '0.4px',
          lineHeight: '171%',
        },
        textSizeLarge: {
          borderRadius: '20px',
          fontSize: '15px',
          letterSpacing: '0.46px',
          lineHeight: '186%',
        },
        textSizeSmall: {
          borderRadius: '12px',
          fontSize: '13px',
          letterSpacing: '0.46px',
          lineHeight: '183%',
        },
        outlined: {
          border: '1px solid rgba(0, 0, 0, 0.23)',
        },
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          letterSpacing: '0.14px',
          fontFamily: 'Hellix',
          fontSize: '20px',
          lineHeight: '100%',
          fontWeight: 400,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          letterSpacing: '0.15px',
          fontFamily: 'Arial',
          fontSize: '12px',
          lineHeight: '12px',
          fontWeight: 400,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          letterSpacing: '0.15px',
          fontFamily: 'Arial',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: 400,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          letterSpacing: '0.15px',
          fontFamily: 'Arial',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: 400,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          letterSpacing: '0.15px',
          fontFamily: 'Arial',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: 400,
          border: '1px solid rgba(0, 0, 0, 0.23);',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Arial',
          fontSize: '10px',
          lineHeight: '14px',
          fontWeight: 400,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Arial',
          fontSize: '12px',
          lineHeight: '20px',
          fontWeight: 400,
          letterSpacing: '0.4px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          border: '1px solid rgba(0, 0, 0, 0.23)',
        },
      },
    },
    // MuiBackdrop: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     },
    //   },
    // },
    MuiRating: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFB400',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#323232',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          border: '1px solid rgba(35, 40, 48, 0.12)',
        },
      },
    },
  },
};
const wfTheme = createTheme(themeOptions);
export default function App() {
  return (
    <ThemeProvider theme={wfTheme}>
      <Select />
      <Modal />
      <Dialog />
    </ThemeProvider>
  );
}
