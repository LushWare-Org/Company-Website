import { useNavigate } from "react-router-dom";


export default function Homepage() {

  const navigate = useNavigate();

  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section className="px-6 py-24 text-center bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold">
          Innovative Software Solutions
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering Businesses with Revolutionary Software.<br />
          We develop bespoke software platforms for global businesses with quality, reliability, and customer satisfaction.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="mt-4 text-gray-600">
          The Vision Behind LushWare ORG.<br />
          We use cutting-edge technology to create novel software systems that make life easier for the modern global community.
        </p>
      </section>

      {/* Services */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">Our Specialized Software Solutions</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">

          <ServiceCard number="01" title="Product Development"
            desc="Innovative Software Products that serve as powerful platforms." />

          <ServiceCard number="02" title="Custom Development"
            desc="Bespoke software systems tailored to your business needs." />

          <ServiceCard number="03" title="Mobile App Development"
            desc="Cutting-edge mobile apps for seamless user experience." />

          <ServiceCard number="04" title="Web Development"
            desc="Modern websites to elevate your business." />

          <ServiceCard number="05" title="Cloud System Development"
            desc="Enterprise systems to automate business processes." />

          <ServiceCard number="06" title="AI Based Development"
            desc="AI agents and workflows for modern task automation." />
        </div>

        <div className="text-center mt-10">
          <button 
              onClick={() => navigate("/solutions")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </section>

      {/* Join */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Unlock Success with Our Software Project Base</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Contribute to our software projects and grow your skills with real professional experience.
        </p>

        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            onClick={() => navigate("/project-base")}
        >
          JOIN Now
        </button>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Our Unique Value Proposition</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto">

          <ValueCard number="01" title="Innovation"
            desc="We push boundaries to develop revolutionary software platforms." />

          <ValueCard number="02" title="Reliability"
            desc="Reliable solutions that meet the highest quality standards." />

          <ValueCard number="03" title="Customer Focus"
            desc="Customer satisfaction is our priority in every project." />
        </div>
      </section>

      {/* Software Products */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center">Systems We’re Building Up</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">

          <ProductCard title="Travel Agency Management System"
            desc="All-in-one system for travel agents with B2B & B2C features." />

          <ProductCard title="Online Boat Ticket Booking System"
            desc="Automates online tickets and hire booking processes." />
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigate("/work")}
          >
            See More
          </button>
        </div>
      </section>

      {/* Visit Lush Web Designers */}
      <section className="px-6 py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">VISIT Lush Web Designers</h2>
        <p className="mt-3 text-gray-600">
          For all website design and social media promotion services.
        </p>

        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            onClick={() => window.open("https://lushwebdesigners.com/", "_blank")}
          >
            Learn More
          </button>
        </div>
      </section>

    </div>
  );
}


function ServiceCard({ number, title, desc }: any) {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <p className="text-blue-600 font-bold">{number}</p>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}

function ValueCard({ number, title, desc }: any) {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <p className="text-blue-600 font-bold">{number}</p>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}

function ProductCard({ title, desc }: any) {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
