'use strict';

const exampleForm = [ {
  "type" : "interface", // The type element rendering
  "route" : "exampleRoute", // The id of your specific <section>. Use it for your everything.
  "id" : "theSimpleExample", // A unique id assigned for navigation to your section (radio button / label)
  "name" : "A blank section!", // The label of your navigation tab.
} ];

// Are we defined and loaded? Call formerly to pull it together.
formerly(exampleForm);
