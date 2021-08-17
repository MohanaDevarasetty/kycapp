const homePageRouters = [
        {
                path: 'kycs',
                name: 'KYC',
                component: () => import('../modules/Kyc/KycList.vue')
        },
        {
                path: 'kyc',
                name: 'KYC',
                component: () => import('../modules/Kyc/Kyc.vue')
        }
];

export default homePageRouters;