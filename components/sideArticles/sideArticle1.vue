<template>
  <v-card id="sideArticle">
    <div class="titleSide">
      <h2 class="titleSideNew">{{$store.state.articles[page][random].title}}</h2>
    </div>
    <v-card-actions id="sideArticleActions">
      <v-btn flat disabled>{{$store.state.articles[page][random].date}}</v-btn>
      <v-layout align-center justify-end>
        <v-btn :to="{name: 'article-id', params: { id: $store.state.articles[page][random].id, article: $store.state.articles[page][random] } }" flat color="red" slot="end">Mostrar más</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    let page = (this.$route.params.category) ? this.$route.params.category : "principal";
    let random =  Math.floor(Math.random() * this.$store.state.articles[page].length);
    return {
      page: (this.$route.params.category) ? this.$route.params.category : "principal",
      random: Math.floor(Math.random() * this.$store.state.articles[page].length),
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
.titleSide{
  padding: 5%;
}
.theme--light.v-sheet {
  background-color: inherit;
}
#sideArticleActions .v-btn__content{
  font-size: 12px;
}
.titleSideNew{
  font-size: 22px !important;
  font-weight: 400;
  line-height: 32px !important;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}
</style>

