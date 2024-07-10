import "./imprint.css";


export default function Imprint() {
  return (
    <div className="md:mx-auto md:max-w-3xl px-6 w-full py-6 text-sm font-normal">
      <h1 className="text-2xl font-bold mb-5">Imprint</h1>
      <h3 className="text-base font-medium mb-2">Information according to § 5 TMG (Telemediengesetz):</h3>
      <h2 className="text-lg font-medium mb-2">Contact Information:</h2>
      <p>Tjark Prokoph</p>
      <p>Varnhagenstraße 11</p>
      <p>10439, Berlin</p>
      <p className="mb-3">Germany</p>
      <p>Email: <a href="mailto:info@tjarkprokoph.com">info@tjarkprokoph.com</a></p>
      <p className="mb-3">Website: <a href="https://www.tjarkprokoph.com">https://www.tjarkprokoph.com</a></p>
      <h2 className="text-lg font-medium mb-2">Responsible for Content according to § 55 Abs. 2 RStV (Rundfunkstaatsvertrag):</h2>
      <p>Tjark Prokoph</p>
      <p>Varnhagenstraße 11</p>
      <p>10439, Berlin</p>
      <p className="mb-3">Germany</p>
      <h2 className="text-lg font-medium mb-2">Dispute Resolution:</h2>
      <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>.</p>
      <p className="mb-3">Our email address can be found above in the contact information. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
      <h2 className="text-lg font-medium mb-2">Disclaimer:</h2>
      <h3 className="text-base font-medium mb-2">Liability for Content </h3>
      <p className="mb-3">As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs.1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored information or to search for circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time we become aware of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately.</p>
      <h3 className="text-base font-medium mb-2">Liability for Links </h3>
      <p className="mb-3">Our offer contains links to external websites of third parties over whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. A permanent control of the contents of the linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of such violations, we will remove such links immediately.</p>
      <h3 className="text-base font-medium mb-2">Copyright</h3>
      <p>The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of such violations, we will remove such content immediately.</p>
    </div>
  );
};