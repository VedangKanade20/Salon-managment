const employees = () => {
  return [
    // Male employees (4 specialize in men, 2 in both)
    {
      name: "John Carter",
      gender: "Male",
      specialization: [
        "Men's Haircut",
        "Beard Trim",
        "Hair Color",
        "Facial Cleanup",
      ],
      experience: "5 years",
      imgUrl: "/portrait_male_1_1778787612926.png",
    },
    {
      name: "Michael Davis",
      gender: "Male",
      specialization: ["Men's Haircut", "Beard Trim", "Head Massage"],
      experience: "3 years",
      imgUrl: "/portrait_male_2_1778787629631.png",
    },
    {
      name: "Ryan Smith",
      gender: "Male",
      specialization: ["Men's Haircut", "Hair Color", "Facial Cleanup"],
      experience: "4 years",
      imgUrl: "/portrait_male_3_1778787648548.png",
    },
    {
      name: "David Brown",
      gender: "Male",
      specialization: ["Men's Haircut", "Head Massage"],
      experience: "6 years",
      imgUrl: "/portrait_male_4_1778787664362.png",
    },
    {
      name: "James Wilson",
      gender: "Male",
      specialization: ["Men's & Women's Haircut", "Hair Styling", "Hair Color"],
      experience: "7 years",
      imgUrl: "/portrait_male_1_1778787612926.png",
    },
    {
      name: "Chris Johnson",
      gender: "Male",
      specialization: ["Men's & Women's Haircut", "Hair Styling", "Hair Spa"],
      experience: "8 years",
      imgUrl: "/portrait_male_2_1778787629631.png",
    },

    // Female employees (Only style women)
    {
      name: "Emma Roberts",
      gender: "Female",
      specialization: ["Women's Haircut", "Hair Spa", "Facial & Cleanup"],
      experience: "6 years",
      imgUrl: "/portrait_female_1_1778787691331.png",
    },
    {
      name: "Sophia Martinez",
      gender: "Female",
      specialization: [
        "Women's Haircut",
        "Manicure & Pedicure",
        "Bridal Makeup",
      ],
      experience: "5 years",
      imgUrl: "/portrait_female_2_1778787707344.png",
    },
    {
      name: "Olivia Thompson",
      gender: "Female",
      specialization: ["Women's Haircut", "Hair Color", "Facial & Cleanup"],
      experience: "4 years",
      imgUrl: "/portrait_female_3_1778787728769.png",
    },
  ];
};

export default employees;
