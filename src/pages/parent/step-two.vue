<template>
  <div class="row items-center justify-center q-pb-md full-width">
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
                <p class="text-primary text-body1 text-weight-medium">
                  Please provide the following information :
                </p>
              </div>
              <div clas="step-info">
                <p
                  class="text-primary text-body1 font-size-20 text-weight-regular q-mb-none"
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
                    class="text-primary text-body-1 text-weight-regular items-center"
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
                    @update:model-value="
                      () => {
                        pregnancy_complication_text = '';
                      }
                    "
                    v-model="is_pregnancy_complication"
                  />
                </div>

                <div
                  v-if="is_pregnancy_complication"
                  class="col-md-4 col-xs-12"
                >
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="pregnancy_complication_text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-regular items-center"
                  >
                    Was this child premature or post term?
                  </label>
                </div>
                <div class="col-md-3 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-mt-xs"
                    @update:model-value="
                      () => {
                        child_premature_text = '';
                      }
                    "
                    v-model="is_child_premature"
                  />
                </div>

                <div v-if="is_child_premature" class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="child_premature_text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Second Row End -->
              <!-- Third Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-regular items-center"
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
                    @update:model-value="
                      () => {
                        chronic_illness_text = '';
                      }
                    "
                    v-model="is_chronic_illness"
                  />
                </div>

                <div v-if="is_chronic_illness" class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="chronic_illness_text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Thid Row End -->
              <!-- Fourth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-regular items-center"
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
                    @update:model-value="
                      () => {
                        allergies_text = '';
                      }
                    "
                    v-model="is_allergies"
                  />
                </div>

                <div v-if="is_allergies" class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="allergies_text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fourth Row End -->
              <!-- Fifth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-regular items-center"
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
                    @update:model-value="
                      () => {
                        unsettling_experience_text = '';
                      }
                    "
                    v-model="is_unsettling_experience"
                  />
                </div>

                <div v-if="is_unsettling_experience" class="col-md-4 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Please explain"
                    v-model="unsettling_experience_text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fifth Row End -->
              <!-- Sixth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-regular items-center"
                  >
                    What is the primary language spoken in this child's home?
                  </label>
                </div>
                <div class="col-md-7 col-xs-12">
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Primary language"
                    v-model="primary_language"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Sixth Row End -->
            </div>
          </q-card-section>

          <q-card-actions align="right" class="bg-white q-mb-mb text-center">
            <q-btn
              @click="moveToStepOne()"
              color="light back-btn app-button q-mr-md"
              no-caps
              label="Back"
            />
            <q-btn
              @click="moveToNextStep()"
              color="secondary save-button app-button"
              no-caps
              label="Next"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { StepTwoData } from 'src/quasar';
import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'StepTwo',
  props: {
    moveToStepOne: {
      type: Function as PropType<{
        (): void;
      }>,
      required: true,
    },
    moveToStepThree: {
      type: Function as PropType<{
        (data: StepTwoData): void;
      }>,
      required: true,
    },
    stepTwoData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
      text: ref(''),
      date: ref('2019/02/01'),
      is_pregnancy_complication: ref(false),
      pregnancy_complication_text: ref(''),
      is_child_premature: ref(false),
      child_premature_text: ref(''),
      is_chronic_illness: ref(false),
      chronic_illness_text: ref(''),
      is_allergies: ref(false),
      allergies_text: ref(''),
      is_unsettling_experience: ref(false),
      unsettling_experience_text: ref(''),
      primary_language: ref(''),
    };
  },
  mounted() {
    this.is_pregnancy_complication = this.stepTwoData.is_pregnancy_complication;
    this.pregnancy_complication_text =
      this.stepTwoData.pregnancy_complication_text;
    this.is_child_premature = this.stepTwoData.is_child_premature;
    this.child_premature_text = this.stepTwoData.child_premature_text;
    this.is_chronic_illness = this.stepTwoData.is_chronic_illness;
    this.chronic_illness_text = this.stepTwoData.chronic_illness_text;
    this.is_allergies = this.stepTwoData.is_allergies;
    this.allergies_text = this.stepTwoData.allergies_text;
    this.is_unsettling_experience = this.stepTwoData.is_unsettling_experience;
    this.unsettling_experience_text =
      this.stepTwoData.unsettling_experience_text;
    this.primary_language = this.stepTwoData.primary_language;
  },
  methods: {
    moveToNextStep() {
      const data = {
        is_pregnancy_complication: this.is_pregnancy_complication,
        pregnancy_complication_text: this.pregnancy_complication_text,
        is_child_premature: this.is_child_premature,
        child_premature_text: this.child_premature_text,
        is_chronic_illness: this.is_chronic_illness,
        chronic_illness_text: this.chronic_illness_text,
        is_allergies: this.is_allergies,
        allergies_text: this.allergies_text,
        is_unsettling_experience: this.is_unsettling_experience,
        unsettling_experience_text: this.unsettling_experience_text,
        primary_language: this.primary_language,
      };
      this.moveToStepThree(data);
    },
  },
});
</script>

<style lang="scss">
.form-wrapper {
  padding-left: 4.375rem;
  padding-right: 4.375rem;

  @media (max-width: '768px') {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .form-body {
    border-radius: 8px;
    padding: 1rem;

    @media (max-width: '768px') {
      padding: 0;
    }

    .card-header {
      font-size: 1.25rem;
    }

    .dialog-form-section,
    .dialog-form-section-input {
      padding-left: 0.6rem;
      padding-right: 0.6rem;
    }
  }
}
</style>
