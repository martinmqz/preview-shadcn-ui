import AccordionDemo from "./Accordions/accordion-01"
import AccordionOutlineDemo from "./Accordions/accordion-02"
import AccordionBoxDemo from "./Accordions/accordion-03"
import AccordionContainedDemo from "./Accordions/accordion-04"
import AccordionBoxContainedDemo from "./Accordions/accordion-05"
import AccordionTabsDemo from "./Accordions/accordion-06"
import AccordionHighlightActiveItemDemo from "./Accordions/accordion-07"
import AccordionMultipleOpenDemo from "./Accordions/accordion-08"
import AccordionDefaultOpenDemo from "./Accordions/accordion-09"
import AccordionIconDemo from "./Accordions/accordion-10"
import AccordionMediaContentDemo from "./Accordions/accordion-11"
import AccordionItemDisabledDemo from "./Accordions/accordion-12"


const accordions = [
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><AccordionDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Outline</div><AccordionOutlineDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Box</div><AccordionBoxDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Contained</div><AccordionContainedDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Box Contained</div><AccordionBoxContainedDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Tabs</div><AccordionTabsDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Highlight Active Item</div><AccordionHighlightActiveItemDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Multiple expanded at a time</div><AccordionMultipleOpenDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Expand Icon</div><AccordionDefaultOpenDemo  /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Icon</div><AccordionIconDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Media Content</div><AccordionMediaContentDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Disabled Item</div><AccordionItemDisabledDemo /></div>
]

export default function DemoAccordions () {
  return (
    <>
      {
        accordions.map(accordion => (
          accordion
        ))
      }
    </>
  )
}