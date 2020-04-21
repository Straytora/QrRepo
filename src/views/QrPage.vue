<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
    },
})
export default class Home extends Vue {

    public isShowingCamera: boolean = false;

    public openCamera():void {
        this.isShowingCamera = !this.isShowingCamera;
    }

    // Function running when the Qr code is scanned
    public onDecode(decodedString:string){
      console.log(decodedString);
  }
  async onInit (promise:any) {
      try {
        await promise
        console.log("init", promise);
      } 
      catch (error) {
          console.log(error);
        if (error.name === 'NotAllowedError') {
          error = "ERROR: you need to grant camera access permisson"
        } 
        else if (error.name === 'NotFoundError') {
          error = "ERROR: no camera on this device"
        }
        else if (error.name === 'NotSupportedError') {
          error = "ERROR: secure context required (HTTPS, localhost)"
        } 
        else if (error.name === 'NotReadableError') {
          error = "ERROR: is the camera already in use?"
        } 
        else if (error.name === 'OverconstrainedError') {
          error = "ERROR: installed cameras are not suitable"
        } 
        else if (error.name === 'StreamApiNotSupportedError') {
          error = "ERROR: Stream API is not supported in this browser"
        }
      }finally{
          console.log("Yay!");
      }
    }
  }

</script>

<template>
  <div class="home">
    <p>Velkommen til QR siden!</p>
    <qrcode-stream v-if="isShowingCamera" @init="onInit" @decode="onDecode"></qrcode-stream>
    <button @click="openCamera">{{ !isShowingCamera ? 'Scan a QR Code' : 'Exit QR scanning'}}</button>
    <h3 class="decode-result">QR Code: {{ result }}</h3>
  </div>
</template>

<style lang ="scss" scoped>
    p{
        color: #333;
    }
</style>