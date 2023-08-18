<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <collapse-item name="数据" expanded>
    <setting-item-box name="源" alone>
      <setting-item name="数据1">
        <n-input v-model:value="optionData.datasetDetail" size="small"></n-input>
      </setting-item>
      <setting-item name="数据2">
        <n-input v-model:value="optionData.dataset" size="small"></n-input>
      </setting-item>
    </setting-item-box>
    <setting-item-box name="样式">
      <setting-item name="主色调">
        <n-color-picker
            size="small"
            :show-alpha="false"
            :modes="['hex']"
            v-model:value="optionData.mainCicleColor"
        ></n-color-picker>
      </setting-item>
      <setting-item name="副色调">
        <n-color-picker
            size="small"
            :show-alpha="false"
            :modes="['hex']"
            v-model:value="optionData.subCicleColor"
        ></n-color-picker>
      </setting-item>
      <setting-item name="字体色1">
        <n-color-picker size="small" :modes="['hex']" v-model:value="optionData.textColorFirst"></n-color-picker>
      </setting-item>
      <setting-item name="字体大小1">
        <n-input-number v-model:value="optionData.textSizeFirst"></n-input-number>
      </setting-item>
      <setting-item name="字体色2">
        <n-color-picker size="small" :modes="['hex']" v-model:value="optionData.textColorSecond"></n-color-picker>
      </setting-item>
      <setting-item name="字体大小2">
        <n-input-number v-model:value="optionData.textSizeSecond"></n-input-number>
      </setting-item>
    </setting-item-box>
  </collapse-item>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { option } from './config'
import { CollapseItem, SettingItemBox, SettingItem } from '@/components/Pages/ChartItemSetting'

defineProps({
  optionData: {
    type: Object as PropType<typeof option>,
    required: true
  }
})
</script>
