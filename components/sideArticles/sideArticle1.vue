<template>
  <v-card id="sideArticle">
    <v-card-title primary-title>
      <div>
        <h1 class="headline mb-0">{{$store.state.articles[page][random].title}}</h1>
      </div>
    </v-card-title>
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
.theme--light.v-sheet {
  background-color: inherit;
}
#sideArticleActions .v-btn__content{
  font-size: 12px;
}
</style>

