import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  return (
    <>
    <section className="bg-base-100 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Save hours of repetitive code and ship faster!
          </h2>
        </div>

        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table pricing-table-id="prctbl_1OOOr6KHip0NxUZFUBqBtJrQ"
          publishable-key="pk_live_51MOjsBKHip0NxUZFcFHPjh6aIbvJ5gllT8ueDhEp1e30BwQbvfm61Sls5GJkSf07m6Ris2Olui3TashgCgm175fe00QAEVgpuo">
        </stripe-pricing-table>

      </div>
    </section>
    </>
  );
};

export default Pricing;
