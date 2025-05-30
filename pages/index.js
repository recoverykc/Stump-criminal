import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <main className="bg-[#fdf6e3] text-[#1b1b1b] font-sans">
      <Head>
        <title>Ed Stump | Criminal Defense Attorney in Kansas City</title>
        <meta name="description" content="Ed Stump is a trusted criminal defense lawyer serving Kansas City, Missouri. Call now for a free case review." />
        <meta name="keywords" content="Kansas City Criminal Defense Lawyer, Ed Stump Attorney, DUI Lawyer Kansas City, Defense Lawyer Missouri" />
        <meta name="author" content="Law Offices of Ed Stump" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      <section className="flex flex-col items-center text-center px-4 py-12 bg-[#111] text-white">
        <Image 
          src="/ed-stump-comic.png" 
          alt="Ed Stump Illustration" 
          width={600} 
          height={800} 
          className="rounded-xl shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fighting for Your Freedom in Kansas City</h1>
        <p className="text-lg md:text-xl mb-6">Criminal Defense Attorney – Available 24/7</p>
        <div className="space-x-4">
          <a href="tel:8165503606" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full">Call Now</a>
          <a href="#contact" className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-full">Free Consultation</a>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Meet Ed Stump</h2>
        <p className="text-lg mb-6">
          With over 20 years of experience defending clients in Kansas City courts, Ed Stump is a fearless advocate who fights hard to protect your rights. Whether you’re facing a misdemeanor or a serious felony, Ed delivers trusted legal expertise with a personal approach.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Local courtroom experience</li>
          <li>Hundreds of cases handled</li>
          <li>Known for aggressive defense strategies</li>
          <li>Available 24/7 for urgent cases</li>
        </ul>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Practice Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-lg">
              <li>• DUI & DWI Defense</li>
              <li>• Drug Possession & Distribution</li>
              <li>• Assault & Violent Crimes</li>
              <li>• Theft, Burglary & Property Crimes</li>
            </ul>
            <ul className="space-y-2 text-lg">
              <li>• Gun Charges</li>
              <li>• Probation Violations</li>
              <li>• Federal Charges</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Ed</h2>
        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <p>✅ Available 24/7 – Immediate response</p>
          <p>✅ Proven courtroom record in Kansas City</p>
          <p>✅ Personalized service – you speak to Ed directly</p>
          <p>✅ No hidden fees – Free consultation</p>
        </div>
      </section>

      <section id="contact" className="bg-red-50 px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free Case Review</h2>
          <p className="mb-6">Call <a href="tel:8165503606" className="text-red-600 font-semibold">816-550-3606</a> or use the form below.</p>
          <form className="space-y-4" action="mailto:law.offices.edstump@gmail.com" method="POST" encType="text/plain">
            <input type="text" name="Name" placeholder="Your Name" className="w-full p-3 border rounded" required />
            <input type="tel" name="Phone" placeholder="Phone Number" className="w-full p-3 border rounded" required />
            <input type="email" name="Email" placeholder="Email Address" className="w-full p-3 border rounded" required />
            <textarea name="Message" placeholder="Brief description of your case" rows="4" className="w-full p-3 border rounded" required></textarea>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold">Submit</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#111] text-white text-sm text-center py-6 px-4">
        <p>© {new Date().getFullYear()} Law Offices of Ed Stump | Kansas City, MO</p>
        <p className="mt-2 italic text-xs">The choice of a lawyer is an important decision and should not be based solely upon advertisements.</p>
      </footer>
    </main>
  );
}
