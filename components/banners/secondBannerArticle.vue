<template>
  <v-card id="secondArticleStyle">
    <v-layout row>
      <v-flex xs5>
        <router-link
          :to="{name: 'article-id', params: { id: article.id, article: article } }"
        >
          <v-img :src="article.imageUrl" height="125px" contain></v-img>
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
let random = Math.floor(Math.random() * 10);
export default {
  data() {
    return {
      article: {
        id: '9dka123s',
        imageUrl: "https://picsum.photos/250/250/?image=" + Math.floor(Math.random() * 101),
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
