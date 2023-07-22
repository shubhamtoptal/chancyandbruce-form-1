import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/parent/',
    component: () => import('src/layouts/ParentLayout.vue'),
    children: [
      {
        path: 'form/:formId',
        component: () => import('pages/parent/parent.vue'),
      },
    ],
  },
  {
    path: '/teacher/',
    component: () => import('src/layouts/TeacherLayout.vue'),
    children: [
      {
        path: 'form/:formId',
        component: () => import('pages/teacher/teacher.vue'),
      },
    ],
  },
  {
    path: '/results/pdf/:formId',
    component: () => import('pages/form_three_result/pdf.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
