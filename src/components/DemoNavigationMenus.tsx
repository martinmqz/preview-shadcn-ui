import NavigationMenuDemo from "./NavigationMenus/navigation-menu-01"
import NavigationMenuWithIcon from "./NavigationMenus/navigation-menu-02"
import NavigationMenuWithDropdown from "./NavigationMenus/navigation-menu-03"
import NavigationMenuWithActiveItem from "./NavigationMenus/navigation-menu-04"
import RichNavigationMenu from "./NavigationMenus/navigation-menu-06"
import NavigationMenuMobile from "./NavigationMenus/navigation-menu-08"

const navMenus = [
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><NavigationMenuDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon</div><NavigationMenuWithIcon /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Dropdown</div><NavigationMenuWithDropdown /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Active Item</div><NavigationMenuWithActiveItem /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Rich Navigation Menu</div><RichNavigationMenu /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Icon</div><NavigationMenuWithIcon /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Mobile Navigation</div><NavigationMenuMobile /></div>
]

export default function DemoNavMenus () {
  return (
    <>
      {
        navMenus.map(navMenu => (
          navMenu
        ))
      }
    </>
  )
}