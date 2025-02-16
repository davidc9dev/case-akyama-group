<template>
    <div class="d-flex justify-center">
      <v-card flat >
        <v-card-title  dense class="text-h6 text-md-h5 text-lg-h4">{{ title }}</v-card-title>
        <v-card-text >
          {{ subtitle }}
        </v-card-text>
      </v-card>
    </div>
  </template>
  <script>
    export default {
        props:{
            subtitle: String,
            title: String,
        },
        data(){
            return{

            }
        }
    }
  </script>