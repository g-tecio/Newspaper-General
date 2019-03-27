<template>
  <v-card id="articleWithoutImg">
    <v-container>
      <v-img class="white--text" height="130px" :src="value.cover_image">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{value.title}}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>

      <v-card-title primary-title>
        <div>
          <p>{{ value.subtitle }}</p>
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
    </v-container>
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
      article: {
        id: "84AdweQo21",
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Times are changing",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "February 12, 2019"
      }
    };
  }
};
</script>

<style>
#articleWithoutImg {
  box-shadow: inherit;
  background-color: inherit;
}
.theme--light.v-sheet {
  background-color: inherit;
}
</style>
