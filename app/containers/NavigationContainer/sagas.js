/*eslint-disable */
import { call, put } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { takeLatest } from 'redux-saga';
import { requestTopicsSucceded, requestTopicsFailed } from './actions';
import { push } from 'react-router-redux';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
  .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

function* pushTopic(action) {
  //window.location.assign((`/topics/${action.topic.name}`), false);
  yield put(push(`/topics/${action.topic.name}`));
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
  if (!state.selectedTopic && state.routerLocation === '/'){
    yield put(push(`/topics/${state.topics[0].name}`));

  }
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
];
