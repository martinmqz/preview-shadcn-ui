import CardDemo from './Cards/card-01'
import CardWithBackground from './Cards/card-02'
import CreateAccountCard from './Cards/card-03'
import CardBanner from './Cards/card-04'
import PricingCard from './Cards/card-05'
import CardPost from './Cards/card-06'
import ProductCard from './Cards/card-07'
import TestimonialCard from './Cards/card-08'

const cards = [
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Default</div><CardDemo /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">With background</div><CardWithBackground /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Sign Up</div><CreateAccountCard /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Banner</div><CardBanner /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Pricing</div><PricingCard /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Post</div><CardPost /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Product</div><ProductCard /></div>,
  <div className="basis-1/3 p-4 min-w-100"><div className="grid-item__title">Testimonial</div><TestimonialCard /></div>
  ]

export default function DemoCards () {
  return (
    <>
      {
        cards.map(card => (
          card
        ))
      }
    </>
  )
}