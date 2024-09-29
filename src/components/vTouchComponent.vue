<!--  -->
<template>
    <vue3-touch ref="pinchAndPan" @pinchstart="pinchstart" @pinchout="pinchout" @pinchin="pinchin" @panmove="panmove"
        @panstart="panstart" @panend="panend" :pinch-options="{ threshold: 0.09 }" @press="press"
        @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" @rotatestart="rotatestart" @rotateend="rotateend"
        @rotate="rotate" :pan-options="{ threshold: 0.01 }" :rotate-options="{ threshold: 0.01 }"
        :swipe-options="{ enable: false }" :style="{
            transform: 'scale(' + scale + ')',
        }" :enabled="true">
        <slot seat-area-solt></slot>
    </vue3-touch>

</template>

<script setup>
import { ref } from 'vue';
const pinchAndPan = ref(null)
const maxscale = ref(2)
const scale = ref(1)
const pinchout = function () {
    console.log('Pinch Out Event Triggered');
    if (scale.value >= 0 && scale.value < maxscale.value) {
        scale.value += 0.1;
    }
    console.log(scale.value);
}
// const tap = function (){
//     console.log('tap')
// }
const press = function () {
    console.log('press')
}
const pinchstart = function (event) {
    console.log('Pinch Start Event Triggered', event);
}
const pinchin = function (event) {

    console.log('Pinch In Event Triggered', event);
    if (scale.value > 1) {
        scale.value -= 0.1;
    }
    console.log(scale.value);
}
const panmove = function () {
    console.log('panmove')
}
const panstart = function (event) {

    console.log('panstart')
}
const panend = function () {
    console.log('panend')

}
const onSwipeLeft = () => {
    console.log('swipe left')
    // 获取list
    let now = document.getElementsByClassName("container-box")[0];
    now.style.transform += "translateX(-200px)";
    now.style.transition = "all ease 0.5s";
}

const onSwipeRight = () => {
    console.log('swipe right')
    // 获取list
    let now = document.getElementsByClassName("container-box")[0];
    now.style.transform += "translateX(200px)";
    now.style.transition = "all ease 0.5s";
}
const rotatestart = function (event) {
    console.log('rotatestart')
}
const rotateend = function (event) {
    console.log('rotateend')
}
const rotate = function (event) {
    console.log('rotate')
}

</script>
<style lang='scss' scoped></style>