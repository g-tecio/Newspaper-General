<template id="main_template">
  <div>
    <square-loader :loading="loading" :color="color" :size="size"></square-loader>
    <!-- <pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader> -->
    <rise-loader :loading="loading" :color="color" :size="size"></rise-loader>
    <div v-if="loadingTitle">
      <v-container>
        <headerComp/>

        <navbar :config="config"/>

        <banner/>

        <drawer :config="config"/>

        <v-layout row wrap>
          <v-flex xs12 md9 id="newsContainer">
            <newsContainer v-bind:config="value"/>
          </v-flex>

          <v-flex xs12 md3 id="sideNews" class="hidden-sm-and-down">
            <sideNews/>
          </v-flex>

          <v-flex xs12 md12 id="fullContainer">
            <fullContainer/>
          </v-flex>

          <v-flex xs12 md9 id="afterFull">
            <afterFullContainer/>
          </v-flex>

          <v-flex xs12 md3 id="sideNews2" class="hidden-sm-and-down">
            <sideNews2/>
          </v-flex>
        </v-layout>
      </v-container>

      <footerComp/>
    </div>

    <!-- <div id="main_div"></div> -->
  </div>
</template>

<script>
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
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import SquareLoader from "vue-spinner/src/SquareLoader.vue";
import RiseLoader from "vue-spinner/src/RiseLoader.vue";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import axios from "axios";
import { setTimeout } from "timers";

export default {
  created: function() {
    var that = this;

    axios
      .get(
        "https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev/articles"
      )
      .then(function(response) {
        //that.value = response.data;
        //setInterval("showAnimation()", 100000);
        that.loading = false;
        that.loadingTitle = true;
      });
  },
  data() {
    return {
      color: "#821900",
      size: "100px",
      loading: true,
      loadingTitle: false,
      value: {},
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
    newsContainer,
    sideNews,
    fullContainer,
    afterFullContainer,
    sideNews2,
    footerComp,
    seccionView,
    PacmanLoader,
    SquareLoader,
    RiseLoader,
    MoonLoader
  }
};
</script>

<style>
#newsContainer {
  padding-top: 10px;
  border-bottom: 2px solid #000;
}
#sideNews {
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  padding-top: 10px;
}
#fullContainer {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
#sideNews2 {
  border-left: 1px solid #000;
}
</style>
