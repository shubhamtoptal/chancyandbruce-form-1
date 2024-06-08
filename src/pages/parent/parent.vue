<template>
  <q-page class="row items-center justify-center q-pb-md">
    <!-- CONFIRMATION BLOCK -->
    <div v-show="step === 0" class="row items-start justify-center q-pb-md">
      <div class="col-sm-12 col-md-8 form-wrapper">
        <q-card v-if="!isPaymentProcessing && !isLoading" flat class="bg-white form-body">
          <q-card-section>
            <!-- <p class="text-justify">
              We are grateful that you have chosen us to help in your child's
              educational journey. Please fill out the following information and
              provide a payment if prompted. This information will be redirected
              to your child's teacher and used in the overall assessment of your
              child. Please complete this form as soon as possible to allow
              screeners enough time to utilze the information for the
              assessment. We thank you in advance for your partnership!
            </p> -->
            <p class="text-justify">
              Dear <b>Chancy and Bruce Partner</b>,
              <br />
              Your child's school - <b>{{ studentData.schoolName }}</b> has partnered with <b> Chancy and Bruce </b>for
              the
              <i><b>School Readiness Development Profile.</b></i>
              This assessment evaluates your child's readiness for school learning in various skill areas.
              It takes about 20-30 minutes and provides a detailed profile of your child's readiness, along with
              recommendations for school entrance.
            </p>

            <p class="text-justify">
              <b>Live Q and A Sessions:</b>
              <br />
              Following the assessment, Dr. Nicky Magnuson will host live Q&A sessions via
              Zoom.
              Please reserve all score-specific questions for the Zoom.
              These sessions will be posted on our <a target="_blank"
                href="https://www.chancyandbruce-ra.com/zoom-meetings">website</a>. One-on-one consulting is available
              at an additional cost but
              must be scheduled through our website.
            </p>

            <p>
              For more information, visit <a target="_blank"
                href="https://www.chancyandbruce-ra.com">chancyandbruce-ra.com</a> or contact your School
              Director/Principal.
              <br />
              <a target="_blank"
                href="https://drive.google.com/file/d/1v-OIDy9mnS0W1lPYsTA8c02f8f3DmABR/view?usp=sharing">
                Read literature regarding Chancy and Bruce.
              </a>
            </p>

            <q-banner v-if="isPaymentRequired" class="bg-banner-error">
              Kindly be aware that cancellations need to be made within 24 hours prior to the scheduled screening time.
              In the event that a student fails to attend during the designated Chancy Bruce timeframe, there will be a
              nonrefundable fee of <b>${{ paymentAmount }}</b>. Additionally, any rescheduling required will incur a fee
              of
              <b>$10</b>.
            </q-banner>
          </q-card-section>
          <q-card-section v-if="isPaymentRequired">
            <p class="text-justify">
              You'll be asked to pay a fee at the end of this form.
              <br />
              The payment amount is <b>${{ paymentAmount }}</b>.
            </p>
          </q-card-section>
          <q-card-actions class="bg-white q-mb-mb text-center justify-center">
            <q-btn @click="dontProceed" outline color="secondary save-button app-button" no-caps label="Opt Out" />
            <q-btn @click="proceedToNextStep" color="secondary save-button app-button" no-caps
              :label="'Proceed to Form'" />
          </q-card-actions>
        </q-card>
        <q-card v-if="isPaymentProcessing">
          <q-card-section class="q-px-xl">
            <p class="text-center text-weight-regular q-mb-none">
              We are currently processing your payment...
              <br />
              Please do not refresh this page.
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- CONFIRMATION BLOCK ENDS -->
    <StepOne v-show="step === 1" :move-to-step-two="moveToStepTwo" :step-one-data="stepOneData"
      :student-data="studentData" />
    <StepTwo v-show="step === 2" :move-to-step-one="moveToStepOne" :move-to-step-three="moveToStepThree"
      :stepTwoData="stepTwoData" />
    <StepThree v-show="step === 3" :move-to-step-two="moveToStepTwo" :stepThreeData="stepThreeData"
      :submit-form="submitForm" :school-list="schoolList" :is-payment-required="isPaymentRequired"
      :payment-amount="paymentAmount" />
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
      paymentAmount: ref(0),
      isPaymentRequired: ref(true),
      isLoading: ref(true),
      isPaymentProcessing: ref(false),
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
        has_iep: false,
        change_in_environment: false,
        change_in_environment_text: '',
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
      // if (this.paymentUrl && this.isPaymentRequired) {
      //   window.location.href = this.paymentUrl;
      //   return;
      // } else {
      //   this.step = 1;
      // }
      this.step = 1;

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
            isPaymentDone,
            paymentUrl,
            paymentAmount,
          } = resp.data.data;
          this.paymentAmount = paymentAmount;
          this.isPaymentRequired = !isPaymentDone;

          if (this.isPaymentRequired) {
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

            if (this.$route.query.isStepTwo === 'true') {
              this.step = 2;
            }


            // GET FORM DATA FROM LOCAL STORAGE
            const formData = localStorage.getItem('form_data');
            const payment_redirect = localStorage.getItem('payment_redirect');
            this.isPaymentProcessing = payment_redirect === 'true';

            if (formData && payment_redirect === 'true' && !this.isPaymentRequired) {
              this.submitFormData(JSON.parse(formData));
              localStorage.removeItem('form_data');
              localStorage.removeItem('payment_redirect');

              setTimeout(() => {
                this.getFormDetails();
              }, 2000);

            }

            this.isLoading = false;
            this.$q.loading.hide();
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
          has_iep: data.has_iep,
          change_in_environment: data.change_in_environment,
          change_in_environment_text: data.change_in_environment_text,
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

      // CHECK IF PAYMENT IS REQUIRED THEN
      // STORE THE DATA IN LOCAL STORAGE AND REDIRECT TO PAYMENT PAGE
      // ONCE USER COMES BACK LOOK FOR THE LOCAL STORAGE DATA AND SUBMIT THE FORM
      if (this.paymentUrl && this.isPaymentRequired) {
        // SAVE FORM DATA TO LOCAL STORAGE
        localStorage.setItem('form_data', JSON.stringify(formData));
        localStorage.setItem('payment_redirect', 'true');
        window.location.href = this.paymentUrl;
        return;
      }

      this.submitFormData(formData);
    },

    async submitFormData(formData: any) {
      this.$q.loading.show();
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
          this.$q.loading.hide();
          window.location.reload();
        })
        .catch((err) => {
          this.$q.loading.hide();
          console.error('submitForm() --->', err);
        });
    }
  },
});
</script>
