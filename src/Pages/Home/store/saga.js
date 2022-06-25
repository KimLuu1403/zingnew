import { takeLatest, put, call, all } from "redux-saga/effects";
import { GET_ZING_NEW_CONTENT, GET_DETAIL_ZING_NEW_CONTENT } from "./contants";
import { getZingNew, getDetailContent } from "../../../Services/classServices";
import {
  setLoading,
  saveZingNewContent,
  saveDetailZingNewContent,
} from "./action";

function* zingNewContent() {
  try {
    yield put(setLoading(true));
    const response = yield call(getZingNew);
    yield all([put(setLoading(false)), put(saveZingNewContent(response.data))]);
  } catch (error) {
    yield put(setLoading(false));
  }
}
function* getDetailZingNewContent({ payload, resolve }) {
  try {
    yield put(setLoading(true));
    const response = yield call(getDetailContent, payload.id);
    console.log(response);
    resolve(response.data);
    yield put(saveDetailZingNewContent(response.data));
    yield put(setLoading(true));
  } catch (error) {
    // resolve(false);
    yield put(setLoading(false));
  }
}
export function* listMyContent() {
  yield takeLatest(GET_ZING_NEW_CONTENT, zingNewContent);
  yield takeLatest(GET_DETAIL_ZING_NEW_CONTENT, getDetailZingNewContent);
}
