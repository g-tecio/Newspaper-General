<template>
    <v-card id="financeArticleStyle">
        <v-layout row>
            <v-flex xs7>
                <v-img
                    :src="urlImage"
                    height="125px"
                    contain
                ></v-img>
            </v-flex>
            <v-flex xs5>
                <div class="finance-content">
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
            urlImage: 'https://cdn.iconscout.com/icon/free/png-256/dollar-sign-currency-income-omy-money-finance-symbol-44624.png'
        }
    }
}
</script>

<style>
    #financeArticleStyle{
        box-shadow: inherit;
        background-color: inherit;
        border-right: 1px solid #000;
    }
    .theme--light.v-sheet{
        background-color: inherit;
    }
    .finance-content{
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        padding-left: 10px;
    }
</style>