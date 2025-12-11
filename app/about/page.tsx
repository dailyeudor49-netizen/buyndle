import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Buyndle, your trusted bundle and kit specialist.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-gray-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">About Buyndle</h1>
          <p className="text-gray-300 mt-1">Pioneering smart bundling since 2019</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-3 text-gray-600">
                <p>Founded in Zurich in 2019, Buyndle pioneered the concept of applying Swiss precision to product bundling.</p>
                <p>We invented a smart bundling algorithm that analyzes product combinations to maximize value and convenience for our customers.</p>
                <p>Today, we offer 890+ pre-curated bundles from 2,200+ products, with our custom bundle builder letting you create your perfect kit.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "6", l: "Years" },
                { n: "2,200+", l: "Products" },
                { n: "890+", l: "Bundles" },
                { n: "35+", l: "Countries" },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-pink-50 rounded-xl text-center">
                  <div className="text-2xl font-bold text-pink-600">{s.n}</div>
                  <div className="text-gray-600 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { t: "Value", d: "Maximum savings through intelligent bundle combinations" },
              { t: "Convenience", d: "Pre-made kits and custom builder for effortless shopping" },
              { t: "Precision", d: "Swiss engineering applied to every bundle recommendation" },
              { t: "Innovation", d: "AI-powered bundle suggestions and smart algorithms" },
            ].map((v, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">{v.t}</h3>
                <p className="text-gray-600 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Milestones</h2>
          <div className="space-y-4">
            {[
              { y: "2019", t: "Developed bundle concept and founded company" },
              { y: "2020", t: "Launched smart bundling algorithm" },
              { y: "2022", t: "Released custom bundle builder tool" },
              { y: "2024", t: "Introduced AI-powered bundle recommendations" },
            ].map((m, i) => (
              <div key={i} className="flex gap-4 items-center">
                <span className="text-pink-600 font-bold w-14">{m.y}</span>
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-gray-700">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-600 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Start Bundling</h2>
          <p className="text-pink-100 mb-5">Experience smarter shopping with our bundle platform</p>
          <Link href="/contact" className="px-6 py-2.5 bg-white text-pink-600 font-medium rounded-lg hover:bg-pink-50">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
