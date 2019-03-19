<template>
  <v-container class="header_container">
    <v-layout row wrap>
      <v-flex xs0 md4></v-flex>
      <v-flex xs12 md4>
        <router-link to="/">
          <v-img
            src="https://s3.amazonaws.com/newspaper-bucket-cwgx/Progressive+Oficial+Black+600.png"
          ></v-img>
        </router-link>
      </v-flex>
      <v-flex xs0 md4></v-flex>
      <v-toolbar class="hidden-sm-and-down" id="info-toolbar">
        <v-btn flat small disabled>{{date}}</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in button_options"
          :key="item"
          :to="item.path"
          flat
          small
        >{{ item.title }}</v-btn>
      </v-toolbar>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: "Marzo 19, 2019, Victoria de Durango, Durango",
      button_options: [{ title: "Registrarse" }, { title: "Iniciar Sesión" }]
    };
  }
};
</script>

<style>
.container .header_container {
  padding: 0;
}
#info-toolbar {
  box-shadow: inherit;
  background-color: inherit;
}
.theme--light.v-toolbar {
  background-color: inherit;
}
</style>
