export { OrgAnalysis } from './ui/org-analysis'
import {
  asyncActions as orgAnalysisActions,
  slice as orgAnalysisSlice,
} from './model/org-analysis-slice'

const orgAnalysisSliceActions = {
  ...orgAnalysisActions,
  ...orgAnalysisSlice.actions,
}

const orgAnalysisReducer = orgAnalysisSlice.reducer

export { orgAnalysisReducer, orgAnalysisSliceActions }
