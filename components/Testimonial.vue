<template>
  <b-container fluid class="testimonial bg-testemonial py-5">
    <b-container class="content-layout shadow-0">
      <b-card class="shadow text-white bg-overlay my-3 mx-auto">
        <b-card-body>
          <b-card-text class="h5">
            <b-icon icon="chat-quote-fill" variant="white" class="icon-inter" />
            {{ content.testimonialA[language] }}
          </b-card-text>
        </b-card-body>
        <template #footer>
          <p>
            <b-avatar :src="require('../assets/mother-testimonial.jpg')" size="3rem" />
            {{ content.testimonialFooterA[language] }}
          </p>
        </template>
      </b-card>
      <b-card class="shadow bg-light my-3 mx-auto">
        <b-card-body>
          <b-card-text class="h5">
            <b-icon icon="chat-quote-fill" variant="dark" class="icon-inter" />
            {{ content.testimonialB[language] }}
          </b-card-text>
        </b-card-body>
        <template #footer>
          <p>
            <b-avatar :src="require('../assets/father-testimonial.jpg')" size="3rem" />
            {{ content.testimonialFooterB[language] }}
          </p>
        </template>
      </b-card>
    </b-container>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'Testimonial',
  // Properties received from parent
  props: {
    content: String,
    language: String
  }
}
</script>

<style scoped >

.bg-overlay {
  background: linear-gradient(45deg, rgba(2, 0, 36, 0.712) 0%, rgba(2, 0, 36, 0.78) 0%);
}

.bg-testemonial {
  /* The image used */
  background-image: url("../assets/people-coffee-computer.jpg");
  background-color: #272829;
  /* Height */
  min-height: 33vh;
  /* Create the parallax scrolling effect */
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
}

</style>
