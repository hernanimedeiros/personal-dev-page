<template>
  <!-- Home -->
  <b-container fluid class="home-list bg-purple-grey-linear px-0">
    <aside>
      <CookieMessage :language="language" :content="content" />
    </aside>
    <header>
      <HeroProfile :language="language" :content="content" />
    </header>
    <section>
      <HeroAbout :language="language" :content="content" />
      <Contact :language="language" :content="content" />
      <HeroPortfolio :language="language" :content="content" />
      <HeroPath :language="language" :content="content" />
      <Testimonial :language="language" :content="content" />
      <div class="just-desktop parallax-home w-100" />
      <HeroLinks :language="language" :content="content" />
      <div class="just-desktop parallax-home w-100" />
    </section>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import Contact from '@/components/Contact.vue'
import CookieMessage from '@/components/CookieMessage.vue'
import HeroAbout from '@/components/HeroAbout.vue'
import HeroLinks from '@/components/HeroLinks.vue'
import HeroPath from '@/components/HeroPath.vue'
import HeroPortfolio from '@/components/HeroPortfolio.vue'
import HeroProfile from '@/components/HeroProfile.vue'
import Testimonial from '@/components/Testimonial.vue'
// Export
export default {
  // Name and components
  name: 'HomeList',
  components: {
    Contact,
    CookieMessage,
    HeroAbout,
    HeroLinks,
    HeroPath,
    HeroProfile,
    HeroPortfolio,
    Testimonial
  },
  // Properties received from parent
  props: {
    content: Object,
    language: String
  }
}
</script>

<style>
/*--------------------------------------------------------------
# Backgrounds
--------------------------------------------------------------*/
  .parallax-home {
    /* The image used */
    background-image: url("../assets/man-thinking-future-dreams.jpg");
    background-color: #272829;
    /* Height */
    height: 33vh;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
