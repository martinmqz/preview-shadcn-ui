import SpinnerDemo from "./Spinners/spinner-01"
import SpinnerCircleDemo from "./Spinners/spinner-02"
import SpinnerPinwheelDemo from "./Spinners/spinner-03"
import SpinnerColorsDemo from "./Spinners/spinner-04"
import SpinnerSizesDemo from "./Spinners/spinner-05"
import SwirlingEffectSpinner from "./Spinners/spinner-06"
import SpinnerCircle1 from "./Spinners/spinner-07"
import SpinnerCircle2 from "./Spinners/spinner-08"
import SpinnerCircle3 from "./Spinners/spinner-09"
import SpinnerCircle4 from "./Spinners/spinner-10"
import SpinnerCircle5 from "./Spinners/spinner-11"

const spinners = [
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><SpinnerDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Circle</div><SpinnerCircleDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Pinwheel</div><SpinnerPinwheelDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Colors</div><SpinnerColorsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Sizes</div><SpinnerSizesDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Swirling Effect</div><SwirlingEffectSpinner /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Spinner Circle 1</div><SpinnerCircle1 /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Spinner Circle 2</div><SpinnerCircle2 /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Spinner Circle 3</div><SpinnerCircle3 /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Spinner Circle 4</div><SpinnerCircle4 /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Spinner Circle 5</div><SpinnerCircle5 /></div>,
]

export default function DemoSpinners () {
  return (
    <>
      {
        spinners.map(spinner => (
          spinner
        ))
      }
    </>
  )
}