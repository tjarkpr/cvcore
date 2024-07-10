import "./data_protection.css";


export default function DataProtection() {
  return (
    <div className="md:mx-auto md:max-w-3xl px-6 w-full py-6 text-sm font-normal">
      <h1 className="text-2xl font-bold mb-5">Privacy Policy</h1>
      <p className="mb-3">We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
      <h2 className="text-lg font-medium mb-2">Controller for Data Protection:</h2>
      <p>Tjark Prokoph</p>
      <p>Varnhagenstraße 11</p>
      <p>10439, Berlin</p>
      <p className="mb-3">Germany</p>
      <p className="mb-3">Email: <a href="mailto:info@tjarkprokoph.com">info@tjarkprokoph.com</a></p>
      <h2 className="text-lg font-medium mb-2">Collection and Storage of Personal Data and the Nature and Purpose of Their Use:</h2>
      <ol>
        <li className="list-none">
          <h3 className="text-base font-medium mb-2">1. When Visiting the Website</h3>
          <p>When you visit our website <a href="https://www.tjarkprokoph.com">https://www.tjarkprokoph.com</a>, the browser used on your device automatically sends information to the server of our website. This information is temporarily stored in a log file. The following information is collected without your intervention and stored until automated deletion:</p>
          <ul className="list-disc list-inside">
            <li>IP address of the requesting computer,</li>
            <li>Date and time of access,</li>
            <li>Name and URL of the retrieved file,</li>
            <li>Website from which access is made (referrer URL),</li>
            <li>Browser used and, if applicable, the operating system of your computer as well as the name of your access provider.</li>
          </ul>
          <p>The mentioned data are processed by us for the following purposes:</p>
          <ul className="list-disc list-inside">
            <li>Ensuring a smooth connection setup of the website,</li>
            <li>Ensuring comfortable use of our website,</li>
            <li>Evaluation of system security and stability as well as</li>
            <li>For other administrative purposes.</li>
          </ul>
          <p className="mb-3">The legal basis for data processing is Art. 6(1)(f) GDPR. Our legitimate interest follows from the data collection purposes listed above. Under no circumstances do we use the collected data for the purpose of drawing conclusions about your person.</p>
        </li>
        <li>
          <h3 className="text-base font-medium mb-2">2. Data Transfer</h3>
          <p>Your personal data will not be transferred to third parties for purposes other than those listed below. We only share your personal data with third parties if:</p>
          <ul className="list-disc list-inside mb-3">
            <li>You have given your explicit consent according to Art. 6(1)(a) GDPR,</li>
            <li>The transfer is necessary for the performance of a contract with you according to Art. 6(1)(b) GDPR,</li>
            <li>The transfer is necessary for compliance with a legal obligation according to Art. 6(1)(c) GDPR, or</li>
            <li>The transfer is necessary for the establishment, exercise, or defense of legal claims according to Art. 6(1)(f) GDPR and there is no reason to assume that you have an overriding interest in not disclosing your data.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-base font-medium mb-2">3. Your Rights</h3>
          <p>You have the right:</p>
          <ul className="list-disc list-inside mb-3">
            <li>To request information about your personal data processed by us according to Art. 15 GDPR. In particular, you can request information about the purposes of processing, the category of personal data, the categories of recipients to whom your data has been or will be disclosed, the planned storage period, the existence of a right to rectification, erasure, restriction of processing or objection, the existence of a right to lodge a complaint, the source of your data if it was not collected by us, and the existence of automated decision-making including profiling and, if applicable, meaningful information about their details;</li>
            <li>To immediately request the correction of incorrect or complete personal data stored by us according to Art. 16 GDPR;</li>
            <li>To request the deletion of your personal data stored by us according to Art. 17 GDPR, unless the processing is necessary for exercising the right of freedom of expression and information, for compliance with a legal obligation, for reasons of public interest or for the establishment, exercise or defense of legal claims;</li>
            <li>To request the restriction of the processing of your personal data according to Art. 18 GDPR, insofar as the accuracy of the data is contested by you, the processing is unlawful, but you oppose its erasure, and we no longer need the data, but you need it for the establishment, exercise or defense of legal claims, or you have objected to processing according to Art. 21 GDPR;</li>
            <li>To receive your personal data, which you have provided to us, in a structured, commonly used and machine-readable format or to request the transfer to another controller according to Art. 20 GDPR;</li>
            <li>To revoke your consent at any time according to Art. 7(3) GDPR. As a result, we are no longer allowed to continue the data processing based on this consent for the future;</li>
            <li>To lodge a complaint with a supervisory authority according to Art. 77 GDPR. As a rule, you can contact the supervisory authority of your usual place of residence or workplace or our office.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-base font-medium mb-2">4. Right to Object</h3>
          <p className="mb-3">If your personal data is processed on the basis of legitimate interests according to Art. 6(1)(f) GDPR, you have the right to object to the processing of your personal data according to Art. 21 GDPR, provided there are reasons for this arising from your particular situation or the objection is directed against direct marketing. In the latter case, you have a general right to object, which we will implement without specifying a particular situation.</p>
        </li>
        <li>
          <h3 className="text-base font-medium mb-2">5. Data Security</h3>
          <p className="mb-3">We use appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction, or unauthorized access by third parties. Our security measures are continuously improved in line with technological developments.</p>
        </li>
        <li>
          <h3 className="text-base font-medium mb-2">6. Updating and Changing this Privacy Policy</h3>
          <p>This privacy policy is currently valid and has the status of 01. June 2024. Due to the further development of our website and offers above or due to changed legal or official requirements, it may be necessary to change this privacy policy.</p>
        </li>
      </ol>
    </div>
  );
};