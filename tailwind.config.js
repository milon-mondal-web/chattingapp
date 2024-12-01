/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors : {
         'brandcolours':"#B0D8DA"
       }
    },
    fontFamily :{
      "poppins" : ["Poppins", "sans-serif"]
    },
    container: {
      center: true,
      padding: '200px',
    },

  },
  plugins: [],
}