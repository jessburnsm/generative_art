# Generative Art Framework

This repo defines a framework for creating a grid of randomly generated
'components'.

# Installation & Usage

1. `git clone https://github.com/jessburnsm/generative_art.git`
2. Open the `generative_art/index.html` file in a browser window.
3. Refresh the page to re-generate the grid.
4. Click `SAVE SVG` on the page to save the current grid as an image.

# Options

Global options can be set in `js/sketch.js`:

* Change the `PALLETE` array to alter the color scheme of design elements. All colors should be specified in RGBA format.
* Change the `MIN_STROKE` and `MAX_STROKE` values to change the thickness of element strokes.
* Change the value of `DEBUG` to toggle the debug window.
* Update `ELEMENT_LIBRARY` to alter which design elements can be drawn. All values should correspond to a design element class. Add a class to the list more than once to increase its likelihood to be drawn on any given iteration.

# Framework

## Design Elements

Design elements are individual geometric components. They are drawn with random
parameters. Parameters for each design element can be seen in debug mode.

## Components

A component is a set of design elements. Components choose a random number of
design elements to apply from the `ELEMENT_LIBRARY`.

## Grid

The grid is an n x n collection of components.
