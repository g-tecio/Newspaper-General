<template>
  <v-footer class="footerCompany" height="auto" dark>
    <v-divider></v-divider>
    <v-card flat tile>
      <v-layout row wrap>
        <v-flex xs12 md4 id="sectionFooter">
          <hr class="clearfix w-100 clearfix d-md-none"/>
          <h4 class="text-uppercase mb-4 font-weight-bold">El Siglo de Durango</h4>
          <hr class="clearfix w-100 clearfix d-md-none"/>
          <p>© 2019. El Siglo - Cía. Editora de la Laguna S.A. de C.V. Todos los derechos reservados.</p>
          <v-img
            src="https://s3.amazonaws.com/events-prototype/logo-el-siglo-de-durango.png"
            height="90px"
            contain
          ></v-img>
        </v-flex>
        <v-flex xs12 md4 id="sectionFooter">
          <hr class="clearfix w-100 clearfix d-md-none"/>
          <h4 class="text-uppercase mb-4 font-weight-bold">Politicas</h4>
          <hr class="clearfix w-100 clearfix d-md-none"/>
          <p>Terminos y condiciones</p>
          <p>Privacidad</p>
        </v-flex>
        <v-flex xs12 md4 id="sectionFooter">
          <hr class="clearfix w-100 clearfix d-md-none"/>
          <h4 class="text-uppercase mb-4 font-weight-bold">Contacto</h4>
          <hr class="clearfix w-100 clearfix d-md-none"/>
          <p> El Siglo de Durango, calle Hidalgo 419 Sur, Durango, Dgo. México, C.P. 34000</p>
          <p> elsiglodedurango@gmail.com</p>
          <p> + 52  618 813 7080</p>
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" icon>
              <a target="blank" :href="'https://' + icon.url">
                <v-icon size="20px">{{ icon }}</v-icon>
              </a>
            </v-btn>
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-divider id="dividerFooter"></v-divider>

      <v-card-text class="white--text" >
        &copy; 2019 — <strong>Cartwheel Galaxy Inc</strong>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
  </v-footer>
</template>


<style>
#dividerFooter{
  border-width: 1px solid #fff;
}
#sectionFooter{
  padding: 10px;
}
.mb-4{
  margin-top: 22px;
}
.v-divider{
  border-width: 0;
}
.theme--dark.v-sheet{
  background-color: #212121;
}
.footerCompany{
  clear: both;
  float: left;
  margin-top: 20px;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  color: #fff;
  background: #000;
  text-align: center;
}
.footerCompany p {
  margin-top: 16px;
}
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
  }),
  components: {}
};
</script>
