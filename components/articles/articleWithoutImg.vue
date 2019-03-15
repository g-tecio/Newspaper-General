<template>
  <v-container>
    <v-card id="articleWithoutImg">
      <v-card-title primary-title>
        <div>
          <h1 class="headline mb-0">{{article.title}}</h1>
          <p>{{ article.info }}</p>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat disabled>{{article.date}}</v-btn>
        <v-layout align-center justify-end>
          <v-btn :to="{name: 'article-id', params: { id: article.id, title: article.title, content: article.info, image: article.imageUrl } }" flat color="red" slot="end">Show more</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      article: {
        id: '123ias03D',
        imageUrl: "https://picsum.photos/250/250/?image=41",
        title: "Times are changing",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "February 12, 2019"
      }
    };
  }
};
</script>

<style>
#articleWithoutImg {
  box-shadow: inherit;
  background-color: inherit;
}
.theme--light.v-sheet {
  background-color: inherit;
}
</style>
