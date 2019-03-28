<template>
  <div id="main-container">
    <v-toolbar class="reader-toolbar">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="btn-reader" flat icon color="black" v-on:click="backgroundChange()">
          <v-icon>remove_red_eye</v-icon>
        </v-btn>
        <v-btn class="btn-reader" flat icon color="black" v-on:click="fontSizeChange()">
          <v-icon>text_fields</v-icon>
        </v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
    <v-container id="content-container">
      
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
  .btn-reader {
    float: right;
    margin-bottom: 10px;
  }

  .reader-toolbar {
    box-shadow: inherit;
    background-color: #9D9D9D !important;
    position: fixed;
    z-index: 1000;
  }

  

  @media screen and (min-width: 959px){
    .reader-toolbar {
      display: none;
    }
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
    #content-container {
      margin-top: 40px;
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
    let readerView = false;
    let fontSize = false;
    return {
      title: this.$route.params.title,
      readerView: false,
      fontSize: false
    }
  },
  data() {
    return {
      label: "desactivada",
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
  },
  methods: {
    backgroundChange: function () {
      var content = document.getElementById('main-container');
      if (!this.readerView) {
        content.style.background = "#FBF0D9";
        content.style.color = "#5F4B32";
        this.readerView = !this.readerView;
      } else {
        content.style.background = "#FAFAFA";
        content.style.color = "#000";
        this.readerView = !this.readerView;
      }
      
    },
    fontSizeChange: function () {
      var text = document.getElementById('articleContainer');
      var info = document.getElementById('articleInfo');
      if (!this.fontSize) {
        text.style.fontSize = "24px";
        info.style.fontSize = "24px";
        this.fontSize = !this.fontSize;
      } else {
        text.style.fontSize = "14px";
        info.style.fontSize = "14px";
        this.fontSize = !this.fontSize;
      }
    }
  }
};
</script>


