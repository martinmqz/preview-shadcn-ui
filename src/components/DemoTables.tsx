import TableDemo from "./Tables/table-01"
import BorderedTableDemo from "./Tables/table-02"
import RoundedCornersTableDemo from "./Tables/table-04"
import TableWithPaginationDemo from "./Tables/table-05"
import StickyHeaderTableDemo from "./Tables/table-06"
import StickyColumnsTableDemo from "./Tables/table-07"
import TableOverflowScrollDemo from "./Tables/table-08"
import DataTableDemo from "./Tables/table-09"
import DataTableDensityDemo from "./Tables/table-10"
import DataTableColumnsVisibilityDemo from "./Tables/table-11"

const tables = [
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><TableDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Bordered</div><BorderedTableDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Striped rows</div><BorderedTableDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Rounded corners</div><RoundedCornersTableDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With pagination</div><TableWithPaginationDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Sticky header</div><StickyHeaderTableDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Sticky columns</div><StickyColumnsTableDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Overflow scroll</div><TableOverflowScrollDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Data Table</div><DataTableDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Data Table Density</div><DataTableDensityDemo /></div>,
<div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Columns Visibility</div><DataTableColumnsVisibilityDemo /></div>,
]

export default function DemoTables () {
  return (
    <>
      {
        tables.map(table => (
          table
        ))
      }
    </>
  )
}