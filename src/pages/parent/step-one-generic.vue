<template>
  <div class="row items-center justify-center q-pb-md">
    <div class="col-12 form-wrapper">
      <div>
        <h5 class="text-primary text-weight-600 q-mb-none">
          Form 1 - Developmental Profile
        </h5>
        <hr class="q-mb-md" />
      </div>
      <q-card flat class="bg-white form-body">
        <q-form @submit="() => submitForm()">
          <q-card-section>
            <div class="card-header">
              <div class="step-info">
                <p class="text-primary text-body1 text-weight-bold">
                  Step 1 of 3
                </p>
              </div>
              <q-banner class="bg-banner-success">
                <p class="q-mb-none text-positive text-weight-bold">
                  Note: Chancy and Bruce, LLC has my permission to administer a
                  developmental profile with my child and remove them from the
                  classroom and take them to a screening area.
                </p>
              </q-banner>
              <q-banner v-if="schoolHasPayed === 2" class="bg-banner-success q-mt-sm">
                <p class="q-mb-none text-positive text-weight-bold">
                  Note: By Clicking Next you'll be taken to payment page to pay <span class="text-red">{{
                    schoolOptedForAcademicForm ? '$89' : '$79' }}</span> for
                  20-40 Minute One-on One
                  Screening
                  and In-Depth Results
                </p>
              </q-banner>
            </div>
          </q-card-section>

          <q-card-section class="q-p-none dialog-form-section">
            <div>
              <!-- First Row Start -->
              <div class="row q-pb-md">
                <div class="col-md-4 col-xs-12" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <div class="row">
                    <div class="col-md-6 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                      <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                        Child's First Name
                      </label>
                      <q-input class="app-form-input q-mt-xs" outlined placeholder="Child's First Name"
                        v-model="studentFirstName" :rules="[
                          (val) =>
                            (val && val.length > 0) || errorMsg.studentNameReqd,
                        ]" />
                    </div>
                    <div class="col-md-6 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                      <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                        Child's Last Name
                      </label>
                      <q-input class="app-form-input q-mt-xs" outlined placeholder="Child's First Name"
                        v-model="studentLastName" :rules="[
                          (val) =>
                            (val && val.length > 0) || errorMsg.studentNameReqd,
                        ]" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Primary Parent's Name
                  </label>
                  <q-input class="app-form-input q-mt-xs" outlined placeholder="Primary Parent's Name"
                    v-model="parentName" :rules="[
                      (val) =>
                        (val && val.length > 0) || errorMsg.parentsNameReqd,
                    ]" />
                </div>

                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Primary Parent's Email
                  </label>
                  <q-input class="app-form-input q-mt-xs" outlined placeholder="Primary Parent's Email"
                    v-model="parentEmail" :rules="[
                      (val) =>
                        (val && validateEmail(val)) || errorMsg.validEmail,
                    ]" />
                </div>
              </div>
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Date of Birth
                  </label>
                  <q-input readonly class="app-form-input q-mt-xs" outlined v-model="studentDob" :rules="[
                    (val) =>
                      (val && val.length > 0) || errorMsg.studentDobReqd,
                  ]">
                    <template v-slot:append>
                      <q-icon name="img:/app-icons/datepicker-icon.svg" class="cursor-pointer">
                        <q-popup-proxy v-if="!is_step_form_1_parent_complete" cover transition-show="scale"
                          transition-hide="scale">
                          <q-date v-model="studentDob">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Height
                  </label>
                  <q-input class="app-form-input q-mt-xs" outlined placeholder="Height eg. 5'4&quot;"
                    v-model="studentHeight" :rules="[
                      (val) =>
                        (val && val.length > 0) || errorMsg.heightReqd,
                    ]" />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Gender
                  </label>
                  <q-option-group :disable="is_step_form_1_parent_complete" inline :options="genderOptions" type="radio"
                    class="q-mt-xs flex items-center gender-option-group" v-model="studentGender" />
                </div>
              </div>
              <!-- Second Row End -->
              <!-- Thid Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Parent's Contact Number
                  </label>
                  <q-input class="app-form-input q-mt-xs" outlined placeholder="Parent's Contact Number"
                    v-model="parentContact" :rules="[
                      (val) => (val && validatePhoneNumber(val)) || errorMsg.parentsContactReqd,
                    ]" />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Address
                  </label>
                  <q-input class="app-form-input q-mt-xs" outlined placeholder="Enter your address" v-model="address"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || errorMsg.studentsAddressReqd,
                    ]" />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <div class="row">
                    <div class="col-md-6 col-xs-12 dialog-form-section-input-sub-left"
                      :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                      <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                        City
                      </label>
                      <q-input class="app-form-input q-mt-xs" outlined placeholder="Enter City" v-model="city" :rules="[
                        (val) =>
                          (val && val.length > 0) || errorMsg.cityReqd,
                      ]" />
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                        Zip
                      </label>
                      <q-input class="app-form-input q-mt-xs" outlined placeholder="Enter Zip" v-model="zip" :rules="[
                        (val) =>
                          (val && val.length > 0) || errorMsg.zipReqd,
                      ]" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Third Row End -->
              <!-- Fourth Row Start -->
              <div class="row q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Teacher's Email
                  </label>
                  <q-input class="app-form-input q-mt-xs" outlined placeholder="Teacher's Email" v-model="teacherEmail" />
                </div>
                <div class="col-md-2 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Current Grade
                  </label>
                  <q-select class="app-form-input cursor-pointer q-mt-xs" outlined :options="gradeEntryOptions"
                    v-model="gradeEntry" options-selected-class="text-white bg-secondary" :rules="[
                      (val) =>
                        (val && val.length > 0) || errorMsg.gradeEntryReqd,
                    ]" />
                </div>
                <div class="col-md-2 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Grade Entering
                  </label>
                  <q-select class="app-form-input cursor-pointer q-mt-xs" outlined :options="gradeEnteringOptions"
                    v-model="gradeEntering" options-selected-class="text-white bg-secondary" :rules="[
                      (val) =>
                        (val && val.length > 0) || errorMsg.gradeEnteringReqd,
                    ]" />
                </div>
              </div>
              <!-- Fourth Row End -->
              <!-- Fifth Row Start -->
              <div class="row q-pb-md">
                <div class="col-md-12 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    School Name
                  </label>
                  <q-input :readonly="true" class="app-form-input q-mt-xs" outlined placeholder="School Name"
                    v-model="schoolName" :rules="[
                      (val) =>
                        (val && val.length > 0) || errorMsg.schoolNameReqd,
                    ]" />
                </div>
              </div>
              <!-- Fifth Row End -->
            </div>
          </q-card-section>
          <q-card-actions align="right" class="bg-white q-mb-mb text-center">
            <q-btn type="submit" color="secondary save-button app-button" no-caps :label="Next" />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { validateEmail, validatePhoneNumber } from 'src/utils/helper';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'StepOneGeneric',
  setup() {
    return {
      genderOptions: [
        { label: 'Boy', value: 1 },
        { label: 'Girl', value: 2 },
      ],
      schoolHasPayed: ref(0),
      schoolOptedForAcademicForm: ref(false),
      gradeEntryOptions: ['None', 'Pre-K', 'TK', 'JK', 'K', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
      gradeEnteringOptions: ['Pre-K', 'TK', 'JK', 'K', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
      studentFirstName: ref(''),
      studentLastName: ref(''),
      studentHeight: ref(''),
      studentDob: ref(''),
      studentGender: ref(),
      parentName: ref(''),
      parentEmail: ref(''),
      parentContact: ref(''),
      gradeEntry: ref(''),
      gradeEntering: ref(''),
      schoolContact: ref(''),
      teacherEmail: ref(''),
      address: ref(''),
      city: ref(''),
      zip: ref(''),
      schoolName: ref(''),
      is_step_form_1_parent_complete: ref(false),
      validatePhoneNumber,
      validateEmail,
      errorMsg: {
        studentNameReqd: "Student's Name must be filled in.",
        studentHeightRqd: 'Height must be filled in',
        parentsNameReqd: "Parent's Name must be valid",
        heightReqd: 'Student Height must be filled in',
        validEmail: 'Must be a valid email.',
        studentDobReqd: 'Student DOB must be filled in.',
        genderRequired: 'Student Gender must be filled in',
        studentsAddressReqd: 'Address must be filled in',
        cityReqd: 'City must be filled in',
        zipReqd: 'Zip must be filled in',
        parentsContactReqd: " Parent's Contact must be valid",
        schoolContactReqd: 'School Contact Number must be valid',
        gradeEntryReqd: 'Current Grade must be filled in',
        gradeEnteringReqd: 'Grade Entering must be filled in',
        schoolNameReqd: 'School Name must be filled in'
      },
    };
  },
  mounted() {
    if (this.$route.params.schoolId) {
      this.getSchoolDetail();
    } else {
      this.$router.push('/404');
    }
  },
  methods: {
    getSchoolDetail() {
      this.$q.loading.show();
      const url = `/api/parent/v1/school/detail/${this.$route.params.schoolId}`;
      api({
        url,
        method: 'GET',
      })
        .then((res) => {
          this.schoolName = res.data.data.school.school_name;
          this.schoolHasPayed = res.data.data.school.school_has_payed;
          this.schoolOptedForAcademicForm = res.data.data.school.school_opted_for_academic_form;
          this.$q.loading.hide();
        })
        .catch((err) => {
          this.$q.loading.hide();
          this.$router.push('/404');
          console.error('getSchoolDetail() --->', err);
        });
    },
    submitForm() {
      const formData = {
        studentFirstName: this.studentFirstName,
        studentLastName: this.studentLastName,
        studentDob: this.studentDob,
        studentGender: this.studentGender,
        studentHeight: this.studentHeight,
        parentName: this.parentName,
        parentEmail: this.parentEmail,
        parentContact: this.parentContact,
        teacherEmail: this.teacherEmail,
        schoolContact: this.schoolContact,
        gradeEntry: this.gradeEntry,
        gradeEntering: this.gradeEntering,
        address: this.address,
        city: this.city,
        zip: this.zip,
        schoolId: this.$route.params.schoolId,
      };
      const url = '/api/parent/v1/form/create-parent-form';
      api({
        url,
        method: 'POST',
        data: formData,
      })
        .then((res) => {
          this.$router.push({
            name: 'ParentFormPage',
            params: {
              formId: res.data.data.data.parentFormUUID
            },
          });
        })
        .catch((err) => {
          Notify.create({
            message: err.response.data.message,
            color: 'negative',
            icon: 'report_problem',
          });
          console.error('submitForm() --->', err);
        });
    },
  },
});
</script>

<style lang="scss">
.form-wrapper {
  padding-left: 4.375rem;
  padding-right: 4.375rem;

  @media (max-width: '768px') {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .form-body {
    border-radius: 8px;
    padding: 1rem;

    @media (max-width: '768px') {
      padding: 0 !important;
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
