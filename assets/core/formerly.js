'use strict';

// This contains the bulk logic for defining how forms are drawn.

function seed (arg) {
// eg: formerly(const_name_from_script)
// iteration over the serialized JSON objects.
  const json_object = arg;

  for (let i = 0; i < json_object.length; i++) {
    let object = json_object[i];

    if (object.type === 'interface') {

    // interface block keys : values to cast into arg.vars

      arg.type = object.type;
      arg.name = object.name; // this gets stepped on a bit.
      arg.title = object.title;
      arg.route = object.route;
      arg.id = object.id;
      arg.debug = object.debug;

      arg.authorname = object.authorname;
      arg.authorlink = object.authorlink;

      let scope = document.querySelector('#formerlyStatePrintOut');
      // Append all collected values into the Settings output 'console'.
      // MOM's sphaghetti.
      scope.insertAdjacentText('beforeend',
        '--- ' + object.title + ' \r\n\r\n' +
        'title: ' + object.title + '\r\n' +
        'id: ' + object.id + '\r\n' +
        'route: ' + object.route + '\r\n' +
        'name: ' + object.name + '\r\n' +
        'type: ' + object.type + '\r\n' +
        'checked: ' + object.debug + '\r\n' +
        'authorname: ' + object.authorname + '\r\n' +
        'authorlink: ' + object.authorlink + '\r\n\r\n'
      );

      // console.log('>', arg.name);

      appendElement ('formerlyMain', 'input', object.id);
        setAttribute (object.id, 'type', 'radio');
        setAttribute (object.id, 'name', 'formerlyTabs');

        if (object.debug === true) {
          setAttribute (object.id, 'checked', object.debug);
        }

      appendElement ('formerlyMain', 'label', arg.name, object.name);
        setAttribute (arg.name, 'for', object.id);
        setAttribute (arg.name, 'class', 'formerlyTabs');

        if (typeof object.title !== 'undefined') {
          setAttribute (arg.name, 'title', object.title);
        }


      appendElement ('formerlyMain', `section`, object.route);
        setAttribute (arg.route, 'class', 'tabSection');
    }

/* -------------------------------------------------------------------------- */

    if (object.type === 'form') {
      appendElement (arg.route, 'form', object.name)
        setAttribute (object.name, 'class', object.class);

      if (typeof object.action !== 'undefined') {
        setAttribute (object.name, 'action', object.action);
      }

      if (typeof object.oninput !== 'undefined') {
        setAttribute (object.name, 'oninput', object.oninput);
      }

      // Here, arg.name overwrites object.name to populate form ID names.
      // console.log('....', arg.name, object.name);
      arg.name = object.name;
      // console.log('....', arg.name, object.name);

      if (typeof object.label !== undefined || typeof object.label !== 'undefined') {
        // make up an ID from the name/
        appendElement (arg.name, 'h2', object.class + object.name, object.label);
      } else {
        appendElement (arg.name, 'h2', object.id, object.label);
      }

      if (typeof object.action !== 'undefined') {
        setAttribute (object.name, 'action', object.action);
      }
      if (typeof object.oninput !== 'undefined') {
        setAttribute (object.name, 'oninput', object.oninput);
      }
    }

/* -------------------------------------------------------------------------- */

    if (object.type === 'textarea' || object.type === 'pre') {
      appendElement (arg.name, object.type, object.id);

        if (typeof object.class !== 'undefined') {
          setAttribute (object.id, 'class', object.class);
        }

        if (object.disabled === true) {
          setAttribute (object.id, 'disabled', object.disabled);
        }
    }

/* -------------------------------------------------------------------------- */

    if (object.type === 'range') {
      appendElement(arg.name, 'label', object.labelid, object.label);
        setAttribute (object.labelid, 'for', object.id);

      appendElement (arg.name, 'input', object.id)
        setAttribute (object.id, 'type', object.type);
        setAttribute (object.id, 'name', object.name);
        setAttribute (object.id, 'min', object.min);
        setAttribute (object.id, 'max', object.max);
        setAttribute (object.id, 'step', object.step);

      if(typeof object.onclick !== 'undefined') {
        setAttribute (object.id, 'onClick', object.onchange);
      }

      if(typeof object.onchange !== 'undefined') {
        setAttribute (object.id, 'onChange', object.onchange);
      }

      if(typeof object.value !== 'undefined') {
        setAttribute(object.id, 'value', object.value);
      }
    }

/* -------------------------------------------------------------------------- */

    if (object.type === 'output') {
      appendElement (arg.name, 'output', object.id, object.prefill);
        setAttribute (object.id, 'for', object.forname);
    }

/* -------------------------------------------------------------------------- */

    if (object.type === 'select') {
      // to-do, determine how to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup

      appendElement(arg.name, 'label', object.id + 'Label', object.label);
        setAttribute (object.id + 'Label', 'for', object.id);

        appendElement(arg.name, 'select', object.id);

        if (object.options.legth !== 0 || object.options !== 'undefined') {

        for (let i = 0; i < object.options.length; i++) {
          let option = object.options[i];

          if (option.type === 'option') {
            console.log(object.id, option.type, option.value, option.label);
            appendElement(object.id, option.type, option.value + 'ID', option.label);
              setAttribute (option.value + 'ID', 'value', option.value);

            if (option.selected !== undefined) {
              setAttribute (option.value + 'ID', 'selected', option.selected);
              console.log(option.selected);
            }

            if (option.disabled !== undefined) {
              setAttribute (option.value + 'ID', 'disabled', option.disabled);
            }
          }
        }
      }
    }

/* -------------------------------------------------------------------------- */

    if (object.type === 'button' || object.type === 'submit') {
      if ( typeof object.id === 'undefined' ) {
        appendElement (arg.name, 'label', object.legend, object.type + ' #id ' + typeof object.id);
      } else {
        appendElement (arg.name, 'input', object.id);
          setAttribute (object.id, 'type', object.type);
          setAttribute (object.id, 'value', object.label);
        if (typeof object.onclick !== 'undefined') {
          setAttribute (object.id, 'onclick', object.onclick);
        }
      }
    }

/* -------------------------------------------------------------------------- */

    if (
      object.type === 'email' ||
      object.type === 'hidden' ||
      object.type === 'number' ||
      object.type === 'password' ||
      object.type === 'search' ||
      object.type === 'text' ||
      object.type === 'tel' ||
      object.type === 'url'
      ) {

      if (object.type === 'hidden') {
        // There is no reason for this to have a label.
        appendElement (arg.name, 'input', object.id);
          setAttribute (object.id, 'type', object.type);


      } else {
        if ( typeof object.label === 'undefined' && typeof object.id === 'undefined' ) {
          appendElement (arg.name, 'label', object.legend, '#' + arg.name + ' values are undefined.');
        } else {
          appendElement (arg.name, 'label', object.name, object.label);
            setAttribute (object.name, 'for', object.id);

            appendElement (arg.name, 'input', object.id);
            setAttribute (object.id, 'type', object.type);
            setAttribute (object.id, 'name', object.name);
          }
        }

      if (typeof object.pattern !== 'undefined') {
        setAttribute (object.id, 'pattern', object.pattern);
      }

      if (typeof object.name !== 'undefined') {
        setAttribute (object.id, 'name', object.name);
      }

      if (typeof object.value !== 'undefined') {
        setAttribute (object.id, 'value', object.value);
      }
    }

/* -------------------------------------------------------------------------- */

    if (object.type === 'checkbox' || object.type === 'radio') {

      if ( typeof object.label === 'undefined' ) {
        appendElement (arg.name, 'label', arg.name, '#' + object.id + ' values are undefined.');
      } else {


        if ( object.before === true) {
          // [x] label

          appendElement (arg.name, 'label', 'label-' + object.id); // create the label element.
          appendElement ('label-' + object.id, 'input', object.id);

            let scope = document.querySelector('#' + 'label-' + object.id); // insert the label text after.
            scope.insertAdjacentText('beforeend', object.label);
        } else {
          // label [x]
          appendElement (arg.name, 'label', 'label-' + object.id, object.label); // create the label element.
          appendElement ('label-' + object.id, 'input', object.id);
        }

        setAttribute (object.id, 'type', object.type);
        setAttribute (object.id, 'name', object.name);

        setAttribute ('label-' + object.id, 'for', object.id);

        if (typeof object.title !== 'undefined') {
          setAttribute ('label-' + object.id, 'title', object.id);
        }

        if (typeof object.value !== 'undefined') {
          setAttribute (object.id, 'value', object.value);
        }

      }
    }
/* -------------------------------------------------------------------------- */

  }
  // All done, claim the route.
  new route (arg.route);
  //console.log('├─ New Route:', arg.route);
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// Variable routing.
var route = function (name) {
  if(typeof name !== undefined || typeof name !== null) {
    this.name = name;
  }
};

// Open these values
route.prototype.type = '';
route.prototype.title = '';
route.prototype.route = '';
route.prototype.name = '';
route.prototype.id = '';
route.prototype.authorname = '';
route.prototype.authorlink = '';

//var router = new route();
var formerlyState = new route('formerlyState');

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// Do the thing.
function formerly (arg) {
  // All of the real magic happens in the function which checks whether a value exists.
  // arg.hasOwnProperty('id')
  if (typeof arg.id === 'undefined' || arg.id === null || arg.id === '' ) {
    //console.log('->', arg);
    seed (arg);
  } else {
    console.log('-> Already defined.');
    return arg;
    // This space intentionally left blank.
    // To do: recall values from localStorage, instead.
    // Currently a fallback catch when loading inline.
  }
}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// Yes, you can shoot yourself in the face with this, be careful and know/trust
// what you are loading as not many constraints are set. By default, all references are relative.
// e.g.: loadScript('./assets/forms/file.js'); vs loadScript('https://...file.js');
function loadFile(url) {

  // Drop on head.
  var file = document.createElement('script');
    file.src = url;
    file.type = 'text/javascript';

  document.head.appendChild(file);
  console.log(':: Fetch:', url);
  file.onreadystatechange = console.log('+ Loaded:', file.src);
}
