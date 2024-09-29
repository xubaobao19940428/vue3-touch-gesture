<center>
# vue3-touch-gesture

[English](ENREADME.md) | [中文](README.md)
</center>

`vue3-touch-gesture` is a touch gesture plugin based on [Hammer.js](https://hammerjs.github.io/) and [Vue 3](https://v3.vuejs.org/), supporting various touch gestures like panning, pinching, swiping, and more. The plugin is easy to integrate and offers flexible configuration options.

## Features

-   Supports multiple gesture events: `pinch`, `pan`, `swipe`, `rotate`, `tap`, etc.
-   Configurable gesture options and directions.
-   Easy to use and allows custom gesture registration.

## Installation

Install using npm:

```bash
npm install vue3-touch-gesture

```

Or using yarn:

```bash
yarn add vue3-touch-gesture
```

## Quick Start

-   Import and register the plugin in your Vue project:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import vue3Touch from 'vue3-touch-gesture'

const app = createApp(App)
app.use(vue3Touch, { name: 'v-touch' })
app.mount('#app')
```

-   Use the v-touch component in your template and listen to gesture events:

```vue
<template>
	<v-touch @pinchout="onPinchOut" @pinchin="onPinchIn" :pinch-options="{ threshold: 0.1 }">
		<div class="content">
			<p>Try using a pinch gesture with two fingers!</p>
		</div>
	</v-touch>
</template>

<script setup>
import { ref } from 'vue'
    const scale = ref(1)
		function onPinchOut() {
			this.scale += 0.1
		},
		function onPinchIn() {
			this.scale = Math.max(this.scale - 0.1, 1)
		}
</script>

<style scoped>
.content {
	transform: scale(var(--scale));
}
</style>
```

## Supported Gestures

-   Pan gestures: @panstart, @panmove, @panend, @pancancel, etc.
-   Pinch gestures: @pinch, @pinchout, @pinchin, @pinchstart, @pinchend, etc.
-   Swipe gestures: @swipeleft, @swiperight, @swipeup, @swipedown, etc.
-   Rotate gestures: @rotate, @rotatestart, @rotateend, @rotatecancel, etc.
-   Tap gestures: @tap, @press, @pressup, etc.

## Configuration Options

All gestures can be configured via options. Here's an example for the pinch gesture:

```vue
<v-touch :pinch-options="{ threshold: 0.1 }">
	<div>Pinch Gesture</div>
</v-touch>
```

Available options include:

-   threshold: The threshold for triggering the gesture.
-   direction: The direction of the gesture, supporting up, down, left, right, horizontal, vertical, all, etc.
