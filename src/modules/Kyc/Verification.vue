<template>
    <div class="step-content">
          <!-- Your step content goes here (like inputs or so) -->
          <div class="step-box">
            <div class="step-box-text3">Thank You</div>
            <div class="step-box-text4">
              We are currently checking your data
            </div>
            <div class="step-box-text5">
              The verification status will update automatically.
            </div>
            <ul class="verification">
              <li>Uploaded documents verified</li>
              <li>Verifying clicked Selfie</li>
            </ul>
          </div>
          <div class="step-actions">
            <!-- Here goes your actions buttons -->
            <button class="waves-effect waves-dark btn next-step">Next</button>
          </div>
    </div>
</template>

<script>

export default({
    name: "Verification"
})
</script>
