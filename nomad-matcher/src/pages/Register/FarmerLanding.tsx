import { useNavigate } from 'react-router-dom';

export const FarmerLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-fixed bg-[url('/hero-farm.jpg')] bg-center bg-cover">
      <div className="backdrop-brightness-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl bg-white/80 rounded-3xl p-10 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              List Your Farm · Welcome Farmers
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Earn additional income by hosting content creators and tourists. Showcase your farm, grow your business and connect with visitors seeking authentic rural experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/register/farmer/register')}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-450 rounded-full font-semibold shadow-md"
              >
                Register as Farmer
              </button>

              <button
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                className="px-6 py-3 border border-gray-300 rounded-full bg-white hover:bg-gray-50 font-medium"
              >
                Learn More
              </button>
            </div>

            <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-green-50 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-green-700">1,000+</h3>
                <p className="text-sm text-green-800">Farms Listed</p>
              </div>

              <div className="p-6 bg-yellow-50 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-yellow-700">80 Lacs+</h3>
                <p className="text-sm text-yellow-800">Tourists Reached</p>
              </div>

              <div className="p-6 bg-blue-50 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-blue-700">150+</h3>
                <p className="text-sm text-blue-800">Awards & Programs</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
