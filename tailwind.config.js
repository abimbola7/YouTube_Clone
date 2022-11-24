/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./pages/*.html","./js/*.js", "./js/profile.js"],
  theme: {
    screens:{
      xs:"409px",
      sm: '500px',
      smxl : "600px",
      medium: '670px',
      md: '768px',
      lg: '976px',
      lgmd : '1130px',
      xl: '1440px'
    },
    extend: {
      gridTemplateColumns:{
        'body' : '240px 1fr',
        'nav' : "repeat(10, 200px)",
        "login": "360px 400px",
        "two":"1.4fr 1fr",
        "twos":"1.5fr 1fr",
        "twoss" : ".7fr 1fr"
      },
      gridTemplateRows:{
        "eights":"215px 100px 135px 250px 55px 220px 175px 205px",
        "eight1":"56px 215px 170px 135px 250px 55px 220px 175px 205px",
        "fives": "50px 210px 50px 90px",
        "fours": "200px 80px 250px 100px",
        "7":"repeat(7, 1fr)"
      },
      colors:{
        lightDark : '#181A1B',
        darkDark : '#0E0F0F',
        borderDark : "#2C2C2C",
        placeholderDark : "#90908F",
        placeholderText : "#888785",
        sidebarbg : "#121414",
        borderButt : "#ffffff1a",
        nav : "#1A1A1A",
        bodyDark : "#181818",
        timeColor: "#000000cc",
        borderTop : "rgba(255,255,255,.1)",
        short: "#666666",
        header : "rgba(33,33,33,.98)",
        header1 : "rgba(255,255,255,.95)",
        buttonHover : "#202020",
        creamWhite : "rgb(211 207 201)"
      },
      width:{
        "98/100": "98%",
        "240" : "240px",
        "250" : "250px"
      },
      height:{
        "h36":"38px",
        "90v" : "92.5vh"
      },
      inset:{
        "56p" : "55px",
        "13%" : "18.3%"
      },
      margin:{
        "250" : "250px"
      },
      minWidth:{
        "3/5" : "60%"
      },
      flex:{
        "1.4" : "1.4",
        "1.5" : "1.5"
      }
    },
  },
  plugins: [],
}
