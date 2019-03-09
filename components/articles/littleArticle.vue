<template>
    <v-container>
        <v-card id="littleArticle">
            <v-card-title primary-title id="littleArticleTitle">
                <div>
                    <h1 class="headline mb-0">{{title}}</h1>
                    <p> {{ info }} </p>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-layout
                    align-center
                    justify-center
                >
                    <v-btn flat color="red">Show more</v-btn>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: 'Times are changing',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            date: 'February 12, 2019'
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