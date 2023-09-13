/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        future: "var(--font-future)",
        poppins: "var(--font-poppins)",
        berkshire: "var(--font-berkshire)",
        zengaku: "var(--font-zengaku)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  plugins: [],
};
