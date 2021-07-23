<template>
  <b-container fluid class="contact-icon-small text-center">
    <!-- Contact links with icons  -->
    <p>
      <!-- Discord -->
      <b-link
        href="https://discord.gg/47jGMgSeFn"
        target="_blank"
      >
        <b-icon
          icon="discord"
          class="social-icon social-icon-discord"
        />
      </b-link>
      <!-- Whatsapp -->
      <b-link
        href="https://api.whatsapp.com/send?phone=351968959089&text=Deixe-nos%20a%20sua%20mensagem.%20Obrigado%20pela%20prefer%C3%AAncia"
        target="_blank"
      >
        <b-icon
          icon="telephone-forward"
          class="social-icon social-icon-whatsapp"
        />
      </b-link>
      <!-- Mail -->
      <b-link
        href="mailto:hernanimedeiros@hotmail.com?Subject=Contact%20Hernani%20Medeiros"
        target="_blank"
      >
        <b-icon
          icon="envelope"
          class="social-icon social-icon-email"
        />
      </b-link>
    </p>
  </b-container>
</template>

<script>

export default {
// Name and components
  name: 'ContactIconSmall'
}
</script>

<style scoped>

  a {
    vertical-align:middle !important;
  }

  .social-icon {
    margin: 1rem;
    font-weight: 200;
    font-size: 1.75rem;
    transition-delay: 1s;
    transition-timing-function: ease-in-out;
    transition: transform 3s, color 3s;
  }

  .social-icon:hover {
    transform: scale(1.5);
  }

  .social-icon-whatsapp:hover {
    color: #57E676;
  }

  .social-icon-email:hover {
    color: orange;
  }

  .social-icon-discord:hover{
    color: #8499E0;
  }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* Slim devices (slim phones, 400px and up)*/
  @media only screen and (min-width: 400px) {
    .social-icon{font-size:1.75rem;margin: 0.75rem;}
  }

  /* Small devices (landscape phones, 576px and up)*/
  @media only screen and (min-width: 576px) {
    .social-icon{font-size:2rem}
  }

  /* Medium devices (tablets, 768px and up)*/
  @media only screen and (min-width: 768px) {
    .social-icon{font-size:2rem;margin: 1rem;}
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
    .social-icon{font-size:2.5rem}
  }

  @media (min-width: 2560px) {
    .social-icon{font-size:4rem}
  }

</style>
