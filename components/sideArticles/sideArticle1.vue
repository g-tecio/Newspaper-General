<template>
  <v-card id="sideArticle">
    <v-card-title primary-title>
      <div>
        <h1 class="headline mb-0">{{$store.state.articles[random].title}}</h1>
      </div>
    </v-card-title>
    <v-card-actions id="sideArticleActions">
      <v-btn flat disabled>{{$store.state.articles[random].date}}</v-btn>
      <v-layout align-center justify-end>
        <v-btn :to="{name: 'article-id', params: { id: $store.state.articles[random].id, article: $store.state.articles[random] } }" flat color="red" slot="end">Show more</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      random: Math.floor(Math.random() * 10),
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

