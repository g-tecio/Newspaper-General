<template>
  <v-card id="secondArticleStyle">
    <v-layout row>
      <v-flex xs5>
        <router-link
          :to="{name: 'article-id', params: { id: article.id, title: article.title, content: article.info, image: article.urlImage } }"
        >
          <v-img :src="article.urlImage" height="125px" contain></v-img>
        </router-link>
      </v-flex>
      <v-flex xs7>
        <div id="info-content-2">
          <h4 class="headline">{{article.title}}</h4>
          <p>{{article.info}}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      article: {
        id: '9dka123s',
        urlImage: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Times are changing",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    };
  }
};
</script>

<style>
#secondArticleStyle {
  box-shadow: inherit;
  background-color: inherit;
  border-right: 1px solid #000;
}
.theme--light.v-sheet {
  background-color: inherit;
}
#info-content-2 {
  padding-right: 5px;
}
</style>
