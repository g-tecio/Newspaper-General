<template>
  <v-card id="sideArticle">
    <v-card-title primary-title>
      <div>
        <h1 class="headline mb-0">{{title}}</h1>
      </div>
    </v-card-title>
    <v-card-actions id="sideArticleActions">
      <v-btn flat disabled>{{date}}</v-btn>
      <v-layout align-center justify-end>
        <v-btn flat color="red" slot="end">Show more</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: "Times are changing",
      date: "February 12, 2019"
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

