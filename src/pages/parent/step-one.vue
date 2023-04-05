<template>
  <q-page class="row items-center justify-center">
    <div class="col-12 form-wrapper">
      <q-card flat class="bg-white form-body">
        <q-form>
          <q-card-section>
            <div class="card-header text-weight-bold text-center text-primary">
              Add Student
            </div>
          </q-card-section>

          <q-card-section class="q-p-none dialog-form-section">
            <div>
              <!-- First Row Start -->
              <div class="row q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Child's Name
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Child's Name"
                    v-model="text"
                  />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Parents's Name
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Parent's Name"
                    v-model="text"
                  />
                </div>

                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Parents's Email
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Parent's Name"
                    v-model="text"
                  />
                </div>
              </div>
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Date of birth
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    v-model="date"
                    mask="date"
                    :rules="['date']"
                  >
                    <template v-slot:append>
                      <q-icon
                        name="img:/app-icons/datepicker-icon.svg"
                        class="cursor-pointer"
                      >
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Height
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Height eg. 5'4&quot;"
                    v-model="text"
                  />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Gender
                  </label>
                  <q-option-group
                    inline
                    :options="genderOptions"
                    type="radio"
                    class="q-mt-xs flex items-center gender-option-group"
                    v-model="text"
                  />
                </div>
              </div>
              <!-- Second Row End -->
              <!-- Thid Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Parent's Contact Number
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Parent's Contact Number"
                    v-model="text"
                  />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    Address
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="Enter your address"
                    v-model="text"
                  />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <div class="row">
                    <div
                      class="col-md-6 col-xs-12 dialog-form-section-input-sub-left"
                    >
                      <label
                        class="text-primary text-weight-medium text-body-2 q-mb-sm"
                      >
                        City
                      </label>
                      <q-input
                        class="app-form-input q-mt-xs"
                        outlined
                        placeholder="Enter City"
                        v-model="text"
                      />
                    </div>
                    <div
                      class="col-md-6 col-xs-12 dialog-form-section-input-sub-right"
                    >
                      <label
                        class="text-primary text-weight-medium text-body-2 q-mb-sm"
                      >
                        Zip
                      </label>
                      <q-input
                        class="app-form-input q-mt-xs"
                        outlined
                        placeholder="Enter Zip"
                        v-model="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Thid Row End -->
              <!-- Fourth Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-8 col-xs-12 dialog-form-section-input">
                  <label
                    class="text-primary text-weight-medium text-body-2 q-mb-sm"
                  >
                    School Name
                  </label>
                  <q-input
                    class="app-form-input q-mt-xs"
                    outlined
                    placeholder="School Name"
                    v-model="text"
                  />
                </div>
              </div>
              <!-- Fourth Row End -->
            </div>
          </q-card-section>

          <q-card-actions align="right" class="bg-white q-mb-mb text-center">
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
      genderOptions: [
        { label: 'Boy', value: 1 },
        { label: 'Girl', value: 2 },
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
