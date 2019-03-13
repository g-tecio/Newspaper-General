<template>
  <div>
    <secondArticle id="articleBar1"/>
    <firstArticle id="articleBar1"/>
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

<style>
  #articleBar1{
    border-bottom: 1px solid #000;
    box-shadow: none;
  }
</style>

