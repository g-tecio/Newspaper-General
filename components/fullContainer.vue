<template>
    <v-layout row wrap>
        <v-flex xs12 md6 id="article1">
            <secondArticle/>
        </v-flex>
        <v-flex xs12 md6 id="article2">
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