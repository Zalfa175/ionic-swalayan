<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
              <ion-title>Akun</ion-title>
          </ion-toolbar>
      </ion-header>

      <ion-content :fullscreen="true">
          <ion-header collapse="condense">
              <ion-toolbar>
                  <ion-title size="large">Akun</ion-title>
              </ion-toolbar>
          </ion-header>

          <div class="ion-activatable ripple-parent head">
            <ion-avatar class="text-center mx-auto">
                <img src="https://ionicframework.com/docs/img/demos/avatar.svg">
            </ion-avatar>

            <div class="text-center mx-auto">
                <ion-label color="">
                    <h2>Nz</h2>
                    <h2>zalfaanandita@gmail.com</h2>
                </ion-label>
            </div>

            <ion-ripple-effect></ion-ripple-effect>
          </div>

          <div class="menu">
            <ion-item lines="full" class="ion-activatable ripple-parent">
                <ion-icon :icon="personCircleOutline" slot="end"></ion-icon>
                <ion-label class="">
                    <h2>Lihat Akun</h2>
                    <p>Buka halaman lebih detail</p>
                </ion-label>
                <ion-ripple-effect></ion-ripple-effect>
            </ion-item>

            <ion-item lines="full" class="ion-activatable ripple-parent">
                <ion-icon @click="logout" :icon="logOut" slot="end"></ion-icon>
                <ion-label class="">
                    <h2>Keluar Akun</h2>
                    <p>Keluar dari akun sekarang</p>
                </ion-label>
                <ion-ripple-effect></ion-ripple-effect>
            </ion-item>
          </div>

      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { personCircleOutline, logOut } from 'ionicons/icons';
import { token, user } from "../services/user";
import { useRouter } from "vue-router";

const router = useRouter()

const logout = () => {
    user.value = null
    token.value = ''

    router.replace('./login')
}
</script>

<style>
.head {
    background-color: red;
    padding: 40px 10px;
}

ion-avatar {
    width: 120px;
    height: 120 px;
}
</style>