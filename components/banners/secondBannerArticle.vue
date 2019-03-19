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
          <p class="headline">{{article.title}}</p>
          <!-- <p>{{article.info}}</p> -->
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
        imageUrl: "https://s3.amazonaws.com/events-prototype/12.jpeg",
        title: "Pronostican registro de nevadas en sierra de Durango",
        info:
          "(Conagua) informó que este lunes no se descarta la posibilidad del registro de nieve."
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
  padding-left: 5px;
}
.theme--light.v-sheet {
  background-color: inherit;
}
#info-content-2 {
  padding-right: 5px;
  padding-left: 15px;
}
</style>
