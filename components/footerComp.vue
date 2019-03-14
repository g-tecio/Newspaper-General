<template>
  <v-footer dark height="auto">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    >
    <v-card class="flex" flat tile>
      <v-card-title class="grey">
        <v-flex xs12 md3>
          <v-img
            src="https://s3.amazonaws.com/nh-prototype/El+General+Oficial+500x168.png"
            height="90px"
            contain
          ></v-img>
        </v-flex>
        <v-flex xs12 md1>
          <ul class="footerLinks">
            <li>
              <a href>Home</a>
            </li>
            <li>
              <a href>Discovery</a>
            </li>
            <li>
              <a href>Photos</a>
            </li>
            <li>
              <a href>Contact</a>
            </li>
          </ul>
        </v-flex>

        <v-flex xs12 md1>
          <ul class="footerLinks">
            <li>
              <a href>About</a>
            </li>
            <li>
              <a href>Help</a>
            </li>
            <li>
              <a href>Terms</a>
            </li>
            <li>
              <a href>Guidlines</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md1>
          <ul class="footerLinks">
            <li>
              <a href>Testimonials</a>
            </li>
            <li>
              <a href>Adversite</a>
            </li>
            <li>
              <a href>Integrations</a>
            </li>
            <li>
              <a href>Carrers</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md3></v-flex>
        <v-flex xs12 md3>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <a :href="icon.url" class="footerLinks">
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </a>
          </v-btn>
        </v-flex>
        <!--
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>
        -->
      </v-card-title>

      <v-card-actions class="grey justify-center">
        &copy;2019 -
        <strong>El General MX</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<style>
.footerLinks {
  list-style: none;
  text-decoration: none;
  color: #ffffff;
}
.footerLinks a {
  color: #ffffff;
  font-size: 10px;
}
.footerLinks a:link {
  text-decoration: none;
}
.footerLinks a:visited {
  color: #ffffff;
}
.footerLinks a:active {
  color: #ffffff;
}
.footerLinks a:hover {
  color: #ffffff;
}
</style>

<script>
export default {
  data: () => ({
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
        icon: "fab fa-linkedin",
        url: "www.linkedin.com"
      },
      link4: {
        icon: "fab fa-instagram",
        url: "www.instagram.com"
      }
    }
  }),
  components: {}
};
</script>
