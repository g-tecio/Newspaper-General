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
        <div id="info-content-2">
          <h4 class="headline">{{article.title}}</h4>
          <!-- <p>{{article.info}}</p> -->
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
        box-shadow: inherit;
        background-color: inherit;
        border-right: 1px solid #000;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
    #info-content-1{
        padding-right: 5px;
    }
</style>
