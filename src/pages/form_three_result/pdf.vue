<template>
  <div style="print-color-adjust: exact; min-width: 1000px; max-width: 1000px; overflow-x scroll;"
    class="row items-center justify-center q-pb-md q-px-lg">

    <q-card class="text-center full-width bg-transparent" flat>
      <div class="row q-my-md full-width">
        <div class="col-2">
          <q-img src="~assets/cblogo.png" width="122px" />
        </div>
        <div class="col-10">
          <div class="cnb-address-container text-center text-weight-medium">
            <p>1020 Calle Recodo, San Clemente, CA, 92673 / 949-326-4917</p>
            <p>www.chancyandbruce-ra.com</p>
          </div>
        </div>
      </div>
    </q-card>
    <!-- STEP ONE START -->
    <div class="col-12 form-wrapper">
      <q-card v-if="formThreeData" flat class="bg-white form-body">
        <!-- USER INFO SECTION START -->
        <q-card-section class="q-pa-none q-mt-md dialog-form-section">
          <div style="background: #f1f9ff" class="q-pa-md">
            <p class="text-h6 q-ma-none text-accent text-weight-medium">
              EARLY CHILDHOOD DEVELOPMENT PROFILE:
            </p>
          </div>

          <!-- Row 1 -->
          <div class="row q-py-lg">
            <div class="col-12">
              <div class="row q-px-lg">
                <div class="col-3">
                  <span class="text-primary text-body2">Child Name</span>
                  <div class="text-body text-weight-medium text-color ">{{ formThreeData.studentInfo.name }}</div>
                </div>
                <div class="col-3">
                  <span class="text-primary text-body2">Date of birth</span>
                  &emsp;
                  <div class="text-body text-weight-medium text-color ">{{ formThreeData.studentInfo.dob }}</div>
                </div>
                <div class="col-3">
                  <span class="text-primary text-body2">Place Administered</span>
                  &emsp;
                  <div class="text-body text-weight-medium text-color ">{{ formThreeData.studentInfo.placeAdministered }}
                  </div>
                </div>
                <div class="col-3">
                  <span class="text-primary text-body2">Date Administered</span>
                  &emsp;
                  <div class="text-body text-weight-medium text-color ">{{ formThreeData.studentInfo.dateAdministered }}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- Row 2 -->
          <div class="row q-py-lg">
            <div class="col-12">
              <div class="row q-px-lg">
                <div class="col-3">
                  <span class="text-primary text-body2">Child’s Age</span>
                  <div class="text-body2">{{ formThreeData.studentInfo.ageInMonth }}</div>
                </div>
                <div class="col-4">
                  <span class="text-primary text-body2">Child’s age Appropriate Range</span>
                  &emsp;
                  <div class="text-body2">{{ formThreeData.studentInfo.ageAppropriateRange }}</div>
                </div>
                <div class="col-5">
                  <span class="text-primary text-body2">Recommended Grade Level Placement</span>
                  &emsp;
                  <div class="text-body2">{{ formThreeData.studentInfo.recommendedGrade }}</div>
                </div>
              </div>
            </div>
          </div>

        </q-card-section>
        <!-- USER INFO SECTION END -->
        <!-- SKILL AREA SECTION START -->
        <q-card-section class="q-pa-none dialog-form-section q-mt-md">
          <div class="row skill-area-header q-pa-md justify-center items-center">
            <div class="col-5">
              <div class="row">
                <div class="col-5 text-left">Skill Area</div>
                <div class="col-7 text-center">
                  Child's Development
                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="row justify-end items-center">
                <div class="col-2 text-center">Strong</div>
                <div class="col-3 text-center">
                  Age Appropriate
                </div>
                <div class="col-3 text-center">Emerging</div>
                <div class="col-3 text-center">
                  Non-Age Appropriate
                </div>
              </div>
            </div>
          </div>
          <div v-for="(skill, key) in formThreeData.skillArea" :key="key"
            class="header row skill-area-body q-pa-md justify-center border">
            <div class="col-5">
              <div class="row items-center">
                <div class="col-5 text-left">
                  {{ skillAreaEnum[key] }}
                </div>
                <div v-if="!['academic_k', 'academic_one'].includes(`${key}`)" class="col-7 text-center">
                  {{ skill.ageRangeYear }} Year
                  &emsp;
                  {{ skill.ageRangeMonth }} Month
                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="row justify-end">
                <div class="col-2 text-center">
                  <q-radio disable v-model="skill.skill" :val="1" color="secondary" dense size="sm" keep-color />
                </div>
                <div class="col-3 text-center">
                  <q-radio disable v-model="skill.skill" :val="2" color="secondary" dense size="sm" keep-color />
                </div>
                <div class="col-3 text-center">
                  <q-radio disable v-model="skill.skill" :val="3" color="secondary" dense size="sm" keep-color />
                </div>
                <div class="col-3 text-center">
                  <q-radio disable v-model="skill.skill" :val="4" color="secondary" dense size="sm" keep-color />
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
        <!-- SKILL AREA SECTION END -->
        <hr />
        <!-- SOCIAL_EMOTIONAL MATURITY START -->
        <q-card-section class="q-pt-sm q-pa-none dialog-form-section">
          <div class="row items-center justify-around q-px-md">
            <div class="col-3 text-weight-medium text-primary">Social-Emotional Maturity:</div>
            <div class="col-2">
              <q-radio disable keep-color color="secondary" size="sm" :val="1"
                v-model="formThreeData.socialEmotionalMaturity" label="Age Appropriate" />
            </div>
            <div class="col-3">
              <q-radio disable keep-color color="secondary" size="sm" :val="2"
                v-model="formThreeData.socialEmotionalMaturity" label="Young for Chronological Age" />
            </div>
            <div class="col-3">
              <q-radio disable keep-color color="secondary" size="sm" :val="3"
                v-model="formThreeData.socialEmotionalMaturity" label="Non-Age Appropriate" />
            </div>
          </div>
        </q-card-section>
        <!-- SOCIAL_EMOTIONAL MATURITY END -->
        <hr />
        <!-- SUCCESSFUL SCHOOL ENTRANCE START -->
        <q-card-section class="q-pt-sm q-pa-none dialog-form-section">
          <div>
            <p>
              For successful school entrance
              <b class="text-secondary"> {{ formThreeData.schoolEntranceYear }} </b>
              recommended development in all skill areas be a minimum of
              <b class="text-secondary"> {{ formThreeData.schoolEntranceAgeYear }} </b>
              year
              <b class="text-secondary"> {{ formThreeData.schoolEntranceAgeMonth }} </b>
              month of age by this time of the year with age appropriate
              social emotional maturity.
            </p>
          </div>
        </q-card-section>
        <!-- SUCCESSFUL SCHOOL ENTRANCE END -->

        <!-- SUMMARY OF PROFILE START -->
        <q-card-section style="page-break-before: always;" class="q-pt-sm q-mt-lg q-pa-none dialog-form-section">
          <div style="background: #f1f9ff" class="q-pa-md">
            <p class="text-h6 q-ma-none text-accent text-weight-medium">
              SUMMARY OF PROFILE:
            </p>
          </div>
          <div class="row q-pt-md">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.summaryOfProfile.childDevelopmentAgeAppropriate"
                    label="Child’s skill development is age appropriate for chronological age" />
                </div>
                <div v-if="formThreeData.summaryOfProfile.childDevelopmentAgeAppropriateText" class="col-12">
                  <p style="padding-left: 35px; border-bottom: 1px solid #333;">
                    {{ formThreeData.summaryOfProfile.childDevelopmentAgeAppropriateText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.summaryOfProfile.childSocialEmotionalAgeAppropriate
                      " label="Child’s social-emotional development is age appropriate for chronological age" />
                </div>
                <div v-if="formThreeData.summaryOfProfile.childSocialEmotionalAgeAppropriateText" class="col-12">
                  <p style="padding-left: 35px; border-bottom: 1px solid #333;">
                    {{ formThreeData.summaryOfProfile.childSocialEmotionalAgeAppropriateText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.summaryOfProfile.monitorTheAreas" label="Monitor the areas of" />
                </div>
                <div v-if="formThreeData.summaryOfProfile.monitorTheAreasText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.summaryOfProfile.monitorTheAreasText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.summaryOfProfile.furtherDiagnosticEvaluation"
                    label="Further Diagnostic Evaluation Recommended" />
                </div>
                <div v-if="formThreeData.summaryOfProfile.furtherDiagnosticEvaluationText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.summaryOfProfile.furtherDiagnosticEvaluationText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.summaryOfProfile.speechProblemObserved" label="Speech problem observed" />
                </div>
                <div v-if="formThreeData.summaryOfProfile.speechProblemObservedText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.summaryOfProfile.speechProblemObservedText }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="formThreeData.summaryOfProfile.comments" class="row full-width">
            <div class="row q-mt-md full-width">
              <div class="col-md-12 col-xs-12 dialog-form-section-input">
                <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                  Additional Comment
                </label>
                <div class="col-12 q-pt-sm">
                  <p style="padding-left: 20px;">
                    {{ formThreeData.summaryOfProfile.comments }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
        <!-- SUMMARY OF PROFILE END -->

        <!-- OBSERVATION START -->
        <q-card-section class="q-pt-sm q-pa-none dialog-form-section q-mt-md">
          <div style="background: #f1f9ff" class="q-pa-md">
            <p class="text-h6 q-ma-none text-accent text-weight-medium">
              OBSERVATION:
            </p>
          </div>
          <div class="row">
            <div class="q-py-xs col-3" v-for="(observation, index) in formThreeData.observations" :key="index">
              <q-checkbox disable keep-color color="secondary" size="sm" v-if="observation.type === 'checkbox'"
                true-value="1" false-value="0" v-model="observation.value" :label="observation.label" />
            </div>
          </div>
        </q-card-section>
        <!-- OBSERVATION END -->

        <hr />
        <!-- SKILL DEVELOPMENT FOR SCHOOL ENTRANCE START -->
        <q-card-section class="q-py-sm q-pa-none dialog-from-section">
          <div class="q-pa-sm">
            <p class="text-body q-ma-none text-accent text-weight-medium">
              Skill Development for School Entrance
            </p>
          </div>
          <div class="row q-px-sm">
            <div class="col-3">
              <q-radio disable v-model="formThreeData.skillDevelopmentForSchoolEnterance" :val="1" color="secondary" dense
                size="sm" keep-color label="Ready" />
            </div>
            <div class="col-3">
              <q-radio disable v-model="formThreeData.skillDevelopmentForSchoolEnterance" :val="2" color="secondary" dense
                size="sm" keep-color label="Borderline" />
            </div>
            <div class="col-3">
              <q-radio disable v-model="formThreeData.skillDevelopmentForSchoolEnterance" :val="3" color="secondary" dense
                size="sm" keep-color label="Not Ready" />
            </div>
          </div>
        </q-card-section>
        <!-- SKILL DEVELOPMENT FOR SCHOOL ENTRANCE END -->

        <hr />
        <!-- ACADEMIC ACHIEVEMENT FOR 1st GRADE READINESS START -->
        <q-card-section class="q-py-sm q-pa-none dialog-from-section">
          <div class="q-pa-sm">
            <p class="text-body q-ma-none text-accent text-weight-medium">
              Academic Achievement for 1st Grade Readiness
            </p>
          </div>
          <div class="row q-px-sm">
            <div class="col-3">
              <q-radio disable v-model="formThreeData.academicAchievementForFirstGradeReadiness" :val="1"
                color="secondary" dense size="sm" keep-color label="Ready" />
            </div>
            <div class="col-3">
              <q-radio diable v-model="formThreeData.academicAchievementForFirstGradeReadiness" :val="2" color="secondary"
                dense size="sm" keep-color label="Borderline" />
            </div>
            <div class="col-3">
              <q-radio disable v-model="formThreeData.academicAchievementForFirstGradeReadiness" :val="3"
                color="secondary" dense size="sm" keep-color label="Not Ready" />
            </div>
          </div>
        </q-card-section>
        <!-- ACADEMIC ACHIEVEMENT FOR 1st GRADE READINESS END -->

        <hr />
        <!-- SOCIAL-EMOTIONAL DEVELOPMENT FOR SCHOOL ENTRANCE START -->
        <q-card-section class="q-py-sm q-pa-none dialog-from-section">
          <div class="q-pa-sm">
            <p class="text-body q-ma-none text-accent text-weight-medium">
              Social-Emotional Development for School Entrance
            </p>
          </div>
          <div class="row q-px-sm">
            <div class="col-3">
              <q-radio disable v-model="formThreeData.socialEmotionDevelopmentForSchoolEntrance" :val="1"
                color="secondary" dense size="sm" keep-color label="Ready" />
            </div>
            <div class="col-3">
              <q-radio disable v-model="formThreeData.socialEmotionDevelopmentForSchoolEntrance" :val="2"
                color="secondary" dense size="sm" keep-color label="Borderline" />
            </div>
            <div class="col-3">
              <q-radio disable v-model="formThreeData.socialEmotionDevelopmentForSchoolEntrance" :val="3"
                color="secondary" dense size="sm" keep-color label="Not Ready" />
            </div>
          </div>
        </q-card-section>
        <!-- ASOCIAL-EMOTIONAL DEVELOPMENT FOR SCHOOL ENTRANCE END -->

        <!-- RECOMMENDATIONS START -->
        <q-card-section style="page-break-before: always;" class="q-pt-sm q-mt-lg q-pa-none dialog-form-section">
          <div style="background: #f1f9ff" class="q-pa-md">
            <p class="text-h6 q-ma-none text-accent text-weight-medium">
              RECOMMENDATIONS :
            </p>
          </div>
          <div class="row q-pt-md">
            <div class="col-12">
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.recommendations.enterSchoolForUpcomingOrCurrentSchoolYear
                      " label="Enter school for upcoming or current school year." />
                </div>
                <div v-if="formThreeData.recommendations.enterSchoolForUpcomingOrCurrentSchoolYearText" class="col-12">
                  <p style="padding-left: 35px; border-bottom: 1px solid #333;">
                    {{ formThreeData.recommendations.enterSchoolForUpcomingOrCurrentSchoolYearText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.recommendations.delaySchoolEntranceBasedOnScreeningResult
                      " label="Delay school entrance based on screening results." />
                </div>
                <div v-if="formThreeData.recommendations.delaySchoolEntranceBasedOnScreeningResultText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.recommendations.delaySchoolEntranceBasedOnScreeningResultText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.recommendations.frustrationInSchoolMayOccur"
                    label="Frustration in school may occur. Due to" />
                </div>
                <div v-if="formThreeData.recommendations.frustrationInSchoolMayOccurText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.recommendations.frustrationInSchoolMayOccurText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.recommendations.highRiskIndicator" label="High risk indicators" />
                </div>
                <div v-if="formThreeData.recommendations.highRiskIndicatorText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.recommendations.highRiskIndicatorText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.recommendations.monitorSchoolProgramIfYouChooseToEnter
                      " label="Monitor school program if you choose to enter" />
                </div>
                <div v-if="formThreeData.recommendations.monitorSchoolProgramIfYouChooseToEnterText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.recommendations.monitorSchoolProgramIfYouChooseToEnterText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12">
                  <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                    v-model="formThreeData.recommendations.furtherDiagnosticEvaluationNeeded
                      " label="Further diagnostic evaluation needed." />
                </div>
                <div v-if="formThreeData.recommendations.furtherDiagnosticEvaluationNeededText" class="col-12">
                  <p style="padding-left: 35px;">
                    {{ formThreeData.recommendations.furtherDiagnosticEvaluationNeededText }}
                  </p>
                </div>
              </div>
              <div class="row items-center">
                <div class="col-12 flex">
                  <div class="row items-center">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.recommendations.itAppears" />
                    <p class="q-ma-none row flex items-center">
                      It appears&nbsp;
                      <b>
                        {{ formThreeData.studentInfo.name }}
                      </b>
                      &nbsp;would benefit from another year of development
                      growth before entering school.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row q-pt-md full-width">
            <div class="row q-pb-md q-my-md full-width">
              <div class="col-12 dialog-form-section-input">
                <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                  Additional Comments -
                </label>
                <div class="col-12 q-pt-sm">
                  <p class="seaweed" style="font-size: 1.25rem; padding-left: 10px; border-bottom: 1px solid #333;">
                    {{ formThreeData.formThreeFinalComment }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
        <!-- RECOMMENDATIONS END -->
      </q-card>
    </div>
    <!-- STEP ONE END -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'FinalFormPage',
  setup() {
    return {
      formThreeData: ref<any | null>(null),
      skillAreaEnum: ref<{ [key: string]: string }>({
        'fine_motor': 'Fine Motor',
        'visual_discrimination': 'Visual Discrimination',
        'visual_memory': 'Visual Memory',
        'auditory_discrimination': 'Auditory Discrimination',
        'auditory_memory': 'Auditory Memory',
        'receptive_language': 'Receptive Language',
        'expressive_language': 'Expressive Language',
        'comprehension': 'Comprehension',
        'gross_motor': 'Gross Motor',
        'academic_k': 'Academic K',
        'academic_one': 'Academic One',
      }),
    };
  },
  mounted() {
    /**
     * Call the API over here
     */
    this.formThreeData = {
      'skillArea': {
        'fine_motor': {
          'ageInMonth': 60,
          'ageRangeYear': 5,
          'ageRangeMonth': 0,
          'skill': 1
        },
        'visual_discrimination': {
          'ageInMonth': 30,
          'ageRangeYear': 2,
          'ageRangeMonth': 6,
          'skill': 3
        },
        'visual_memory': {
          'ageInMonth': 30,
          'ageRangeYear': 2,
          'ageRangeMonth': 6,
          'skill': 3
        },
        'auditory_discrimination': {
          'ageInMonth': 30,
          'ageRangeYear': 2,
          'ageRangeMonth': 6,
          'skill': 3
        },
        'auditory_memory': {
          'ageInMonth': 60,
          'ageRangeYear': 5,
          'ageRangeMonth': 0,
          'skill': 1
        },
        'receptive_language': {
          'ageInMonth': 30,
          'ageRangeYear': 2,
          'ageRangeMonth': 6,
          'skill': 3
        },
        'expressive_language': {
          'ageInMonth': 30,
          'ageRangeYear': 2,
          'ageRangeMonth': 6,
          'skill': 3
        },
        'comprehension': {
          'ageInMonth': 30,
          'ageRangeYear': 2,
          'ageRangeMonth': 6,
          'skill': 3
        },
        'gross_motor': {
          'ageInMonth': 60,
          'ageRangeYear': 5,
          'ageRangeMonth': 0,
          'skill': 1
        },
        'academic_k': {
          'skill': 3
        },
        'academic_one': {
          'skill': 4
        }
      },
      'observations': [
        {
          'label': 'Worked cooperatively',
          'slug': 'worked_cooperatively',
          'type': 'checkbox',
          'value': '1'
        },
        {
          'label': 'At Ease/Comfortable',
          'slug': 'at_ease_comfortable',
          'type': 'checkbox',
          'value': '1'
        },
        {
          'label': 'Needed encouragement',
          'slug': 'needed_encouragement',
          'type': 'checkbox',
          'value': '1'
        },
        {
          'label': 'Hesitant',
          'slug': 'hesitant',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Anxious during screening',
          'slug': 'anxious_during_screening',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Uncooperative',
          'slug': 'uncooperative',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Attentive',
          'slug': 'attentive',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Needed propmpts to stay on task',
          'slug': 'needed_propmpts_to_stay_on_task',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Easily distracted',
          'slug': 'easily_distracted',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Short attention span',
          'slug': 'short_attention_span',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Impulsive',
          'slug': 'impulsive',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Restless',
          'slug': 'restless',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Confident',
          'slug': 'confident',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Eager',
          'slug': 'eager',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Cautious',
          'slug': 'cautious',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Quiet',
          'slug': 'quiet',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Shy',
          'slug': 'shy',
          'type': 'checkbox',
          'value': '0'
        },
        {
          'label': 'Speech',
          'slug': 'speech',
          'type': 'checkbox',
          'value': '1'
        },
        {
          'label': 'Speech Comment',
          'slug': 'speechtext',
          'type': 'text',
          'value': '',
          'comment': 'Test speech comment'
        },
        {
          'label': 'Other',
          'slug': 'other',
          'type': 'text',
          'value': '',
          'comment': 'Test other observation comment'
        }
      ],
      'socialEmotionalMaturity': 3,
      'schoolEntranceYear': '2023/2024',
      'schoolEntranceAgeYear': '5',
      'schoolEntranceAgeMonth': '6',
      'summaryOfProfile': {
        'childDevelopmentAgeAppropriate': false,
        'childSocialEmotionalAgeAppropriate': false,
        'monitorTheAreas': true,
        'furtherDiagnosticEvaluation': true,
        'speechProblemObserved': true,
        'childDevelopmentAgeAppropriateText': '',
        'childSocialEmotionalAgeAppropriateText': '',
        'monitorTheAreasText': 'Visual Discrimination, Visual Memory, Auditory Discrimination, Receptive Language, Expressive Language, Comprehension',
        'furtherDiagnosticEvaluationText': 'Visual Discrimination, Visual Memory, Auditory Discrimination, Receptive Language, Expressive Language, Comprehension',
        'speechProblemObservedText': 'Test speech comment',
        'comments': 'Test other observation comment'
      },
      'recommendations': {
        'enterSchoolForUpcomingOrCurrentSchoolYear': false,
        'delaySchoolEntranceBasedOnScreeningResult': true,
        'frustrationInSchoolMayOccur': true,
        'highRiskIndicator': true,
        'monitorSchoolProgramIfYouChooseToEnter': true,
        'furtherDiagnosticEvaluationNeeded': true,
        'enterSchoolForUpcomingOrCurrentSchoolYearText': '',
        'delaySchoolEntranceBasedOnScreeningResultText': 'See Above',
        'frustrationInSchoolMayOccurText': 'Skill Development, Social-Emotional Development, Social-Emotional Development, ',
        'highRiskIndicatorText': '',
        'monitorSchoolProgramIfYouChooseToEnterText': '',
        'furtherDiagnosticEvaluationNeededText': 'Visual Discrimination, Visual Memory, Auditory Discrimination, Receptive Language, Expressive Language, Comprehension',
        'itAppears': false,
        'itAppearsText': '',
        'comment': ''
      },
      'skillDevelopmentForSchoolEnterance': 3,
      'academicAchievementForFirstGradeReadiness': 3,
      'socialEmotionDevelopmentForSchoolEntrance': 3,
      'formThreeFinalComment': 'Shubham Somani was very comfortable and eager to do the tasks. He was attentive and worked cooperatively. He seemed to enjoy the activities and was attentive while doing the tasks. He demonstrated good skills for his age.',
      'studentInfo': {
        'name': 'Shubham Somani',
        'dob': '2020/02/06',
        'ageInMonth': 40,
        'placeAdministered': 'Little Friends',
        'dateAdministered': '2023/02/07',
        'ageAppropriateRange': '4 year 6 month to 5 year 6 month',
        'recommendedGrade': 'Kindergarden'
      }
    }
  },
});
</script>

<style lang="scss">
.skill-area-header {
  background: #f1f9ff;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.063rem;
  print-color-adjust: exact;
  color: #145e85;
}

.cnb-address-container {
  background: #145e85;
  color: #f1f9ff;
  margin-left: 0.3rem;
  font-size: 1rem;
}

@media print {
  @page {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .skill-area-header {
    background: #f1f9ff;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.063rem;
    print-color-adjust: exact;
    color: #145e85;
  }
}
</style>
