import TabsDemo from "./Tabs/tabs-01"
import TabsUnderlinedDemo from "./Tabs/tabs-02"
import TabsSeparatedDemo from "./Tabs/tabs-03"
import TabsBorderedDemo from "./Tabs/tabs-04"
import TabsBoxDemo from "./Tabs/tabs-05"
import TabsBootstrapDemo from "./Tabs/tabs-06"
import TabsIconDemo from "./Tabs/tabs-07"
import TabsMobileNavigationDemo from "./Tabs/tabs-08"
import TabsWithBadgeDemo from "./Tabs/tabs-09"
import TabsSharpDemo from "./Tabs/tabs-10"
import TabsShadowDemo from "./Tabs/tabs-11"
import TabSkewedDemo from "./Tabs/tabs-12"
import VerticalTabsDemo from "./Tabs/tabs-13"
import VerticalLeftBorderedTabsDemo from "./Tabs/tabs-14"
import VerticalSeparatedTabsDemo from "./Tabs/tabs-15"
import VerticalSharpTabsDemo from "./Tabs/tabs-16"
import VerticalBorderedTabs from "./Tabs/tabs-17"
import AnimatedTabsDemo from "./Tabs/tabs-18"

const tabs = [
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><TabsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Underlined</div><TabsUnderlinedDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Separated</div><TabsSeparatedDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Bordered</div><TabsBorderedDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Box</div><TabsBoxDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Bootstrap</div><TabsBootstrapDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Icon</div><TabsIconDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Mobile Navigation</div><TabsMobileNavigationDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With badge</div><TabsWithBadgeDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Sharp</div><TabsSharpDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Shadow</div><TabsShadowDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Skewed</div><TabSkewedDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Vertical</div><VerticalTabsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Vertical Left Bordered</div><VerticalLeftBorderedTabsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Vertical Separated</div><VerticalSeparatedTabsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Vertical Sharp</div><VerticalSharpTabsDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Vertical Bordered</div><VerticalBorderedTabs /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Animated Content</div><AnimatedTabsDemo /></div>
]

export default function Tabs () {
  return (
    <>
      {
        tabs.map(tab => (
          tab
        ))
      }
    </>
  )
}