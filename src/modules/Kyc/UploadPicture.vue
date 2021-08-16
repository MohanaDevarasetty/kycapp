<template>
    <div class="step-content">
          <!-- Your step content goes here (like inputs or so) -->
          <div class="step-box">
            <div class="step-box-text1 f-26 mhb-5">
              Face the camera, Ensure your face is within the frame. <br />
              Then Slowly turn your head around in a circle.
            </div>

            <!-- Video Element & Canvas -->
            <div class="play-area">
              <div class="play-area-sub" id="stream1">
                <div class="parent-circle">
                  <video id="stream" width="300" height="300"></video>
                  <button id="btn-start" type="button" class="button">
                    Allow Camera
                  </button>
                  <canvas id="capture" width="300" height="300"></canvas>
                  <div id="snapshot"></div>
                </div>
                <button id="btn-capture" type="button" class="button">
                  Click Selfie
                </button>
              </div>

              <div class="play-area-sub" id="stream3">
                <div class="parent-circle">
                  <!-- <input
                    type="file"
                    class="file-upload"
                    id="myfile"
                    name="myfile"
                  /> -->
                </div>
                <input type="file" id="selectedFile" style="display: none" />
                <input
                  type="button"
                  value="Upload Picture"
                  class="transparent-button"
                  onclick="document.getElementById('selectedFile').click();"
                />
              </div>
            </div>
          </div>
          <div class="step-actions">
            <!-- Here goes your actions buttons -->
            <button class="waves-effect waves-dark btn next-step">Next</button>
          </div>
        </div>
</template>

<script>

export default ({
    name: 'UplaodPicture'
})
</script>
