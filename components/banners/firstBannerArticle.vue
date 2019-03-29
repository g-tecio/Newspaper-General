<template>
  <v-card id="firstArticleStyle">
    <v-layout row>
      <v-flex xs5>
        <router-link
          :to="{name: 'article-id', params: { id: article.id, article: article } }"
        >
          <v-img :src="article.imageUrl" height="125px" contain></v-img>
        </router-link>
      </v-flex>
      <v-flex xs7>
        <h3 id="articleTitle1">{{article.title}}</h3>
        <!-- <p>{{article.info}}</p> -->
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      article: {
        id: '9dkA18Qs',
        imageUrl: "https://s3.amazonaws.com/events-prototype/11.jpeg",
        title: "Invitan a cuatro empresas a licitación de refinería",
        info:
          "La secretaria de Energía, Rocío Nahle entregó este lunes las invitaciones a cuatro empresas para participar en la licitación"
      }
    };
  }
};
</script>

<style>
    #firstArticleStyle{
      padding: 10px;
      padding-top: 5px;
      box-shadow: inherit;
      background-color: inherit;
      padding-left: 20px;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
    #info-content-2{
        padding-right: 5px;
        padding-top: 10px;
        padding-left: 15px;
    }
    #articleTitle1{
      padding: 15px;
      text-align: left;
      font-weight: 400;
      line-height: 32px !important;
      letter-spacing: normal !important;
      font-family: 'Roboto', sans-serif !important;
    }
</style>
