/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {  
  
    extend: {
      colors:{
        'gold':'#FFBD39',
        'white':'#FFFF',
        'black':'#000000',
        'grey':'#FFFFFF80',
        'blond': '#FFFFFF1A',
        
      },
    },
  },
  plugins: [],
}

