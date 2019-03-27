<template>
  <v-card id="sideArticle2">
    <v-img :src="value.cover_image" aspect-ratio="2.75"></v-img>
    <v-card-title primary-title id="sideArticle2Title">
      <div>
        <h1 class="headline mb-0">{{value.title}}</h1>
        <p>{{value.subtitle}}</p>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat disabled>{{article.date}}</v-btn>
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
  data() {
    return {
      value: {},
      article: {
        id: "96eS34dpbD",
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
        title: "Times are changing",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "February 12, 2019"
      }
    };
  }
};
</script>

<style>
#sideArticle2 {
  box-shadow: inherit;
  background-color: inherit;
  border-bottom: 1px solid #000;
  padding: 5px;
}
#sideArticle2Title h1 {
  text-align: center;
}
#sideArticle2Title p {
  text-align: center;
}
.theme--light.v-sheet {
  background-color: inherit;
}
</style>
