// import app from '@/app.vue'

const routes = [
  {
    path: '/',
    redirect: '/config-singer',
  },
  // {
  //   path: '/config-list',
  //   name: 'config-list',
  //   component: () => import('@/page/config-list'),
  //   meta: {
  //     title: 'config-list',
  //     isMenu: true,
  //   },
  // },
  {
    path: '/config-singer',
    name: 'config-singer',
    component: () => import('@/page/config-list/config-singer'),
    meta: {
      title: 'config-singer',
      isMenu: true,
    },
  },
]

export default routes
