import * as actionsTypes from './actionsTypes';

export const saveResult = ( res ) => {
    //const updatedResult = res * 2
    return {
        type: actionsTypes.STORE_RESULT,
        //result: updatedResult
        result: res
    }
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000);
    }
};


export const deleteResult = (resElId) => {
    return {
        type: actionsTypes.DELETE_RESULT,
        resultElId: resElId
    };
};


