import { commercialMepOutline } from './commercialMep'
import { logisticsOutline, manufacturingOutline, oeeOutline, predictiveMaintenanceOutline, warehouseOutline } from './industrial'
import { aiAgentsOutline, bpmOutline, customSoftwareOutline, mobileAppsOutline, websitesOutline } from './smb'
import { tourismOutline, travelAgencyOutline } from './tourism'
import { fieldServiceOutline, hvacOutline } from './trades'
import type { PageOutline } from './types'

/** Every page outline; looked up by path for the FAQPage JSON-LD. */
export const OUTLINES: PageOutline[] = [
  fieldServiceOutline,
  hvacOutline,
  commercialMepOutline,
  manufacturingOutline,
  predictiveMaintenanceOutline,
  oeeOutline,
  logisticsOutline,
  warehouseOutline,
  tourismOutline,
  travelAgencyOutline,
  customSoftwareOutline,
  aiAgentsOutline,
  bpmOutline,
  websitesOutline,
  mobileAppsOutline,
]
