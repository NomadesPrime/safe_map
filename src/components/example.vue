<template>
    <ion-nav :root="component"></ion-nav>
  </template>
  
  <script lang="ts">
    import { IonNav } from '@ionic/vue';
    import Tab2Page from '@/views/Tab2Page.vue';
  
    export default {
      components: { IonNav },
      data() {
        return {
          component: Tab2Page,
        };
      },
    };
  </script>