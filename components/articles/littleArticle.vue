<template>
  <v-container>
    <v-card id="littleArticle">
      <v-card-title primary-title id="littleArticleTitle">
        <div>
          <h1 class="headline mb-0">{{value.title}}</h1>
          <p>{{ value.subtitle }}</p>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-layout align-center justify-center>
          <v-btn
            :to="{name: 'article-id', params: { id: value.id, title: value.title, content: value.subtitle, image: value.cover_image, author: value.author, article: value.article }  }"
            flat
            color="red"
            slot="end"
          >Show more</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "February 12, 2019"
    };
  }
};
</script>

<style>
#littleArticle {
  box-shadow: inherit;
  background-color: inherit;
}
#littleArticleTitle h1 {
  text-align: center;
}
#littleArticleTitle p {
  text-align: center;
}
.theme--light.v-sheet {
  background-color: inherit;
}
</style>
