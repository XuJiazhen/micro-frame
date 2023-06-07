<template>
  <div class="columnSettingDilog">
    <el-container>
      <el-main>
        <div class="">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="大洲" />
            <el-checkbox label="大洲编码" />
            <el-checkbox label="大洲(英文）" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="洲内区域" />
            <el-checkbox label="洲内区域编码" />
            <el-checkbox label="大洲(洲内区域(英文）" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="国家或地区" />
            <el-checkbox label="国家或地区编码" />
            <el-checkbox label="大洲(国家或地区(英文)" />
            <el-checkbox label="国家或地区(港译)" />
            <el-checkbox label="国家或地区(台译)" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="区域" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="省份" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="zone" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="城市" />
            <el-checkbox label="城市(英文)" />
            <el-checkbox label="城市编码" />
            <el-checkbox label="资源编码" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="园区名称" />
            <el-checkbox label="园区GID" />
            <el-checkbox label="园区简称" />
            <el-checkbox label="园区编号" />
            <el-checkbox label="所属ECC" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="楼宇名称" />
            <el-checkbox label="楼宇GID" />
            <el-checkbox label="楼宇简称" />
            <el-checkbox label="楼宇编号" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="楼层名称" />
            <el-checkbox label="楼层GID" />
            <el-checkbox label="楼层简称" />
          </el-checkbox-group>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="房间名称" />
            <el-checkbox label="房间号" />
            <el-checkbox label="房间编号" />
            <el-checkbox label="房间GID" />
            <el-checkbox label="房间功能" />
            <el-checkbox label="房间额定总功率(kW)" />
            <el-checkbox label="房间额定总IT功率(k" />
            <el-checkbox label="空调布置类型" />
            <el-checkbox label="房间额定制冷量(kW)" />
            <el-checkbox label="协议类型" />
          </el-checkbox-group>
        </div>
      </el-main>
      <el-footer>
        <el-button type="primary" link>应用</el-button>
        <el-button type="plain" link>取消</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>
<style lang="scss">
.columnSettingDilog {
  .el-container {
    .el-main {
      overflow-y: scroll;
    }
  }
}
</style>
