import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/parent/step-one.vue') },
      { path: 'step-2', component: () => import('pages/parent/step-two.vue') },
      {
        path: 'step-3',
        component: () => import('pages/parent/step-three.vue'),
      },
      {
        path: 'teacher-step-1',
        component: () => import('pages/teacher/step-one.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
