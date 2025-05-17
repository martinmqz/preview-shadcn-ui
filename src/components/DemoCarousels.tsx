import CarouselDemo from "./Carousels/carousel-01"
import CarouselWithMultipleSlides from "./Carousels/carousel-02"
import CarouselVertical from "./Carousels/carousel-03"
import SlideStatus from "./Carousels/carousel-04"
import CarouselWithPagination from "./Carousels/carousel-06"
import CarouselWithFooter from "./Carousels/carousel-07"
import CarouselWithProgress from "./Carousels/carousel-08"
import CarouselWithThumbs from "./Carousels/carousel-09"
import SlideOpacity from "./Carousels/carousel-10"
import SlideScale from "./Carousels/carousel-11"

const carousels = [
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><CarouselDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Multiple slides</div><CarouselWithMultipleSlides /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Vertical</div><CarouselVertical /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Slide Status</div><SlideStatus /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Slide Status 2</div><SlideStatus /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Pagination</div><CarouselWithPagination /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Footer</div><CarouselWithFooter /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Progress</div><CarouselWithProgress /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Thumbs</div><CarouselWithThumbs /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Opacity</div><SlideOpacity /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Scale</div><SlideScale /></div>
  ]

export default function DemoCarousels () {
  return (
    <>
    {
      carousels.map(carousel => (
        carousel
      ))
    }
    </>
  )
}