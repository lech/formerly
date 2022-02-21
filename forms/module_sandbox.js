'use strict';
const exampleSandbox = [ {
  "type" : "interface", // The type element rendering
  "route" : "exampleRouteTwo", // The id of your specific <section>. Use it for your everything.
  "id" : "theSimpleExampleTwo", // A unique id assigned for navigation to your section (radio button / label)
  "name" : "Element Sandbox", // The label of your navigation tab.

  // Optional, title, desc, author attributes
  "debug" : true, // Optional, sets the item to checked on load
  "title" : "Look Ma', NO PANTS!",
  "description" : "Something something, two.",
  "authorname" : "Some Person",
  "authorlink" : "https://github.com"
},{
  "type" : "form",
  "label" : "Input Values",
  "name" : "formerlySandbox",
  "class" : "formleft",
  "oninput" : "arangeoutput.value=parseInt(arange.value)"
},{
  "type" : "email",
  "id" : "emalinput",
  "name" : "the_email",
  "pattern" : "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
  "title" : "A title for email input elements.",
  "label" : "email Input"
},{
  "type" : "hidden",
  "id" : "ImInvisible",
  "name" : "the_hidden",
  "value" : "aaaaaa"
},{
  "type" : "number",
  "id" : "numberinput",
  "name" : "the_number",
  "title" : "A title for number input elements.",
  "label" : "number Input"
},{
  "type" : "password",
  "id" : "passwordinput",
  "name" : "the_password",
  "title" : "A title for password input elements.",
  "label" : "password Input"
},{
  "type" : "search",
  "id" : "searchinput",
  "name" : "the_search",
  "title" : "A title for search input elements.",
  "label" : "search Input"
},{
  "type" : "text",
  "id" : "textinput",
  "name" : "the_text",
  "title" : "A title for text input elements.",
  "label" : "text Input"
},{
  "type" : "tel",
  "id" : "telinput",
  "name" : "the_tel",
  "title" : "A title for tel input elements.",
  "label" : "tel Input"
},{
  "type" : "url",
  "id" : "urlinput",
  "name" : "the_url",
  "title" : "A title for url input elements.",
  "label" : "url Input"
},

// SELECT

{
  "type" : "select",
  "id" : "selectItem",
  "name" : "option_group",
  "title" : "A title for a select label.",
  "label" : "Selectable stuff",
  "options" : [{
    "type" : "option",
    "value" : "optionValue_one",
    "label" : "Option One (disabled)",
    "disabled" : true
  },{
    "type" : "option",
    "value" : "optionValue_two",
    "label" : "Option Two (selected)",
    "selected" : true
  },{
    "type" : "option",
    "value" : "optionValue_three",
    "label" : "Option Three"
  }]
},

// RADIO BUTTONS

{
  "type" : "radio",
  "id" : "radioone",
  "name" : "group_one",
  "title" : "A title for a right-aligned element.",
  "label" : "Right aligned"
},{
  "type" : "radio",
  "id" : "radiotwo",
  "name" : "group_one",
  "title" : "A title for a left-aligned element.",
  "label" : "Left aligned",
  "value" : "foo",
  "before" : true
},{
  "type" : "button",
  "id" : "doNothing",
  "label" : "Button Stuff",
},{
  "type" : "checkbox",
  "id" : "checkone",
  "name" : "group_two",
  "title" : "A title for a right-aligned element.",
  "label" : "Right aligned",
  "before" : false
},{
  "type" : "checkbox",
  "id" : "checktwo",
  "name" : "group_two",
  "title" : "A title for a left-aligned element.",
  "label" : "Left aligned",
  "value" : "foo",
  "before" : true
},{
  "type" : "range",
  "id" : "arange",
  "name" : "rangevalue",
  "label" : "Range Input with Output",
  "labelid" : "somethingnothing",
  "min" : 2,
  "max" : 128,
  "step" : 1,
  "value" : 2
},{
  "type" : "output",
  "id" : "arangeoutput",
  "forname" : "arange",
  "prefill" : "2"
},
// all that to just define a dozen options
{
  "type" : "form",
  "id" : "formerlySandboxOutput",
  "label" : "Output Values",
  "name" : "thingsNstufftooo",
  "class" : "formright"
},{
  "type" : "textarea",
  "id" : "doSomeOutPut",
  "class" : "printout",
  "disabled" : true
} ];


// Are we defined and loaded? Call formerly to pull it together.
formerly(exampleSandbox);
