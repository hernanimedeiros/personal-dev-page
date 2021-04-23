<template>
  <b-container fluid class="social-icon-small">
    <!-- Social links with icons -->
    <p>
      <!-- Linkedin -->
      <b-link
        href="https://www.linkedin.com/in/hernanimedeiros/"
        target="_blank"
      >
        <b-icon
          icon="linkedin"
          class="social-icon social-icon-linkedin"
        />
      </b-link>
      <!-- Facebook -->
      <b-link
        href="https://www.facebook.com/hernanifelixmedeiros/"
        target="_blank"
      >
        <b-icon
          icon="facebook"
          class="social-icon social-icon-facebook"
        />
      </b-link>
      <!-- Github -->
      <b-link
        href="https://github.com/hernanimedeiros"
        target="_blank"
      >
        <b-icon
          icon="github"
          class="social-icon social-icon-github"
        />
      </b-link>
      <!-- Instagram -->
      <b-link
        href="https://www.instagram.com/hernani_medeiros/"
        target="_blank"
      >
        <b-icon
          icon="instagram"
          class="social-icon social-icon-instagram"
        />
      </b-link>
      <!-- Twitter -->
      <b-link
        href="https://twitter.com/hernanigoat"
        target="_blank"
      >
        <b-icon
          icon="twitter"
          class="social-icon social-icon-twitter"
        />
      </b-link>
    </p>
  </b-container>
</template>

<script>

export default {
// Name and components
  name: 'SocialIconSmall'
}
</script>

<style scoped>

  .social-icon {
    margin: 0.5rem;
    font-weight: 200;
    font-size: 1.5rem;
    transition-delay: 1s;
    transition-timing-function: ease-in-out;
    transition: transform 3s, color 3s;
  }

  .social-icon:hover {
    transform: scale(1.5);
  }

  .social-icon-facebook:hover{
    color: #3974e7;
  }

  .social-icon-instagram:hover{
    color: #F5CF00;
  }

  .social-icon-linkedin:hover {
    color: #3066C2;
  }

  .social-icon-github:hover {
    color: purple;
  }

  .social-icon-twitter:hover {
    color: #48A1F2;
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
