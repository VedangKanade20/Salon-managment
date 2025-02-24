// import React from "react";

// const AboutPage = () => {
//   return (
//     <div className="about-page flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-blue-300 text-4xl font-bold text-center mb-8">
//         Where Style Meets Comfort – Your Go-To Saloon for Premium Grooming.
//       </h1>
//       <p className="text-gray-700 text-lg text-center max-w-2xl mb-8">
//         Founded in 2010, [Saloon Name] has been a trusted name in grooming,
//         offering top-notch services to our community.
//       </p>
//       <div className="team flex flex-col items-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Meet Our Team
//         </h2>
//         <div className="team-member flex flex-col items-center mb-4">
//           <img
//             src="team-member-1.jpg"
//             alt="Team Member 1"
//             className="w-32 h-32 rounded-full mb-2"
//           />
//           <p className="text-gray-600">John Doe – Master Barber</p>
//         </div>
//         {/* Add more team members here */}
//       </div>
//       <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
//         Our Values
//       </h2>
//       <p className="text-gray-700 text-lg text-center max-w-2xl mb-8">
//         We believe in quality, inclusivity, and making every client feel
//         special.
//       </p>
//       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//         Book an Appointment
//       </button>
//     </div>
//   );
// };

// export default AboutPage;

const About = () => {
  return (
    <div className="about-page flex-col  ">
      <div className="justify-items-center  ">
        <h1 className="text-blue-300 align-middle text-3xl font-serif ">
          "Where Style Meets Comfort – Your Go-To Saloon for Premium Grooming."
        </h1>

        <h3 className="text-blue-300 align-middle text-xl font-serif ">
          Founded in 2010, Tip-Top Family Saloon has been a trusted name in
          grooming, offering top-notch services to our community.
        </h3>
      </div>
    </div>
  );
};

export default About;
