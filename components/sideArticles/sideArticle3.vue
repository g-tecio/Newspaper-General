<template>
    <v-card id="sideArticle3">
        <v-card-title primary-title id="sideArticle3Title">
            <div>
                <h1 class="headline mb-0">{{$store.state.articles[random].title}}</h1>
                <p>{{$store.state.articles[random].info}}</p>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat disabled>{{$store.state.articles[random].date}}</v-btn>
            <v-layout
                align-center
                justify-end
            >
                <v-btn :to="{name: 'article-id', params: { id: $store.state.articles[random].id, article: $store.state.articles[random] } }" flat color="red" slot="end">Mostrar más</v-btn>
            </v-layout>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            random: Math.floor(Math.random() * 10),
        }
    }
}
</script>

<style>
    #sideArticle3{
        box-shadow: inherit;
        background-color: inherit;
        padding: 5px;
    }
    #sideArticle3Title h1{
        text-align: center;
    }
    #sideArticle3Title p{
        text-align: center;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
</style>