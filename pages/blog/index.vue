<template>
  <b-container fluid class="blog p-0">
    <BlogHeader
      :content="content"
      language="en"
    />
    <b-container class="content-layout">
      <!-- Title -->
      <h1 class="pt-5">
        Blog Posts
      </h1>
      <!-- Tab Group -->
      <b-tabs
        active-nav-item-class="bg-dark text-white"
        content-class="mt-3"
        justified
        align="center"
        class="mt-3"
      >
        <!-- Tab A -->
        <b-tab id="BlogArchive" lazy>
          <template #title>
            {{ content.blogTitleA[language] }}
          </template>
          <BlogPostList
            :articles="articles"
            :content="content"
            language="en"
          />
        </b-tab>
        <!-- Tab B -->
        <b-tab id="BlogHighlight" active>
          <template #title>
            {{ content.blogTitleB[language] }}
          </template>
          <BlogPostListHighlight
            :articles="articles"
            :content="content"
            language="en"
          />
        </b-tab>
        <!-- Tab C -->
        <b-tab id="BlogCategorie" lazy>
          <template #title>
            {{ content.blogTitleC[language] }}
          </template>
          <BlogPostListCategorie
            :articles="articles"
            :content="content"
            language="en"
          />
        </b-tab>
      </b-tabs>
    </b-container>
    <!-- Contact -->
    <h2 class="text-center text-black-opti  pt-5">
      {{ content.contactTitle[language] }}
    </h2>
    <hr class="mx-auto">
    <p class="text-justify text-black-opti text-description text-center">
      {{ content.contactDescription[language] }}
    </p>
    <Contact
      :language="language"
      :content="content"
      class="py-5"
    />
    <div class="just-desktop parallax-blog w-100" />
    <!-- Footer -->
    <DinamicFooterBlog
      :content="content"
      language="en"
    />
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import Contact from '@/components/Contact.vue'
import ContentJson from '@/components/content.json'
import MetaJson from '@/components/meta.json'
import BlogHeader from '@/components/BlogHeader.vue'
import BlogPostList from '@/components/BlogPostList.vue'
import BlogPostListCategorie from '@/components/BlogPostListCategorie.vue'
import BlogPostListHighlight from '@/components/BlogPostListHighlight.vue'
import DinamicFooterBlog from '@/components/DinamicFooterBlog.vue'
// Export
export default {
  // Name and components
  name: 'Blog',
  components: {
    Contact,
    BlogHeader,
    BlogPostList,
    BlogPostListCategorie,
    BlogPostListHighlight,
    DinamicFooterBlog
  },
  // Async work
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'categorie', 'level'])
      .sortBy('createdAt', 'des')
      .fetch()

    return {
      articles
    }
  },
  data () {
    return {
      // Load content
      content: ContentJson,
      meta: MetaJson,
      // Language based on path
      language: 'en'
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.language
      },
      title: this.meta.metaBlogTitle[this.language],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.metaBlogDescription[this.language]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.metaBlogKeyword[this.language]
        }
      ]
    }
  }
}
</script>

<style scoped >

  .parallax-blog {
    /* The image used */
    background-image: url("../../assets/contact-hernani-medeiros.jpg");
    background-color: #272829;
    /* Height */
    height: 45vh;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
