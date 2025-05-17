import BreadcrumbsDemo from "./Breadcrumbs/breadcrumb-01"
import BreadcrumbsWithSlashSeparator from "./Breadcrumbs/breadcrumb-02"
import BreadcrumbsWithChevronsSeparator from "./Breadcrumbs/breadcrumb-03"
import BreadcrumbsWithDotSeparator from "./Breadcrumbs/breadcrumb-04"
import BreadcrumbsWithIcon from "./Breadcrumbs/breadcrumb-06"
import BreadcrumbsWithIconAndLabel from "./Breadcrumbs/breadcrumb-07"
import BreadcrumbsWithBackground from "./Breadcrumbs/breadcrumb-09"
import BreadcrumbTabActiveDemo from "./Breadcrumbs/breadcrumb-10"
import BreadcrumbTabsDemo from "./Breadcrumbs/breadcrumb-11"
import BreadcrumbTabsOutline from "./Breadcrumbs/breadcrumb-12"
import BreadcrumbWithDropdown from "./Breadcrumbs/breadcrumb-13"
import BreadcrumbCollapsed from "./Breadcrumbs/breadcrumb-14"
import BreadcrumbsSteps from "./Breadcrumbs/breadcrumb-15"

const breadcrumbs = [
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><BreadcrumbsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Slash Separator</div><BreadcrumbsWithSlashSeparator /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Chevrons Separator</div><BreadcrumbsWithChevronsSeparator /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Dot Separator</div><BreadcrumbsWithDotSeparator /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon</div><BreadcrumbsWithIcon /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon 2</div><BreadcrumbsWithIcon /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon and Label</div><BreadcrumbsWithIconAndLabel /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon and Label 2</div><BreadcrumbsSteps /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Background</div><BreadcrumbsWithBackground /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Tab Active</div><BreadcrumbTabActiveDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Tabs</div><BreadcrumbTabsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Tabs Outline</div><BreadcrumbTabsOutline /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Dropdown</div><BreadcrumbWithDropdown /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Collapsed</div><BreadcrumbCollapsed /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Steps</div><BreadcrumbsSteps /></div>
]

export default function DemoBreadcrumbs () {
  return (
    <>
      {
        breadcrumbs.map(breadcrumb => (
          breadcrumb
        ))
      }
    </>
  )
}