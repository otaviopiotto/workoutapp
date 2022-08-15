import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    /* Blue */
    blue: {
      900: "#052E52",
      800: "#003B70",
      700: "#0055A1",
      600: "#2164A0",
      500: "#7DB6E8",
      400: "#A8CEF0",
      300: "#D4E6F7",
      200: "#E1EEF9",
      100: "#E9F3FB",
      50: "#F2F7FA",
    },

    black: {
      900: "#000000",
      800: "#121212",
      700: "#1c1c1c",
    },
    grey: {
      900: "#212121",
      800: "#424242",
      700: "#616161",
      600: "#757575",
      500: "#9E9E9E",
      400: "#BDBDBD",
      300: "#E0E0E0",
      200: "#EEEEEE",
      100: "#F5F5F5",
      50: "#FAFAFA",
    },

    pallete: {
      900: "#0B090A",
      800: "#161A1D",
      700: "#660708",
      600: "#A4161A",
      500: "#BA181B",
      400: "#E5383B",
      300: "#B1A7A6",
      200: "#D3D3D3",
      100: "#F5F3F4",
      50: "#FFFFFF",
    },

    // Alertas

    alert_failure: "#5c040e",
    alert_warning: "#FFB300",
    alert_sucess: "#388E3C",

    white: "#fff",
  },

  fonts: {
    mulish: {
      h1: [
        "font: 24px 'Mulish', sans-serif; font-weight: 700; line-height: 48px;",
      ],
      h2: [
        "font: 22px 'Mulish', sans-serif; font-weight: 600;line-height: 1em;",
      ],
      h3_regular: [
        "font: 1.75rem 'Mulish', sans-serif; font-weight: 400; line-height: 48px;",
      ],
      h3_semibold: [
        "font: 1.75rem 'Mulish', sans-serif; font-weight: 600; line-height: 48px;",
      ],
      h4: [
        "font: 1.56rem 'Mulish', sans-serif;font-weight: 600;line-height: 32px;",
      ],
      h5_regular: [
        "font: 1.25rem 'Mulish', sans-serif;font-weight: 400;line-height: 28px;",
      ],
      h5_semibold: [
        "font: 1.25rem 'Mulish', sans-serif;font-weight: 600;line-height: 28px;",
      ],
      h5_bold: [
        "font: 1.25rem 'Mulish', sans-serif;font-weight: 700; line-height: 28px;",
      ],
      body_regular: [
        "font: 1rem 'Mulish', sans-serif; line-height: 24px;font-weight: 400",
      ],
      body_semibold: [
        "font: 1rem 'Mulish', sans-serif; line-height: 24px;font-weight: 600",
      ],
      body_bold: [
        "font: 1rem 'Mulish', sans-serif; line-height: 24px;font-weight: 700",
      ],
      small_regular: [
        "font: 12px  'Mulish', sans-serif; line-height: 20px;font-weight: 400",
      ],
      small_semibold: [
        "font: 12px 'Mulish', sans-serif; line-height: 20px;font-weight: 600",
      ],
      small_bold: [
        "font:12px 'Mulish', sans-serif; line-height: 20px;font-weight: 700",
      ],
    },
  },
};

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
  }


  *::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      border-radius: 99px;
      
      
    }
    
    *::-webkit-scrollbar-track {
      background: #e0e0e0;
      border-radius: 99px;
      
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${theme.colors.grey[600]};
    }

    *::-webkit-scrollbar-thumb:hover {
      background: #555;
    }


  #root {
    width: 100%;
    height:100%;
  }

button{
  cursor:pointer ;
}

  input, button, *{
      background:none;
      border:0;
  }


  html, body {
    min-height: 100%;
    height: 100%;
    background:${theme.colors.pallete[800]};
    overflow-x:hidden;
  }



h1{
    ${theme.fonts.mulish.h1};
}
h2{
    ${theme.fonts.mulish.h2};
}
h4{
    ${theme.fonts.mulish.h4};
}



input{

  &::-webkit-calendar-picker-indicator{
  opacity:0.6;
  cursor:pointer;
  }

}

`;
