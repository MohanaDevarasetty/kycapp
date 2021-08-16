<template>
    <div class="step-content">
          <!-- Your step content goes here (like inputs or so) -->
          <div class="step-box">
            <div class="step-box-text1 f-16 mhb-5">
              Choose Your document type
            </div>
            <input
              type="radio"
              id="Passport"
              name="fav_language"
              value="Passport"
            />
            <label for="Passport">Passport</label> &emsp;
            <input
              type="radio"
              id="Driver's License"
              name="fav_language"
              value="Driver's License"
            />
            <label for="Driver's License">Driver's License</label>&emsp;
            <input
              type="radio"
              id="Voter Id"
              name="fav_language"
              value="Voter Id"
            />
            <label for="Voter Id">Voter Id</label>&emsp;
            <input
              type="radio"
              id="Aadhar Card"
              name="fav_language"
              value="Aadhar Card"
            />
            <label for="Aadhar Card">Aadhar Card</label>

            <div class="step-box-text2 f-14">
              Take a photo of your passport. The photo should be:
            </div>
            <ul>
              <li><b> bright and clear</b>(good quality)</li>
              <li>
                <b>uncut</b> (all corner of the document should be visible)
              </li>
            </ul>
            <input type="file" id="selectedFile" style="display: none" />
            <input
              type="button"
              value="Choose a file or drag it here"
              class="file-upload"
              onclick="document.getElementById('selectedFile').click();"
            />

            
          </div>
          <div class="step-actions">
              <!-- Here goes your actions buttons -->
              <button class="waves-effect waves-dark btn next-step">
                Next
              </button>
            </div>
        </div>
</template>

<script>

export default ({
    name: "DocumentUpload"
})
</script>

<style scoped>

</style>
