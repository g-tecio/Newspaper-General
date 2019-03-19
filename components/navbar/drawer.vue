<template>
  <v-navigation-drawer
    v-model="config.drawer"
    :mini-variant="mini"
    absolute
    temporary
    id="drawer_style"
  >
    <v-list class="pa-1" id="vlist-title">
      <v-list-tile avatar>
        <v-container>
          <v-img
            src="https://s3.amazonaws.com/newspaper-bucket-cwgx/Progressive+Oficial+Black+600.png"
            height="80px"
          ></v-img>
        </v-container>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in toolbar_options" :key="item.path" :to="{name: 'category-category', params: { category: item.title, img: item.img } }">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["config"],
  data() {
    return {
      title: "El General",
      responsive: false,
      responsiveInput: false,
      toolbar_options: [
        { title: "Internacional", img: 40 },
        { title: "Política", img: 41 },
        { title: "Negocios", img: 42 },
        { title: "Opinión", img: 43 },
        { title: "Tecnología", img: 44 },
        { title: "Ciencia", img: 45 },
        { title: "Salud", img: 46 },
        { title: "Deportes", img: 47 },
        { title: "Artes", img: 48 }
        // {title: 'Style'},
        // {title: 'Food'},
        // {title: 'Travel'},
        // {title: 'Magazine'}
      ]
    };
  }
};
</script>

<style>
#vlist-title {
  height: 120px;
}
#drawer_style {
  z-index: 1000000;
  position: fixed;
}
</style>


