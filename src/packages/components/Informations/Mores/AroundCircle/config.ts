import {PublicConfigClass} from "@/packages/public";
import { CreateComponentType } from '@/packages/index.d'
import {AroundCircleConfig} from "./index";
import cloneDeep from "lodash/cloneDeep";

export const option = {
    // 内容
    datasetDetail: "",
    dataset: "",
    mainCicleColor:'#03A6E0CC',
    subCicleColor: '#03A6E07F',
    textColorFirst: '#2cd05b',
    textSizeFirst: 20,
    textColorSecond: '#37b8c3',
    textSizeSecond: 16,
}

export default class Config extends PublicConfigClass implements CreateComponentType {
    public key = AroundCircleConfig.key
    public chartConfig = cloneDeep(AroundCircleConfig)
    public option = cloneDeep(option)
}
