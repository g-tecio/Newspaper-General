<template>
  <div>
    <v-toolbar class="style_toolbar">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-lg" id="items-toolbar">
        <v-btn
          v-for="item in toolbar_options"
          :key="item.name"
          :to="{name: 'category-category', params: { category: item.name, obj: item } }"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
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
        { title: "Durango", name: "durango", img: "https://dnhlxboen03kq.cloudfront.net/Durango230.png", color: "#0051AF"},
        { title: "Justicia", name: "justicia", img: "https://dnhlxboen03kq.cloudfront.net/Justicia230.png", color: "#9A2E00"},
        { title: "Regional", name: "regional", img: "https://dnhlxboen03kq.cloudfront.net/Regional230.png", color: "#9A9400"},
        { title: "Nacional", name: "nacional", img: "https://dnhlxboen03kq.cloudfront.net/Nacional230.png", color: "#FF6007"},
        { title: "Internacional", name: "internacional", img: "https://dnhlxboen03kq.cloudfront.net/Intenacional230.png", color: "#D60000"},
        { title: "Deportes", name: "deportes", img: "https://dnhlxboen03kq.cloudfront.net/Deportes230.png", color: "#399A00"},
        { title: "Kiosko", name: "kiosko", img: "https://dnhlxboen03kq.cloudfront.net/Kiosko230.png", color: "#56009A"},
        { title: "Nosotros", name: "nosotros" ,img: "https://dnhlxboen03kq.cloudfront.net/Nosotros230.png", color: "#9D315F"}
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


::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    height: 0px;
    background: transparent;  /* optional: just make scrollbar invisible */
}


@media screen and (max-width: 959px){
  .v-toolbar__content, .v-toolbar__extension{
    padding: 0;
  }
  #items-toolbar{
    padding-left: 0;
  }
}
</style>
