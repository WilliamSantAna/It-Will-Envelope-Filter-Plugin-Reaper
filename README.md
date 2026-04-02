# IT Will Envelope Filter

## Overview

**IT Will Envelope Filter** is a dynamic auto-filter plugin designed for guitar and bass, inspired by classic analog envelope filters such as the EHX Q-Tron, DOD 440, and MXR Bass Envelope Filter.

Unlike traditional wah pedals that rely on foot control or LFO modulation, this plugin reacts directly to your playing dynamics. The harder you pick or pluck, the more the filter opens — producing the characteristic “quack” or “talking” sound widely used in funk, soul, and groove-based music.

The plugin is optimized especially for bass, but works equally well with guitar and other instruments.

---

## How It Works

The core of the effect is based on three main components:

### 1. Envelope Follower

The plugin continuously analyzes the amplitude of the incoming audio signal using an envelope follower:

- Stronger input signal → higher envelope value  
- Softer input signal → lower envelope value  

This envelope controls the filter in real time.

---

### 2. Dynamic Filter (State Variable Filter)

A state-variable filter (SVF) is used to generate three filter types:

- **Low-pass (LP)** → emphasizes low frequencies  
- **Band-pass (BP)** → emphasizes mid frequencies (classic “quack”)  
- **High-pass (HP)** → emphasizes high frequencies  

The cutoff frequency of the filter is dynamically modulated by the envelope, using a logarithmic mapping for a natural and musical response.

---

### 3. Envelope-to-Frequency Mapping

The detected envelope is scaled and shaped using the **Sensitivity (Sens)** control, then mapped to a frequency range:

- Low envelope → filter stays closed (darker tone)  
- High envelope → filter opens (brighter, more vocal tone)  

This creates the expressive, touch-sensitive behavior of the effect.

---

## Controls

### Mode
Selects the filter type:

- **Low** → deeper, bass-heavy tone  
- **Mid** → classic envelope filter sound (recommended)  
- **High** → brighter, more aggressive tone  

---

### Gain
Controls the input gain before processing.

- Higher values increase signal level into the filter  
- Useful for compensating low-output instruments  
- Also affects how strongly the envelope reacts  

---

### Sens (Sensitivity)
Controls how strongly the filter responds to your playing.

- Low values → subtle movement  
- High values → aggressive, wide filter sweeps  

This is the most important control for shaping the “quack”.

---

### Q (Resonance)
Controls the resonance of the filter.

- Low Q → smooth, subtle effect  
- High Q → sharp, vocal, “talking” sound  

Higher Q values produce more pronounced peaks around the cutoff frequency.

---

### Speed (Quack Speed)
Controls how fast the filter opens and closes.

- Low values → slow, long sweeps (“quaaaaack”)  
- High values → fast, percussive response (“quack quack”)  

Internally, this adjusts the attack and release times of the envelope follower.

---

### Volume
Controls the output level of the processed signal.

Used to balance the final output and prevent clipping.

---

### Preset Selector
Includes multiple presets inspired by classic pedals:

- Default (IT Will Envelope Filter)
- EHX Q-Tron
- MXR 105Q Bass
- Boss AW-3
- Prometheus DLX
- Mojo Hand Wonder Filter
- DOD 440
- Source Audio Spectrum
- AllPedal Macrodose
- Solid Gold Supa Funk

Selecting a preset automatically updates all parameters.

---

## Features

- Dynamic envelope-based filtering (no LFO)
- Logarithmic frequency mapping for natural response
- Multiple filter modes (LP / BP / HP)
- Highly expressive sensitivity control
- Wide speed range (from slow sweeps to fast quacks)
- Preset system based on real-world pedals
- Multi-channel processing support
- Input and output gain control
- Built-in output limiter to prevent clipping

---

## Installation (REAPER)

### Step 1 — Locate JSFX Folder

In REAPER:

1. Go to **Options → Show REAPER resource path in explorer/finder**
2. Open the folder: Effects

---

### Step 2 — Install the Plugin

1. Create a new file:
2. IT_Will_Envelope_Filter.jsfx

2. Paste the plugin code into this file
3. Save the file

---

### Step 3 — Load in REAPER

1. Open REAPER
2. Insert the plugin:
3. FX → Add → JS → IT Will Envelope Filter


---

## Usage Tips

### For Bass (Funk / Groove)
- Mode: Mid  
- Sens: Medium to High  
- Q: Medium to High  
- Speed: Medium  

---

### For Guitar (Auto-wah style)
- Mode: High  
- Sens: Medium  
- Q: High  
- Speed: Fast  

---

### For Subtle Movement
- Lower Sens  
- Lower Q  
- Slower Speed  

---

### For Extreme / Synth-like Sounds
- High Sens  
- High Q  
- Slow Speed  

---

## Notes

- The effect is highly dependent on input dynamics — playing technique matters
- Works best with clean or lightly driven signals
- Placing compression before the plugin will reduce its responsiveness

---

## License

Free to use and modify.

---

## Author

Developed as part of the **IT Will** plugin series.
