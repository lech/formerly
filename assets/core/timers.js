'use strict';

window.onload = function () {
// https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming

const perfData = window.performance.timing;

const pageLoadTime = perfData.navigationStart - perfData.loadEventEnd;
const connectTime = perfData.responseEnd - perfData.requestStart;
const renderTime = perfData.domComplete - perfData.domLoading;

console.log('pageLoadTime '+ pageLoadTime + 'ms?');
console.log('connectTime '+ connectTime + 'ms?');
console.log('renderTime '+ renderTime + 'ms?');
}
