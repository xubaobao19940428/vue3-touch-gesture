

<h1 align="center">vue3-touch-gesture</h1>

<p align="center">
  🌈 <a href="./ENREADME.md">English</a>
  &nbsp;
  ·
  &nbsp;
	<a href="./README.md">中文</a>
</p>


`vue3-touch-gesture` 是一个基于 [Hammer.js](https://hammerjs.github.io/) 和 [Vue 3](https://v3.vuejs.org/) 的触控手势插件，支持多种手指触控操作，如平移、缩放、滑动等。该插件易于集成并提供了灵活的配置选项。

## 特性

-   支持多种手势事件：`pinch`, `pan`, `swipe`, `rotate`, `tap` 等。
-   可配置的手势选项和方向。
-   简单易用，支持自定义手势注册。

## 安装

使用 npm 安装：

```bash
npm install vue3-touch-gesture
```

或者使用 yarn：

```bash
yarn add vue3-touch-gesture
```

## 快速开始

-   在你的 Vue 项目中引入并注册插件：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import vue3Touch from 'vue3-touch-gesture'

const app = createApp(App)
app.use(vue3Touch, { name: 'v-touch' })
app.mount('#app')
```

-   在组件中使用 v-touch 组件，并监听手势事件：

```html
<template>
	<v-touch @pinchout="onPinchOut" @pinchin="onPinchIn" :pinch-options="{ threshold: 0.1 }">
		<div class="content">
			<p>尝试使用双指缩放手势！</p>
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

## 支持的手势

-   Pan 手势：@panstart, @panmove, @panend, @pancancel 等。
-   Pinch 手势：@pinch, @pinchout, @pinchin, @pinchstart, @pinchend 等。
-   Swipe 手势：@swipeleft, @swiperight, @swipeup, @swipedown 等。
-   Rotate 手势：@rotate, @rotatestart, @rotateend, @rotatecancel 等。
-   Tap 手势：@tap, @press, @pressup 等。

## 配置选项

所有手势都可以通过选项进行配置。以下是 pinch 手势的配置示例：

```html
<v-touch :pinch-options="{ threshold: 0.1 }">
	<div>Pinch 手势</div>
</v-touch>
```

可以传递的选项包括：

-   threshold: 手势的触发阈值。
-   direction:手势的方向，支持 up, down, left, right, horizontal, vertical, all 等。
