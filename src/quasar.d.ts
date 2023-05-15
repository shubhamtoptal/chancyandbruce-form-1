/* eslint-disable */

// Forces TS to apply `@quasar/app-webpack` augmentations of `quasar` package
// Removing this would break `quasar/wrappers` imports as those typings are declared
//  into `@quasar/app-webpack`
// As a side effect, since `@quasar/app-webpack` reference `quasar` to augment it,
//  this declaration also apply `quasar` own
//  augmentations (eg. adds `$q` into Vue component context)
/// <reference types="@quasar/app-webpack" />

export interface StepTwoData {
  is_pregnancy_complication: boolean
  pregnancy_complication_text: string
  is_child_premature: boolean
  child_premature_text: string
  is_chronic_illness: boolean
  chronic_illness_text: string
  is_allergies: boolean
  allergies_text: string
  is_unsettling_experience: boolean
  unsettling_experience_text: string
  primary_language: string
}

export interface StepThreeData {
  show_curiosity: number,
  initiate_play_activity: number,
  works_play_cooperatively: number,
  talk_comfortably_other_child: number,
  turns_and_share: number,
  participate_large_group: number,
  accepts_responsibility: number,
  seperate_from_parent: number,
  simple_task_independent: number,
  follow_direction: number,
  show_concern: number,
  consistent_complete_task: number,
  pay_attention: number,
  eager_learn_new_task: number,
  attend_to_task_10_min: number,
  express_want_need: number,
  display_feeling_appropriate: number,
  speech_understand_others: number,
  accept_limit_follow_rules: number,
  comments: string,
  school_list: string,
}
