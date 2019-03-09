<template>
    <v-layout row wrap>
        <v-flex xs12 md6 id="afterFull1">
            <firstArticle/>
        </v-flex>
        <v-flex xs12 md3 id="afterFull2">
            <littleArticle/>
        </v-flex>
        <v-flex xs12 md3 id="afterFull3">
            <littleArticle/>
        </v-flex>
        <v-flex xs12 md6 id="afterFull4">
            <firstArticle/>
        </v-flex>
        <v-flex xs12 md6 id="afterFull5">
            <secondArticle/>
        </v-flex>
    </v-layout>
</template>

<script>

import firstArticle from '~/components/articles/articleWithoutImg.vue'
import littleArticle from '~/components/articles/littleArticle.vue'
import secondArticle from '~/components/articles/articleWithImg.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        firstArticle,
        littleArticle,
        secondArticle
    }
}
</script>

<style>
    #afterFull1{
        border-right: 1px solid #000;
    }
    #afterFull2{
        border-right: 1px solid #000;
    }
    #afterFull4{
        border-top: 1px solid #000;
    }
    #afterFull5{
        border-top: 1px solid #000;
    }
</style>
