<template>
  <b-container class="social-share-twitter">
    <p>
      <!-- Twitter share button -->
      <b-link
        :href="shareTwitter()"
        replace
        target="_blank"
      >
        <b-icon icon="twitter" aria-hidden="true" />
      </b-link>
      <!-- Twitter share button -->
      <b-link
        :href="shareLinkedin()"
        replace
        target="_blank"
      >
        <b-icon icon="linkedin" aria-hidden="true" />
      </b-link>
      <!-- Twitter share button -->
      <b-link
        :href="shareFacebook()"
        replace
        target="_blank"
      >
        <b-icon icon="facebook" aria-hidden="true" />
      </b-link>
    </p>
  </b-container>
</template>

<script>
export default {
// Name and components
  name: 'SocialShare',
  // Properties received from parent
  props: {
    article: String,
    content: String,
    language: String
  },
  methods: {
    // Dinamic change nav path
    shareTwitter () {
      const url = 'https://twitter.com/share?url=http://localhost:3000/blog' + this.article.path + '&text=' + this.content.blogShareMessage[this.language]
      return (url)
    },
    shareLinkedin () {
      const url = 'https://www.linkedin.com/shareArticle?mini=true&url=http://localhost:3000/blog' + this.article.path + '&title=' + this.content.blogShareMessage[this.language] + '&source=LinkedIn'
      return (url)
    },
    shareFacebook () {
      const url = 'https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http://localhost:3000/blog' + this.article.path + '&display=popup&ref=plugin&src=share_button' + '&text=' + this.content.blogShareMessage[this.language]
      return (url)
    }
  }

}
</script>

<style>

</style>
