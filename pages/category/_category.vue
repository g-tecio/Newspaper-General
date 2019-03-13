<template>
  <div>
    <v-container>
      <headerComp/>

      <navbar :config="config"/>

      <banner/>

      <drawer :config="config"/>

      <h1 style="border-bottom: 1px solid #000;">{{$route.params.category}}</h1>
      <v-layout row wrap>
        <v-flex xs12 md4 class="articleBar">
          <articleBar/>
        </v-flex>
        <v-flex xs12 md8>
          <v-layout row wrap>
            <v-flex xs12 md8>
              <articleBar2 id="articleBar-layout"/>
            </v-flex>
            <v-flex xs12 md4 id="sideNews3-layout">
              <sideNews3/>
            </v-flex>
            <v-flex xs12 md12>
              <sideArticle2/>
            </v-flex>
          </v-layout>
        </v-flex>
        <h1>More of this Section</h1>
        <v-flex xs12 md12 class="moreSectionFlex">
          <v-layout row wrap>
            <v-flex xs12 md8>
              <v-layout>
                <v-flex xs12 md6 id="firstArticleLayout">
                  <firstArticle/>
                </v-flex>
                <v-flex xs12 md6 id="firstArticleLayout2">
                  <firstArticle/>
                </v-flex>
              </v-layout>
              <v-flex xs12 md12>
                <sideArticle2/>
              </v-flex>
            </v-flex>
            <v-flex xs12 md4 id="sideNewsLayout">
              <sideNews2/>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <footerComp/>
  </div>
</template>
<style>
.articleBar {
  border-right: 1px solid #000;
  border-bottom: 2px solid #000;
}
#newsContainer {
  padding-top: 10px;
  border-bottom: 2px solid #000;
}
#sideNews {
  border-left: 1px solid #000;
}
.moreSectionFlex{
  border-top: 2px solid #000;
}
#fullContainer {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
#sideNews {
  border-left: 1px solid #000;
}
#articleBar-layout{
  border-right: 1px solid #000;
}
#sideNews3-layout{
  border-bottom: 1px solid #000;
  padding-top: 10px;
}
#firstArticleLayout{
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}
#firstArticleLayout2{
  border-bottom: 1px solid #000;
}
#sideNewsLayout{
  border-left: 1px solid #000;
}
</style>
<script>
import sideNews3 from "~/components/sideNews3.vue";
import articleBar2 from "~/components/articleBar2.vue";
import articleBar from "~/components/articleBar.vue";
import sideArticle3 from "~/components/sideArticles/sideArticle3.vue";
import sideArticle2 from "~/components/sideArticles/sideArticle2.vue";
import firstArticle from "~/components/articles/articleWithoutImg.vue";
import secondArticle from "~/components/articles/articleWithImg.vue";
import sideArticle from "~/components/sideArticles/sideArticle1.vue";
import header from "~/components/navbar/header.vue";
import navbar from "~/components/navbar/navbar.vue";
import banner from "~/components/navbar/banner.vue";
import drawer from "~/components/navbar/drawer.vue";
import sideNews from "~/components/sideNews.vue";
import sideNews2 from "~/components/sideNews2.vue";
import footerComp from "~/components/footerComp.vue";
export default {
  data() {
    return {
      config: {
        drawer: false
      }
    };
  },
  components: {
    headerComp: header,
    navbar,
    banner,
    drawer,
    sideNews,
    sideNews2,
    footerComp,
    firstArticle,
    secondArticle,
    sideArticle,
    sideArticle3,
    sideArticle2,
    articleBar,
    articleBar2,
    sideNews3
  }
};
</script>
