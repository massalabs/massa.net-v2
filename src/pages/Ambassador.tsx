import { BackgroundPattern } from '../components/BackgroundPattern';

export default function AmbassadorComingSoon() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Quadrillage animé en background */}
      <div style={{position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none'}}>
        <BackgroundPattern type="grid-glow" />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center text-center z-10 relative py-32">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-black mb-6">Ambassador program</h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-massa-blue-600 mb-4 tracking-tight">Coming soon</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-lg">
          L’espace dédié à notre future communauté d’ambassadeurs arrive très prochainement. Reste à l’affût&nbsp;!
        </p>
        <div className="flex gap-2 justify-center">
          <a href="/" className="px-6 py-3 rounded-full bg-massa-blue-600 text-white font-semibold shadow hover:bg-massa-blue-700 transition">Retour à l’accueil</a>
          <a href="mailto:hello@massa.net" className="px-6 py-3 rounded-full border-2 border-massa-blue-600 text-massa-blue-600 font-semibold shadow hover:bg-massa-blue-50 transition">Nous contacter</a>
        </div>
      </main>
    </div>
  );
}

