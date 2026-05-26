"use client";
import SubscribeSection from "../component/SubscribeSection";

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="relative w-full bg-[url('/mainBanner.jpg')] bg-cover bg-center bg-no-repeat h-[75px] md:h-[170px] lg:h-[214px] xl:h-[298px] 2xl:h-[382px]"></section>
      <div className="bg-lightGray w-full py-6 md:py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full">
            <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 mb-2 w-full">
              Privacy Policy
            </h2>
            <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full mb-3">
              NeoManthan Systems Private Limited is committed to respecting and
              protecting the privacy of its users and business associates when
              they use our website and services. This Privacy Policy explains
              how we collect, use, and protect the personal information shared
              with us.
            </p>

            <div className="w-full mb-4">
              <h3 className="text-textColor text-font20 leading-8 font-semibold capitalize mb-1">
                Definition and Description
              </h3>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full">
                For the purpose of this Privacy Policy, personal information
                includes any information that can identify or be linked to a
                specific user. This may include name, address, mailing address,
                email ID, telephone number, mobile number, company details,
                payment information, and any other information voluntarily
                provided by users while using the services of NeoManthan Systems
                Private Limited.
              </p>
            </div>

            <div className="w-full mb-4">
              <h3 className="text-textColor text-font20 leading-8 font-semibold capitalize mb-1">
                Exception to Privacy Policy
              </h3>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full">
                Information shared by users or business associates in public
                areas such as blogs, forums, discussion boards, social
                networking sites, live chats, comments, classifieds, or
                community platforms shall not be considered confidential or
                personal information. Such information is not protected under
                this Privacy Policy.
              </p>
            </div>

            <div className="w-full mb-4">
              <h3 className="text-textColor text-font20 leading-8 font-semibold capitalize mb-1">
                Use of Personal Information and Data
              </h3>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full">
                NeoManthan Systems Private Limited uses the information provided
                by users and business associates to deliver requested services,
                respond to inquiries, resolve issues, improve user experience,
                and provide updates regarding services and offers. The
                information may also be used for security purposes, fraud
                prevention, legal compliance, and enforcing terms and
                conditions.
              </p>
            </div>

            <div className="w-full mb-4">
              <h3 className="text-textColor text-font20 leading-8 font-semibold capitalize mb-1">
                Disclosure of Information Data
              </h3>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full">
                NeoManthan Systems Private Limited may share personal or
                confidential information with third-party organizations only
                when necessary to provide services, complete legitimate business
                transactions, comply with legal requirements, or when permitted
                by law. In all other situations, user information will remain
                private and confidential.
              </p>
            </div>

            <div className="w-full mb-4">
              <h3 className="text-textColor text-font20 leading-8 font-semibold capitalize mb-1">
                Observation and Implementation of Reasonable Security Practices
              </h3>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full">
                NeoManthan Systems Private Limited takes reasonable security
                measures to maintain the confidentiality and safety of user
                information. Access to personal data is limited to authorized
                persons only, and employees are trained to handle information
                securely and responsibly.
              </p>
            </div>

            <div className="w-full mb-4">
              <h3 className="text-textColor text-font20 leading-8 font-semibold capitalize mb-1">
                Links to Other Websites
              </h3>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full mb-2">
                Our website may contain links to third-party websites. Once
                users leave our website, NeoManthan Systems Private Limited is
                not responsible for the privacy practices or content of external
                websites. Users are encouraged to review the privacy policies of
                such websites before sharing any personal information.
              </p>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full">
                Users are solely responsible for maintaining the confidentiality
                of their account information, login credentials, and passwords.
              </p>
            </div>

            <div className="w-full">
              <h3 className="text-textColor text-font20 leading-8 font-semibold capitalize mb-1">
                Privacy Policy Updates
              </h3>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full mb-2">
                NeoManthan Systems Private Limited reserves the right to modify
                or update this Privacy Policy whenever necessary. Any changes or
                updates will be published on our website.
              </p>
              <p className="text-textColor text-font16 font-normal text-start leading-6.5 w-full">
                For any questions regarding this Privacy Policy, please contact
                us through our website: NeoManthan Systems Private Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
    </>
  );
};

export default PrivacyPolicyPage;
