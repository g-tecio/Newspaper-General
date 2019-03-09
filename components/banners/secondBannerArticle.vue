<template>
    <v-card id="secondArticleStyle">
        <v-layout row>
            <v-flex xs5>
                <v-img
                    :src="urlImage"
                    height="125px"
                    contain
                ></v-img>
            </v-flex>
            <v-flex xs7>
                <div id="info-content-2">
                    <h4 class="headline">{{title}}</h4>
                    <p>{{info}}</p>
                </div>
            </v-flex>
        </v-layout>
    </v-card>    
</template>

<script>
export default {
    data () {
        return {
            urlImage: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Times are changing',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    }
}
</script>

<style>
    #secondArticleStyle{
        box-shadow: inherit;
        background-color: inherit;
        border-right: 1px solid #000;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
    #info-content-2{
        padding-right: 5px;
    }
</style>
