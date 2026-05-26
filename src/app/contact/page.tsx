"use client";
import Forward from "../component/Forward";
import ContactInfo from "./ContactInfo";
import TopSection from "./TopSection";

const ContactPage = () => {
  return (
    <>
      <TopSection />
      <ContactInfo />
      <div className="bg-whiteColor w-full py-6">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full border border-borderColor overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d50045.2646515091!2d72.84073466182706!3d21.206592364102793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20No%20-%2013%20Snehmudra%20Soc%2C%20Kapodra%20Varachha%20Road%2C%20Surat%20Gujarat%20India%20395006!5e0!3m2!1sen!2sin!4v1779788809535!5m2!1sen!2sin"
              className="w-full"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Forward />
    </>
  );
};

export default ContactPage;
