import { db } from "../firebase"

const getUser = (id) => (dispatch, getState) => {
    var user = db.collection('users').doc(id);
    user.get()
        .then(doc => {
            const data = doc.data();
            const user = {...data, id: doc.id};
            dispatch({
                type: "GET_USER",
                payload: {
                    user: user
                }
            })
        });
}

const userActions = {
    getUser,
}

export default userActions
