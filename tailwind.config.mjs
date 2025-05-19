/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors:{
			lightHover:"#fcf4ff",
			darkHover:"#2a004a",
			darkTheme:"#11001f"
		},
		fontFamily:{
			Outfit:["Outfit","sans-serif"],
			Ovo:["Ovo","serif"]
		},
		boxShadow:{
			"black":" 4px 4px 0 #000",
			"white":" 4px 4px 0 #fff",

		},
			
  	}
  },
  darkMode:'selector',
  plugins: [],
};
