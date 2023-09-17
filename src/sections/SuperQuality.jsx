import Button from "../components/Button"
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red"> Quality </span>
            Shoes

          </h2>
          <p className="mt-4 max-w-lg info-text">
            At Shoetopia, we pride ourselves on being more than just a footwear brand; we are architects of comfort, style, and lasting impressions. Our commitment to excellence is unwavering, and our dedication to providing you with super quality shoes is what sets us apart.
          </p>

          <p className="mt-6 max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <div className="mt-11">
            <Button label="View Details"/>
          </div>
      </div>

      <div className="flex-1 flex justify-center items-center"> 
        <img src={shoe8} alt="shoe 08" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality