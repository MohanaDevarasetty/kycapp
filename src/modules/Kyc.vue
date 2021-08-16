<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <p>Kyc</p>
            <!-- <horizontal-stepper
              :steps="demoSteps"
              @completed-step="completeStep"
              @active-step="isStepActive"
            >
            </horizontal-stepper> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
// import HorizontalStepper from 'vue-stepper';
import DocumentUpload from './DocumentUpload.vue';
export default {
  name: "KYC",
  components: {
        // HorizontalStepper
    },
    data(){
        return {
            demoSteps: [
                {
                    icon: 'mail',
                    name: 'first',
                    title: 'Sample title 1',
                    subtitle: 'Subtitle sample',
                    component: DocumentUpload,
                    completed: false

                },
                {
                    icon: 'report_problem',
                    name: 'second',
                    title: 'Sample title 2',
                    subtitle: 'Subtitle sample',
                    component: DocumentUpload,
                    completed: false
                }
            ]
        }
    },
    methods: {
        // Executed when @completed-step event is triggered
        completeStep(payload) {
            this.demoSteps.forEach((step) => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            })
        },
        // Executed when @active-step event is triggered
        isStepActive(payload) {
            this.demoSteps.forEach((step) => {
                if (step.name === payload.name) {
                    if(step.completed === true) {
                        step.completed = false;
                    }
                }
            })
        },
        // Executed when @stepper-finished event is triggered
    }
};
</script>
