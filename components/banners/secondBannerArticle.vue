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
        <h3 id="articleTitle">{{article.title}}</h3>
        <!-- <p>{{article.info}}</p> -->
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
  padding: 10px;
  padding-top: 5px;
  box-shadow: inherit;
  background-color: inherit;
  padding-left: 20px;
}
.theme--light.v-sheet {
  background-color: inherit;
}
#articleTitle{
  padding: 15px;
  text-align: left;
  font-weight: 400;
  line-height: 32px !important;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}
</style>
