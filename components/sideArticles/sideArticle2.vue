<template>
  <v-card id="sideArticle2">
    <v-img :src="$store.state.articles[page][random].imageUrl" aspect-ratio="2.75"></v-img>
    <v-card-title primary-title id="sideArticle2Title">
      <div>
        <h1 class="headline mb-0">{{$store.state.articles[page][random].title}}</h1>
        <p>{{$store.state.articles[page][random].info}}</p>
      </div>
    </v-card-title>
    <v-card-actions id="sideArticleActions2">
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
#sideArticle2 {
  box-shadow: inherit;
  background-color: inherit;
  border-bottom: 1px solid #000;
  padding: 5px;
}
#sideArticle2Title h1 {
  text-align: center;
}
#sideArticle2Title p {
  text-align: center;
}
.theme--light.v-sheet {
  background-color: inherit;
}
#sideArticleActions2 .v-btn__content{
  font-size: 12px;
}
</style>