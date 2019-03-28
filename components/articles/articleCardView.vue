<template>
  <v-container class="articleCardContent">
    <v-layout row wrap>
      <v-flex xs12 md4>
        <v-layout row wrap>
          <v-flex xs12 md12>
              <h1>{{config.article.title}}</h1>
              <p>{{config.article.info}}</p>
              <v-img :src="'https://picsum.photos/1024/400/?image=5'" alt="Avatar" class="avatar"/>
              <p style="display: inline-block">by {{articleAuthor}}</p>
          </v-flex>
          <v-layout id="dateItems"  align-center justify-end>
            <v-flex xs12 md5>
              <h2 style="color:grey;">{{fecha}}</h2>
            </v-flex>
            <v-flex xs12 md7 class="icons">
              <v-btn v-for="icon in icons" :key="icon" class="mx-1 icons" dark icon>
                <a target="blank" :href="'https://' + icon.url" class="footerLinks2">
                  <v-icon size="20px">{{ icon.icon }}</v-icon>
                </a>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex xs12 md8>
        <v-img
          class="article-image"
          :src="config.article.imageUrl"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ["config"],
  data() {
    return {
      fecha: " " + this.getFecha() + "",
      articleTitle: "Titulo de la Nota",
      articleSubTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus ullamcorper,consectetur adipiscing elit. Duis sed purus ullamcorperconsectetur adipiscing elit. Duis sed purus ullamcorper",
      articleAuthor: "Pablo Suarez",
      icons: {
        link1: {
          icon: "fab fa-facebook",
          url: "www.facebook.com/cwgxio/"
        },
        link2: {
          icon: "fab fa-twitter",
          url: "www.twitter.com/cwgxio"
        },
        link3: {
          icon: "fab fa-linkedin",
          url: "www.linkedin.com/company/cwgx/"
        },
        link4: {
          icon: "fab fa-instagram",
          url: ""
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
.articleCardContent{
  border-bottom: 1px solid #000;
}
.icons{
  display: flex;
  justify-items: end;
  justify-content: end;
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
#dateItems{
  padding-top: 50%;
}
.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
}
.article-image {
  max-height: 400px;
  width: 100%;
  display: block;
  margin-left: 3%;
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

@media screen and (max-width: 959px) {
  .article-image {
    margin-left: 0%;
  }
  #dateItems{
  padding-top: 15%;
  }
  .articleCardContent{
    border-bottom: none;
  }
}
</style>
