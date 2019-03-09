<template>
    <v-layout  class="hidden-sm-and-down" id="bannerNews">
        <v-flex xs12 md4 id="bannerArticle">
            <firstBannerArticle/>
        </v-flex>
        <v-flex xs12 md4 id="bannerArticle">
            <secondBannerArticle/>
        </v-flex>
        <v-flex xs12 md2 id="bannerArticle">
            <finance/>
        </v-flex>
        <v-flex xs12 md2 id="bannerArticle">
            <weather/>
        </v-flex>
    </v-layout>
</template>

<script>

import firstBannerArticle from '~/components/banners/firstBannerArticle.vue'
import secondBannerArticle from '~/components/banners/secondBannerArticle.vue'
import weather from '~/components/banners/weather.vue'
import finance from '~/components/banners/finance.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        firstBannerArticle,
        secondBannerArticle,
        weather,
        finance
    }
}
</script>

<style>
    #bannerNews{
        border-bottom: 2px solid #000;
    }
    #bannerArticle{
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>

