/*eslint-disable */
import { call, put } from 'redux-saga/effects';
import { REQUEST_LINKS } from './constants';
import { takeLatest } from 'redux-saga';
import { requestLinkSucceded, requestLinkFailed } from './actions';

export function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
  .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    console.log(action);
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinkSucceded(links));
  } catch (e) {
    yield put(requestLinkFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchLinksSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
