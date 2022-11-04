<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cadastro</ion-title>
        </ion-toolbar>
      </ion-header>
  <ion-label class="label">E-mail</ion-label>
  <ion-item fill="outline" class="item">
  <ion-input></ion-input>
  </ion-item>
  <ion-label class="label">Senha</ion-label>
  <ion-item fill="outline" class="item">
  <ion-input></ion-input>
  </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
<style>

.item{
  display: flex;
  width: 300px;
  height: 20px;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
}
.label{
  display: flex;
  margin: 0 auto;
  width: 100px;
  margin-top: 50px;
}
</style>
