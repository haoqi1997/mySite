
import LayoutView from '@/Layout'

const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [{
      path: "/",
      component: () => import(/* webpackChunkName: "Home" */'@/views/HomeView'),
    }
    ]
  }
]

export default routes