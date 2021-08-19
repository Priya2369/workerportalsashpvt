

export const API_CONSTANTS = {
    //   baseUrl: 'https://adminproductionproject.el.r.appspot.com/api/v1',
       baseUrl: 'http://localhost:8080/api/v1', 
    
    businessUser: {
        SIGN_UP: '/business/user/signup',
        SIGN_IN: '/business/user/signin',
        CHANGE_PASSWORD: '/business/user/changepassword',
        PROFILE: '/business/user/self/profile',
        EDIT_PROFILE: '/business/user/profile',
        VERIFY_TOKEN: '/business/user/verifytoken',
        GET_PROFILE: '/business/user/self/profile',
        GET_PROFILE_BY_ID: '/business/user/profile/'
    },
    project : {
        ADDPROJECT : '/business/project',
        SEARCH_PROJECT : '/business/project/self',
        SEARCH_ALL_PROJECTS : '/business/project',
        SEARCH_ALL_PROJECTS_PUBLIC:'/business/project/public',
        SEARCH_APPLIED_PROJECTS: '/business/project/apply', 
        SEARCH_PROJECT_BY_ID : '/business/project/self/',
        SEARCH_OTHER_PROJECT_BY_ID: '/business/project/',
        EDIT_PROJECT_BY_ID : '/business/project/',
        GET_APPLICANTS : '/business/project/self/',
        APPLY_PROJECT : '/business/project/apply/'
    },

    keyvalue : {
        KEYVALUE : '/keyvalue'
    },

    enrollment : {
        SEARCH_MANPOWER : '/enrollment',
        UPDATE_MANPOWER :'/enrollment/update',
        SELF_PROFILE :'/enrollment/self',
        WORKER_APPLY_PROJRCT:'/enrollment/applyjob/'
        
    },
    contact:{
        CONTACT:'/contact'
    }
}