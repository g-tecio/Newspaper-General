<template>
    <v-card id="firstArticleStyle">
        <v-layout row>
            <v-flex xs5>
                <v-img
                    src="https://picsum.photos/125/125/?random"
                    height="125px"
                    contain
                ></v-img>
            </v-flex>
            <v-flex xs7>
                <div id="info-content-1">
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
            title: 'Times are changing',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    }
}
</script>

<style>
    #firstArticleStyle{
        box-shadow: inherit;
        background-color: inherit;
        border-right: 1px solid #000;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
    #info-content-1{
        padding-right: 5px;
    }
</style>
