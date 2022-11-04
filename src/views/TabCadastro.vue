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

      <ion-label class="label">Nome</ion-label>
      <div class="input">
        <ion-item fill="outline" class="item">
          <ion-input></ion-input>
        </ion-item>
      </div>
      <ion-label class="label">E-mail</ion-label>
      <div class="input">
        <ion-item fill="outline" class="item">
          <ion-input></ion-input>
        </ion-item>
      </div>
      <ion-label class="label">Senha</ion-label>
      <div class="input">
        <ion-item fill="outline" class="item">
          <ion-input></ion-input>
        </ion-item>
      </div>
      <ion-label class="label">CPF</ion-label>
      <div class="input">
        <ion-item fill="outline" class="item">
          <ion-input></ion-input>
        </ion-item>
      </div>
      <ion-label class="label">Data de Nascimento</ion-label>
      <div class="input">
        <ion-item fill="outline" class="item">
          <ion-input></ion-input>
        </ion-item>
      </div>
      <br />
      <br />
      <div class="buttonDiv">
        <ion-button class="buttonEntrar">Cadastrar </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
} from "@ionic/vue";

export default defineComponent({
  name: "Tab3Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
  },
});
</script>
<style>
.input {
  display: flex;
  width: 100%;
}
.item {
  height: 20px;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: center;
}
.label {
  display: flex;
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.buttonDiv {
  display: flex;
  width: 100%;
}
.buttonEntrar {
  height: 60px;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: center;
}
</style>
