<template>
  <div>
    <ul class="stepper linear">
      <li class="step" :class="stepper === 'DocumentUpload' ? 'active' : ''">
        <div class="step-title waves-effect" v-on:click="onStepperClick('DocumentUpload')">
          Document Upload
        </div>
        <div v-if="stepper === 'DocumentUpload'">
          <DocumentUpload />
        </div>
      </li>
      <li class="step" :class="stepper === 'UploadPicture' ? 'active' : ''">
        <div class="step-title waves-effect" v-on:click="onStepperClick('UploadPicture')">
          Click or Update Photo
        </div>
        <div v-if="stepper === 'UploadPicture'">
          <UplaodPicture />
        </div>
      </li>
      <li class="step" :class="stepper === 'Verification' ? 'active' : ''">
        <div class="step-title waves-effect" v-on:click="onStepperClick('Verification')">
          Verification status
        </div>
        <div v-if="stepper === 'Verification'">
          <Verification />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DocumentUpload from "./DocumentUpload.vue";
import UplaodPicture from "./UploadPicture.vue";
import Verification from "./Verification.vue";
import httpClient from '../../shared/services/httpClient';
export default {
  name: "KYC",
  data() {
    return {
      stepper: "DocumentUpload",
    };
  },
  components: {
    DocumentUpload,
    UplaodPicture,
    Verification,
  },
  methods: {
    onStepperClick: function (tabName) {
      this.stepper = tabName;
    },
  },
  created() {
    httpClient.get('http://demo0415326.mockable.io/getDynamicMapping/list').then(res => {
      console.log(res);
    });
  }
};
</script>

<style>
* {
  font-family: sans-serif;
}
.step {
  list-style: none;
}
.step-box {
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 15px;
}
.step-title {
  font-weight: 700;
}
.step-box-text1 {
  font-weight: 500;
}
.step-box-text2 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.step-box-text3 {
  margin-top: 10px;
  margin-bottom: 0px;
  color: rgb(59, 144, 255);
  font-weight: 700;
}
.step-box-text4 {
  color: rgb(129, 129, 129);
  font-size: 12px;
}
.step-box-text5 {
  margin-top: 10px;
  font-size: 14px;
}
.verification li {
  margin: 5px 0;
}
label {
  font-size: 14px;
  margin-bottom: 10px;
}
.mhb-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.mhb-5 {
  margin-top: 5px;
  margin-bottom: 5px;
}
.f-12 {
  font-size: 12px;
}
.f-14 {
  font-size: 14px;
}
.f-16 {
  font-size: 16px;
}
.f-18 {
  font-size: 18px;
}
.step {
  font-size: 14px;
}
.btn {
  background-color: #3c87fb;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  color: white;
  font-size: 12px;
}
.file-upload {
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #e7e7e7;
  /* border: 1px solid black; */
  padding: 50px 100px;
  margin: 20px 0;
}
.button-group,
.play-area {
  padding: 1em 1%;
  margin-bottom: 1em;
}
.play-area {
  display: flex;
}

.play-area-sub {
  width: 47%;
  padding: 1em 1%;
  display: inline-block;
  text-align: center;
}

.parent-circle {
  height: 200px;
  width: 200px;
  border: 15px solid rgb(245, 251, 255);
  border-radius: 50%;
  background: #e3f0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: auto;
  margin-bottom: 20px;
}

#stream {
  display: none;
}

#btn-start {
  background: rgb(86, 165, 255);
  border: none;
  padding: 10px 20px;
  color: white;
}

#btn-capture {
  background: transparent;
  border: 2px solid rgb(86, 165, 255);
  padding: 5px 20px;
  color: rgb(70, 150, 255);
  font-weight: 600;
}
.transparent-button {
  background: transparent;
  border: 2px solid rgb(86, 165, 255);
  padding: 5px 20px;
  color: rgb(70, 150, 255);
  font-weight: 600;
}

#capture {
  display: none;
}
#snapshot {
  display: none;
  height: 100%;
  width: 100%;
}
#snapshot img {
  height: 200px;
  width: 200px;
  object-fit: contain;
  aspect-ratio: auto 300 / 300;
}

@media only screen and (max-width: 600px) {
  .file-upload {
    width: 100%;
    padding: 50px 0;
  }
}

.step-box {
  background-color: white;
}
</style>
