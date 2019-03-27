<template>
  <div>
    <v-toolbar class="style_toolbar">
      <v-toolbar-items class="hidden-lg" id="items-toolbar">
        <v-btn
          v-for="item in toolbar_options"
          :key="item.name"
          :to="{name: 'category-category', params: { category: item.name, img: item.img } }"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["config"],
  data() {
    return {
      title: "New Horizon",
      responsive: true,
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
.style_toolbar {
  box-shadow: inherit;
  background-color: inherit;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.theme--light.v-toolbar {
  background-color: inherit;
}
#items-toolbar {
  padding-left: 10px; 
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    height: 0px;
    background: transparent;  /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */

@media screen and (min-width: 1268px){
  #items-toolbar {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
