import { put, all, call, takeEvery } from "redux-saga/effects"
import axios from "axios";



function* watchFetchProducts() {
    yield takeEvery("FETCH_PRODUCTS_REQ", fetchProducts)
}

function* fetchProducts() {
    try {
        const result = yield call(axios.get, "http://light-it-04.tk/api/posters/");
        yield put({ type: "FETCH_PRODUCTS", payload: result.data.data })
    } catch (error) {
        yield put({ type: "FETCH_PRODUCTS_ERROR", payload: error })
    }
}

export default function* rootSaga() {
    yield all([
        watchFetchProducts(),
    ])
}
