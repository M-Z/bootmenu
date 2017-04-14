Bootmenu
=========

Simple jQuery animated select menu based n bootstrap framework.

Installation
------------

Add [bootmenu.min.js] to your project.

```html
<script src='bootmenu.min.js'></script>
```

Basic usage
-----------

Simply call `start()` and `done()` to control the progress bar.

~~~ js
NProgress.start();
NProgress.done();
~~~

### Turbolinks (version 5+)
Ensure you're using Turbolinks 5+, and use
this: (explained [here](https://github.com/rstacruz/nprogress/issues/8#issuecomment-239107109))

~~~ js
$(document).on('turbolinks:click', function() {
  NProgress.start();
});
$(document).on('turbolinks:render', function() {
  NProgress.done();
  NProgress.remove();
});
~~~

### Turbolinks (version 3 and below)
Ensure you're using Turbolinks 1.3.0+, and use
this: (explained [here](https://github.com/rstacruz/nprogress/issues/8#issuecomment-23010560))


Ideas
-----

 * Bind two select menus to make a nested one.

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
The animation effect when clicking the select menu. (default: `slideDown`)
Available animations: rotation, slideDown, fade, slideLeft, rotate, fly,

~~~ js
$("#selectMenu").bootmenu({ listAnimation : "rotation" });
~~~

#### `animationDuration`
Duration of the animation when clicking the menu. (default: `500ms`)

~~~ js
$("#selectMenu").bootmenu({ listAnimation : "fly", animationDuration: 1000 });
~~~

Thanks
------

**NProgress** © 2013-2014, Rico Sta. Cruz. Released under the [MIT License].<br>
Authored and maintained by Rico Sta. Cruz with help from [contributors].

> GitHub [@mariomed7at](https://github.com/mariomed7at) &nbsp;&middot;&nbsp;
> Facebook [@Mario Medhat](https://www.facebook.com/mario.medhat1)

[MIT License]: http://mit-license.org/
