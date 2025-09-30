import BackgroundPattern from '../components/BackgroundPattern'

export function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 px-5 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex gap-3 justify-center items-center flex-wrap mb-6">
            <div className="text-6xl font-bold tracking-tight">Redefining</div>
            <span className="px-4 py-2 rounded-full bg-massa-accent-teal text-massa-accent-pink font-extrabold text-6xl">
              FREEDOM
            </span>
            <div className="text-6xl font-bold tracking-tight">in the Digital Age</div>
          </div>
          <h1 className="text-4xl font-bold mb-6">The first decentralized cloud network</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-700 mb-8">
            Massa is the Layer 1 that brings true decentralization to where it's needed.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#ecosystem" className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors">
              Explore freedom
            </a>
            <a href="https://docs.massa.net/" className="px-6 py-3 rounded-lg border-2 border-black text-black font-medium hover:bg-gray-50 transition-colors">
              Build freedom
            </a>
          </div>
        </div>
      </section>

      {/* Pixel pattern at bottom */}
      <BackgroundPattern type="pixel" />
    </div>
  )
}

export default Home


