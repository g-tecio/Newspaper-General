<template>
  <v-card id="firstArticleStyle">
    <v-layout row>
      <v-flex xs5>
        <router-link
          :to="{name: 'article-id', params: { id: value.id, title: value.title, content: value.subtitle, image: value.cover_image, author: value.author, article: value.article } }"
        >
          <v-img :src="value.cover_image" height="125px" contain></v-img>
        </router-link>
      </v-flex>
      <v-flex xs7>
        <div id="info-content-1">
          <h4 class="headline">{{value.title}}</h4>
          <p>{{value.subtitle}}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import $ from "jquery";
var axios = require("axios");
export default {
  created: function() {
    var that = this;
    axios
      .get(
        "https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev/randpost"
      )
      .then(function(response) {
        that.value = response.data;
      });
  },
  data() {
    return {
      value: {},
      title: "Times are changing",
      info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    };
  }
};
</script>

<style>
#firstArticleStyle {
  box-shadow: inherit;
  background-color: inherit;
  border-right: 1px solid #000;
}
.theme--light.v-sheet {
  background-color: inherit;
}
#info-content-1 {
  padding-right: 5px;
}
</style>
