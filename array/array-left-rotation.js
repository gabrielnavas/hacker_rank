'use strict';

function rotLeft(a, d) {
  while(d > 0) {
    const removed = a.shift()
    a.push(removed)
    d--
  }
  return a
}