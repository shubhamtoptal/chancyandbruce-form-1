/* eslint-disable */

// Forces TS to apply `@quasar/app-webpack` augmentations of `quasar` package
// Removing this would break `quasar/wrappers` imports as those typings are declared
//  into `@quasar/app-webpack`
// As a side effect, since `@quasar/app-webpack` reference `quasar` to augment it,
//  this declaration also apply `quasar` own
//  augmentations (eg. adds `$q` into Vue component context)
/// <reference types="@quasar/app-webpack" />

export interface SchoolListInterface {
  school_name: string;
  _id: string;
  school_address: string;
}

export interface StudentData {
  _id: string;
  studentFirstName: string;
  studentLastName: string;
  studentGender: number;
  studentHeight: string;
  studentDob: string;
  parentContact: string;
  parentEmail: string;
  parentName: string;
  teacherEmail: string;
  gradeEntry: string;
  gradeEntering: string;
  address: string;
  city: string;
  zip: string;
  schoolName: string;
  schoolId: string;
  schoolContact: string;
}

export interface StepTwoData {
  is_pregnancy_complication: boolean;
  pregnancy_complication_text: string;
  is_child_premature: boolean;
  child_premature_text: string;
  is_chronic_illness: boolean;
  chronic_illness_text: string;
  is_allergies: boolean;
  allergies_text: string;
  is_unsettling_experience: boolean;
  unsettling_experience_text: string;
  primary_language: string;
  has_iep: boolean;
  change_in_environment: boolean;
  change_in_environment_text: string;
}

export interface StepThreeData {
  show_curiosity: number;
  initiate_play_activity: number;
  works_play_cooperatively: number;
  talk_comfortably_other_child: number;
  turns_and_share: number;
  participate_large_group: number;
  accepts_responsibility: number;
  seperate_from_parent: number;
  simple_task_independent: number;
  follow_direction: number;
  show_concern: number;
  consistent_complete_task: number;
  pay_attention: number;
  eager_learn_new_task: number;
  attend_to_task_10_min: number;
  express_want_need: number;
  display_feeling_appropriate: number;
  speech_understand_others: number;
  accept_limit_follow_rules: number;
  comments: string;
  school_list: Array<string>;
}

export interface StepThreeDataTeacher {
  show_curiosity: number;
  initiate_play_activity: number;
  works_play_cooperatively: number;
  talk_comfortably_other_child: number;
  turns_and_share: number;
  participate_large_group: number;
  accepts_responsibility: number;
  seperate_from_parent: number;
  simple_task_independent: number;
  follow_direction: number;
  show_concern: number;
  consistent_complete_task: number;
  pay_attention: number;
  eager_learn_new_task: number;
  attend_to_task_10_min: number;
  express_want_need: number;
  display_feeling_appropriate: number;
  speech_understand_others: number;
  accept_limit_follow_rules: number;
  additional_year_development: number;
  access_redirection: number;
  comments: string;
  school_list: Array<string>;
}
