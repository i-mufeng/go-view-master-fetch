import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'
export const VideoStreamConfig: ConfigType = {
    key: 'VideoStream',
    chartKey: 'VVideoStream',
    conKey: 'VCVideoStream',
    title: 'M3U8视频流',
    category: ChatCategoryEnum.MORE,
    categoryName: ChatCategoryEnumName.MORE,
    package: PackagesCategoryEnum.INFORMATIONS,
    chartFrame: ChartFrameEnum.COMMON,
    image: 'video.png'
}