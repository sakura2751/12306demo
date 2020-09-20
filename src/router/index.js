import Vue from 'vue'
import VueRouter from 'vue-router'
import Ticket from "../views/Ticket";
import NormalCheck from "../views/NormalCheck";
import OrderFood from "../views/OrderFood";
import OneWay from "../views/OneWay";
import RoundTrip from "../views/RoundTrip";
import Transfer from "../views/Transfer";
import RefundChange from "../views/RefundChange";
import Late from "../views/Late";
import TicketCheck from "../views/TicketCheck";
import Sale from "../views/Sale";
import Weather from "../views/Weather";
import Schedule from "../views/Schedule";
import CateringOrders from "../views/CateringOrders";


Vue.use(VueRouter)



const routes = [
  //默认路由
  { path: '/', redirect: '/ticket' },


  //一级路由配置
  {
    path: '/ticket',
    component: Ticket,
    children:[
      //二级路由默认激活
      { path: '/', redirect: '/ticket/one_way' },
      //二级路由配置
      { path: '/ticket/one_way', component: OneWay },
      { path: '/ticket/round_trip', component: RoundTrip },
      { path: '/ticket/transfer', component: Transfer },
      { path: '/ticket/refund_change', component: RefundChange },
    ]
  },
  {
    path: '/normal_check',
    component: NormalCheck ,
    children:[
      //二级路由默认激活
      { path: '/', redirect: '/normal_check/late' },
      //二级路由配置
      { path: '/normal_check/late', component: Late },
      { path: '/normal_check/ticker_check', component: TicketCheck },
      { path: '/normal_check/sale', component: Sale },
      { path: '/normal_check/weather', component: Weather },
    ]
  },
  {
    path: '/order_food',
    component: OrderFood,
    children: [
      //二级路由默认激活
      {path: '/', redirect: '/order_food/schedule'},
      //二级路由配置
      {path: '/order_food/schedule', component: Schedule},
      {path: '/order_food/catering_orders', component: CateringOrders},
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
