<script setup lang="ts">
import {PropType, shallowReactive, toRefs} from "vue";
import { CreateComponentType } from '@/packages/index.d'
import {option as configOption} from "./config";

const props = defineProps({
  chartConfig: {
    type: Object as PropType<CreateComponentType>,
    required: true
  }
})

const { w, h } = toRefs(props.chartConfig.attr)
let option = shallowReactive({ ...configOption })

</script>

<template>
  <div>
    <dv-decoration-9 :color="option.color">
      {{option.dataset}}
    </dv-decoration-9>
  </div>
</template>