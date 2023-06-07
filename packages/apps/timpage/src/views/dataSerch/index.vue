<template>
  <div class="data-serch-layout">
    <div class="data-serch-head">
      <Tab :listName="list" @handleChange="handleChange" />
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import './data_serch.scss'
import Tab from './widget/tab/tab.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const list = ['园区', '楼宇', '楼层', '房间']
const handleChange = (e: any) => {
  switch (e) {
    case '园区':
      router.push('/data-serch/physicalPark')
      break
    case '楼宇':
      router.push('/data-serch/building')
      break
    case '楼层':
      router.push('/data-serch/floor')
      break
    case '房间':
      router.push('/data-serch/room')
      break
    default:
      router.push('/data-serch/physicalPark')
      break
  }
}
</script>
