const initialState = {
    user: { firstName: '', lastName: '', type: ''},
    users: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USER':
            return {
                user: action.payload.user,
                users: state.user
            }
        default:
            return state;
    }
};


export default usersReducer;
