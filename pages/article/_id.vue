<template>
  <div>
    <v-container>
      <headerComp/>

      <navbar :config="config"/>

      <!-- <banner/> -->

      <drawer :config="config"/>
      <v-layout row wrap>
        <articleCardView :config="$route.params"/>
        <v-layout row wrap>
          <v-flex xs12 md9>
            <v-layout row wrap>
              <v-flex xs12 md12 id="articleContainer" style="margin-right:5%; margin-top: 3%;">
                <v-container>
                  <p>{{$route.params.article.articleContent}}</p>
                </v-container>
              </v-flex>
              <v-flex xs12 md6>
                <articleWithImg id="secondary-articles" style="border-top: 1px solid #000; border-right: 1px solid #000;"/>
              </v-flex>
              <v-flex xs12 md6>
                <articleWithoutImg id="secondary-articles" style="border-top: 1px solid #000;"/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3>

            <sideArticle2 id="side-article"/>
            <sideArticle2 id="side-article2"/>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>

    <footerComp/>
  </div>
</template>

<style>
  #side-news {
    border-left: 1px solid #000;
  }
  
  #side-article {
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 10px;
  }

  #side-article2{
    border-left: 1px solid #000;
    padding: 10px;
  }

  @media screen and (max-width: 959px) {
    #side-news {
      border-left: none;
    }

    #side-article {
      border-top: none;
      border-left: none;
      border-bottom: none;
    }

    #side-article2 {
      border-left: none;
    }

    #secondary-articles {
      display: none;
    }
  }
</style>


<script>
import articleWithImg from "~/components/articles/articleWithImg.vue";
import articleWithoutImg from "~/components/articles/articleWithoutImg.vue";
import sideArticle1 from "~/components/sideArticles/sideArticle1.vue";
import sideArticle2 from "~/components/sideArticles/sideArticle2.vue";
import articleCardView from "~/components/articles/articleCardView.vue";
import header from "~/components/navbar/header.vue";
import navbar from "~/components/navbar/navbar.vue";
import banner from "~/components/navbar/banner.vue";
import drawer from "~/components/navbar/drawer.vue";
import newsContainer from "~/components/newsContainer.vue";
import sideNews from "~/components/sideNews.vue";
import fullContainer from "~/components/fullContainer.vue";
import afterFullContainer from "~/components/afterFullContainer.vue";
import sideNews2 from "~/components/sideNews2.vue";
import footerComp from "~/components/footerComp.vue";
import seccionView from "~/components/seccionView.vue";


export default {
  head() {
    return {
      title: this.$route.params.title
    }
  },
  data() {
    return {
      config: {
        drawer: false
      },
      icons: {
        link1: {
          icon: "fab fa-facebook",
          url: "www.facebook.com"
        },
        link2: {
          icon: "fab fa-twitter",
          url: "www.twitter.com"
        },
        link3: {
          icon: "fab fa-instagram",
          url: "www.instagram.com"
        }
      }
    };
  },
  components: {
    headerComp: header,
    navbar,
    banner,
    drawer,
    newsContainer,
    sideNews,
    fullContainer,
    afterFullContainer,
    sideNews2,
    footerComp,
    seccionView,
    articleCardView,
    sideArticle1,
    sideArticle2,
    articleWithImg,
    articleWithoutImg
  }
};
</script>


