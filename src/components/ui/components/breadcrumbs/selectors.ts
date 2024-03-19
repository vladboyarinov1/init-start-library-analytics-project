import { RootState } from '@/app/store'

export const breadCrumbsUrl = (state: RootState) => state.breadCrumbs.breadcrumbPath
