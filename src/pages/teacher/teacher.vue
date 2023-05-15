import StepOne from './step-one.vue';

<template>
  <q-page class="row items-center justify-center q-pb-md">
    <StepOne v-show="step === 1" :move-to-step-two="moveToStepTwo" :step-one-data="stepOneData"
      :student-data="studentData" />
    <StepTwo v-show="step === 2" :move-to-step-one="moveToStepOne" :submit-form="submitForm"
      :step-two-data="stepTwoData" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import StepOne from './step-one.vue';
import StepTwo from './step-two.vue';
import { StepThreeData } from 'src/quasar';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'ParentForm',
  components: {
    StepOne,
    StepTwo
  },
  setup() {
    return {
      step: ref(0),
      stepTwoData: ref({
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
        school_list: '',
      }),
      studentData: ref({
        studentName: '',
        studentGender: '',
        studentHeight: '',
        studentDob: '',
        parentContact: '',
        parentEmail: '',
        parentName: '',
        teacherEmail: '',
        gradeEntry: '',
        address: '',
        city: '',
        zip: '',
        schoolName: '',
      }),
      stepOneData: ref({
        is_step_form_1_teacher_complete: false,
      })
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
    getFormDetails() {
      const url = `/api/teacher/v1/form/step-one-teacher/${this.$route.params.formId}`;
      api({
        url,
        method: 'GET',
      })
        .then((resp) => {
          const { stepOne, school, student } = resp.data.data;
          this.stepOneData = {
            is_step_form_1_teacher_complete: stepOne.is_step_form_1_teacher_complete
          }
          this.studentData = {
            studentName: student.student_name,
            studentGender: student.student_gender,
            studentHeight: student.student_height,
            studentDob: student.student_dob,
            parentContact: student.parent_contact,
            parentEmail: student.parent_email,
            parentName: student.parent_name,
            teacherEmail: student.teacher_email,
            gradeEntry: student.grade_entry,
            address: student.address,
            city: student.city,
            zip: student.zip,
            schoolName: school.school_name,
          }
          this.step = 1;
        })
        .catch((err) => {
          console.error('getFormDetails() --->', err);
        });
    },
    moveToStepOne() {
      this.step = 1;
    },
    moveToStepTwo() {
      this.step = 2;
    },
    submitForm(data: StepThreeData) {
      console.log('data --->', data);
      this.stepTwoData = { ...data }
      const formData = {
        ...this.stepTwoData
      }
      const url = `/api/teacher/v1/form/step-one-teacher/${this.$route.params.formId}`;
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
          window.location.reload()
        })
        .catch((err) => {
          console.error('submitForm() --->', err);
        });
    }
  },
});
</script>
