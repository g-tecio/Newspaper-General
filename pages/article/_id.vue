<template>
  <div>
    <v-container>
      <headerComp/>

      <navbar :config="config"/>

      <!-- <banner/> -->

      <drawer :config="config"/>
      <br>
      <v-layout row wrap>
        <articleCardView :config="$route.params"/>
        <v-layout row wrap>
          <v-flex xs12 md9>
            <v-layout row wrap>
              <v-flex xs12 md12 id="articleContainer" style="margin-right:5%">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus ullamcorper, rutrum lacus vitae, sollicitudin augue. Proin rhoncus facilisis eros vel vestibulum. Nulla facilisi. Donec eu ex sed nulla congue imperdiet. Nulla facilisi. Quisque eleifend aliquet metus, tempor sodales neque condimentum sit amet. Aenean eu viverra lorem, sit amet eleifend erat. In suscipit hendrerit libero vitae auctor. Curabitur nibh nisl, egestas a nisl at, luctus eleifend sem</p>
                <br>
                <p>Vivamus id sollicitudin massa, vitae bibendum ipsum. Sed finibus neque eu enim convallis, et convallis tortor porta. Integer consequat commodo risus quis posuere. Quisque bibendum erat quis nulla lobortis gravida. Suspendisse potenti. Curabitur eget ullamcorper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis ligula non ex ullamcorper maximus. Aliquam convallis, nisl eu cursus imperdiet, risus odio sodales magna, non sollicitudin mi ex eu est. Vivamus commodo enim at est tincidunt dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus sollicitudin sem, quis tempus eros ultrices non. Suspendisse eget mauris erat. Sed nec eros at lectus tristique fermentum a a elit.</p>
                <br>
                <p>Vivamus id sollicitudin massa, vitae bibendum ipsum. Sed finibus neque eu enim convallis, et convallis tortor porta. Integer consequat commodo risus quis posuere. Quisque bibendum erat quis nulla lobortis gravida. Suspendisse potenti. Curabitur eget ullamcorper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis ligula non ex ullamcorper maximus. Aliquam convallis, nisl eu cursus imperdiet, risus odio sodales magna, non sollicitudin mi ex eu est. Vivamus commodo enim at est tincidunt dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus sollicitudin sem, quis tempus eros ultrices non. Suspendisse eget mauris erat. Sed nec eros at lectus tristique fermentum a a elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus ullamcorper, rutrum lacus vitae, sollicitudin augue. Proin rhoncus facilisis eros vel vestibulum. Nulla facilisi. Donec eu ex sed nulla congue imperdiet. Nulla facilisi. Quisque eleifend aliquet metus, tempor sodales neque condimentum sit amet. Aenean eu viverra lorem, sit amet eleifend erat. In suscipit hendrerit libero vitae auctor. Curabitur nibh nisl, egestas a nisl at, luctus eleifend sem</p>
                <br>
                <p>Vivamus id sollicitudin massa, vitae bibendum ipsum. Sed finibus neque eu enim convallis, et convallis tortor porta. Integer consequat commodo risus quis posuere. Quisque bibendum erat quis nulla lobortis gravida. Suspendisse potenti. Curabitur eget ullamcorper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis ligula non ex ullamcorper maximus. Aliquam convallis, nisl eu cursus imperdiet, risus odio sodales magna, non sollicitudin mi ex eu est. Vivamus commodo enim at est tincidunt dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus sollicitudin sem, quis tempus eros ultrices non. Suspendisse eget mauris erat. Sed nec eros at lectus tristique fermentum a a elit.</p>
                <br>
                <p>Vivamus id sollicitudin massa, vitae bibendum ipsum. Sed finibus neque eu enim convallis, et convallis tortor porta. Integer consequat commodo risus quis posuere. Quisque bibendum erat quis nulla lobortis gravida. Suspendisse potenti. Curabitur eget ullamcorper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis ligula non ex ullamcorper maximus. Aliquam convallis, nisl eu cursus imperdiet, risus odio sodales magna, non sollicitudin mi ex eu est. Vivamus commodo enim at est tincidunt dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus sollicitudin sem, quis tempus eros ultrices non. Suspendisse eget mauris erat. Sed nec eros at lectus tristique fermentum a a elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus ullamcorper, rutrum lacus vitae, sollicitudin augue. Proin rhoncus facilisis eros vel vestibulum. Nulla facilisi. Donec eu ex sed nulla congue imperdiet. Nulla facilisi. Quisque eleifend aliquet metus, tempor sodales neque condimentum sit amet. Aenean eu viverra lorem, sit amet eleifend erat. In suscipit hendrerit libero vitae auctor. Curabitur nibh nisl, egestas a nisl at, luctus eleifend sem</p>
                <br>
                <p>Vivamus id sollicitudin massa, vitae bibendum ipsum. Sed finibus neque eu enim convallis, et convallis tortor porta. Integer consequat commodo risus quis posuere. Quisque bibendum erat quis nulla lobortis gravida. Suspendisse potenti. Curabitur eget ullamcorper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis ligula non ex ullamcorper maximus. Aliquam convallis, nisl eu cursus imperdiet, risus odio sodales magna, non sollicitudin mi ex eu est. Vivamus commodo enim at est tincidunt dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus sollicitudin sem, quis tempus eros ultrices non. Suspendisse eget mauris erat. Sed nec eros at lectus tristique fermentum a a elit.</p>
                <br>
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
            <sideNews id="side-news"/>
            <sideArticle2 id="side-article"/>
            <sideArticle2 id="side-article"/>
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
    border-top: 1px solid #000;
    padding: 5px;
  }

  @media screen and (max-width: 959px) {
    #side-news {
      border-left: none;
    }

    #side-article {
      border-left: none;
      border-top: none;
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


