<template>
  <q-page class="row items-center justify-center">
    <div class="col-12 form-wrapper">
      <div>
        <h5 class="text-primary text-weight-600 q-ma-none">
          Form 2 - Developmental Profile
        </h5>
        <hr class="q-mb-md" />
      </div>
      <q-card flat class="bg-white form-body">
        <q-form>
          <q-card-section>
            <div class="card-header">
              <div clas="step-info">
                <p class="text-primary text-body1 text-weight-bold">
                  Step 2 of 3
                </p>
              </div>

              <div clas="step-info">
                <p class="text-primary text-body1 text-weight-light">
                  Please provide the following information :
                </p>
              </div>
              <div clas="step-info">
                <p
                  class="text-primary text-body1 font-size-20 text-weight-light"
                >
                  If yes, please explain
                </p>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-p-none dialog-form-section">
            <div>
              <!-- First Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Were there pregnancy or birth complications?
                  </label>
                </div>
                <div class="col-md-3 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    As this child premature or post term?
                  </label>
                </div>
                <div class="col-md-3 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-mt-xs"
                    v-model="text"
                  />
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Second Row End -->
              <!-- Third Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Has this child had a history of chronic illnesses?
                  </label>
                </div>
                <div class="col-md-3 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-mt-xs"
                    v-model="text"
                  />
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Thid Row End -->
              <!-- Fourth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Does this child experience allergies?
                  </label>
                </div>
                <div class="col-md-3 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-mt-xs"
                    v-model="text"
                  />
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fourth Row End -->
              <!-- Fifth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Has this child had any unsettling experiences?
                  </label>
                </div>
                <div class="col-md-3 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-mt-xs"
                    v-model="text"
                  />
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fifth Row End -->
              <!-- Sixth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    What is the primary language spoken in this child's home?
                  </label>
                </div>
                <div class="col-md-3 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-mt-xs"
                    v-model="text"
                  />
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Sixth Row End -->
            </div>
          </q-card-section>

          <q-card-actions align="right" class="bg-white q-mb-mb text-center">
            <q-btn
              color="light back-btn app-button q-mr-md"
              no-caps
              label="Back"
            />
            <q-btn
              color="secondary save-button app-button"
              no-caps
              label="Next"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ParentStepTwo',
  setup() {
    return {
      options: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 2 },
      ],
      text: ref(''),
      date: ref('2019/02/01'),
    };
  },
});
</script>

<style lang="scss">
.form-wrapper {
  padding-left: 4.375rem;
  padding-right: 4.375rem;

  .form-body {
    border-radius: 8px;
    padding: 1rem;
    .card-header {
      font-size: 1.25rem;
    }
    .dialog-form-section,
    .dialog-form-section-input {
      padding-left: 0.6rem;
      padding-right: 0.6rem;
    }
    .dialog-form-section-input-sub-left {
      padding-right: 0.75rem;
    }
    .dialog-form-section-input-sub-right {
      padding-left: 0.75rem;
    }
    .gender-option-group {
      height: 50px;
      margin-left: -10px;
    }
  }
}
</style>
