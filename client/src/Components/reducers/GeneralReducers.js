


export const initialState = {
    isAppLoading: true,
    token:null,
    firstTimeUSe:true,
    email:null,
    phone:null,
    userData:{}
}

export const GeneralReducer = (state=initialState,action) => {
    switch(action.type){
        case 'USER':
            return  action.payload

            
            
        case 'FIRST_TIME_USE':
            return {
                ...state,
               firstTimeUse: action.payload
            }
        case 'TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'IS_APP_LOADING':
            return {
                ...state,
                isAppLoading: action.payload
            }
        case 'USER_DATA':
            return {
                ...state,
                userData: action.payload
            }
        case 'EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'PHONE':
            return {
                ...state,
                phone: action.payload
            }
        
    }
}

