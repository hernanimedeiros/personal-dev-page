<template>
  <b-container fluid class="my-5 hero-timeline">
    <b-container class="timeline-block">
      <ul class="timeline text-center">
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkK[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleK[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkJ[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleJ[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkI[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleI[language] }}
            </p>
            <p class="text-justify small muted">
              {{ content.heroTimelineItemDescriptionI[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkH[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleH[language] }}
            </p>
            <p class="text-justify small muted">
              {{ content.heroTimelineItemDescriptionH[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkG[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleG[language] }}
            </p>
            <p class="text-justify small muted">
              {{ content.heroTimelineItemDescriptionG[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkF[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleF[language] }}
            </p>
            <p class="text-justify small muted">
              {{ content.heroTimelineItemDescriptionF[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkE[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleE[language] }}
            </p>
            <p class="text-justify small muted">
              {{ content.heroTimelineItemDescriptionE[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkD[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleD[language] }}
            </p>
            <p class="text-justify small muted">
              {{ content.heroTimelineItemDescriptionD[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkC[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleC[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkB[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleB[language] }}
            </p>
          </a>
        </li>
        <li class="text-justify">
          <a
            target="_blank"
            :href="content.heroTimelineItemLinkA[language]"
          >
            <p class="text-justify">
              {{ content.heroTimelineItemTitleA[language] }}
            </p>
          </a>
        </li>
      </ul>
    </b-container>
  </b-container>
</template>

<script>
export default {
  // Name and components
  name: 'HeroTimeline',
  // Properties received from parent
  props: {
    content: Object,
    language: String
  }
}
</script>

<style scoped>

    a:hover{
        color: darkolivegreen;
    }

    ul.timeline {
        list-style-type: none;
        position: relative;
    }
    /* Line */
    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 0px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }
    /* Dots alignment */
    ul.timeline > li {
        margin: 20px 0;
    }
    /* Dots */
    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #22c0e8;
        left: -9px;
        width: 20px;
        height: 20px;
        z-index: 400;
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
        .timeline-block { padding-left:20%; }
    }

</style>
