export const loger = store => next => action => {

    if (action.meta && action.meta.printLog) {
        console.log("dispatching", action);
        console.log("next state", store.getState());
    }

    return next(action)
}