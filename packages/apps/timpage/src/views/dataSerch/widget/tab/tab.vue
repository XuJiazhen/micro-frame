<template>
  <div class="tab_content">
    <div
      :class="{ tab_item_active: activeName == item ? 'tab_item_active' : '' }"
      class="tab_item"
      v-on:click="handlerChange(item)"
      v-for="(item, index) in props.listName"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import './tab.scss'
const props = defineProps({
  listName: Array<string>
})
const emit = defineEmits(['handleChange'])

let activeName = ref<string | undefined>(props.listName![0])
const handlerChange = (e: string) => {
  activeName.value = e
  emit('handleChange', e)
}
</script>
