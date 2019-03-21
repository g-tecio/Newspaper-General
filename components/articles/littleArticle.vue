<template>
    <v-container>
        <v-card id="littleArticle">
            <v-card-title primary-title id="littleArticleTitle">
                <div>
                    <h1 class="headline mb-0">{{$store.state.articles[page][random].title}}</h1>
                    <!-- <p> {{ articles[random].info }} </p> -->
                </div>
            </v-card-title>
            <v-card-actions>
                <v-layout
                    align-center
                    justify-center
                >
                    <v-btn :to="{name: 'article-id', params: { id: $store.state.articles[page][random].id, article: $store.state.articles[page][random] } }" flat color="red">Mostrar más</v-btn>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data () {
        let page = (this.$route.params.category) ? this.$route.params.category : "principal";
        let random =  Math.floor(Math.random() * this.$store.state.articles[page].length);
        return {
            page: (this.$route.params.category) ? this.$route.params.category : "principal",
            random: Math.floor(Math.random() * this.$store.state.articles[page].length),
        }
    }
}
</script>

<style>
    #littleArticle{
        box-shadow: inherit;
        background-color: inherit;
    }
    #littleArticleTitle h1{
        text-align: center;
    }
    #littleArticleTitle p{
        text-align: center;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
</style>