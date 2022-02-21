'use strict';

// An alternate. So you don't need to write this every time you use it.
// $('#someIDname').value = "whee";
const $ = document.querySelector.bind(document);

// <form name="formerlyState" id="formerlyStateInput" class="formleft">
// <form name="formerlyStateOutput" class="formright">

function appendElement (target,markup,id,text) {
  let attribute = document.createElement(markup);
  attribute.id = id;

  if ( typeof text !== 'undefined' && typeof text !== '' ) {
    attribute.append(text);
  }
  document.getElementById(target).appendChild(attribute);
}

function setAttribute (target, attribute, value) {
  document.getElementById(target).setAttribute(attribute,value);
}
