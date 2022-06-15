module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mada: ["Mada"],
        pop: ["Poppins"],
      },
      colors: {
        primary: "#A055F4",
      },
      animation: {
        "shape-30": "spin 30s linear infinite reverse",
        "shapenew-30": "spinnew 7s linear infinite",
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      keyframes: {
        spinnew: {
          "100%": {
            transform: "rotate(180deg) translateY(5%) translate(10%)",
          },
        },
      },
      screens: {
        md: { max: "1023px" },
        tablet768: { max: "767px" },
        res600: { max: "599px" },
        res1024: { max: "1023px" },
      },
    },
  },
  plugins: [],
};
