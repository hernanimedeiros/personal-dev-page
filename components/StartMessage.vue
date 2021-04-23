<template>
  <b-container fluid class="start-message px-0">
    <!-- Bottom alert -->
    <b-alert
      show
      class="start-message-item rounded-0 pt-3"
      :variant="variant"
    >
      <!-- Message -->
      <b-link
        href="https://webtop.pt"
        taget="_blank"
      >
        For agency services, click me and check my Digital Agency homepage (Webtop).
      </b-link>
    </b-alert>
    <!-- Bottom alert -->
    <b-alert
      show
      class="start-message-item rounded-0 pt-3"
      :variant="variant"
    >
      <!-- Message -->
      <b-link
        href="https://hernanimedeiros.pt"
        taget="_blank"
      >
        For my digital consulting services, click me and check my personal services page.
      </b-link>
    </b-alert>
    <!-- Bottom alert -->
    <b-alert
      show
      class="start-message-item rounded-0 pt-3"
      :variant="variant"
    >
      <!-- Message -->
      <b-link
        href="https://www.linkedin.com/in/hernanimedeiros/"
        taget="_blank"
      >
        Connect to my at Linkedin.
      </b-link>
    </b-alert>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'StartMessage',
  // Properties received from parent
  props: {
    variant: String
  }
}
</script>

<style scoped >

.start-message-item {
  animation: start-message-animation 10s;
  z-index: 2000;
}

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .start-message-item {width:75%;opacity: 0.66;margin-left:auto;margin-right:auto}
    @keyframes start-message-animation {
      from  {opacity: 0.0}
      to  {opacity: 0.66}
    }
    .start-message-item:hover {opacity: 1}
  }

  @keyframes start-message-animation {
    from  {opacity: 0.0}
    to  {opacity: 1}
  }

</style>
