<script setup lang="ts">
import World from '@/components/World.vue'
import imgz from '@/assets/Screenshot_20230606182052.png'
</script>

<template>
  <div>
    <div class="title">HelloS</div>
    <World />
    <img :src="imgz" alt="" />
    <el-button>Button</el-button>
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
