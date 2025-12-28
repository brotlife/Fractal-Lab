<img width="2284" height="321" alt="logo-C5JodY7e" src="https://github.com/user-attachments/assets/68a426d1-ac85-476e-a511-249f3f55f3af" />

### Fractal Lab
``` v1.0.0 | ❤️ The brot.life Team ```

_https://brot.life_




Fractal Lab is a high-precision Mandelbrot and Multibrot explorer designed for deep mathematical visualization. It provides interactive navigation, advanced numerical controls, and high-quality rendering through a dual-engine pipeline. This repository contains a thin Electron client that loads the Fractal Lab web application as a desktop app.

---

## Overview

Fractal Lab allows you to:

* Explore the Mandelbrot set and Multibrot variants interactively
* Zoom smoothly from the global view down to extreme detail
* Control iteration depth, exponent, and color mapping
* Render previews quickly or generate high-precision final images
* Save, share, and clone fractals using parameterized links
* Access a public gallery of curated fractals

---

## Installation

1. Install the Electron client using the respective files for your operating system.
2. Launch the application.
3. The client opens Fractal Lab in a dedicated desktop window.

---

## Main Interface

There are two main components to the user interface:

### Render View

* Displays the current fractal image
* Fullscreen or card view
* Fullscreen mode generates larger images, takes longer
* Click anywhere to stage a new center point
* Use arrow keys to move cursor precisely, jump size changes by zoom scale
* A crosshair indicates the selected location
* Bounding box shows the region that will be zoomed on the next render
* A progress bar indicates the precise status communicated by the unified rendering engine and mode (preview, BigInt, multibrot, etc)

### Control Panel

Contains navigation and rendering controls:

* Zoom Level input
* Zoom In and Zoom Out buttons
* Reset view button (render to update)
* Render button
* Randomize (automatically renders when pressed)
* Download (saves file to disk, does not require login)
* Share
* Advanced Settings


---

## Sharing

### Export

Fractal Lab allows you to save fractals to your local disk without being logged in. You can save these fractals for yourself or share them.
File format: 
* .FLP
Usage:
* In the control panel, select Share
* Select Export
* Select a destination to save the .flp file

### Import

After exporting a fractal, you can import it to any future Fractal Lab session on any machine. Simply upload the .flp file, and the program will begin rendering.
Usage:
* In the control panel, select Share
* Select Import
* Select the file to import to the server. The server accepts .json and .flp files.

---

## Basic Usage

### Navigating the Fractal

1. Start at zoom level 1 to view the full Mandelbrot set.
2. Click on a region of interest in the render view.
3. Increase the zoom level using the + button or manual input.
4. Click Render to compute the new view.
5. Repeat to explore deeper detail.

Zooming is multiplicative. 
Each increment or decrement of zoom increases magnification relative to the current setting, regardless of whether the render has been executed.

---

## Rendering Modes

Fractal Lab uses two rendering engines:

### Preview Engine

* Optimized for speed
* Enables fast feedback during navigation
* Best for exploration and positioning
* Limited to standard exponent rendering

### Direct Engine

* Full precision solver
* Required for very deep zooms or high iteration counts
* Slower but significantly more detailed

The current engine is indicated in the render status display.

---

## Advanced Settings

Open Advanced Settings to control the solver and rendering pipeline.

### Exponent

Controls the iterative formula:

```
z = z^n + c
```

Supported values:

* Real exponents such as 2, 3.72, 48, -5
* Complex (imaginary) exponents such as 2+0.5i or -1.5i

Changing the exponent produces Multibrot sets with different symmetries and structures.

We are currently working on implementing a control surface for the value of ```c```, enabling visualization of Julia sets.

### Resolution (Iterations)

* Sets the maximum number of iterations per pixel
* Higher values reveal finer boundary detail
* Auto mode dynamically adjusts iterations based on zoom level
* Manual mode allows explicit control for precision rendering

### Spectral Phase

* Rotates the color mapping applied to iteration counts
* Does not affect geometry
* Used to explore different visual palettes

### High Contrast

* Enhances edge detection
* Improves visibility of fine boundary filaments
* Useful at high zoom levels

### Preview Engine Toggle

* Enables or disables the fast preview engine
* Disabling forces full precision rendering

Finalize changes using Apply in the Advanced Settings modal and Render in the control panel.

---

## Randomization

The Randomize button generates a new fractal configuration by:

* Resetting the view
* Selecting a new color mapping
* Preserving the current rendering mode

This is useful for discovery and aesthetic exploration.

---

## Gallery

The Gallery contains saved fractals generated by users. A login is required to save fractals to the gallery, but not to load from it.

Each entry includes:

* Thumbnail preview
* Zoom level
* Iteration count
* Render time
* Author attribution

### Cloning a Fractal

A login is NOT required to clone a fractal from the gallery.

* Open a gallery entry
* Click Clone Fractal
* The fractal loads into the main explorer with identical parameters
* You may continue exploring or modify settings

---

## Downloading Images

The Download button exports the current render as an image.

Notes:

* Deep zooms and high iteration counts produce large, detailed images
* Download is not available until render completes

---

## Sharing

The Share button generates a parameterized json that encodes:

* Center coordinates
* Zoom level
* Exponent
* Iteration count
* Color phase
* Rendering options

If logged in, this json file can be shared with the Gallery, otherwise it can be encrypted and downloaded.

---

## Performance Notes

* Deep zooms increase computational cost exponentially
* Complicated renders may take several minutes to potentially hours
* Computation speed is generally relative to client performance
* Preview mode is recommended wherever possible to expedite computation

---

## Electron Client Notes

* The Electron client is a shell only
* All fractal computation occurs locally
* Updates to Fractal Lab are reflected globally and immediately
* Offline usage is not supported at this time

---

## Intended Use

Fractal Lab is designed for:

* Mathematical exploration
* Visual experimentation
* Educational demonstrations
* High-resolution fractal art generation

It prioritizes correctness, numerical stability, and visual clarity over automation or presets.

---

## Troubleshooting

For any support inquiries, please reach out to admin@brot.life

---

## License

See the accompanying license file for usage and distribution terms.
