<template>
    <v-card id="sideArticle2">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title id="sideArticle2Title">
            <div>
                <h1 class="headline mb-0">{{title}}</h1>
                <p>{{info}}</p>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat disabled>{{date}}</v-btn>
            <v-layout
                align-center
                justify-end
            >
                <v-btn flat color="red" slot="end">Show more</v-btn>
            </v-layout>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            title: 'Times are changing',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            date: 'February 12, 2019'
        }
    }
}
</script>

<style>
    #sideArticle2{
        box-shadow: inherit;
        background-color: inherit;
        border-bottom: 1px solid #000;
        padding: 5px;
    }
    #sideArticle2Title h1{
        text-align: center;
    }
    #sideArticle2Title p{
        text-align: center;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
</style>