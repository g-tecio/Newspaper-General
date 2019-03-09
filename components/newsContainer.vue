<template>
    <v-layout row wrap>
        <v-flex xs12 md6 id="article1">
            <firstArticle/>
        </v-flex>
        <v-flex xs12 md6 id="article2">
            <secondArticle/>
        </v-flex>
        <v-flex xs12 md6 id="article3">
            <firstArticle/>
        </v-flex>
        <v-flex xs12 md6 id="article4">
            <secondArticle/>
        </v-flex>
    </v-layout>
</template>

<script>

import firstArticle from '~/components/articles/articleWithoutImg.vue'
import secondArticle from '~/components/articles/articleWithImg.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        firstArticle,
        secondArticle
    }
}
</script>

<style>
    #article1{
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
    }
    #article2{
        border-bottom: 1px solid #000;
    }
    #article3{
        border-right: 1px solid #000;
    }
</style>


