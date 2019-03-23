<template>
  <div>
    <v-container>
      <headerComp/>

      <navbar :config="config"/>

      <banner/>

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
                <articleWithImg style="border-top: 1px solid #000; border-right: 1px solid #000;"/>
              </v-flex>
              <v-flex xs12 md6>
                <articleWithoutImg style="border-top: 1px solid #000;"/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3>
            <sideNews style="border-left: 1px solid #000;"/>
            <sideArticle2 style="border-left: 1px solid #000; border-top: 1px solid #000;"/>
            <sideArticle2 style="border-left: 1px solid #000; border-top: 1px solid #000;"/>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>

    <footerComp/>
  </div>
</template>
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
/*$(document).ready(function() {
  alert("dbmndbs");
});*/
export default {
  data() {
    return {
      apiUrl: "https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev",
      info: "",
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
    loadData() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => (this.info = response));
      console.log("", this.info);
    },
    printData() {
      //alert("vbvbv");
      $(document).ready(function() {
        alert("dbmndbs");
      });
    }
  }
};
</script>


