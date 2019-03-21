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
            src="https://www.elsiglodedurango.com.mx/m/files/ndurango/logod.png"
            height="80px"
          ></v-img>
        </v-container>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in toolbar_options" :key="item.path" :to="{name: 'category-category', params: { category: item.name, img: item.img } }">
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
        { title: "Durango", name: "durango", img: 41},
        { title: "Justicia", name: "justicia", img: 42},
        { title: "Regional", name: "regional", img: 43},
        { title: "Nacional", name: "nacional", img: 44},
        { title: "Internacional", name: "internacional",img: 45},
        { title: "Deportes", name: "deportes",img: 46},
        { title: "Kiosko", name: "kiosko",img: 47},
        { title: "Nosotros", name: "nosotros",img: 48}
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


