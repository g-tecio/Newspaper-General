<template>
  <v-card id="articleWithoutImg">
    <v-container>
      <v-img id="card-image" class="white--text card-image" :src="$store.state.articles[page][random].imageUrl">
        <v-container class="white-text-image" fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{$store.state.articles[page][random].title}}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>

      <v-card-title primary-title>
        <div>
          <p>{{ $store.state.articles[page][random].info }}</p>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat disabled>{{$store.state.articles[page][random].date}}</v-btn>
        <v-layout align-center justify-end>
          <v-btn :to="{name: 'article-id', params: { id: $store.state.articles[page][random].id, article: $store.state.articles[page][random] } }" flat color="red" slot="end">Mostrar más</v-btn>
        </v-layout>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    let page = (this.$route.params.category) ? this.$route.params.category : "principal";
    let random =  Math.floor(Math.random() * this.$store.state.articles[page].length);
    return {
      page: (this.$route.params.category) ? this.$route.params.category : "principal",
      random: Math.floor(Math.random() * this.$store.state.articles[page].length)
    };
  }
};
</script>

<style>
#articleWithoutImg {
  box-shadow: inherit !important;
  background-color: inherit;
}
.theme--light.v-sheet {
  background-color: inherit;
}
.white-text-image {
  background: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2));
}
#card-image {
  height: 130px;
}

@media screen and (max-width: 959px) {
  #card-image {
    height: 200px;
  }
}
@media screen and (max-width: 700px) {
  #card-image {
    height: 300px;
  }
}


</style>
