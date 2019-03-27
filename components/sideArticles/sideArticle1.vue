<template>
  <v-card id="sideArticle">
    <v-card-title primary-title>
      <div>
        <h1 class="headline mb-0">{{value.title}}</h1>
      </div>
    </v-card-title>
    <v-card-actions id="sideArticleActions">
      <v-btn flat disabled>{{date}}</v-btn>
      <v-layout align-center justify-end>
        <v-btn
          :to="{name: 'article-id', params: { id: value.id, title: value.title, content: value.subtitle, image: value.cover_image, author: value.author, article: value.article }  }"
          flat
          color="red"
          slot="end"
        >Show more</v-btn>
      </v-layout>
    </v-card-actions>
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
  props: ["config"],
  data() {
    return {
      value: {},
      title: "Times are changing",
      date: "February 12, 2019"
    };
  }
};
</script>

<style>
#sideArticle {
  box-shadow: inherit;
  background-color: inherit;
  padding: 5px;
}
.theme--light.v-sheet {
  background-color: inherit;
}
#sideArticleActions .v-btn__content {
  font-size: 12px;
}
</style>

