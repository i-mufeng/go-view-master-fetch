<script setup lang="ts">
// require style
import 'vue3-video-play/dist/style.css'
import { videoPlay } from 'vue3-video-play'
import {PropType, reactive, ref, shallowReactive, toRefs, watch} from "vue";
import { CreateComponentType } from '@/packages/index.d'
import {option as configOption} from "./config";
import {useChartDataFetch} from "@/hooks";
import {useChartEditStore} from "@/store/modules/chartEditStore/chartEditStore";


const props = defineProps({
  chartConfig: {
    type: Object as PropType<CreateComponentType>,
    required: true
  }
})

const { w, h } = toRefs(props.chartConfig.attr)
let option = shallowReactive({ ...configOption })

const vVideoStreamRef = ref(null)
useChartDataFetch(props.chartConfig, useChartEditStore, (newData: any) => {
  option = newData
})

const options = reactive({
  width: w + "px" , //视频宽度
  height: h + "px",
  src: option.dataset, //视频源
  type: 'm3u8', //视频类型
  muted: false, //是否静音
  webFullScreen: false, //是否全屏
  speed: false,
  autoPlay:true,
  control: false
})
console.log(options)
// 编辑更新
watch(
    () => props.chartConfig.option,
    (newData: any) => {
      option = newData
      if (!options) return
      options.src = option.dataset
    },
    {
      immediate: true,
      deep: true
    }
)
</script>

<template>
  <div>
    <videoPlay
        ref="vVideoStreamRef"
        crossOrigin="anonymous"
        v-bind="options"/>
  </div>
</template>
