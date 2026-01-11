# Audio Toggles

A curated collection of animated, audio-reactive toggle components built for modern web applications.

[Live Demo](https://audiotogglesv1.yassinegallaoui.com/)

## Overview

Audio Toggles is a visual library showcasing interactive toggle switches that react to audio states. Built with **Next.js** and **Framer Motion**, these components are designed to be smooth, performant, and easily integratable into any React project.

The application also features a built-in audio player using **Howler.js**, allowing users to test the toggles with various ambient sounds and binaural beats.

## Features

- **Audio-Reactive Visuals**: 8+ distinct toggle animations that respond to play/pause states.
- **Built-in Audio Player**: Switch between natural sounds (Ocean, Forest, etc.) and binaural beats (Alpha, Theta, etc.).
- **Developer Ready**: Direct links to component source code for easy integration.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Directory)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Audio**: [Howler.js](https://howlerjs.com/)
- **Styling**: SCSS / CSS Modules

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YassineGallaoui/audio-toggles.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Explore the `src/components` directory to find the individual toggle components. Each toggle is self-contained and designed to be easily adapted for use in your own projects.

The main application structure is located in `src/app`, with shared utilities in `src/utils` and data constants in `src/data`.
