<template>
  <div>
    <secondArticle style="border-bottom: 1px solid #000;"/>
    <firstArticle style="border-bottom: 1px solid #000; border-top: 1px solid #000;"/>
    <sideArticle/>
  </div>
</template>
<script>
import firstArticle from "~/components/articles/articleWithoutImg.vue";
import secondArticle from "~/components/articles/articleWithImg.vue";
import sideArticle from "~/components/sideArticles/sideArticle1.vue";
export default {
  components: {
    firstArticle,
    secondArticle,
    sideArticle
  }
};
</script>
