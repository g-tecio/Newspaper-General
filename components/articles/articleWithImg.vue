<template>
  <v-card id="articleWithoutImg">
    <v-container>
      <v-img class="white--text" height="130px" :src="$store.state.articles[random].imageUrl">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{$store.state.articles[random].title}}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>

      <v-card-title primary-title>
        <div>
          <p>{{ $store.state.articles[random].info }}</p>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat disabled>{{$store.state.articles[random].date}}</v-btn>
        <v-layout align-center justify-end>
          <v-btn :to="{name: 'article-id', params: { id: $store.state.articles[random].id, article: $store.state.articles[random] } }" flat color="red" slot="end">Mostrar más</v-btn>
        </v-layout>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      random: Math.floor(Math.random() * 10),
      article: {
        id: '84AdweQo21',
        imageUrl: "https://picsum.photos/250/250/?image=" + Math.floor(Math.random() * 101),
        title: "Times are changing",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
