<template>
    <div id="app">
        <vTouchComponent>
            <div slot="seat-area-solt">
                <div class="container-box">
                    <div class="container">
                        Swipe me!
                    </div>
                    <div class="container">
                        Swipe me!
                    </div>
                    <div class="container">
                        Swipe me!
                    </div>
                </div>
            </div>
        </vTouchComponent>
    </div>
</template>

<script setup name="App">

import vTouchComponent from './components/vTouchComponent.vue'

</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
    width: 100%;
    overflow: hidden;

}

.container-box {
    display: flex;
    /* width: 100%;
    height: 500px; */
}

.container {
    width: 300px;
    height: 200px;
    background-color: red;
    margin: 0 20px;
    flex-shrink: 0;
}
</style>