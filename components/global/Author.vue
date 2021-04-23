<template>
  <b-container class="author">
    <b-avatar
      :src="require(`~/assets/${author.image}`)"
      :alt="author.name"
      class="author-avatar-size"
    />
    <div>
      <p class="h5 mt-1">
        {{ author.name }}
      </p>
      <p>
        {{ author.bio }}
      </p>
      <p>
        <!-- Linkedin -->
        <a
          href="https://www.linkedin.com/in/hernanimedeiros/"
          target="_blank"
        >
          <b-icon
            icon="linkedin"
            class="social-icon social-icon-linkedin"
          />
        </a>
        <!-- Facebook -->
        <a
          href="https://www.facebook.com/hernanifelixmedeiros/"
          target="_blank"
        >
          <b-icon
            icon="facebook"
            class="social-icon social-icon-facebook"
          />
        </a>
        <!-- Instagram -->
        <a
          href="https://www.facebook.com/hernanifelixmedeiros/"
          target="_blank"
        >
          <b-icon
            icon="instagram"
            class="social-icon social-icon-instagram"
          />
        </a>
        <!-- Github -->
        <a
          href="https://www.linkedin.com/in/hernanimedeiros/"
          target="_blank"
        >
          <b-icon
            icon="github"
            class="social-icon social-icon-github"
          />
        </a>
      </p>
    </div>
  </b-container>
</template>

<script>
export default {
  // Name and components
  name: 'Author',
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped >

/*--------------------------------------------------------------
# Specific tags
--------------------------------------------------------------*/
  .author-avatar-size{
    width:5rem;
    height:5rem;
  }

/*--------------------------------------------------------------
# Social icons
--------------------------------------------------------------*/
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
    color: #3974e7;
  }
  .social-icon-linkedin:hover {
    color: #3066C2;
  }

  .social-icon-github:hover {
    color: purple;
  }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* Small devices (landscape phones, 576px and up)*/
  @media (min-width: 576px) {
  }

  /* Medium devices (tablets, 768px and up)*/
  @media (min-width: 768px) {
    .author-avatar-size{ width:6rem;height:6rem; }
  }

  /* Large devices (desktops, 992px and up)*/
  @media (min-width: 992px) {
    .author-avatar-size{ width:7rem;height:7rem; }
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {
    .author-avatar-size{ width:8rem;height:8rem; }
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media (min-width: 1400px) {
    .author-avatar-size{ width:9rem;height:9rem; }
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .author-avatar-size{ width:10rem;height:10rem; }
  }

</style>
