<template>
  <v-toolbar class="style_toolbar">
    <v-toolbar-items class="hidden-sm-and-down" id="items-toolbar">
      <v-btn
        v-for="item in toolbar_options"
        :key="item.title"
        :to="{name: 'category-category', params: { category: item.title, img: item.img } }"
        flat
      >{{ item.title }}</v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator" @click="config.drawer = true"></v-toolbar-side-icon>
    </v-menu>
  </v-toolbar>
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
        { title: "World", img: 40},
        { title: "Politics", img: 41},
        { title: "Business", img: 42},
        { title: "Opinion", img: 43},
        { title: "Tech", img: 44},
        { title: "Science", img: 45},
        { title: "Health", img: 46},
        { title: "Sports", img: 47},
        { title: "Arts", img: 48},
        // { title: "Books" },
        // { title: "Style" },
        // { title: "Food" }
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
}
.theme--light.v-toolbar {
  background-color: inherit;
}
#items-toolbar {
  padding-left: 10px;
}
</style>
