import {PublicConfigClass} from "@/packages/public";
import { CreateComponentType } from '@/packages/index.d'
import {AroundCircleConfig} from "./index";
import cloneDeep from "lodash/cloneDeep";

export const option = {
    // 内容
    dataset: "",
    color:['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)'],
}

export default class Config extends PublicConfigClass implements CreateComponentType {
    public key = AroundCircleConfig.key
    public chartConfig = cloneDeep(AroundCircleConfig)
    public option = cloneDeep(option)
}
