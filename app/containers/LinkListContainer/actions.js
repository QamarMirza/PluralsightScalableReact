/*
 *
 * LinkListContainer actions
 *
 */

import {
   REQUEST_LINKS_FAILED,
   REQUEST_LINKS_SUCCEEDED,
   REQUEST_LINKS,
} from './constants';

export function requestLinkSucceded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinkFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}
