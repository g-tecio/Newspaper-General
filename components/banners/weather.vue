<template>
    <v-card id="weatherArticleStyle">
        <v-layout row>
            <v-flex xs7>
                <v-img
                    :src="urlImage"
                    height="125px"
                    contain
                ></v-img>
            </v-flex>
            <v-flex xs5>
                <div class="weather-content">
                    <div class="headline">22°C</div>
                    <div>Durango, Mex</div>
                </div>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            urlImage: 'https://images.vexels.com/media/users/3/129825/isolated/preview/716731eeb4a94cce54189544041cf3af-cloud-outline-icon-by-vexels.png'
        }
    }
}
</script>

<style>
    #weatherArticleStyle{
        padding-top: 5px;
        box-shadow: inherit;
        background-color: inherit;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
    .weather-content{
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        padding-left: 10px;
    }
</style>

