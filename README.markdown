
About
-----

_jQuery Simple Color_ is a very simple color-picker plugin that displays a square grid of selectable colors. I found a lot of the other color-picker plugins quite heavy, so I ended up writing this to provide a dead-simple alternative. The list of colors it uses can be customized, and the layout size etc can be configured to a certain extent. _jQuery Simple Color_ is licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

![Simple Color Open](http://www.daveperrett.com/images/projects/jquery-simple-color/Simple_Color_Open.png)

Installation
------------

You'll need to download the [jQuery library](http://docs.jquery.com/Downloading_jQuery#Current_Release), and include it before _jquery.simple-color.js_ in your HTML source. See the _examples_ folder for examples.

This library is also available as a [bower](http://bower.io/) component under the name *jquery-simple-color*.

Usage
-----

_Simple Color_ transparently converts regular text input fields into color pickers.

First, add a text element:

```html
<input class='simple_color' value='#cc3333'/>
```

_Simple Color_ will automatically pick up the _value_ attribute and display it as the default color.

Once you have one or more text elements set up, just use the _simpleColor()_ function to set up the color picker:

```javascript
$('.simple_color').simpleColor();
```

You can use any valid jQuery selector instead of '.simple_color' if you wish.

_Simple Color_ also supports various options to customize the color picker:

```javascript
$('.simple_color').simpleColor({
    cellWidth: 9,
    cellHeight: 9,
    callback: function(hex, element) {
        alert("color picked! " + hex + " for input #" + element.attr('class'));
    }
});
```

If you wish to programatically close a color chooser, use the closeChooser() function:

```javascript
$('.simple_color').closeChooser();
```

If you wish to programatically set the color, use the setColor() function:

```javascript
$('.simple_color').setColor('#cc3333');
```

Options
-------

```javascript
defaultColor:       Default (initially selected) color.
                     default value: '#FFF'

border:             CSS border properties.
                     default value: '1px solid #000'

cellWidth:          Width of each individual color cell.
                     default value: 10

cellHeight:         Height of each individual color cell.
                     default value: 10

cellMargin:         Margin of each individual color cell.
                     default value: 1

boxWidth:           Width of the color display box.
                     default value: 115px

boxHeight:          Height of the color display box.
                     default value: 20px

columns:            Number of columns to display. Color order may look strange if this is altered.
                     default value: 16

insert:             The position to insert the color picker. 'before' or 'after'.
                     default value: 'after'

colors:             An array of colors to display, if you want to customize the default color set.
                     default value: default color set - see 'default_colors' below.

displayColorCode:   Display the color code (eg #333333) as text inside the button. true or false.
                     default value: false

colorCodeAlign:     Text alignment used to display the color code inside the button. Only used if
                    'displayColorCode' is true. Possible values are 'left', 'center' or 'right',
                     default value: 'center'

colorCodeColor:     Text color of the color code inside the button. Only used if 'displayColorCode'
                    is true.
                     default value: '#FFF' or '#000', decided based on the color selected in the chooser.

onSelect:           Function to be called when a color is selected. The hex code is passed into the
                    function. The callback function will be passed two arguments - the hex code of
                    the selected color, and the input element that triggered the chooser.
                     default value: null

onCellEnter:        Callback function that excecutes when the mouse enters a cell. The callback
                    function will be passed two arguments - the hex code of the current color, and
                    the input element that triggered the chooser.
                     default value: null
                     returns: hex value

onClose:            Callback function that executes when the chooser is closed. The callback
                    function will be passed one argument - the input element that triggered the chooser.
                     default value: null

hideInput           If true, hides the original input when displaying the color picker.
                     default value: true

livePreview:        The color display will change to show the color currently under the mouse. The
                    display will revert if no color is selected.
                     default value: false

chooserCSS:         An associative array of CSS properties that will be applied to the pop-up color
                    picker.
                    Default value: see options.chooserCSS in the source

displayCSS:         An associative array of CSS properties that will be applied to the color display
                    box.
                    Default value: see options.chooserCSS in the source

inputCSS            An associative array of CSS properties that will be applied to the form input.
                    Default value: see options.inputCSS in the source

```

Building From Scratch
---------------------

Use `npm install` to install the dependencies, and `grunt` to run the build.


Change history
-----------

* **Version 1.2.0 (2013-10-12)** :
  * Fix line-height bug when boxHeight option is used.
  * Fix color selection bug when chooser is closed without selecting a color.
  * Add a setColor() method to select a color programatically.
* **Version 1.1.5 (2013-10-12)** :
  * Add bower support.
  * Add displayCSS and chooserCSS options, and remove the border option.
  * Pass the original input element as an argument to callback functions.
  * Use CamelCase in source, plus general cleanup.
* **Version 1.1.4 (2013-05-30)** : Add support for jQuery 1.9.1 (thanks [napcs](https://github.com/napcs)).
* **Version 1.1.3 (2013-04-07)** : Rename *callback* option to *onSelect*.
* **Version 1.1.2 (2013-04-06)** : Add *onCellEnter*, *onClose* and *livePreview* options (thanks [jbergen](https://github.com/jbergen)).
* **Version 1.1.1 (2013-03-29)** : Add *callback* option (thanks [jbergen](https://github.com/jbergen)).
* **Version 1.1.0 (2012-10-14)** : Remove select and cancel buttons (thanks [wesnolte](https://github.com/wesnolte)).
* **Version 1.0.1 (2011-08-15)** : Trigger *change()* event when a color is selected (thanks [firstclown](https://github.com/firstclown)), and make colored display box clickable to select colors.
* **Version 1.0.0 (2011-05-21)** : 1.0 release.


Bug Reports
-----------

If you come across any problems, please [create a ticket](https://github.com/recurser/jquery-simple-color/issues) and we'll try to get it fixed as soon as possible.


Contributing
------------

Once you've made your commits:

1. [Fork](http://help.github.com/fork-a-repo/) jquery-simple-color
2. Create a topic branch - `git checkout -b my_branch`
3. Push to your branch - `git push origin my_branch`
4. Create a [Pull Request](http://help.github.com/pull-requests/) from your branch
5. That's it!


Author
------

Dave Perrett :: hello@daveperrett.com :: [@daveperrett](http://twitter.com/daveperrett)


Copyright
---------

Copyright (c) 2010 Dave Perrett. See [License](https://github.com/recurser/jquery-simple-color/blob/master/LICENSE) for details.


