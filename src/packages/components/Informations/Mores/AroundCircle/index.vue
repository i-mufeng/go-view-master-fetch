<script setup lang="ts">
import {PropType, shallowReactive, toRefs, ref, watch, reactive} from "vue";
import { CreateComponentType } from '@/packages/index.d'
import {option as configOption} from "./config";
import {fade, getUUID} from "@/utils";
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


const defaultColor = ref(['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)']);

const dur = ref(3)

const id = getUUID()

const polygonId = ref(`decoration-9-polygon-${id}`)


watch(
    () => props.chartConfig.option,
    (newData: any) => {
      option = newData
    },
    {
      immediate: true,
      deep: true
    }
)
const {
  datasetDetail,
  dataset,
  mainCicleColor,
  subCicleColor,
  textColorFirst,
  textSizeFirst,
  textColorSecond,
  textSizeSecond
} = toRefs(props.chartConfig.option);
</script>

<template>
  <div class="dv-decoration-9" :ref="ref">
    <svg :width="`${w}px`" :height="`${h}px`" :style="`transform:scale(${w/100},${w/100});`">
      <defs>
        <polygon :id="polygonId" points="15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5" />
      </defs>

      <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          :stroke="mainCicleColor || defaultColor[0]"
          stroke-width="10"
          stroke-dasharray="80, 100, 30, 100"
      >
        <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50;360 50 50"
            :dur="`${dur}s`"
            repeatCount="indefinite"
        />
      </circle>

      <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          :stroke="subCicleColor || defaultColor[1]"
          stroke-width="6"
          stroke-dasharray="50, 66, 100, 66"
      >
        <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50;-360 50 50"
            :dur="`${dur}s`"
            repeatCount="indefinite"
        />
      </circle>

      <circle
          cx="50"
          cy="50"
          r="38"
          fill="transparent"
          :stroke="fade(subCicleColor || defaultColor[1], 30)"
          stroke-width="1"
          stroke-dasharray="5, 1"
      />

      <use
          v-for="(foo, i) in new Array(20).fill(0)"
          :key="i"
          :xlink:href="`#${polygonId}`"
          :stroke="mainCicleColor || defaultColor[0]"
          :fill="Math.random() > 0.4 ? 'transparent' : option.mainCicleColor"
      >
        <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50;360 50 50"
            :dur="`${dur}s`"
            :begin="`${i * dur / 20}s`"
            repeatCount="indefinite"
        />
      </use>

      <circle
          cx="50"
          cy="50"
          r="26"
          fill="transparent"
          :stroke="fade(subCicleColor || defaultColor[1], 30)"
          stroke-width="1"
          stroke-dasharray="5, 1"
      />
    </svg>


    <slot>
      <div class="text-area">
        <div  class="text-style text-first">
          {{ datasetDetail   }}
        </div>
        <div  class="text-style text-second">
          {{ dataset }}
        </div>
      </div>
    </slot>
  </div>
</template>

<style>
.dv-decoration-9 {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dv-decoration-9 svg {
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin: left top;
}
.text-area .text-style {
  font-weight: 1000;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.text-area .text-first {
  font-size: v-bind(textSizeFirst + 'px');
  color: v-bind(textColorFirst);
  text-shadow: 0 0 2px v-bind(textColorFirst);
}
.text-area .text-second {
  font-size: v-bind(textSizeSecond + 'px');
  color: v-bind(textColorSecond);
  text-shadow: 0 0 2px v-bind(textColorSecond);

}
</style>