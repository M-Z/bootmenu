[Bootmenu](https://m-z.github.io/bootmenu/)
=========

Simple jQuery animated searchable select menu based on bootstrap framework.


[Demo](https://m-z.github.io/bootmenu/demo)
------



Installation
------------

Add [bootmenu.min.js] to your project.

```html
<script src='bootmenu.min.js'></script>
```
Bootmenu is also available via [npm](https://www.npmjs.com/package/bootmenu)<br />
$ npm install --save bootmenu

Basic usage
-----------
~~~ js
$("div").bootmenu({ parameters });
~~~

Ideas
-----
 * Bind two select menus on the callback to make a nested one.
 ~~~ html
<div id="selectMenu"></div>
<div id="selectMenu2"></div>
 ~~~

 ~~~ js
 $("#selectMenu").bootmenu({
       callback: function(value1) {
           alert(value1);
           $("#selectMenu2").bootmenu({
               listName: "MenuTwo",
               callback: function(value2) {
                   alert(value2);
               }
           });
       }
  });
 ~~~

Configuration
-------------

#### `items`
Array of items to be added to the list. (default: `Please add items to the dropdown!`)

~~~ js
var food = new Array('Pizza', 'Meat', 'Melon', 'Chicken', "Lasagna", "Eggs");
$("#selectMenu").bootmenu({ items : food });
~~~

#### `defaultText`
The default placeholder text to display. (default: `Select here!`)

~~~ js
$("#selectMenu").bootmenu({ defaultText : "Choose your preferences" });
~~~

#### `listname`
A unique identifier for each select menu, if you're using more than one menu. (default: `listOne`)

~~~ js
$("#selectMenu").bootmenu({ listname : "secondmenu" });
~~~

#### `background` and `hoverColor`
The background color of menu and the hover color of the items. (default: `#3498DB` and `#2C3E50`)

~~~ js
$("#selectMenu").bootmenu({ background : "#000", hoverColor: "#fff" });
~~~

#### `listAnimation`
The animation effect when clicking the select menu. (default: `slideDown`)<br>
Available animations: rotation, slideDown, fade, slideLeft, rotate, fly,

~~~ js
$("#selectMenu").bootmenu({ listAnimation : "rotation" });
~~~

#### `animationDuration`
Duration of the animation when clicking the menu. (default: `500ms`)

~~~ js
$("#selectMenu").bootmenu({ listAnimation : "fly", animationDuration: 1000 });
~~~

Callback
-------------
~~~ js
$("#selectMenu").bootmenu({
    callback: function(selectedValue)
    {
         // do something
    }
});
~~~

Thanks
------

**Bootmenu** © 2016-2017.

> GitHub [@mariomed7at](https://github.com/M-Z) &nbsp;&middot;&nbsp;

[MIT License]: http://mit-license.org/
