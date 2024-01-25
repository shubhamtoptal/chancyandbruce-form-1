import StepOne from './step-one.vue';

<template>
  <q-page class="row items-center justify-center q-pb-md">
    <!-- CONFIRMATION BLOCK -->
    <div v-show="step === 0" class="row items-start justify-center q-pb-md">
      <div class="col-sm-12 col-md-8 form-wrapper">
        <q-card flat class="bg-white form-body">
          <q-card-section>
            <p class="text-justify">
              We are grateful that you have chosen us to help in your child's
              educational journey. Please fill out the following information and
              provide a payment if prompted. This information will be redirected
              to your child's teacher and used in the overall assessment of your
              child. Please complete this form as soon as possible to allow
              screeners enough time to utilze the information for the
              assessment. We thank you in advance for your partnership!
            </p>
          </q-card-section>
          <!-- <q-card-section>
            <p class="text-center text-h5 text-weight-medium">
              Do you want to screen your child?
              <br />
              Click Yes to proceed.
            </p>
          </q-card-section> -->
          <q-card-section v-if="isPaymentRequired">
            <p class="text-justify">
              By clicking on the <b>"Proceed to payment"</b> button, you will be redirected to the payment page. Please
              complete the payment to proceed to the form.
              The payment amount is <b>{{ isAcademicSectionActive ? '$89' : '$79' }}</b>.
            </p>
          </q-card-section>
          <q-card-actions class="bg-white q-mb-mb text-center justify-center">
            <q-btn @click="dontProceed" outline color="secondary save-button app-button" no-caps label="Opt Out" />
            <q-btn @click="proceedToNextStep" color="secondary save-button app-button" no-caps
              :label="!isPaymentRequired ? 'Proceed to Form' : 'Proceed to Payment'" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <!-- CONFIRMATION BLOCK ENDS -->
    <StepOne v-show="step === 1" :move-to-step-two="moveToStepTwo" :step-one-data="stepOneData"
      :student-data="studentData" />
    <StepTwo v-show="step === 2" :move-to-step-one="moveToStepOne" :move-to-step-three="moveToStepThree"
      :stepTwoData="stepTwoData" />
    <StepThree v-show="step === 3" :move-to-step-two="moveToStepTwo" :stepThreeData="stepThreeData"
      :submit-form="submitForm" :school-list="schoolList" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import StepOne from './step-one.vue';
import StepTwo from './step-two.vue';
import StepThree from './step-three.vue';
import { StepThreeData, StepTwoData, StudentData } from 'src/quasar';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'ParentForm',
  components: {
    StepOne,
    StepTwo,
    StepThree,
  },
  setup() {
    return {
      step: ref(0),
      schoolList: ref([]),
      isAcademicSectionActive: ref(false),
      isPaymentRequired: ref(false),
      paymentUrl: ref(''),
      stepTwoData: ref({
        is_pregnancy_complication: false,
        pregnancy_complication_text: '',
        is_child_premature: false,
        child_premature_text: '',
        is_chronic_illness: false,
        chronic_illness_text: '',
        is_allergies: false,
        allergies_text: '',
        is_unsettling_experience: false,
        unsettling_experience_text: '',
        primary_language: '',
      }),
      stepThreeData: ref<StepThreeData>({
        show_curiosity: 1,
        initiate_play_activity: 1,
        works_play_cooperatively: 1,
        talk_comfortably_other_child: 1,
        turns_and_share: 1,
        participate_large_group: 1,
        accepts_responsibility: 1,
        seperate_from_parent: 1,
        simple_task_independent: 1,
        follow_direction: 1,
        show_concern: 1,
        consistent_complete_task: 1,
        pay_attention: 1,
        eager_learn_new_task: 1,
        attend_to_task_10_min: 1,
        express_want_need: 1,
        display_feeling_appropriate: 1,
        speech_understand_others: 1,
        accept_limit_follow_rules: 1,
        comments: '',
        school_list: [],
      }),
      studentData: ref<StudentData>({
        _id: '',
        studentFirstName: '',
        studentLastName: '',
        studentGender: 1,
        studentHeight: '',
        studentDob: '',
        parentContact: '',
        parentEmail: '',
        parentName: '',
        teacherEmail: '',
        gradeEntry: '',
        gradeEntering: '',
        address: '',
        city: '',
        zip: '',
        schoolName: '',
        schoolId: '',
        schoolContact: '',
      }),
      stepOneData: ref({
        is_step_form_1_parent_complete: false,
      }),
    };
  },
  mounted() {
    if (this.$route.params.formId) {
      this.getFormDetails();
    } else {
      this.$router.push('/404');
    }
  },
  methods: {
    dontProceed() {
      const url = `/api/parent/v1/form/step-one-parent/${this.$route.params.formId}/has-not-opted`;
      api({
        url,
        method: 'PUT',
      })
        .then(() => {
          window.location.href = 'https://www.chancyandbruce-ra.com/';
        })
        .catch((err) => {
          console.error('getFormDetails() --->', err);
        });
    },
    proceedToNextStep() {
      if (this.paymentUrl && this.isPaymentRequired) {
        window.location.href = this.paymentUrl;
        return;
      } else {
        this.step = 1;
      }

      const url = `/api/parent/v1/form/step-one-parent/${this.$route.params.formId}/has-opted`;
      api({
        url,
        method: 'PUT',
      })
        .then(() => {
          console.log('PARENT OPTED SCREENING');
        })
        .catch((err) => {
          console.error('getFormDetails() --->', err);
        });
    },
    getSchoolList() {
      const url = '/api/parent/v1/school/list';
      api({
        url,
        method: 'GET',
      })
        .then((resp) => {
          this.schoolList = resp.data.data.schools;
        })
        .catch((err) => {
          console.error('getFormDetails() --->', err);
        });
    },
    getFormDetails() {
      this.$q.loading.show();
      const url = `/api/parent/v1/form/step-one-parent/${this.$route.params.formId}`;
      api({
        url,
        method: 'GET',
      })
        .then((resp) => {
          const {
            stepOne,
            school,
            student,
            isPaymentRequired,
            paymentUrl,
            isAcademicSectionActive,
          } = resp.data.data;
          this.$q.loading.hide();

          this.isAcademicSectionActive = isAcademicSectionActive;
          this.isPaymentRequired = isPaymentRequired;

          if (isPaymentRequired) {
            this.paymentUrl = paymentUrl;
          }
          if (student && school && stepOne) {
            this.getSchoolList();
            this.stepOneData = {
              is_step_form_1_parent_complete:
                stepOne.is_step_form_1_parent_complete,
            };
            if (stepOne && stepOne.step_1_parent_data) {
              this.step = 1;
            }
            this.studentData = {
              _id: student._id,
              studentFirstName: student.student_first_name,
              studentLastName: student.student_last_name,
              studentGender: student.student_gender,
              studentHeight: student.student_height,
              studentDob: student.student_dob,
              parentContact: student.parent_contact,
              parentEmail: student.parent_email,
              parentName: student.parent_name,
              teacherEmail: student.teacher_email,
              gradeEntry: student.grade_entry,
              gradeEntering: student.grade_entering,
              address: student.address,
              city: student.city,
              zip: student.zip,
              schoolName: school.school_name,
              schoolContact: student.school_contact,
              schoolId: student.school_id,
            };
          }
        })
        .catch((err) => {
          this.$q.loading.hide();
          console.error('getFormDetails() --->', err);
        });
    },
    moveToStepOne() {
      this.step = 1;
    },
    moveToStepTwo(student?: StudentData) {
      if (student) {
        this.studentData = {
          ...this.studentData,
          studentFirstName: student.studentFirstName,
          studentLastName: student.studentLastName,
          studentGender: student.studentGender,
          studentHeight: student.studentHeight,
          studentDob: student.studentDob,
          parentContact: student.parentContact,
          parentEmail: student.parentEmail,
          parentName: student.parentName,
          teacherEmail: student.teacherEmail,
          gradeEntry: student.gradeEntry,
          gradeEntering: student.gradeEntering,
          address: student.address,
          city: student.city,
          zip: student.zip,
          schoolContact: student.schoolContact,
        };
      }
      this.step = 2;
    },
    moveToStepThree(data?: StepTwoData) {
      if (data) {
        this.stepTwoData = {
          is_pregnancy_complication: data.is_pregnancy_complication,
          pregnancy_complication_text: data.pregnancy_complication_text,
          is_child_premature: data.is_child_premature,
          child_premature_text: data.child_premature_text,
          is_chronic_illness: data.is_chronic_illness,
          chronic_illness_text: data.chronic_illness_text,
          is_allergies: data.is_allergies,
          allergies_text: data.allergies_text,
          is_unsettling_experience: data.is_unsettling_experience,
          unsettling_experience_text: data.unsettling_experience_text,
          primary_language: data.primary_language,
        };
      }
      this.step = 3;
    },
    submitForm(data: StepThreeData) {
      console.log('data --->', data);
      this.stepThreeData = { ...data };
      const formData = {
        student: {
          id: this.studentData._id,
          student_first_name: this.studentData.studentFirstName,
          student_last_name: this.studentData.studentLastName,
          student_dob: this.studentData.studentDob,
          student_gender: this.studentData.studentGender,
          student_height: this.studentData.studentHeight,
          parent_name: this.studentData.parentName,
          parent_email: this.studentData.parentEmail,
          parent_contact: this.studentData.parentContact,
          teacher_email: this.studentData.teacherEmail,
          school_contact: this.studentData.schoolContact,
          grade_entry: this.studentData.gradeEntry,
          grade_entering: this.studentData.gradeEntering,
          address: this.studentData.address,
          city: this.studentData.city,
          zip: this.studentData.zip,
          school_id: this.studentData.schoolId,
        },
        ...this.stepTwoData,
        ...this.stepThreeData,
      };
      const url = `/api/parent/v1/form/step-one-parent/${this.$route.params.formId}`;
      api({
        url,
        method: 'POST',
        data: formData,
      })
        .then(() => {
          Notify.create({
            type: 'positive',
            message: 'Form submitted successfully',
          });
          window.location.reload();
        })
        .catch((err) => {
          console.error('submitForm() --->', err);
        });
    },
  },
});
</script>
