import { RootState } from '@/common/types/common-types'

export const breadCrumbsUrl = (state: RootState) => state.breadCrumbs.breadcrumbPath
