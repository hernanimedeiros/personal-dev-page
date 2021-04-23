<template>
  <article fluid class="blog-slug p-0">
    <!-- Header -->
    <BlogHeader
      :content="content"
      language="en"
    />
    <!-- Pre-text -->
    <b-container class="content-layout mx-auto">
      <h1 class="mt-5">
        {{ article.title }}
      </h1>
      <p class="mt-3">
        {{ article.description }}
      </p>
      <p class="mt-3">
        Article last updated: {{ formatDate(article.updatedAt) }}
      </p>
      <b-img-lazy
        v-bind="mainProps"
        :src="require(`~/assets/${article.img}`)"
        :alt="article.alt"
        class="pt-3"
      />
      <author
        :author="article.author"
        class="content-layout mx-auto avatar"
      />
      <!-- Collapse  trigger -->
      <b-icon
        v-b-toggle.collapse-1
        icon="list"
        variant="dark"
        class="mx-auto"
      />
      <!-- Element to collapse -->
      <b-collapse id="collapse-1">
        <b-card
          bg-variant="dark"
          text-variant="white"
          class="content-layout mx-auto px-5 topics"
        >
          <b-card-text>
            <nav class="mt-3 mx-auto">
              <p class="text-left">
                {{ content.contentBlogItem[language] }}
              </p>
              <ul>
                <li v-for="link of article.toc" :key="link.id" class="text-left">
                  <NuxtLink :to="`#${link.id}`">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </b-card-text>
        </b-card>
      </b-collapse>
    </b-container>
    <!-- Text -->
    <b-container class="content-layout mx-auto">
      <nuxt-content :document="article" class="text-justify" />
      <!-- Share -->
      <h3 class="text-center text-black-opti  pt-5">
        {{ content.shareTitle[language] }}
      </h3>
      <SocialShare
        :article="article"
        :content="content"
        language="en"
      />
      <!-- Navigation -->
      <prev-next :prev="prev" :next="next" />
    </b-container>
    <pre style="display:none"> {{ article }} </pre>
    <!-- Contact -->
    <h2 class="text-center text-black-opti  pt-5">
      {{ content.contactTitle[language] }}
    </h2>
    <hr class="mx-auto">
    <p class="text-justify text-black-opti text-description text-center">
      {{ content.contactDescription[language] }}
    </p>
    <Contact
      :content="content"
      class="pb-5"
      :language="language"
    />
    <!-- Footer -->
    <DinamicFooterBlog
      :content="content"
      language="en"
    />
  </article>
</template>

<script>
// Import
// @ is an alias to /src
import ContentJson from '@/components/content.json'
import MetaJson from '@/components/meta.json'
import Contact from '@/components/Contact.vue'
import BlogHeader from '@/components/BlogHeader.vue'
import DinamicFooterBlog from '@/components/DinamicFooterBlog.vue'
import SocialShare from '@/components/SocialShare.vue'
export default {
  // Name and components
  name: 'BlogSlug',
  components: {
    Contact,
    BlogHeader,
    DinamicFooterBlog,
    SocialShare
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  data () {
    return {
      // Load content
      content: ContentJson,
      meta: MetaJson,
      // Language based on path
      language: 'en',
      // Load content
      mainProps: {
        center: true,
        fluid: true,
        blank: true,
        blankColor: '#bbb',
        blankWidth: 512
      }
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.language
      },
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.article.keyword
        }
      ],
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js',
          charset: 'utf-8'
        }
      ]
    }
  }
}
</script>

<style scoped>

  .avatar {
    margin-top:-2.5rem;
  }

  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }

  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }

  .nuxt-content p {
    margin-bottom: 20px;
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
    .avatar { margin-top:-3rem }
  }

  /* Large devices (desktops, 992px and up)*/
  @media (min-width: 992px) {
    ul > li {
      padding-left: 5px;
      margin-left:10px;
    }

    nav > p { margin-left:10px; }
    .avatar { margin-top:-4rem }
    .topics {width:50% }
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {
    .avatar { margin-top:-5rem }
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media (min-width: 1400px) {
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
  }

</style>
