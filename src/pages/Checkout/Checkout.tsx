import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import fieldsetData from "../../data/fieldsets";
import { nanoid } from "nanoid";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useCart } from "../../context/CartContext";
import { CartItem } from "../../components/CartModal";
import { ConfirmationModal, Fieldset, Footer, Total } from "../../components";

const Checkout = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const SHIPPING = 50;
  const VAT_RATE = 0.2;
  const VAT = getCartTotal() * VAT_RATE;
  const GRAND_TOTAL = getCartTotal() + SHIPPING;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => setFormSubmitted(true);

  const fieldsetElements = fieldsetData.map(({ legend, fields }) => (
    <Fieldset
      key={legend}
      legend={legend}
      fields={fields}
      register={register}
      errors={errors}
    />
  ));

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={nanoid()} item={item} options={{ counter: false }} />
  ));

  useScrollToTop();

  return (
    <>
      {formSubmitted && <ConfirmationModal grandTotal={GRAND_TOTAL} />}
      <div className="bg-alabaster">
        <main
          className={`
            gap-0 pb-24
            md:max-w-[50rem] md:pb-[7.25rem] md:pt-8
            lg:max-w-[69.375rem] lg:px-0 lg:pb-[8.8125rem] lg:pt-[4.9375rem]`}
        >
          <button
            type="button"
            className={`
              mb-6 mt-4 self-start text-base font-medium leading-relaxed opacity-50 hover:underline
              lg:mb-[2.375rem]`}
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <form
            className={`
              flex flex-col gap-8
              lg:flex-row lg:justify-center`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <section
              className={`
                py- flex flex-col gap-8 rounded-lg bg-white px-6 py-8
                md:gap-[3.3125rem]
                lg:w-[45.625rem] lg:px-12 lg:pb-12 lg:pt-[3.375rem]`}
            >
              <h1
                className={`
                  text-[1.75rem] font-bold uppercase leading-[2.375rem] tracking-[0.0625rem]
                  md:text-[2rem]`}
              >
                Checkout
              </h1>
              {fieldsetElements}
            </section>
            <section
              className={`
                mb-auto rounded-lg bg-white px-6 py-8
                lg:w-[21.875rem]`}
            >
              <h2 className="text-lg font-bold uppercase leading-6 tracking-wider">
                Summary
              </h2>
              <div className="my-[1.9375rem] flex flex-col gap-6">
                {cartItemElements}
              </div>
              <div className="flex flex-col gap-2">
                <Total label={"Total"} amount={getCartTotal()} type="summary" />
                <Total label={"Shipping"} amount={SHIPPING} type="summary" />
                <Total label={"VAT (Included)"} amount={VAT} type="summary" />
                <Total
                  label={"Grand Total"}
                  amount={GRAND_TOTAL}
                  type="summary"
                />
              </div>
              <button
                type="submit"
                className="btn w-full bg-[#d87d4a] text-white hover:bg-[#FBAF85]"
              >
                Continue & Pay
              </button>
            </section>
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
