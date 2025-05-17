import TooltipDemo from "./Tooltips/tooltip-01"
import WithArrowTooltipDemo from "./Tooltips/tooltip-02"
import TooltipDirectionsDemo from "./Tooltips/tooltip-03"
import TooltipWithDisabledHoverableContentDemo from "./Tooltips/tooltip-04"
import WithDelayTooltipDemo from "./Tooltips/tooltip-05"
import WithSkipDelayTooltipDemo from "./Tooltips/tooltip-06"
import TooltipPortalDemo from "./Tooltips/tooltip-07"

const tooltips = [
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><TooltipDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With arrow</div><WithArrowTooltipDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Directions</div><TooltipDirectionsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Disable Hoverable Content</div><TooltipWithDisabledHoverableContentDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With delay</div><WithDelayTooltipDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With skip delay</div><WithSkipDelayTooltipDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Portal</div><TooltipPortalDemo /></div>,
]

export default function DemoTooltips () {
  return (
    <>
      {
        tooltips.map(tooltip => (
          tooltip
        ))
      }
    </>
  )
}