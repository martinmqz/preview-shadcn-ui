import DropdownMenuDemo from "./DropdownMenus/dropdown-menu-01"
import DropdownMenuWithIcon from "./DropdownMenus/dropdown-menu-02"
import DropdownMenuWithCheckboxes from "./DropdownMenus/dropdown-menu-03"
import DropdownMenuWithRadioGroup from "./DropdownMenus/dropdown-menu-04"
import DropdownMenuWithSubMenu from "./DropdownMenus/dropdown-menu-05"
import DropdownMenuWithShortcuts from "./DropdownMenus/dropdown-menu-06"
import ComplexDropdownMenu from "./DropdownMenus/dropdown-menu-07"
import WorkspaceSwitcher from "./DropdownMenus/dropdown-menu-08"

const dropdownMenus = [
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><DropdownMenuDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon</div><DropdownMenuWithIcon /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Checkboxes</div><DropdownMenuWithCheckboxes /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Radio Group</div><DropdownMenuWithRadioGroup /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Sub Menu</div><DropdownMenuWithSubMenu /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Shortcuts</div><DropdownMenuWithShortcuts /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Complex Menu</div><ComplexDropdownMenu /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Workspace Switcher</div><WorkspaceSwitcher /></div>
]

export default function DemoDropdownMenus () {
  return (
    <>
      {
        dropdownMenus.map(dropdownMenu => (
          dropdownMenu
        ))
      }
    </>
  )
}