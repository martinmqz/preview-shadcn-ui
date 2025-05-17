import PaginationDemo from "./Paginations/pagination-01"
import PaginationWithPrimaryButton from "./Paginations/pagination-02"
import PaginationWithSecondaryButton from "./Paginations/pagination-03"
import PaginationWithRoundedButton from "./Paginations/pagination-04"
import PaginationWithIcon from "./Paginations/pagination-05"
import PaginationWithFirstAndLastPageNavigation from "./Paginations/pagination-06"
import PaginationBordered from "./Paginations/pagination-07"
import PaginationTabs from "./Paginations/pagination-08"
import PaginationTabsSecondary from "./Paginations/pagination-09"
import PaginationWithIconAndLabel from "./Paginations/pagination-10"
import PaginationNumberless from "./Paginations/pagination-11"
import PaginationWithEllipsis from "./Paginations/pagination-13"
import TablePagination from "./Paginations/pagination-14"

const paginations = [
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><PaginationDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Primary Button</div><PaginationWithPrimaryButton /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Secondary Button</div><PaginationWithSecondaryButton /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Rounded Button</div><PaginationWithRoundedButton /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon</div><PaginationWithIcon /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">First and Last Page Buttons</div><PaginationWithFirstAndLastPageNavigation /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Bordered</div><PaginationBordered /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Tabs</div><PaginationTabs /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Tabs Secondary</div><PaginationTabsSecondary /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With Icon and Label</div><PaginationWithIconAndLabel /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Numberless Pagination</div><PaginationNumberless /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Numberless with Text</div><PaginationNumberless /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With ellipsis</div><PaginationWithEllipsis /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Table Pagination</div><TablePagination /></div>
]

export default function DemoPaginations () {
  return (
    <>
      {
        paginations.map(pagination => (
          pagination
        ))
      }
    </>
  )
}