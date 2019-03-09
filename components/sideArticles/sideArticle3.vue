<template>
    <v-card id="sideArticle3">
        <v-card-title primary-title id="sideArticle3Title">
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