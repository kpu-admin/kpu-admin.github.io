<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const nameStorage = 'ACTIVITY-KPU-MOBILE-1'

function go() {
  window.location.href = 'https://kpu-mobile.kpui.top/'
}

function closeBanner() {
  isVisible.value = false
  localStorage.setItem(nameStorage, String(true))
  document.documentElement.classList.remove('mirror-site-menu-fixed')
}

onMounted(() => {
  isVisible.value = !localStorage.getItem(nameStorage)
  if (isVisible.value)
    document.documentElement.classList.add('mirror-site-menu-fixed')
})
</script>

<template>
  <div v-if="isVisible" class="banner-wrapper" role="banner">
    <div id="banner" @click="go">
      <div class="content">
        全新移动端 H5 框架 Kpu-mobile 正式发布，点击查看详情
      </div>
      <button id="banner-close" @click.stop="closeBanner">
        <span class="close">&times;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.banner-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 61;
  width: 100%;
  height: 100%;
  max-height: 40px;
  background: linear-gradient(45deg, #0a2b4e, #835ec2);
  overflow: hidden;
  margin: 0;
  transition: background-size 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}

#banner {
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}

#banner .content {
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  background: linear-gradient(145deg, #c3ffac, #86ec87);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#banner-close {
  position: absolute;
  width: 40px;
  height: 100%;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

#banner-close:hover > .close {
  color: #86ec87;
}

#banner-close > .close {
  font-size: 20px;
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  #banner .content {
    font-size: 14px;
  }
}
</style>

<style>
html.mirror-site-menu-fixed {
  --vp-layout-top-height: 40px;
}
</style>
