<template>
  <div v-if="formThreeData" class="column items-center">
    <div style="min-width: 1000px; max-width: 1000px;" class="row q-pt-sm full-width no-print justify-center">
      <q-btn @click="printForm" color="primary" label="SAVE RESULT" />
    </div>
    <div style="print-color-adjust: exact; min-width: 1000px; max-width: 1000px; overflow-x scroll;"
      class="only-print row items-center justify-center q-pb-md q-px-lg">
      <q-card class="text-center full-width bg-transparent" flat>
        <div class="row items-center q-my-xs full-width">
          <div class="col-2">
            <q-img src="~assets/cblogo.png" width="122px" />
          </div>
          <div class="cnb-address-container text-center text-weight-medium col-10 q-pa-sm">
            <p class="q-ma-none">
              1020 Calle Recodo, San Clemente, CA, 92673 / 949-326-4917
            </p>
            <p class="q-ma-none">www.chancyandbruce-ra.com</p>
          </div>
        </div>
      </q-card>
      <!-- STEP ONE START -->
      <div class="col-12 form-wrapper">
        <q-card v-if="formThreeData" flat class="bg-white form-body">
          <!-- USER INFO SECTION START -->
          <q-card-section class="q-pa-none q-mt-sm dialog-form-section">
            <div style="background: #f1f9ff" class="q-pa-xs">
              <p class="text-h6 q-ma-none text-accent text-weight-medium">
                EARLY CHILDHOOD DEVELOPMENT PROFILE:
              </p>
            </div>

            <!-- Row 1 -->
            <div class="row q-py-sm">
              <div class="col-12">
                <div class="row q-px-lg">
                  <div class="col-3">
                    <span class="text-primary text-body2">Child's Name</span>
                    <div class="text-body text-weight-medium text-color">
                      {{ formThreeData.studentInfo.name }}
                    </div>
                  </div>
                  <div class="col-3">
                    <span class="text-primary text-body2">Date of Birth</span>
                    &emsp;
                    <div class="text-body text-weight-medium text-color">
                      {{ formThreeData.studentInfo.dob }}
                    </div>
                  </div>
                  <div class="col-3">
                    <span class="text-primary text-body2">Place Administered</span>
                    &emsp;
                    <div class="text-body text-weight-medium text-color">
                      {{ formThreeData.studentInfo.placeAdministered }}
                    </div>
                  </div>
                  <div class="col-3">
                    <span class="text-primary text-body2">Date Administered</span>
                    &emsp;
                    <div class="text-body text-weight-medium text-color">
                      {{ formThreeData.studentInfo.dateAdministered }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2 -->
            <div class="row q-py-sm">
              <div class="col-12">
                <div class="row q-px-lg">
                  <div class="col-3">
                    <span class="text-primary text-body2">Child’s Age</span>
                    <div class="text-body2">
                      {{ getChildAge(formThreeData.studentInfo.ageInMonth) }}
                    </div>
                  </div>
                  <div class="col-4">
                    <span class="text-primary text-body2">Child’s Age Appropriate Range</span>
                    &emsp;
                    <div class="text-body2">
                      {{ getChildAge(formThreeData.studentInfo.ageInMonth - 6) }}
                      to
                      {{ getChildAge(formThreeData.studentInfo.ageInMonth + 6) }}
                    </div>
                  </div>
                  <div class="col-5 text-center">
                    <span class="text-primary text-body2">Recommended Grade Level Placement</span>
                    &emsp;
                    <div class="text-body2">
                      {{
                        formThreeData.recommendations
                          .enterSchoolForUpcomingOrCurrentSchoolYearText || '-'
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <!-- USER INFO SECTION END -->
          <!-- SKILL AREA SECTION START -->
          <q-card-section class="q-pa-none dialog-form-section q-mt-xs">
            <div class="row skill-area-header q-px-md q-py-xs justify-center items-center">
              <div class="col-5">
                <div class="row">
                  <div class="col-5 text-left">Skill Area</div>
                  <div class="col-7 text-center">Child's Development</div>
                </div>
              </div>
              <div class="col-7">
                <div class="row justify-end items-center">
                  <div class="col-2 text-center">Strong</div>
                  <div class="col-3 text-center">Age Appropriate</div>
                  <div class="col-3 text-center">Emerging</div>
                  <div class="col-3 text-center">Non-Age Appropriate</div>
                </div>
              </div>
            </div>
            <div v-for="(skill, key) in formThreeData.skillArea" :key="key"
              class="header row skill-area-body q-px-md q-py-md justify-center border">
              <div class="col-5">
                <div class="row items-center">
                  <div class="col-5 text-left">
                    {{ skillAreaEnum[key] }}
                  </div>
                  <div v-if="!['academic_k', 'academic_one'].includes(`${key}`)" class="col-7 text-center">
                    {{ skill.ageRangeYear }}
                    {{ skill.ageRangeYear == 1 ? 'Year' : 'Years' }}
                    &emsp;
                    {{ skill.ageRangeMonth }}
                    {{ skill.ageRangeMonth == 1 ? 'Month' : 'Months' }}
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
          <q-card-section class="q-pa-none dialog-form-section">
            <div class="row items-center justify-around q-px-md">
              <div class="col-3 text-weight-medium text-primary">
                Social-Emotional Maturity:
              </div>
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
          <q-card-section class="q-pa-none dialog-form-section">
            <div>
              <p class="q-mb-none q-px-sm">
                For successful school entrance for the
                <b class="text-secondary">
                  {{ formThreeData.schoolEntranceYear }}
                </b>
                school year, recommended development in all skill areas be a
                minimum of
                <b class="text-secondary">
                  {{ formThreeData.schoolEntranceAgeYear }}
                </b>
                {{ formThreeData.schoolEntranceAgeYear == 1 ? 'year' : 'years' }}
                <b class="text-secondary">
                  {{ formThreeData.schoolEntranceAgeMonth }}
                </b>
                {{
                  formThreeData.schoolEntranceAgeMonth == 1 ? 'month' : 'months'
                }}
                of age by this time of the year (or trending by the end of the year) with age appropriate social
                emotional maturity.
              </p>
            </div>
          </q-card-section>
          <!-- SUCCESSFUL SCHOOL ENTRANCE END -->

          <!-- SUMMARY OF PROFILE START -->
          <q-card-section class="q-pt-sm q-pa-none dialog-form-section">
            <div style="background: #f1f9ff" class="q-px-md q-py-xs">
              <p class="text-h6 q-ma-none text-accent text-weight-medium">
                SUMMARY OF PROFILE:
              </p>
            </div>
            <div class="row q-pt-xs">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.summaryOfProfile
                        .childDevelopmentAgeAppropriate
                        " label="Child’s skill development is age appropriate for chronological age" />
                  </div>
                  <div v-if="formThreeData.summaryOfProfile
                    .childDevelopmentAgeAppropriateText
                  " class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{
                        formThreeData.summaryOfProfile
                          .childDevelopmentAgeAppropriateText
                      }}
                    </p>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.summaryOfProfile
                        .childSocialEmotionalAgeAppropriate
                        " label="Child’s social-emotional development is age appropriate for chronological age" />
                  </div>
                  <div v-if="formThreeData.summaryOfProfile
                    .childSocialEmotionalAgeAppropriateText
                  " class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{
                        formThreeData.summaryOfProfile
                          .childSocialEmotionalAgeAppropriateText
                      }}
                    </p>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.summaryOfProfile.monitorTheAreas" label="Monitor the areas of" />
                  </div>
                  <div v-if="formThreeData.summaryOfProfile.monitorTheAreasText" class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{ formThreeData.summaryOfProfile.monitorTheAreasText }}
                    </p>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.summaryOfProfile.furtherDiagnosticEvaluation
                        " label="Further diagnostic evaluation recommended" />
                  </div>
                  <div v-if="formThreeData.summaryOfProfile
                    .furtherDiagnosticEvaluationText
                  " class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{
                        formThreeData.summaryOfProfile
                          .furtherDiagnosticEvaluationText
                      }}
                    </p>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.summaryOfProfile.speechProblemObserved
                        " label="Speech problem observed" />
                  </div>
                  <div v-if="formThreeData.summaryOfProfile.speechProblemObservedText
                  " class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{
                        formThreeData.summaryOfProfile.speechProblemObservedText
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="formThreeData.summaryOfProfile.comments" class="row full-width">
              <div class="row q-mt-md full-width q-px-sm">
                <div class="col-md-12 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Additional Comment
                  </label>
                  <div class="col-12 q-pt-sm">
                    <p class="comment-section-text q-ma-none" style="padding-left: 20px">
                      {{ formThreeData.summaryOfProfile.comments }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <!-- SUMMARY OF PROFILE END -->

          <!-- OBSERVATION START -->
          <q-card-section style="page-break-before: always" class="q-mt-sm q-pa-none dialog-form-section">
            <div style="background: #f1f9ff" class="q-px-md q-py-xs">
              <p class="text-h6 q-ma-none text-accent text-weight-medium">
                OBSERVATION:
              </p>
            </div>
            <div class="row">
              <div class="col-3" v-for="(observation, index) in formThreeData.observations" :key="index">
                <q-checkbox disable keep-color color="secondary" size="sm"
                  v-if="observation.type === 'checkbox' && observation.slug.toLowerCase() !== 'speech'" true-value="1"
                  false-value="0" v-model="observation.value" :label="observation.label" />
              </div>
            </div>
          </q-card-section>
          <!-- OBSERVATION END -->

          <hr />
          <!-- SKILL DEVELOPMENT FOR SCHOOL ENTRANCE START -->
          <q-card-section class="q-pa-none dialog-from-section">
            <div class="q-px-sm">
              <p class="text-body q-ma-none text-accent text-weight-medium">
                Skill Development for School Entrance
              </p>
            </div>
            <div class="row q-px-sm">
              <div class="col-3">
                <q-radio disable v-model="formThreeData.skillDevelopmentForSchoolEnterance" :val="1" color="secondary"
                  dense size="sm" keep-color label="Ready" />
              </div>
              <div class="col-3">
                <q-radio disable v-model="formThreeData.skillDevelopmentForSchoolEnterance" :val="2" color="secondary"
                  dense size="sm" keep-color label="Borderline" />
              </div>
              <div class="col-3">
                <q-radio disable v-model="formThreeData.skillDevelopmentForSchoolEnterance" :val="3" color="secondary"
                  dense size="sm" keep-color label="Not Ready" />
              </div>
            </div>
            <!-- SKILL DEVELOPMENT COMMENT SECTION -->
            <div v-if="[1, 2, 3].includes(formThreeData.skillDevelopmentForSchoolEnterance)">
              <q-input type="textarea" class="app-form-input q-mt-sm" outlined placeholder="Write comments here"
                v-model="formThreeData.skillDevelopmentForSchoolEnteranceText" />
            </div>
          </q-card-section>
          <!-- SKILL DEVELOPMENT FOR SCHOOL ENTRANCE END -->

          <hr />
          <!-- ACADEMIC ACHIEVEMENT FOR 1st GRADE READINESS START -->
          <!-- <q-card-section class="q-pa-none dialog-from-section">
            <div class="q-px-sm">
              <p class="text-body q-ma-none text-accent text-weight-medium">
                Academic Achievement for 1st Grade Readiness
              </p>
            </div>
            <div class="row q-px-sm">
              <div class="col-3">
                <q-radio disable v-model="formThreeData.academicAchievementForFirstGradeReadiness
    " :val="1" color="secondary" dense size="sm" keep-color label="Ready" />
              </div>
              <div class="col-3">
                <q-radio disable v-model="formThreeData.academicAchievementForFirstGradeReadiness
    " :val="2" color="secondary" dense size="sm" keep-color label="Borderline" />
              </div>
              <div class="col-3">
                <q-radio disable v-model="formThreeData.academicAchievementForFirstGradeReadiness
    " :val="3" color="secondary" dense size="sm" keep-color label="Not Ready" />
              </div>
            </div>
          </q-card-section> -->
          <!-- ACADEMIC ACHIEVEMENT FOR 1st GRADE READINESS END -->

          <!-- <hr /> -->
          <!-- SOCIAL-EMOTIONAL DEVELOPMENT FOR SCHOOL ENTRANCE START -->
          <!-- <q-card-section class="q-pa-none dialog-from-section">
            <div class="q-px-sm">
              <p class="text-body q-ma-none text-accent text-weight-medium">
                Social-Emotional Development for School Entrance
              </p>
            </div>
            <div class="row q-px-sm">
              <div class="col-3">
                <q-radio disable v-model="formThreeData.socialEmotionDevelopmentForSchoolEntrance
    " :val="1" color="secondary" dense size="sm" keep-color label="Ready" />
              </div>
              <div class="col-3">
                <q-radio disable v-model="formThreeData.socialEmotionDevelopmentForSchoolEntrance
    " :val="2" color="secondary" dense size="sm" keep-color label="Borderline" />
              </div>
              <div class="col-3">
                <q-radio disable v-model="formThreeData.socialEmotionDevelopmentForSchoolEntrance
    " :val="3" color="secondary" dense size="sm" keep-color label="Not Ready" />
              </div>
            </div>
          </q-card-section> -->
          <!-- ASOCIAL-EMOTIONAL DEVELOPMENT FOR SCHOOL ENTRANCE END -->

          <!-- RECOMMENDATIONS START -->
          <q-card-section class="q-pt-sm q-mt-sm q-pa-none dialog-form-section">
            <div style="background: #f1f9ff" class="q-px-md q-py-xs">
              <p class="text-h6 q-ma-none text-accent text-weight-medium">
                RECOMMENDATIONS :
              </p>
            </div>
            <div class="row q-pt-md">
              <div class="col-12">
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.recommendations
                        .enterSchoolForUpcomingOrCurrentSchoolYear
                        " label="Enter school for upcoming or current school year" />
                    <p class="inline-block q-pl-none comment-section-text q-ma-none">
                      {{
                        formThreeData.recommendations
                          .enterSchoolForUpcomingOrCurrentSchoolYearText
                      }}
                    </p>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.recommendations
                        .delaySchoolEntranceBasedOnScreeningResult
                        " label="Delay school entrance based on screening results." />
                  </div>
                  <div v-if="formThreeData.recommendations
                    .delaySchoolEntranceBasedOnScreeningResultText
                  " class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{
                        formThreeData.recommendations
                          .delaySchoolEntranceBasedOnScreeningResultText
                      }}
                    </p>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.recommendations.frustrationInSchoolMayOccur
                        " label="Frustration in school may occur due to" />
                    <div v-if="formThreeData.recommendations
                      .frustrationInSchoolMayOccurText
                    " class="col-12">
                      <p class="comment-section-text q-ma-none">
                        {{
                          formThreeData.recommendations
                            .frustrationInSchoolMayOccurText
                        }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.recommendations.highRiskIndicator" label="High risk indicators" />
                  </div>
                  <div v-if="formThreeData.recommendations.highRiskIndicatorText" class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{ formThreeData.recommendations.highRiskIndicatorText }}
                    </p>
                  </div>
                </div>
                <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.recommendations
                        .monitorSchoolProgramIfYouChooseToEnter
                        " label="Monitor school program if you choose to enter" />
                  </div>
                  <div v-if="formThreeData.recommendations
                    .monitorSchoolProgramIfYouChooseToEnterText
                  " class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{
                        formThreeData.recommendations
                          .monitorSchoolProgramIfYouChooseToEnterText
                      }}
                    </p>
                  </div>
                </div>
                <!-- <div class="row items-center">
                  <div class="col-12">
                    <q-checkbox disable keep-color color="secondary" size="sm" :true-value="true" :false-value="false"
                      v-model="formThreeData.recommendations
    .furtherDiagnosticEvaluationNeeded
    " label="Further diagnostic evaluation needed" />
                  </div>
                  <div v-if="formThreeData.recommendations
    .furtherDiagnosticEvaluationNeededText
    " class="col-12">
                    <p class="comment-section-text q-ma-none">
                      {{
                      formThreeData.recommendations
                      .furtherDiagnosticEvaluationNeededText
                      }}
                    </p>
                  </div>
                </div> -->
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
                        growth before entering school
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row q-pt-md full-width q-px-sm">
              <div class="row q-pb-md q-my-md full-width">
                <div class="col-12 dialog-form-section-input">
                  <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                    Additional Comments -
                  </label>
                  <div class="col-12 q-pt-sm">
                    <p class="seaweed" style="
                      font-size: 1.25rem;
                      padding-left: 10px;
                      border-bottom: 1px solid #333;
                    ">
                      {{ formThreeData.formThreeFinalComment }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row q-pt-md full-width q-px-sm">
              <div class="row q-pb-md q-my-md full-width">
                <div class="col-12 dialog-form-section-input">
                  <div class="col-12 q-pt-sm">
                    <strong class="q-pl-sm">
                      Chancy and Bruce is unable to review each child’s individual scores. Please attend one of our
                      zooms
                      for questions or clarifications
                    </strong>
                    <p style="
                      font-size: 1rem;
                      padding-left: 10px;
                    ">
                      If your child has not been recommended for Kindergarten, we advise that you purchase the Resource
                      Kit
                      on
                      <br />
                      <a target="_blank" href="https://www.chancyandbruce-ra.com/">chancyandbruce-ra.com</a> to continue
                      his
                      or hers
                      growth.
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
    <q-card-section style="width: 100%; padding: 0 94px;" class="no-print">
      <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/1045241793?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style="position:absolute;top:0;left:0;width:100%;height:100%;" title="C&amp;B Welcome Video">
        </iframe>
      </div>
    </q-card-section>
  </div>
  <div style="height: 100vh;" v-else>
    <div class="row justify-center items-center full-width full-height">
      <q-spinner-hourglass size="50px" color="primary" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'FinalFormPage',
  setup() {
    onMounted(() => {
      // Load Vimeo Player script dynamically
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      document.body.appendChild(script);
    });
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formThreeData: ref<any | null>(null),
      skillAreaEnum: ref<{ [key: string]: string }>({
        fine_motor: 'Fine Motor',
        visual_discrimination: 'Visual Discrimination',
        visual_memory: 'Visual Memory',
        auditory_discrimination: 'Auditory Discrimination',
        auditory_memory: 'Auditory Memory',
        receptive_language: 'Receptive Language',
        expressive_language: 'Expressive Language',
        comprehension: 'Comprehension',
        gross_motor: 'Gross Motor',
        academic_k: 'Academic K',
        academic_one: 'Academic One',
      }),
    };
  },
  mounted() {
    /**
     * Call the API over here
     */
    this.getPdfData();
  },
  methods: {
    getChildAge(ageInMonth: number) {
      console.log('ageInMontj --->', ageInMonth);
      return `${Math.floor(ageInMonth / 12)} Year ${ageInMonth % 12} Month`;
    },
    async getPdfData() {
      const url = `/api/parent/v1/form/pdf/${this.$route.params.formId}`;
      api({
        url,
        method: 'GET',
      })
        .then((resp) => {
          this.formThreeData = resp.data.data.step_3_result_data;
        })
        .catch((err) => {
          console.error('getPdfData() --->', err);
        });
    },
    printForm() {
      window.print();
    },
  },
});
</script>

<style lang="scss">
.only-print {
  display: block;
}

.skill-area-header {
  background: #f1f9ff;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.063rem;
  print-color-adjust: exact;
  color: #145e85;
}

.cnb-address-container {
  background: linear-gradient(90deg,
      rgba(21, 39, 60, 1) 0%,
      rgba(65, 107, 132, 1) 100%,
      rgba(116, 148, 166, 1) 100%,
      rgba(248, 253, 254, 1) 100%);
  color: #f1f9ff;
  font-size: 1rem;
}

.comment-section-text {
  padding-left: 35px;
  color: #636363;
  text-decoration: underline;
  text-underline-offset: 6px;
}

@media print {
  @page {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .no-print {
    display: none;
  }

  .only-print {
    display: block;
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
