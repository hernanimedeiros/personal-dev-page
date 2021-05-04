<template>
  <b-container fluid class="start-message px-0 pb-5">
    <!-- Agency -->
    <h3 class="text-white h4">
      Other services
    </h3>
    <small class="text-muted">
      (coming soon)
    </small>
    <!-- Agency -->
    <p class="start-message-item">
      <b-button
        class="button-purple mt-2"
        href="https://webtop.pt"
        target="_blank"
      >
        Digital Agency
        <b-icon
          icon="people-fill"
          class="ml-3"
        />
      </b-button>
    </p>
    <!-- Personal -->
    <p class="start-message-item">
      <b-button
        class="button-purple mt-2"
        href="https://hernanimedeiros.pt"
        target="_blank"
      >
        Digital Consulting
        <b-icon
          icon="clipboard-data"
          class="ml-3"
        />
      </b-button>
    </p>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'StartMessage'
}
</script>

<style scoped >

  .start-message-item {
    animation: start-message-animation 10s;
    z-index: 2000;
  }

  .button-purple {
    font-size:1rem;
    width:90%;
  }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  */

  /* Slim devices (slim phones, 400px and up)*/
  @media only screen and (min-width: 400px) {
    .button-purple {font-size:1.125rem;}
  }

  /* Medium devices (tablets, 768px and up)*/
  @media only screen and (min-width: 768px) {
    .button-purple {font-size:1.25rem;width:50%;}
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
    .button-purple {font-size:1.5rem;}
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .button-purple {font-size:3rem}
  }

  @keyframes start-message-animation {
    from  {opacity: 0.0}
    to  {opacity: 1}
  }

</style>
