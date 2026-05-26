"use client";
import SubscribeSection from "../component/SubscribeSection";

const RefundCancellationPage = () => {
  return (
    <div>
      <section className="relative w-full bg-[url('/mainBanner.jpg')] bg-cover bg-center bg-no-repeat h-[75px] md:h-[170px] lg:h-[214px] xl:h-[298px] 2xl:h-[382px]"></section>
      <div className="bg-lightGray w-full py-6 md:py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full">
            <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 mb-2 w-full">
              Refund And Cancellation Policy
            </h2>
            <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-3">
              If you see charges on your credit/debit card for purchases made or
              services available on the site, but you never created an account
              or signed up, please check with your family members or business
              colleagues authorized to make payments on your behalf, to confirm
              that they have not initiated the payment. If you are still unable
              to recognize the charge, please report the unauthorized purchase
              within 30 days of the transaction to your bank to enable
              NeoManthan Systems Private Limited to begin an investigation.
            </p>
            <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-3">
              Once an amount is debited from your credit/debit card or Bank
              account and the same value is reflected in your ID, there is no
              cancellation or refund allowed for such transactions. However, if
              in a transaction performed by you on the NeoManthan Platform,
              money has been debited from your card or bank account and a value
              is not reflected in your ID within 24 hours of the completion of
              the transaction, then you shall inform us by sending an e-mail to
              our support e-mail address mentioned on the ‘Contact Us’ page.
              Please include in the e-mail the following details – value,
              transaction date and request number.
            </p>
            <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-3">
              If it is found that money was debited to your credit/debit card or
              bank account without credit of the value, then you will be
              refunded the money within 21 working days from the date of receipt
              of your e-mail. All refunds will be credited to the original mode
              of payment.
            </p>
          </div>
          <div className="w-full">
            <ul className="list-disc pl-5">
              <li className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-2">
                All sales / BBPS Payments / Bill Payments / Mobile &amp; DTH
                Recharges are final with no refund or exchange allowed.
              </li>
              <li className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-2">
                Customer / Agent are responsible for the mobile number, DTH
                account number, utility consumer number, bank account number and
                details for Purchases / Settlements / Bill Payments / Recharges
                and all charges that result from those Purchases / Settlements /
                Bill Payments / Recharges. NeoManthan is not responsible for any
                Purchases / Settlements / Bill Payment / Recharges for an
                incorrect mobile number, DTH account number, utility
                identification number, and bank account number.
              </li>
              <li className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-2">
                However, if in a transaction performed by Customer on the Site,
                money has been charged to their card or bank account and a
                Purchase / Settlement / Bill Payments / Recharges are not
                successful within 72 hours of their completion of the
                transaction, then Customer may inform us by sending an email to
                our support email address mentioned on the Contact Us page.
              </li>
              <li className="text-textColor text-font16 font-normal text-start leading-6.75 w-full">
                Please include in the email the following details - the mobile
                number / DTH account number / Utility consumer number / bank
                account, operator name, Transaction value, Transaction date and
                Order Number. Instant shall investigate the incident and if it
                is found that money was debited to your credit/debit card or
                bank account without credit of the value, then you will be
                refunded the money within 21 working days from the date of
                receipt of your e-mail. All refunds will be credited to the
                original mode of payment.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SubscribeSection />
    </div>
  );
};

export default RefundCancellationPage;
