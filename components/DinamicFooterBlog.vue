<template>
  <!-- Footer for blog-->
  <footer fluid class="footer-blog text-center py-3 m-0 footer-position bg-white-smoke">
    <b-container class="pb-5">
      <p class="mx-auto py-2">
        <b-icon
          variant="dark"
          icon="arrow-up-circle-fill"
          animation="cylon-vertical"
          class="to-up"
          @click="scrollToTop"
        />
      </p>
      <p>
        <small>
          {{ content.authorMessageA[language] }}
          <b-icon
            icon="heart-fill"
            animation="throb"
            font-scale="1"
            variant="success"
          />
          <a
            :href="content.authorLink[language]"
            target="_blank"
          >
            {{ content.authorCredit[language] }}
          </a>
          <span class="expendable-footer-part">
            {{ content.authorMessageB[language] }}
          </span>
        </small>
      </p>
    </b-container>
  </footer>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'DinamicFooterBlog',
  // Properties received from parent
  props: {
    content: Object,
    language: String
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped >
  a {
    font-weight: 700;
    text-decoration: none;
    color:darkgreen
  }

  a:hover {
    text-decoration: none;
    color: green;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
  }

  a:focus {
    text-decoration: none;
    color:grey
  }

  small:hover{
    text-decoration: none;
  }

  .b-icon.to-up {
    font-size:1.75rem;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .expendable-footer-part {display:none;}
  }

  /* Medium devices (tablets, 768px and up)*/
  @media only screen and (min-width: 768px) {
    .b-icon.to-up { font-size:2.5rem; }
  }

  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .b-icon.to-up { font-size:3rem; }
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media (min-width: 1400px) {
    .b-icon.to-up { font-size:3rem; }
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .b-icon.to-up { font-size:5rem; }
  }

</style>
