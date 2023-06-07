<template>
  <el-row :gutter="0">
    <el-col :span="4" class="menu_bg">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#000000"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>数据中台</span>
          </template>
          <el-menu-item index="1-1">
            <router-link to="/data-serch" style="color: #fff"
              >空间数据</router-link
            >
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/source" style="color: #fff">资源数据</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/source" style="color: #fff">设施数据</router-link>
          </el-menu-item>
          <el-menu-item index="1-4">
            <router-link to="/source" style="color: #fff">测点数据</router-link>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { Location } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
