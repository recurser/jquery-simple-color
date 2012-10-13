/*
 * jQuery simple-color plugin
 * @requires jQuery v1.4.2 or later
 *
 * See http://recursive-design.com/projects/jquery-simple-color/
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 1.0.1 (201108151520)
 */
 (function($) {
/**
 * simpleColor() provides a mechanism for displaying simple color-pickers.
 *
 * If an options Object is provided, the following attributes are supported:
 *
 *  defaultColor:       Default (initially selected) color.
 *                       default value: '#FFF'
 *
 *  border:             CSS border properties.
 *                       default value: '1px solid #000'
 *
 *  cellWidth:          Width of each individual color cell.
 *                       default value: 10
 *
 *  cellHeight:         Height of each individual color cell.
 *                       default value: 10
 *
 *  cellMargin:         Margin of each individual color cell.
 *                       default value: 1
 *
 *  boxWidth:           Width of the color display box.
 *                       default value: 115px
 *
 *  boxHeight:          Height of the color display box.
 *                       default value: 20px
 *
 *  columns:            Number of columns to display. Color order may look strange if this is altered.
 *                       default value: 16
 *
 *  insert:             The position to insert the color picker. 'before' or 'after'.
 *                       default value: 'after'
 *
 *  buttonClass:        A custom CSS class to add to the button, if you want to add some custom styling.
 *                       default value: ''
 *
 *  colors:             An array of colors to display, if you want to customize the default color set.
 *                       default value: default color set - see 'default_colors' below.
 *
 *  displayColorCode:   Display the color code (eg #333333) as text inside the button. true or false.
 *                       default value: false
 *
 *  colorCodeAlign:     Text alignment used to display the color code inside the button. Only used if 'displayColorCode' is true. 'left', 'center' or 'right'
 *                       default value: 'center'
 *
 *  colorCodeColor:     Text color of the color code inside the button. Only used if 'displayColorCode' is true.
 *                       default value: '#FFF'            
 */
    $.fn.simpleColor = function(options) {

        var default_colors = 
        ['ffffff', 'ffffcc', 'ffff99', 'ffff66', 'ffff33', 'ffff00',
         'ccffff', 'ccffcc', 'ccff99', 'ccff66', 'ccff33', 'ccff00',
         '99ffff', '99ffcc', '99ff99', '99ff66', '99ff33', '99ff00',
         '66ffff', '66ffcc', '66ff99', '66ff66', '66ff33', '66ff00',
         '33ffff', '33ffcc', '33ff99', '33ff66', '33ff33', '33ff00',
         '00ffff', '00ffcc', '00ff99', '00ff66', '00ff33', '00ff00',
         'ffccff', 'ffcccc', 'ffcc99', 'ffcc66', 'ffcc33', 'ffcc00',
         'ccccff', 'cccccc', 'cccc99', 'cccc66', 'cccc33', 'cccc00',
         '99ccff', '99cccc', '99cc99', '99cc66', '99cc33', '99cc00',
         '66ccff', '66cccc', '66cc99', '66cc66', '66cc33', '66cc00',
         '33ccff', '33cccc', '33cc99', '33cc66', '33cc33', '33cc00',
         '00ccff', '00cccc', '00cc99', '00cc66', '00cc33', '00cc00',
         'ff99ff', 'ff99cc', 'ff9999', 'ff9966', 'ff9933', 'ff9900',
         'cc99ff', 'cc99cc', 'cc9999', 'cc9966', 'cc9933', 'cc9900',
         '9999ff', '9999cc', '999999', '999966', '999933', '999900',
         '6699ff', '6699cc', '669999', '669966', '669933', '669900',
         '3399ff', '3399cc', '339999', '339966', '339933', '339900',
         '0099ff', '0099cc', '009999', '009966', '009933', '009900',
         'ff66ff', 'ff66cc', 'ff6699', 'ff6666', 'ff6633', 'ff6600',
         'cc66ff', 'cc66cc', 'cc6699', 'cc6666', 'cc6633', 'cc6600',
         '9966ff', '9966cc', '996699', '996666', '996633', '996600',
         '6666ff', '6666cc', '666699', '666666', '666633', '666600',
         '3366ff', '3366cc', '336699', '336666', '336633', '336600',
         '0066ff', '0066cc', '006699', '006666', '006633', '006600',
         'ff33ff', 'ff33cc', 'ff3399', 'ff3366', 'ff3333', 'ff3300',
         'cc33ff', 'cc33cc', 'cc3399', 'cc3366', 'cc3333', 'cc3300',
         '9933ff', '9933cc', '993399', '993366', '993333', '993300',
         '6633ff', '6633cc', '663399', '663366', '663333', '663300',
         '3333ff', '3333cc', '333399', '333366', '333333', '333300',
         '0033ff', '0033cc', '003399', '003366', '003333', '003300',
         'ff00ff', 'ff00cc', 'ff0099', 'ff0066', 'ff0033', 'ff0000',
         'cc00ff', 'cc00cc', 'cc0099', 'cc0066', 'cc0033', 'cc0000',
         '9900ff', '9900cc', '990099', '990066', '990033', '990000',
         '6600ff', '6600cc', '660099', '660066', '660033', '660000',
         '3300ff', '3300cc', '330099', '330066', '330033', '330000',
         '0000ff', '0000cc', '000099', '000066', '000033', '000000'];

        // Option defaults
        options = $.extend({
            defaultColor:     this.attr('defaultColor') || '#FFF',
            border:           this.attr('border') || '1px solid #000',
            cellWidth:        this.attr('cellWidth') || 10,
            cellHeight:       this.attr('cellHeight') || 10,
            cellMargin:       this.attr('cellMargin') || 1,
            boxWidth:         this.attr('boxWidth') || '115px',
            boxHeight:        this.attr('boxHeight') || '20px',
            columns:          this.attr('columns') || 18,
            insert:           this.attr('insert') || 'after',
            buttonClass:      this.attr('buttonClass') || '',
            colors:           this.attr('colors') || default_colors,
            displayColorCode: this.attr('displayColorCode') || false,
            colorCodeAlign:   this.attr('colorCodeAlign') || 'center',
            colorCodeColor:   this.attr('colorCodeColor') || '#FFF'
            
        }, options || {});

        // Hide the input
        this.hide();

        // Figure out the cell dimensions
        options.totalWidth = options.columns * (options.cellWidth + (2 * options.cellMargin));
        if ($.browser.msie) {
            options.totalWidth += 2;
        }

        options.totalHeight = Math.ceil(options.colors.length / options.columns) * (options.cellHeight + (2 * options.cellMargin));

        // Store these options so they'll be available to the other functions
        // TODO - must be a better way to do this, not sure what the 'official'
        // jQuery method is. Ideally i want to pass these as a parameter to the 
        // each() function but i'm not sure how
        $.simpleColorOptions = options;



        function buildSelector(index) {

            var options = $.simpleColorOptions;

            // Create a container to hold everything
            var container = $("<div class='simpleColorContainer' />");

            // Create the color display box
            var default_color = (this.value && this.value != '') ? this.value : options.defaultColor;

            var display_box = $("<div class='simpleColorDisplay' />");
            display_box.css('backgroundColor', default_color);
            display_box.css('border',          options.border);
            display_box.css('width',           options.boxWidth);
            display_box.css('height',          options.boxHeight);
            display_box.css('cursor',          'pointer');
            container.append(display_box);
            
            // If 'displayColorCode' is turned on, display the currently selected color code as text inside the button.
            if (options.displayColorCode) {
                display_box.text(this.value);
                display_box.css('color',     options.colorCodeColor);
                display_box.css('textAlign', options.colorCodeAlign);
            }
            
            var select_callback = function (event) {

               // Use an existing chooser if there is one
               if (event.data.container.chooser) {
                   event.data.container.chooser.show();
            
               // Build the chooser
               } else {

                   // Make a chooser div to hold the cells
                   var chooser = $("<div class='simpleColorChooser'/>");
                   chooser.css('border',  options.border);
                   chooser.css('margin',  '0px');
                   chooser.css('margin-top',  '3px');
                   chooser.css('width',   options.totalWidth + 'px');
                   chooser.css('height',  options.totalHeight + 'px');
            
                   event.data.container.chooser = chooser;
                   event.data.container.append(chooser);
            
                   // Create the cells
                   for (var i=0; i<options.colors.length; i++) {
                       var cell = $("<div class='simpleColorCell' id='" + options.colors[i] + "'/>");
                       cell.css('width',           options.cellWidth + 'px');
                       cell.css('height',          options.cellHeight + 'px');
                       cell.css('margin',          options.cellMargin + 'px');
                       cell.css('cursor',          'pointer');
                       cell.css('lineHeight',      options.cellHeight + 'px');
                       cell.css('fontSize',        '1px');
                       cell.css('float',           'left');
                       cell.css('backgroundColor', '#'+options.colors[i]);
                       chooser.append(cell);

                       cell.bind('click', {
                               input: event.data.input, 
                               chooser: chooser, 
                               display_box: display_box}, 
                           function(event) {
                               event.data.input.value = '#' + this.id;
                               $(event.data.input).change();
                               event.data.display_box.css('backgroundColor', '#' + this.id);
                               event.data.chooser.hide();
                               event.data.display_box.show();
       
                               // If 'displayColorCode' is turned on, display the currently selected color code as text inside the button.
                               if (options.displayColorCode) {
                                   event.data.display_box.text('#' + this.id);
                               }
                           }
                       );
                   }
               }
           };
            
           var callback_params = {
               container: container, 
               input: this, 
               display_box: display_box, 
           };

           // Bind the display box button to display the chooser.
           display_box.bind('click', callback_params, select_callback);

            $(this).after(container);

        };

        this.each(buildSelector);

        return this;
    };

    /*
     * Close the given color selectors
     */
    $.fn.closeSelector = function() {
        this.each( function(index) {
            var container = $(this).parent().find('div.simpleColorContainer');
            container.find('.simpleColorChooser').hide();
            container.find('.simpleColorDisplay').show();
        });

        return this;
    };

})(jQuery);
