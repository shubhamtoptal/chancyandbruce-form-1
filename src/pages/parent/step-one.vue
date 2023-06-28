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
        <q-form>
          <q-card-section>
            <div class="card-header">
              <div clas="step-info">
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
                      <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                        placeholder="Child's First Name" v-model="studentFirstName" />
                    </div>
                    <div class="col-md-6 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                      <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                        Child's Last Name
                      </label>
                      <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                        placeholder="Child's First Name" v-model="studentLastName" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Primary Parent Name
                  </label>
                  <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                    placeholder="Primary Parent Name" v-model="parentName" />
                </div>

                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Primary Parent Email
                  </label>
                  <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                    placeholder="Primary Parent Email" v-model="parentEmail" />
                </div>
              </div>
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pt-sm q-pb-md">
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Date of birth
                  </label>
                  <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                    v-model="studentDob">
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
                  <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                    placeholder="Height eg. 5'4&quot;" v-model="studentHeight" />
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
                  <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                    placeholder="Parent's Contact Number" v-model="parentContact" />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Address
                  </label>
                  <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                    placeholder="Enter your address" v-model="address" />
                </div>
                <div class="col-md-4 col-xs-12 dialog-form-section-input">
                  <div class="row">
                    <div class="col-md-6 col-xs-12 dialog-form-section-input-sub-left"
                      :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                      <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                        City
                      </label>
                      <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                        placeholder="Enter City" v-model="city" />
                    </div>
                    <div class="col-md-6 col-xs-12">
                      <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                        Zip
                      </label>
                      <q-input :readonly="is_step_form_1_parent_complete" class="app-form-input q-mt-xs" outlined
                        placeholder="Enter Zip" v-model="zip" />
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
                  <q-input :readonly="true" class="app-form-input q-mt-xs" outlined placeholder="Teacher's Email"
                    v-model="teacherEmail" />
                </div>
                <div class="col-md-2 col-xs-12 dialog-form-section-input" :class="$q.screen.lt.md ? 'q-pb-md' : ''">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Grade Entry
                  </label>
                  <q-input :readonly="true" class="app-form-input q-mt-xs" outlined placeholder="Grade Entry"
                    v-model="gradeEntry" />
                </div>
                <div class="col-md-6 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    School Name
                  </label>
                  <q-input :readonly="true" class="app-form-input q-mt-xs" outlined placeholder="School Name"
                    v-model="schoolName" />
                </div>
              </div>
              <!-- Fourth Row End -->
            </div>
          </q-card-section>

          <q-card-section v-if="is_step_form_1_parent_complete">
            <div class="card-header">
              <q-banner class="bg-banner-success">
                <p class="q-mb-none text-positive text-weight-bold">
                  Note: You have submitted the form successfully.
                </p>
              </q-banner>
            </div>
          </q-card-section>
          <q-card-actions v-else align="right" class="bg-white q-mb-mb text-center">
            <q-btn @click="moveToNextStep()" color="secondary save-button app-button" no-caps label="Next" />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { StudentData } from 'src/quasar';
import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ParentStepOne',
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
        (data: StudentData): void;
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
      studentFirstName: ref(''),
      studentLastName: ref(''),
      studentHeight: ref(''),
      studentDob: ref(''),
      studentGender: ref(),
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
      is_step_form_1_parent_complete: ref(false),
    };
  },
  watch: {
    studentData(nv) {
      this.studentFirstName = nv.studentFirstName;
      this.studentLastName = nv.studentLastName;
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
      this.is_step_form_1_parent_complete = nv.is_step_form_1_parent_complete
    }
  },
  methods: {
    moveToNextStep() {
      const data: StudentData = {
        _id: this.studentData._id,
        studentFirstName: this.studentFirstName,
        studentLastName: this.studentLastName,
        studentGender: this.studentGender,
        studentHeight: this.studentHeight,
        studentDob: this.studentDob,
        parentContact: this.parentContact,
        parentEmail: this.parentEmail,
        parentName: this.parentName,
        teacherEmail: this.teacherEmail,
        gradeEntry: this.gradeEntry,
        schoolName: this.schoolName,
        schoolContact: this.schoolContact,
        schoolId: this.studentData.schoolId,
        address: this.address,
        city: this.city,
        zip: this.zip,
      }
      this.moveToStepTwo(data);
    }
  }
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
