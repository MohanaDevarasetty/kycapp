const homePageRouters = [
        {
                path: 'kyc',
                name: 'KYC',
                component: () => import('../modules/Kyc/Kyc.vue')
        }
];

export default homePageRouters;