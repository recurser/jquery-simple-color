
About
-----

_jQuery Simple Color_ is a very simple color-picker plugin that displays a square grid of selectable colors. I found a lot of the other color-picker plugins quite heavy, so I ended up writing this to provide a dead-simple alternative. The list of colors it uses can be customized, and the layout size etc can be configured to a certain extent. _jQuery Simple Color_ is licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

![Simple Color Closed](http://recursive-design.com/images/projects/jquery-simple-color/Simple_Color_Closed.png)

![Simple Color Open](http://recursive-design.com/images/projects/jquery-simple-color/Simple_Color_Open.png)

Installation
------------

You'll need to download the [jQuery library](http://docs.jquery.com/Downloading_jQuery#Current_Release), and include it before _jquery.simple-color.js_ in your HTML source. See the _examples_ folder for examples.

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
		border: '1px solid #333333',
		buttonClass: 'button'
});
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

columns:            Number of columns to display. Color order may look 
                    strange if this is altered.
                     default value: 16

insert:             The position to insert the color picker. 'before' or 
                    'after'.
                     default value: 'after'

buttonClass:        A custom CSS class to add to the button, if you want to 
                    add some custom styling.
                     default value: ''

buttonDisplay:      Display Select and Cancel buttom.
                     default value: true

colors:             An array of colors to display, if you want to 
                    customize the default color set.
                     default value: default color set - see 'default_colors' below.

displayColorCode:   Display the color code (eg #333333) as text inside 
                    the button. true or false.
                     default value: false

colorCodeAlign:     Text alignment used to display the color code inside 
                    the button. Only used if 'displayColorCode' is true. 
                    'left', 'center' or 'right'
                     default value: 'center'

colorCodeColor:     Text color of the color code inside the button. Only 
                    used if 'displayColorCode' is true.
                     default value: '#FFF'
```

Building From Scratch
---------------------

You can build the regular, un-minified version simply by running _ant_:

```bash
$ ant
Buildfile: build.xml

jquery.simple-color:
     [echo] Building ./jquery.simple-color.js
     [echo] ./jquery.simple-color.js built.

BUILD SUCCESSFUL
Total time: 0 seconds
```

Before you can build the minified version yourself, you'll need to download the [Google Closure Compiler](http://closure-compiler.googlecode.com/files/compiler-latest.zip) and put it in a folder called _build_:

```bash
$ mkdir build
$ cd build
$ wget http://closure-compiler.googlecode.com/files/compiler-latest.zip
$ unzip compiler-latest.zip
```

Once you have the compiler, you can build the minified version by running _ant min_:

```bash
$ ant min
Buildfile: build.xml

jquery.simple-color:
     [echo] Building ./jquery.simple-color.js
     [echo] ./jquery.simple-color.js built.

min:
     [echo] Building ./jquery.simple-color.min.js
    [apply] Applied java to 1 file and 0 directories.
   [delete] Deleting: /Users/dave/Documents/Code/jquery/jquery-simple-color/tmpmin
     [echo] ./jquery.simple-color.min.js built.

BUILD SUCCESSFUL
Total time: 2 seconds
```


Change history
-----------

* **Version 1.0.1 (2011-08-15)** : Trigger change() event when a color is selected (thanks [firstclown](https://github.com/firstclown)), and make colored display box clickable to select colors.
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

Dave Perrett :: mail@recursive-design.com :: [@recurser](http://twitter.com/recurser)


Copyright
---------

Copyright (c) 2010 Dave Perrett. See [License](https://github.com/recurser/jquery-simple-color/blob/master/LICENSE) for details.


