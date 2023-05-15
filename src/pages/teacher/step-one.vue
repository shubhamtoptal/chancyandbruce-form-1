<template>
  <q-page class="row items-center justify-center">
    <div class="col-12 form-wrapper">
      <div>
        <h5 class="text-primary text-weight-600 q-ma-none">
          Form 1 - Developmental Profile
        </h5>
        <hr class="q-mb-md" />
      </div>
      <q-card flat class="bg-white form-body">
        <q-form>
          <q-card-section>
            <div class="card-header">
              <div clas="step-info">
                <p class="text-primary text-body1 text-weight-bold">
                  Step 1 of 2
                </p>
              </div>
              <q-banner class="bg-banner-success">
                <p class="q-mb-none text-positive text-weight-bold">
                  Note: Chancy and Bruce, LLC has my permission to administer a
                  developmental profile with my child and remove them from the
                  classroom and take them to a screening area.
                </p>
              </q-banner>
            </div>
          </q-card-section>

          <q-card-section class="q-p-none dialog-form-section">
            <div>
              <!-- First Row Start -->
              <div class="row q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Child's Name
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ studentName }}
                    </label>
                  </div>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Parents's Name
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ parentName }}
                    </label>
                  </div>
                </div>

                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Parents's Email
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ parentEmail }}
                    </label>
                  </div>
                </div>
              </div>
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Date of birth
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ studentDob }}
                    </label>
                  </div>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Height
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ studentHeight }}
                    </label>
                  </div>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Gender
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ studentGender == "1" ? 'Boy' : 'Girl' }}
                    </label>
                  </div>
                </div>
              </div>
              <!-- Second Row End -->
              <!-- Thid Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Parent's Contact Number
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ parentContact }}
                    </label>
                  </div>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Address
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ address }}
                    </label>
                  </div>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <div class="row">
                    <div class="col-md-6 col-xs-12 dialog-form-section-input-sub-left">
                      <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                        City
                      </label>
                      <div class="row">
                        <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                          {{ city }}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                        Zip
                      </label>
                      <div class="row">
                        <label class="text-primary text-weight-bold text-body-2"
                          :class="{ 'q-mb-sm': !$q.platform.is.mobile }">
                          {{ zip }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Thid Row End -->
              <!-- Fourth Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    Grade Entry
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ gradeEntry }}
                    </label>
                  </div>
                </div>
                <div class="col-md-8 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-regular text-body-2 q-mb-sm">
                    School Name
                  </label>
                  <div class="row">
                    <label class="text-primary text-weight-bold text-body-2 q-mb-sm">
                      {{ schoolName }}
                    </label>
                  </div>
                </div>
              </div>
              <!-- Fourth Row End -->
            </div>
          </q-card-section>

          <q-card-section v-if="is_step_form_1_teacher_complete">
            <div class="card-header">
              <q-banner class="bg-banner-success">
                <p class="q-mb-none text-positive text-weight-bold">
                  Note: You have submitted the form successfully.
                </p>
              </q-banner>
            </div>
          </q-card-section>
          <q-card-actions v-else align="right" class="bg-white q-mb-mb text-center">
            <q-btn @click="moveToStepTwo()" color="secondary save-button app-button" no-caps label="Next" />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TeacherStepOne',
  props: {
    stepOneData: {
      type: Object,
      required: true
    },
    studentData: {
      type: Object,
      required: true
    },
    moveToStepTwo: {
      type: Function as PropType<{
        (): void;
      }>,
      required: true,
    },
  },
  setup() {
    return {
      genderOptions: [
        { label: 'Boy', value: 1 },
        { label: 'Girl', value: 2 },
      ],
      studentName: ref(''),
      studentHeight: ref(''),
      studentDob: ref(''),
      studentGender: ref(''),
      parentName: ref(''),
      parentEmail: ref(''),
      parentContact: ref(''),
      gradeEntry: ref(''),
      schoolContact: ref(''),
      teacherEmail: ref(''),
      address: ref(''),
      city: ref(''),
      zip: ref(''),
      schoolName: ref(''),
      is_step_form_1_teacher_complete: ref(false),
    };
  },
  watch: {
    studentData(nv) {
      this.studentName = nv.studentName;
      this.studentGender = nv.studentGender;
      this.studentHeight = nv.studentHeight;
      this.studentDob = nv.studentDob;
      this.parentContact = nv.parentContact;
      this.parentEmail = nv.parentEmail;
      this.parentName = nv.parentName;
      this.teacherEmail = nv.teacherEmail;
      this.gradeEntry = nv.gradeEntry;
      this.schoolName = nv.schoolName;
      this.address = nv.address;
      this.city = nv.city;
      this.zip = nv.zip;
    },
    stepOneData(nv) {
      console.log('nv -->', nv);
      this.is_step_form_1_teacher_complete = nv.is_step_form_1_teacher_complete
    }
  }
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
