import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'
export const AroundCircleConfig: ConfigType = {
    key: 'AroundCircle',
    chartKey: 'VAroundCircle',
    conKey: 'VCAroundCircle',
    title: '环绕文字',
    category: ChatCategoryEnum.MORE,
    categoryName: ChatCategoryEnumName.MORE,
    package: PackagesCategoryEnum.INFORMATIONS,
    chartFrame: ChartFrameEnum.COMMON,
    image: 'photo.png'
}