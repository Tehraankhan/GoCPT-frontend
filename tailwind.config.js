/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      'Navbar-background':'rgba(43, 58, 99, 0.25)',
      },
      borderColor:{
        'Navbar-border':'rgba(43, 58, 99, 0.25)'
      },
      boxShadow:{
        'Navbar-shadow':'0px 0px 40px 0px rgba(0, 0, 0, 0.2)',
        'text-shadow':'0px 4px 15px 0px rgba(0, 0, 0, 0.45)',
        'contribute-shadow':'0px 0px 50px 0px rgba(0, 0, 0, 0.35)',
        'button-white-shadow':'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'contact-box-shadow':'0px 0px 50px 0px rgba(0, 0, 0, 0.65)',
        'button-shadow-color2':'0px 0px 20px 0px rgba(0, 0, 0, 0.4)',
        'Navbar-box-shadow2':'0px 0px 30px 0px rgba(0, 0, 0, 0.89)',
        'box-shadow3':'0px 0px 45px 0px rgba(0, 0, 0, 0.65)',
        'image-box-shadow':'0px 0px 10px 0px rgba(0, 0, 0, 1)',
        'textshadow':'box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 1)',
        'input-shadow':'0px 0px 25px 0px rgba(0, 0, 0, 1)',
        'button-shadow-color3':'0px 0px 10px 0px rgba(0, 0, 0, 0.45)',
        'button-shadow-color4':'0px 0px 20px 0px rgba(0, 0, 0, 0.75)',
        'box-shadow1':'0px 0px 20px 0px rgba(0, 0, 0, 0.6)'
        

        
        

      },
      backgroundImage:{
        'Home-background-color':'linear-gradient( 246.28deg, #F197F4 -27.32%, #5B6AAA 86.32%)',
        'button-gradient-color':'linear-gradient(180deg, rgba(179, 130, 211, 0.6) 0%, rgba(43, 58, 99, 0.6) 100%)',
        'button-gradient-color2':'linear-gradient(180deg, #B382D3 0%, #2B3A63 100%)',
        'button-gradient-color3':'linear-gradient(180deg, #2B3A63 0%, #B382D3 100%)',
        'key-feature-color':' linear-gradient(109.87deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.001) 100%)',
        'about-us-color':'linear-gradient(180deg, rgba(91, 106, 170, 0) 11.5%, rgba(47, 55, 88, 0.44) 52.5%, rgba(0, 0, 0, 0) 100%)',
        'footer-background':'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 99.99%, rgba(0, 0, 0, 0) 100%)',
        'image-bg-color':'linear-gradient(180deg, rgba(0, 0, 0, 0) 66.5%, #000000 100%)',
        'button-gradient-color4':'linear-gradient(180deg, rgba(241, 151, 244, 0.75) 0%, rgba(43, 58, 99, 0.75) 100%)',
        'button-gradient-color5':'linear-gradient(180deg, #302438 0%, #936094 100%)',
        'box-gradient-color':'linear-gradient(180deg, rgba(241, 151, 244, 0.8) 0%, rgba(43, 58, 99, 0.8) 100%)'
                                                
      },
      fontFamily: {
        'jura': ['Jura', 'sans-serif'],
        'offside': ['Offside', 'sans-serif'],
        'padyakke': ['Padyakke Expanded One', 'sans-serif'],
      },
      lineHeight: {
        'custom': '42.59px',
      },
      textShadow: {
        '3d': '1px 1px 0 #000, -1px -1px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000',
        '3d-heavy': '1px 1px 0 #000, -1px -1px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000, 3px 3px 0 #000, -3px -3px 0 #000',
      }
    },
  },
  plugins: [],
}

