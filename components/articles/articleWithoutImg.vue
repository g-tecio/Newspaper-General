<template>
    <v-container>
        <v-card id="articleWithoutImg">
            <v-card-title primary-title>
                <div>
                    <h1 class="headline mb-0">{{title}}</h1>
                    <p> {{ info }} </p>
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
    </v-container>
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
    #articleWithoutImg{
        box-shadow: inherit;
        background-color: inherit;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
</style>
