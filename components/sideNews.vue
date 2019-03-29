<template>
  <div>
    <sideArticle id="side-article1"/>
    <sideArticle id="side-article1"/>
    <sideArticle id="side-article1"/>
    <sideArticle id="side-article1"/>
    <sideArticle id="side-articleLast"/>
  </div>
</template>

<script>
import sideArticle from "~/components/sideArticles/sideArticle1.vue";
export default {
  components: {
    sideArticle
  }
};
</script>

<style>
  #side-article1{
    padding: 2px;
    border-bottom: 1px solid #000;
    box-shadow: none;
  }
  #side-articleLast{
    box-shadow: none;
  }
</style>

