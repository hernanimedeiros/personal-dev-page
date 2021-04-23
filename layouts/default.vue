<template>
  <b-container fluid class="default-layout px-0">
    <!-- There where the magic began -->
    <Nuxt />
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'DefaultLayout'
}
</script>

<style>
/*--------------------------------------------------------------
# Import
--------------------------------------------------------------*/
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  /* @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */

/*--------------------------------------------------------------
# General html tags
--------------------------------------------------------------*/
  html {
    font-family: 'Raleway', 'Roboto', sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    overflow-x: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    scroll-behavior: smooth;
  }

  article,
  aside,
  dialog,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  @-ms-viewport {
  width: device-width;
  }

  body {
    font-family: 'Raleway', sans-serif;
    color: #272829;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
  }

  a {
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 2px solid whitesmoke;
    width:128px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    text-align: center;
  }

/*--------------------------------------------------------------
# Layout
--------------------------------------------------------------*/
  .bg-black {
    background-color:black;
  }

  .bg-purple-grey-linear {
    background: linear-gradient(45deg, rgba(2,0,36,1) 67%, rgb(45, 43, 51) 90%);
  }

  .bg-white-smoke {
    background-color: whitesmoke;
  }

  .content-layout {
    max-width:100%;
  }

  .custom-margin {
    /* Height */
    height: 33vh;
    display: none;
  }

  .just-desktop {
    display:none;
  }

  .just-tablet {
    display:none;
  }

  .sidebar {
    display:none;
  }

/*--------------------------------------------------------------
# Colors
--------------------------------------------------------------*/
  .text-black-opti {
    color:#272829;
  }

  .text-whitesmoke {
    color:whitesmoke;
  }

  .text-purple-opti {
    color:#8357e5;
  }

/*--------------------------------------------------------------
# Buttons
--------------------------------------------------------------*/
  .button-purple {
    background-color:#8357e5;
    border: none;
    color: whitesmoke;
    text-align: center;
    text-decoration: none;
    font-size: 1.25rem;
    filter: brightness(75%);
    /* Transition setup*/
    transition-delay: 0.25s;
    transition-timing-function: ease-in-out;
    transition: filter 1s;
  }

  .button-purple:hover {
    background-color:#8357e5;
    filter: brightness(100%);
  }

  .button-void {
    background-color:transparent;
    border: solid;
    border-color:whitesmoke;
    border-width:1px;
    color: whitesmoke;
    text-align: center;
    text-decoration: none;
    font-size: 1.25rem;
    /* Transition setup*/
    transition-delay: 0.25s;
    transition-timing-function: ease-in-out;
    transition: background-color 1s;
  }

  .button-void:hover {
    background-color:#452d79;
    border-color:transparent;
  }

  .button-void-black {
    background-color:transparent;
    border: solid;
    border-color:#272829;
    border-width:1px;
    color: #272829;
    text-align: center;
    text-decoration: none;
    font-size: 1.25rem;
    /* Transition setup*/
    transition-delay: 0.25s;
    transition-timing-function: ease-in-out;
    transition: background-color 1s;
  }

  .button-void-black:hover {
    background-color:#452d79;
    border-color:transparent;
  }
/*--------------------------------------------------------------
# Icons
--------------------------------------------------------------*/
  .b-icon-trans {
    filter: grayscale(100%);
    transition-delay: 0.25s;
    transition-timing-function: ease-out;
    transition: transform 0.4s, filter 1s;
  }

  .b-icon-trans:hover {
    transform: scale(1.5);
    filter: grayscale(0%);
  }

  .b-icon-up {
    filter: grayscale(100%);
    transition-delay: 0.25s;
    transition-timing-function: ease-out;
    transition: transform 0.4s, filter 1s;
  }

  .b-icon-up:hover {
    transform: translateY(-5%);
    filter: grayscale(0%);
  }

  .b-icon-up-simple {
    transition-delay: 0.25s;
    transition-timing-function: ease-in-out;
    transition: transform 0.5s;
  }

  .b-icon-up-simple:hover {
    transform: translateY(-5%);
  }
/*--------------------------------------------------------------
# Super titles
--------------------------------------------------------------*/
  .big-title {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 2.15rem;
  }

  .big-sub-title {
    font-weight: 200;
    font-style: italic;
    font-size: 1.85rem;
  }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* Small devices (landscape phones, 576px and up)*/
  @media only screen and (min-width: 576px) {
  }

  /* Medium devices (tablets, 768px and up)*/
  @media only screen and (min-width: 768px) {
    .just-tablet {display:block;}
  }

  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .custom-margin { display:block; }
    .content-layout { max-width:66%; }
    .just-desktop { display:block; }
    .just-mobile { display:none; }
    .just-tablet { display:none; }
    .nav-mobile { display:none }
    .sidebar {
      display:block;
      background-color:#000000;
    }
    .sidebar:hover {
      display:block;
      background-color:#050000;
    }
    .sidebar-inner {
      position: relative;
      height: 100vh;
      padding-top: .5rem;
      overflow-x: hidden;
      overflow-y: auto;
      border-right-color:rgb(42, 42, 42);
      border-right-style: solid;
      border-right-width:0.25px;
      transition: border-right-color 0.4s;
      transition-delay: 0.15s;
      transition-timing-function: ease-in-out;
    }

    .sidebar-inner:hover {
      border-right-color:#8357e5;
    }

  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-inner {
    position: -webkit-sticky;
    position: sticky;
  }
}

</style>
