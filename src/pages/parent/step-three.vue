<template>
  <q-page class="row items-center justify-center">
    <div class="col-12 form-wrapper">
      <div>
        <h5 class="text-primary text-weight-600 q-ma-none">
          Form 3 - Developmental Profile
        </h5>
        <hr class="q-mb-md" />
      </div>
      <q-card flat class="bg-white form-body q-mb-md">
        <q-form>
          <q-card-section>
            <div class="card-header">
              <div clas="step-info">
                <p class="text-primary text-body1 text-weight-bold">
                  Step 3 of 3
                </p>
              </div>
              <q-banner class="bg-banner-success">
                <p class="q-mb-none text-positive text-weight-bold">
                  To aid us in determining your child's social-emotional level,
                  please mark in the parent column the behaviour listed below
                  that you have observed your child performing. Your child's
                  teacher will also be marking the behaviours she has observed
                  your child performing in the classroom.
                </p>
              </q-banner>
            </div>
          </q-card-section>
        </q-form>
      </q-card>

      <div class="row q-mb-lg">
        <typography class="text-primary text-caption col-md-8 col-xs-6 q-pl-lg"
          >Child’s Behaviour</typography
        >
        <typography class="text-primary text-caption col-md-4 col-xs-4"
          >Input</typography
        >
      </div>

      <q-card flat class="bg-white form-body">
        <q-form>
          <q-card-section class="q-p-none dialog-form-section">
            <div>
              <!-- First Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Shows curiosity and interest in his/her surroundings
                  </label>
                </div>
                <div class="col-md-5 col-xs-12">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Initiates own play activities
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Second Row End -->
              <!-- Third Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Works and plays cooperatively with other children
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Third Row End -->
              <!-- Fourth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Talks comfortably with other children:
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fourth Row End -->
              <!-- Fifth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Takes turns and shares
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fifth Row End -->
              <!-- Sixth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Participates with others in large group
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Sixth Row End -->
              <!-- Seventh Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Shows concern for others and their property
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Seventh Row End -->
              <!-- Eigth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Takes turns and shares
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Eigth Row End -->
              <!-- Nineth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Accepts responsibility
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Nineth Row End -->
              <!-- Tenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Separates from parents without reluctance
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Tenth Row End -->
              <!-- Eleventh Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Does simple tasks independently
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Eleventh Row End -->
              <!-- Twelve Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Follows directions
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Twelve Row End -->
              <!-- Thirteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Pays attention
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Thirteen Row End -->
              <!-- Fourteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Consistently completes tasks
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fourteen Row End -->
              <!-- Fifteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Attends to task at least 10 minutes
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fifteen Row End -->
              <!-- Sixteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Is eager to learn new tasks
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Sixteen Row End -->
              <!-- Seventeenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Able to express wants and needs
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Seventeenth Row End -->
              <!-- Eigteenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Accepts limits/Follows rules
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Eigteenth Row End -->
              <!-- Nineteenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Displays feelings in appropriate ways
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Nineteenth Row End -->
              <!-- Twenteeth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Speech understood by others
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group
                    inline
                    :options="options"
                    type="radio"
                    class="q-px-xs"
                    v-model="text"
                  />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Twenteeth Row End -->

              <div clas="step-info">
                <p class="text-primary text-body1 text-weight-bold">
                  Additional Information
                </p>
                <div class="col-md-12 col-xs-6 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Additional Comments:
                  </label>
                </div>
                <div class="row q-pb-md q-my-md">
                  <div class="col-md-12 col-xs-12 dialog-form-section-input">
                    <label
                      class="text-primary text-weight-medium text-body-2 q-mb-sm"
                    >
                      Comment
                    </label>
                    <q-input
                      class="app-form-input q-mt-xs"
                      outlined
                      placeholder="Write comments here"
                      v-model="text"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-xs-6 dialog-form-section-input">
                  <label
                    class="text-primary text-body-1 text-weight-light items-center"
                  >
                    Please list schools you would like C&B to send assessment
                    results where you are applying:
                  </label>
                </div>
                <div class="row q-pb-md q-my-md">
                  <div class="col-md-12 col-xs-12 dialog-form-section-input">
                    <label
                      class="text-primary text-weight-medium text-body-2 q-mb-sm"
                    >
                      Schools List
                    </label>
                    <q-input
                      class="app-form-input q-mt-xs"
                      outlined
                      placeholder="Write School Name"
                      v-model="text"
                    />
                  </div>
                </div>
              </div>
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
  name: 'ParentStepOne',
  setup() {
    return {
      options: [
        { label: 'Usually', value: 1 },
        { label: 'Sometimes', value: 2 },
        { label: 'Rarely', value: 3 },
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
