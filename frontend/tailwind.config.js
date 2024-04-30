import withMT from "@material-tailwind/react/utils/withMT";

const tailwindConfig = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', "sans-serif"],
      },
    },
  },
  plugins: [],
});

export default tailwindConfig;
