<template>
  <el-table
    ref="multipleTableRef"
    :data="props.tabledataProps?.tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column
      :property="item?.property"
      :label="item.label"
      v-for="(item, index) in props.tabledataProps?.data"
      :key="index"
    />
    <slot name="handler" />
  </el-table>
</template>

<script lang="ts" setup>
import { TableInterface } from '@/util/interface/table_interface'
import { ref } from 'vue'
import type { PropType } from 'vue'
const multipleSelection = ref<[]>([])
const props = defineProps({
  tabledataProps: Object as PropType<TableInterface>
})
const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
}
</script>
