import {PublicConfigClass} from "@/packages/public";
import { CreateComponentType } from '@/packages/index.d'
import {VideoStreamConfig} from "@/packages/components/Informations/Mores/VideoStream/index";
import cloneDeep from "lodash/cloneDeep";

export const option = {
    // 视频路径
    dataset: "",
    // 静音
    muted: true,
    // 适应方式
    fit: 'contain',
    // 圆角
    borderRadius: 10
}

export default class Config extends PublicConfigClass implements CreateComponentType {
    public key = VideoStreamConfig.key
    public chartConfig = cloneDeep(VideoStreamConfig)
    public option = cloneDeep(option)
}
