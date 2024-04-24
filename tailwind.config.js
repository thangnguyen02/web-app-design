/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-bg":
          "radial-gradient( 50% 128.57% at 50% -36.61%,#35297b 0%,#3e3265fc 100% )",
      },
    },
  },
  variants: {
    extend: {
      display: ["cardItems-hover"],
    },
  },
  plugins: [],
};
