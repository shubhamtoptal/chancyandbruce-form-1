<template>
  <div class="row items-center justify-center full-width">
    <div class="col-12 form-wrapper">
      <div>
        <h5 class="text-primary text-weight-600 q-ma-none">
          Form 2 - Developmental Profile
        </h5>
        <hr class="q-mb-md" />
      </div>
      <q-card flat class="bg-white form-body q-mb-md">
        <q-card-section>
          <div class="card-header">
            <div clas="step-info">
              <p class="text-primary text-body1 text-weight-bold">
                Step 2 of 2
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
      </q-card>

      <div class="row q-mb-lg">
        <p class="q-mb-none text-primary text-weight-regular text-caption col-md-8 col-xs-6 q-pl-lg">Child’s Behaviour</p>
        <p class="q-mb-none text-primary text-weight-regular text-caption col-md-4 col-xs-4">Input</p>
      </div>

      <q-card flat class="bg-white form-body">
        <q-form>
          <q-card-section class="q-p-none dialog-form-section">
            <div>
              <!-- First Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Shows curiosity and interest in his/her surroundings
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="show_curiosity" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- First Row End -->
              <!-- Second Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Initiates own play activities
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="initiate_play_activity" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Second Row End -->
              <!-- Third Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Works and plays cooperatively with other children
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="works_play_cooperatively" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Third Row End -->
              <!-- Fourth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Talks comfortably with other children:
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="talk_comfortably_other_child" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fourth Row End -->
              <!-- Fifth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Takes turns and shares
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="turns_and_share" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fifth Row End -->
              <!-- Sixth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Participates with others in large group
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="participate_large_group" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Sixth Row End -->
              <!-- Seventh Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Shows concern for others and their property
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="show_concern" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Seventh Row End -->
              <!-- Nineth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Accepts responsibility
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="accepts_responsibility" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Nineth Row End -->
              <!-- Tenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Separates from parents without reluctance
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="seperate_from_parent" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Tenth Row End -->
              <!-- Eleventh Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Does simple tasks independently
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="simple_task_independent" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Eleventh Row End -->
              <!-- Twelve Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Follows directions
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="follow_direction" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Twelve Row End -->
              <!-- Thirteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Pays attention
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="pay_attention" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Thirteen Row End -->
              <!-- Fourteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Consistently completes tasks
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="consistent_complete_task" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fourteen Row End -->
              <!-- Fifteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Attends to task at least 10 minutes
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="attend_to_task_10_min" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Fifteen Row End -->
              <!-- Sixteen Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Is eager to learn new tasks
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="eager_learn_new_task" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Sixteen Row End -->
              <!-- Seventeenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Able to express wants and needs
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs" v-model="express_want_need" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Seventeenth Row End -->
              <!-- Eigteenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Accepts limits/Follows rules
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="accept_limit_follow_rules" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Eigteenth Row End -->
              <!-- Nineteenth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Displays feelings in appropriate ways
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="display_feeling_appropriate" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Nineteenth Row End -->
              <!-- Twenteeth Row Start -->
              <div class="row q-pb-sm items-center">
                <div class="col-md-7 col-xs-12 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Speech understood by others
                  </label>
                </div>
                <div class="col-md-5 col-xs-12 dialog-form-section-input">
                  <q-option-group inline :options="options" type="radio" class="q-px-xs"
                    v-model="speech_understand_others" />
                </div>
              </div>
              <hr class="q-mb-md" />
              <!-- Twenteeth Row End -->

              <div clas="step-info">
                <p class="text-primary text-body1 text-weight-bold">
                  Additional Information
                </p>
                <div class="col-md-12 col-xs-6 dialog-form-section-input">
                  <label class="text-primary text-body-1 text-weight-regular items-center">
                    Additional Comments:
                  </label>
                </div>
                <div class="row q-pb-md q-my-md">
                  <div class="col-md-12 col-xs-12 dialog-form-section-input">
                    <label class="text-primary text-weight-medium text-body-2 q-mb-sm">
                      Comment
                    </label>
                    <q-input class="app-form-input q-mt-xs" outlined placeholder="Write comments here"
                      v-model="comments" />
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="right" class="bg-white q-mb-mb text-center">
            <q-btn @click="moveToStepOne()" color="light back-btn app-button q-mr-md" no-caps label="Back" />
            <q-btn @click="submitStepTwo()" color="secondary save-button app-button" no-caps label="Save" />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { StepThreeData } from 'src/quasar';
import { PropType, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'StepThree',
  props: {
    moveToStepOne: {
      type: Function as PropType<{
        (): void;
      }>,
      required: true,
    },
    submitForm: {
      type: Function as PropType<{
        (data: StepThreeData): void;
      }>,
      required: true,
    },
    stepTwoData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      options: [
        { label: 'Usually', value: 1 },
        { label: 'Sometimes', value: 2 },
        { label: 'Rarely', value: 3 },
      ],
      show_curiosity: ref(1),
      initiate_play_activity: ref(1),
      works_play_cooperatively: ref(1),
      talk_comfortably_other_child: ref(1),
      turns_and_share: ref(1),
      participate_large_group: ref(1),
      accepts_responsibility: ref(1),
      seperate_from_parent: ref(1),
      simple_task_independent: ref(1),
      follow_direction: ref(1),
      show_concern: ref(1),
      consistent_complete_task: ref(1),
      pay_attention: ref(1),
      eager_learn_new_task: ref(1),
      attend_to_task_10_min: ref(1),
      express_want_need: ref(1),
      accept_limit_follow_rules: ref(1),
      display_feeling_appropriate: ref(1),
      speech_understand_others: ref(1),
      comments: ref(''),
      school_list: ref(''),
    };
  },
  mounted() {
    this.show_curiosity = this.stepTwoData.show_curiosity;
    this.initiate_play_activity = this.stepTwoData.initiate_play_activity;
    this.works_play_cooperatively = this.stepTwoData.works_play_cooperatively;
    this.talk_comfortably_other_child = this.stepTwoData.talk_comfortably_other_child;
    this.turns_and_share = this.stepTwoData.turns_and_share;
    this.participate_large_group = this.stepTwoData.participate_large_group;
    this.accepts_responsibility = this.stepTwoData.accepts_responsibility;
    this.seperate_from_parent = this.stepTwoData.seperate_from_parent;
    this.simple_task_independent = this.stepTwoData.simple_task_independent;
    this.follow_direction = this.stepTwoData.follow_direction;
    this.show_concern = this.stepTwoData.show_concern;
    this.consistent_complete_task = this.stepTwoData.consistent_complete_task;
    this.pay_attention = this.stepTwoData.pay_attention;
    this.eager_learn_new_task = this.stepTwoData.eager_learn_new_task;
    this.attend_to_task_10_min = this.stepTwoData.attend_to_task_10_min;
    this.express_want_need = this.stepTwoData.express_want_need;
    this.accept_limit_follow_rules = this.stepTwoData.accept_limit_follow_rules;
    this.display_feeling_appropriate = this.stepTwoData.display_feeling_appropriate;
    this.speech_understand_others = this.stepTwoData.speech_understand_others;
    this.comments = this.stepTwoData.comments;
    this.school_list = this.stepTwoData.school_list;
  },
  methods: {
    submitStepTwo() {
      const data = {
        show_curiosity: this.show_curiosity,
        initiate_play_activity: this.initiate_play_activity,
        works_play_cooperatively: this.works_play_cooperatively,
        talk_comfortably_other_child: this.talk_comfortably_other_child,
        turns_and_share: this.turns_and_share,
        participate_large_group: this.participate_large_group,
        accepts_responsibility: this.accepts_responsibility,
        seperate_from_parent: this.seperate_from_parent,
        simple_task_independent: this.simple_task_independent,
        follow_direction: this.follow_direction,
        show_concern: this.show_concern,
        consistent_complete_task: this.consistent_complete_task,
        pay_attention: this.pay_attention,
        eager_learn_new_task: this.eager_learn_new_task,
        attend_to_task_10_min: this.attend_to_task_10_min,
        express_want_need: this.express_want_need,
        accept_limit_follow_rules: this.accept_limit_follow_rules,
        display_feeling_appropriate: this.display_feeling_appropriate,
        speech_understand_others: this.speech_understand_others,
        comments: this.comments,
        school_list: this.school_list
      }
      this.submitForm(data);
    }
  }
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
