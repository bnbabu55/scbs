module.exports = {
  darkMode: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: "jit",
  purge: {
    preserveHtmlElements: true,
    mode: "layers",
    content: ["./src/**/*.{js,jsx,ts,tsx,html,md,mdx}"],
    options: {
      // safelist: {
      //   greedy: [/swiper/],
      // },
      keyframes: true,
      // fontFace: true,
      variables: true,
      rejected: true,
    },
  },
  theme: {
    extend: {
      // fontSize: {
      //   "2xs": ".65rem",
      // },
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        Lato: ["Lato", "Helvetica", "sans-serif"],
        LatoBold: ["LatoBold", "Helvetica", "sans-serif"],
        LatoBlack: ["LatoBlack", "Helvetica", "sans-serif"],
        Roboto: ["Roboto", "Helvetica", "sans-serif"],
      },
      height: {
        "almost-screen": "calc(-16rem + 100vh)",
      },
      colors: {
        themeOrange: {
          50: "#FFEC19",
          100: "#ffa800",
          200: "#fc9902",
          400: "#b95e02",
          700: "#7c3f02",
        },
        themeBlue: {
          100: "#049aff",
          200: "#0476ac",
          600: "#00497a",
        },
        themeGray: {
          50: "#cfcfcf",
          100: "#333333",
          200: "#2f2f2f",
          300: "#2a2a2a",
          400: "#202020",
          500: "#171717",
        },
        twitterBlue: "#1DA1F2",
        facebookBlue: "#4267B2",
        linkedInBlue: "#0072b1",
        themeDarkBrown: "#2b0404",
      },
      boxShadow: {
        themeShadow: "0 0px 20px rgba(0, 0, 0, 0.72)",
      },
      backgroundImage: theme => ({
        // "case-bg": "url('/images/case-bg.jpg')",
        // "news-bg": "url('/images/news-bg.jpg')",
      }),
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "focus-within", "checked"],
      ringColor: ["hover", "active", "focus", "checked"],
      borderColor: ["checked"],
      // textColor: ["active"],
      display: ["responsive", "group-hover", "group-focus"],
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
}
