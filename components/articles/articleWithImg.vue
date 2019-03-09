<template>
    <v-card id="articleWithoutImg">
        <v-container>
            <v-img
                class="white--text"
                height="130px"
                :src="imageUrl"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline">{{title}}</span>
                        </v-flex>
                        </v-layout>
                    </v-container>
            </v-img>
        
            <v-card-title primary-title>
                <div>
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
        </v-container>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: 'Times are changing',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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