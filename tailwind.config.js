/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        },
        padding: "1rem",
      },
      backgroundSize: {
        ["mobile-size"]: "auto",
        ["desktop-size"]: "cover",
      },
      backgroundPosition: {
        ["mobile-position"]: "bottom center, left top, right 90px top 112px",
        ["desktop-position"]: "24% 0%",
      },
      backgroundImage: {
        ["mobile-image"]:
          "url('/assets/images/hero-image-component.png'), url(/assets/images/hero-cube-image.png), url(/assets/images/hero-mini-cube-image.png)",
        ["desktop-image"]: "url('/assets/images/hero-bg-desktop.png')",
      },
      colors: {
        primary: {
          base: "#003459",
          400: "#0078CD",
          600: "#00528C",
          800: "#002A48",
        },
        secondary: {
          base: "#F7DBA7",
          400: "#FCEED5",
          600: "#F1D092",
          800: "#EEC77E",
        },
        state: {
          red: "#FF564F",
          green: "#34C759",
          orange: "#FF912C",
          blue: "#00A7E7",
        },
        neutral: {
          100: "#FDFDFD",
          200: "#EBEEEF",
          300: "#CCD1D2",
          500: "#99A2A5",
          600: "#667479",
          800: "#242B33",
          900: "#00171F",
        },
      },
    },
  },
  plugins: [],
};
