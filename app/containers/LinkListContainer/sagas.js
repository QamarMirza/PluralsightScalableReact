import { call, put } from 'redux-saga/effects';
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { takeLatest } from 'redux-saga';
import { requestLinkSucceded, requestLinkFailed } from './actions';

export function fetchLinksFromServer() {
  return fetch('http://localhost:3000/api/links/${topics.name}/links')
  .then(response => response.json());
}

function* fetchLinks() {
  try {
    const links = yield call(fetchLinksFromServer);
    yield put(requestLinkSucceded(links));
  } catch (e) {
    yield put(requestLinkFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchLinksSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
