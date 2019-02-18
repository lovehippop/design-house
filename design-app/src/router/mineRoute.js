const route = {
    path: '/mine',
    component: () => import('../pages/mine'),
    children: [
        //我的中会员福利页路由
        {
            path: 'welfare',
            component: () => import('../pages/mine/welfare'),
            // name: 'welfare'
        },
        //我的中获取积分页路由
        {
            path: '/getIntegral',
            component: () => import('../pages/mine/getIntegral')
        },
        //我的中积分兑换页路由
        {
            path: '/leaveIntegral',
            component: () => import('../pages/mine/leaveIntegral')
        }
    ]
}

export default route;