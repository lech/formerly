# *formerly*.

**Version:** Rather alpha.

> NOTE: This project is still in development and has not yet tested as being safe or stable for production environments.

`What is my purpose?` "Your write forms." `Oh. my. god.` "Yeah. Welcome to the club, pal…" – *A famous quote*.

## Observation #1: Everything is a form.

Look around you, what do you see? No, it's forms. On this screen, somewhere else on your desktop, even on your tv and phone, there are possibly also some on or in your desk or on the floor. Think for a moment, nearly everything in your day-to-day involving a computer requires a form to be processed so that something else can happen. The browser you're viewing this in? Forms. Birth and death certificates? You guessed it! Form data in, form data out. Forms for all, processing data all the time. At some point you're going to write a form, too!

## Observation #2: Forms suck.

Forms and inputs are extremely useful tools in almost every application, however tracking and editing the markup in HTML can become unwieldy. Readability gets stringy and context may be fuzzy or lost once a form begins to grow in size and complexity, especially as more unique values and attributes are needed. Eventually, hunting through all the markup may require you to depend on the search and replace function within your editor to locate items to edit.

Rather than defining HTML form markup as: `<label for="myTextInput">Some Text</label>` and `<input type="search" id="myTextInput" …>`. We can identify patterns, group items together and boil it all down to only their types and attribute values, such as: `{ "type" : "search", "id" : "myTextInput", "label" : "Some Text" }`, instead. There are still some rules to follow, however we can condense the most common patterns to make form life slightly easier if you rely on creating forms regularly.

## What is *formerly*?

I wanted a cleaner way to define the contents of HTML `<form>` elements to make them less of a chore as forms scale and grow in complexity. So *formerly* was born as a set of functions designed to translate attributes defined as a JSON object back to HTML. For content, with or without forms. However, the only item in-scope at the moment is: forms.

> NOTE: Now. Forever. Or until the end of forms.

If you understand enough JavaScript, HTML and CSS, you should feel comfortable writing some of your own forms and accompanying logic after the jump. Since many of the visual styling elements are already defined via CSS, you only need to focus on correctly formatted syntax and any of your own code.

This approach permits for a clean separation while keeping much of the necessary `form` markup and logic together. It's designed to allow you to focus on creating forms and testing parts of your application logic without having to worry about the underlying markup. This is also spares you from creating another `test.html` when you also just want to test something simple on its own.

*Most importantly*, if you decide you want to take your script elsewhere, completely removed from `// formerly();`, you can. Any additional scripts should still work as intended with only some minor edits and omissions if bundled, the only exception being you would need to export or rewrite any additional markup again on your own.

---

## A SPA boilerplate? For forms? Yeah, sure.

Like any projects that came before it, it too needs a common organization. Within this project you should find the following folders/directories:

```
./assets/ - All core assets and logic live here.
./forms/  - Individual template "forms" reside here.
```

> NOTE: Files can be called from anywhere, create your own unique folder/directories or naming as needed to avoid any conflicts.

```
./assets/core/ - All the guts and logic.
./assets/css/  - CSS Stylesheets.
./assets/data/ - Shared, sparse data, word lists, etc.
./assets/img/  - Images.
```

The goal is to keep this as open and pluggable to provide a neutral foundation for other application logic to hook into. Like a modular synthesizer rack, *formerly* is basically an open frame, for forms. Meaning it shouldn't take much imagination to find ways to plug and chain logic for your own tools and libraries. Or simply, just another way to develop and manage forms, your choice.

---

## Let's create a basic interface.

To help illustrate the following, I recommend opening and examining `formerly.html`. Here you should find a rather standard, boring HTML file with only a `section` or two statically defined. Everything here is appended and referenced via its `id` attributes, the rest is still standard HTML and CSS, nothing crazy. *formerly* appends new navigation tabs/sections/elements to the first tag with `formerlyMain` as the `id`, and subsequently builds all elements into that `id` using the attributes you define at run time.

```HTML
<main class="tabContent" id="formerlyMain">
...
</main>
```

The class, `tabContent` defines the tab container which serves as the content area, each `section` receives its own labels and radio buttons and flows into it.

### Step 1, Define space.

Create a new JavaScript file or open `./assets/forms/module_example.js` and see that we only need to define the necessary keys with values in our `const exampleForm` variable to unpack back into markup. Inserting a tab section is as easy as writing the following:

```JavaScript
'use strict';

const exampleForm = [ {
  "type" : "interface", // The type of element being rendered. eg: interface, resource, library,
  "route" : "exampleRoute", // The unique id of your specific <section>. Use it for your everything.
  "id" : "theSimpleExample", // The unique id for navigation (radio / label)
  "name" : "A blank section!" // The actual label of your navigation tab.
} ];
// Are we clean, defined and loaded?
formerly(exampleForm); // Call formerly to pull it together.

// ...
```

### Step 2, Staging.

Near the end of `formerly.html` you will find `stage.js` referenced. This is where you want to add a references for each script you would like to load. In order to execute after everything else has been loaded, uncomment or add something like the following to reference your own:

```JavaScript
'use strict';
loadFile("./assets/forms/module_example.js");

//...
```

### Step 3, Look, Mom! No Pants!

Save your work, then load or reload `formerly.html` in your browser. When `stage.js` is loaded, your script is also  loaded and `formerly()` is then called to read the `exampleForm` variable and process its resulting output. Providing there are no errors in your code, of course.

### Step 4, On the other side.

When you view the element output using the browsers dev tools (F12 in most), you should now find a reference to your script loaded into the `head` with all other markup contained within the `main` element. This is the bare minimum requirement for quickly defining a `section`, once loaded it should append something like the following markup with a new tab visible in the page:

```HTML
<input type="radio" id="theSimpleExample" name="formerlyTabs">
<label for="theSimpleExample" class="formerlyTabs">A blank section!</label>
<section class="tabSection" id="exampleRoute"></section>
```

This example only paints a basic, blank tab and section view and nothing else. However, the `id` is assigned to your `section` to do with as you wish and you can see how other attributes have also been applied to assemble the markup for you. The `input` and `label` elements before the `section` are the navigation to switch between each section in CSS. This should hopefully serve as the most basic example of placing a menu and content stub.

> **Order of operation:**
>
> Logically, your elements should display grouped in roughly the order they were defined. With the exception that once you define a `form`, all subsequent inputs and attributes defined will be targeted to the `id` for that `form`. At least, until the next `form` is defined, and so on. *Many forms, yes, more!*

---

### Have you seen my goldfish?

The values *formerly* works with operate only as a shortcut to aide in reproducing common form patterns, with or without the need for any additional functionality. As we are working in just plain JavaScript, it may make sense to combine your form and logic into the same script. However, if you want to really keep the pieces separate, after calling `formerly();` you can make a `loadFile();` call load another script to help keep things clean.

The default stylesheets also do include some useful `class` names within `style.css` which you can utilize to give your forms or content structural layout if desired. Two of these are uninventively labeled `formleft` and `formright` which provide a clean ~30/70 split view.

#### Types & Attributes

Here you will find a complete references for supported types and their expected type values. Most should be a straight-forward exact representation of what you expect to find of their HTML counterpart, eg: `id` is still `id`, `name` is still `name`, however an `input` has a more unique and specific `type` attribute like `text`, `email` or `tel` which is the shortcut we're utilizing.

Everything *formerly* produces is driven by the `type` key, when a supported value is found it then assembles only the necessary attributes to reproduce valid markup for that tag. If the defined key or attributes are not in scope, then no markup will be produced. Simple.

However, as we are grouping and bundling multiple items, eg: `label` + `input`, along with text and other shared attributes, it is still important to remember their relationships. Additionally, to keep things sane and tidy, we're only diving a single nesting-layer deep for all items.

> To-Do: Understanding that accessibility is always important, I'm considering supporting [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) where necessary. Attributes like [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) among conditions should be rather trivial to include if needed, however it is not currently a priority.

---

##### Interface Declaration

> Determining if defining a `resource`, `library` or other types could act as side-roles, some more specific to more basic functions like stand-alone menu items/re-usable functions. Also as something to declare that they're loaded within the application without having to re-define it via other scripts. Baring no conflicts with external libraries this should be possible.


`"type" : "interface"` - Declares the type of form.
  - `name : STRING` - The label of your navigation tab.
  - `title : STRING` - A simple title.
  - `route: STRING` - Defines the variable route to build a form.
  - `id : STRING` - A globally unique id assigned for to the `section`.


- Optional attributes:
  - `debug : BOOLEAN` - Default: False. Sets the item attribute to checked on load which is useful for debugging.
  - `description : STRING` - A description of the form.
  - `authorname : STRING` - Herp.
  - `authorlink : STRING` - Derp.

---

##### Form
Form body.
`"type" : "form"`
  - `label : STRING`
  - `name : STRING`
  - `class : STRING` - Styling notes!
  - `action : STRING`


  - Not complete/added.
    - `autocomplete` (`off` & `on`).
    - `method` (`POST` & `GET`).
    - `enctype` - [`current doctype`].

---

##### Inputs:

`"type" :` `"email"`, `"hidden"`, `"number"`, `"password"`, `"search"`, `"text"`, `"tel"` && / or `"url"`
  - `id : STRING`,
  - `label : STRING`,
  - `name : STRING`,
  - `type : STRING`,
  - `patter : STRINGn`,

---

##### Button

> Know your buttons: [INPUT button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button) vs [BUTTON button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). We're using `<input type="button"` for all output here. Please plan accordingly.

`"type" : "button"`
  - `id : STRING`
  - `label : STING`
  - `onclick : STRING`

---

##### TextArea

`"type" : "textarea"`
  - `id : STRING`
  - `class : STRING`
  - `disabled : BOOLEAN` - Optional, default is `false` - only prints when true.

---

##### Preformatted Text

`"type" : "pre"`
  - `id : STRING`
  - `class : STRING`

---

##### Range

`"type" : "range"`
  - `id : STRING`
  - `name : STRING`
  - `label : STRING`
  - `labelid : STRING`
  - `onchange : STRING`
  - `onclick : STRING`
  - `min : NUMBER`
  - `max : NUMBER`
  - `step : NUMBER`
  - `value : NUMBER`

---

##### Output

`"type" : "output"`
  - `id : STRING`
  - `forname : STRING` - optional
  - `prefill : STRING` - optional

---

##### Checkbox

`"type" : "checkbox"`
  - `id : STRING`
  - `name : STRING`
  - `title : STRING`
  - `label : STRING`
  - `before : BOOLEAN` - Optional: defaults to `false`, checkbox appears AFTER label.

---

##### Radio

`"type" : "radio"`
- `id : STRING`
- `name : STRING`
- `title : STRING`
- `label : STRING`
- `before : BOOLEAN` - Optional: defaults to `false`, checkbox appears AFTER label.

---

##### Select / Option

`"type" : "select"`
  - `id : STRING`
  - `label : STRING`
  - `name : STRING`
  - `title : STRING`
  - `options : [{ OBJECT ARRAY }]`

> NOTE: `option`'s are the **ONLY** tag requiring more than a single level of nesting. I'm considering rewriting it so that all elements of a `form` also behave this way, but at the moment find it really convenient the way it currently is, too. Also this would take a partial rewrite. The `id` is derived from the parent.

`"type" : "option"`
  - `value : STRING`
  - `label : STRING`
  - `selected : BOOLEAN`
  - `disabled : BOOLEAN`

---


#### To-do's

- `input type="file"`
- `iframe`
---

### Pitfalls and troubleshooting.

> NOTE: There are many pros and cons to using this method in the wild or elsewhere when factoring in how and where it is served. It is immediately game over if the browser has JavaScript disabled or severely restricted.

Since we are painting via JavaScript, typos happen and may manifest errors in strange ways cascading downward. If you're not carefully minding your `id` names or formatting, then be prepared for some confusing times. Some errors can slip by silently and go completely unnoticed, especially when manipulating attributes for `id` names that have previously been defined. Debug (f12 in most browsers) helps as you should be able to identify all values coming through on the other side.

---

## Licenses.

Copyright (C) 2022 Lech Deregowski.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
