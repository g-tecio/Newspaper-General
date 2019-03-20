<template>
    <diV>
        <v-container>
            <headerComp/>
            <navbar :config="config"/>
            <drawer :config="config"/>
            <v-card flat>
                    <v-card-title>
                        <span class="headline">Create New Article</span>
                    </v-card-title>
                    <v-form>
                        <v-container grid-list-xl text-xs-center>
                            <v-layout row wrap>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="article.properties.title" label="Title"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="article.properties.subtitle" label="Subtitle"/>
                                </v-flex>
                                <v-flex md4>
                                    <v-text-field v-model="article.properties.author" label="Author"/>
                                </v-flex>
                                <v-flex md4>
                                    <v-text-field v-model="article.properties.location" label="Location"/>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="pa-4">
                                        <label><v-icon>attach_file</v-icon>Article Image: </label>
                                        <input
                                        type="file"
                                        :multiple="false"
                                        ref="fileInput"
                                        text="."
                                        @change="onFileChange"
                                        >
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <vue-editor v-model="article.properties.article"></vue-editor>
                                    <!-- <v-textarea v-model="article.properties.article" label="Article"/> -->
                                </v-flex>

                                <v-flex xs12 md6>
                                    <!-- <v-select v-model="article.date.time_zone" :items="time_zone" label="Time Zone"></v-select> -->
                                </v-flex>
                                <!-- <v-flex xs6 md3>
                                    <v-dialog
                                        ref="menu"
                                        v-model="menu"
                                        :return-value.sync="date"
                                        persistent
                                        lazy
                                        full-width
                                        width="290px"
                                    >
                                        <v-text-field
                                        slot="activator"
                                        v-model="event.date.formated_date"
                                        label="Start Date"
                                        append-icon="today"
                                        readonly
                                        ></v-text-field>
                                        <v-date-picker v-model="event.date.formated_date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.menu.save(event.date.formated_date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-flex>
                                <v-flex xs6 md3>
                                    <v-dialog
                                        ref="dialog"
                                        v-model="modal2"
                                        :return-value.sync="time"
                                        persistent
                                        lazy
                                        full-width
                                        width="290px"
                                    >
                                        <v-text-field
                                            slot="activator"
                                            v-model="event.date.time"
                                            label="Start Time"
                                            append-icon="schedule"
                                            readonly
                                        ></v-text-field>
                                        
                                        <v-time-picker v-model="event.date.time" actions>
                                            <v-spacer></v-spacer>
                                            <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                                            <v-btn flat color="primary" @click="$refs.dialog.save(event.date.time)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-flex> -->

                                <!-- image area -->
                                <v-flex xs12 text-xs-right>
                                    <v-btn
                                        class="mx-0 font-weight-light"
                                        color="success"
                                        @click="submitData()"
                                        
                                    >Save Event</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
            </v-card>
        </v-container>
        <footerComp/>
    </div>
</template>

<script>
// import axios from "axios";
import { VueEditor } from 'vue2-editor';
import axios from 'axios';
import header from "~/components/navbar/header.vue";
import navbar from "~/components/navbar/navbar.vue";
import banner from "~/components/navbar/banner.vue";
import drawer from "~/components/navbar/drawer.vue";
import footerComp from "~/components/footerComp.vue";
export default {
    head() {
        return {
            title: 'New Horizon - New Event'
        }
    },
    data() {
        return {
        config: {
            drawer: false
        },
        api_url: "https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events",
        article: {
            title: 'ArticleItem',
            type: 'object',
            properties: {
                title: '',
                subtitle: '',
                article: '<h1>Put your article here</h1>',
                author: '',
                location: '',
                cover_img:'',
            }
        },
        event_type: ["Online", "Physical"],
        event_attire: ["Casual", "Cooktail", "Formal", "Smart Casual"],
        revenue_generation: ["Auction", "Dinner", "Gala", "Festival", "Trade Show"],
        status: ["Pending", "Not started", "In progress", "Finished"],
        time_zone: ["Pacific", "Central", "Mountain", "Eastern"],
        reactive: true,
        menu: false,
        modal: false,
        modal2: false,
        };
    },
    methods: {
        submitData() {
            debugger
            this.article
            axios.post(this.api_url, this.article).then((res)=>{
                console.log(res)
                debugger
            })

            // this.$axios.post(this.api_url, this.article).then((res)=>{
            //     // this.$router.push('/event-list')
            //     debugger
            // });
        },
        onFileChange($article) {
            const files = $article.target.files || $article.dataTransfer.files;
            const form = this.getFormData(files);
            this.getBase64([...files][0]);
            this.$emit("input", this.article.properties.cover_image);
            this.$emit("formData", form);
        },
        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => (this.article.properties.cover_image = reader.result);
                reader.onerror = error => reject(error);
            });
        },
        getFormData(files) {
            const data = new FormData();
            return data;
        }
    },
    components:{
        VueEditor,
        headerComp: header,
        navbar,
        banner,
        drawer,
        footerComp,
    }
};
</script>
