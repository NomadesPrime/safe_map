<template>
    <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nome</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nome</ion-title>

        </ion-toolbar>
      </ion-header>
      <ion-nav-link router-direction="forward" :component="component">
            <ion-button class="button" href="/tabs/tab3">Go to Page Two</ion-button>
          </ion-nav-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonNavLink, 
  IonButton,
} from "@ionic/vue";
import Tab3Page from "./Tab3Page.vue";

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonPage},
  data() {
    return {
      component: Tab3Page,
    };
  },
};
</script>
<style>
.button{
  height: 100px;
  width: 100%;
}
</style>
