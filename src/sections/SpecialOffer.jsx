import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-sm:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Special Offer" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer

        </h2>
        <p className="mt-4 max-w-lg info-text">
          Welcome to the world of incredible deals and unbeatable savings at Shoetopia! We believe that exceptional footwear shouldn't come with an extravagant price tag. That's why we're thrilled to present our exclusive special offer section, where your dream shoes meet irresistible prices.
        </p>

        <p className="mt-6 max-w-lg info-text">
          Explore the special offers now and find your perfect pair at a price that's just as appealing as the shoes themselves.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer