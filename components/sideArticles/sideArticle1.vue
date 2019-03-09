<template>
    <v-card id="sideArticle">
        <v-card-title primary-title>
            <div>
                <h1 class="headline mb-0">{{title}}</h1>
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
            date: 'February 12, 2019'
        }
    }
}
</script>

<style>
    #sideArticle{
        box-shadow: inherit;
        background-color: inherit;
        border-bottom: 1px solid #000;
        padding: 5px;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
</style>

