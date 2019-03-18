<template>
  <v-layout row wrap>
    <v-flex xs12 md4>
      <v-layout row wrap>
        <v-flex xs12 md12>
          <h1 style="margin-top: 7%">{{config.article.title}}</h1>
          <p style="margin-right: 3%">{{config.article.info}}</p>
          <v-img :src="'https://picsum.photos/1024/400/?image=5'" alt="Avatar" class="avatar"/>
          <p style="display: inline-block">by {{articleAuthor}}</p>
        </v-flex>
        <v-layout row="wrap" style="margin-top:13%">
          <v-flex xs12 md6>
            <h2 style="color:grey;">{{fecha}}</h2>
          </v-flex>
          <v-flex xs12 md6 class="icons">
            <v-btn v-for="icon in icons" :key="icon" class="mx-1 icons" dark icon>
              <a :href="icon.url" class="footerLinks2">
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </a>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-layout>

      <div></div>
    </v-flex>
    <v-flex xs12 md8>
      <v-img
        class="article-image"
        :src="config.article.imageUrl"
        fluid-grow
        alt="Fluid-grow image"
        style="max-width: 100%; height: auto; max-height: 400px"
      />
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['config'],
  data() {
    return {
      
      fecha: " " + this.getFecha() + "",
      articleTitle: "Titulo de la Nota",
      articleSubTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus ullamcorper,consectetur adipiscing elit. Duis sed purus ullamcorperconsectetur adipiscing elit. Duis sed purus ullamcorper",
      articleAuthor: "Jhon Ackerman",
      icons: {
        link1: {
          icon: "fab fa-facebook",
          url: "www.facebook.com"
        },
        link2: {
          icon: "fab fa-twitter",
          url: "www.twitter.com"
        },
        link3: {
          icon: "fab fa-instagram",
          url: "www.instagram.com"
        }
      }
    };
  },
  methods: {
    getFecha: function() {
      var p = new Date();
      return (
        "" + p.getDate() + "/" + (p.getMonth() + 1) + "/" + p.getFullYear() + ""
      );
    }
  }
};
</script>
<style>
.icons {
  float: right;
  /*margin-top: 24%;*/
}
.footerLinks2 {
  list-style: none;
  text-decoration: none;
  color: grey;
}
.footerLinks2 a {
  color: grey;
  font-size: 10px;
}
.footerLinks2 a:link {
  text-decoration: none;
}
.footerLinks2 a:visited {
  color: grey;
}
.footerLinks2 a:active {
  color: grey;
}
.footerLinks2 a:hover {
  color: grey;
}
.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
}
.article-image {
  height: 100%;
  width: 100%;
  display: block;
  
}
#newsContainer {
  padding-top: 10px;
  border-bottom: 2px solid #000;
}
#sideNews {
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  padding-top: 10px;
}
#fullContainer {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
#sideNews2 {
  border-left: 1px solid #000;
}
</style>
