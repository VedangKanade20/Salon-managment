import EmployeeList from "../components/EmployeeList";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    //the title
    <div className="about-page flex-col p-5 max-h-full ml-3">
      <div className="justify-items-center  ">
        <h1 className="text-blue-300 align-middle text-3xl font-serif ">
          "Where Style Meets Comfort – Your Go-To Saloon for Premium Grooming."
        </h1>
      </div>

      {/* first section */}
      <section className="grid grid-cols-2 gap-1 p-6">
        <div className="justify-items-center p-5 w-15 ">
          <h3 className="text-blue-300 align-middle text-xl font-serif p-1">
            Founded in 2010, Tip-Top Family Saloon has been a trusted name in
            grooming, offering top-notch services to our community.
          </h3>
          <h3 className="text-blue-300 align-middle text-xl font-serif p-1">
            Our experienced stylists are dedicated to providing personalized
            care and the latest trends to ensure every client leaves feeling
            confident and refreshed.
          </h3>
          <h3 className="text-blue-300 align-middle text-xl font-serif p-1">
            Whether you're looking for a classic cut, a modern style, or a
            relaxing treatment, we are committed to making your visit a
            delightful experience.
          </h3>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://framerusercontent.com/images/y6h3MUMisOe3SS8MABsJ8tKikA.jpeg"
            alt="Modern Salon Interior"
            className="w-full h-64 rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section>
        <h3 className="text-blue-300 align-middle text-2xl font-serif p-8">
          Meet our talented stylists and barbers who bring passion and expertise
          to every cut:
        </h3>
      </section>

      <div>
        <EmployeeList />
      </div>

      <div className="justify-items-center">
        <h3 className="text-blue-300 align-middle text-xl font-serif p-1">
          Ready for a fresh look?
        </h3>

        <a
          className="group px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
          href="./Contact"
        >
          Book an Appointment Now!
        </a>
      </div>
    </div>
  );
};

export default About;
