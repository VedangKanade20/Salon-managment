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
      imgUrl: "https://example.com/john-carter.jpg",
    },
    {
      name: "Michael Davis",
      gender: "Male",
      specialization: ["Men's Haircut", "Beard Trim", "Head Massage"],
      experience: "3 years",
      imgUrl: "https://example.com/michael-davis.jpg",
    },
    {
      name: "Ryan Smith",
      gender: "Male",
      specialization: ["Men's Haircut", "Hair Color", "Facial Cleanup"],
      experience: "4 years",
      imgUrl: "https://example.com/ryan-smith.jpg",
    },
    {
      name: "David Brown",
      gender: "Male",
      specialization: ["Men's Haircut", "Head Massage"],
      experience: "6 years",
      imgUrl: "https://example.com/david-brown.jpg",
    },
    {
      name: "James Wilson",
      gender: "Male",
      specialization: ["Men's & Women's Haircut", "Hair Styling", "Hair Color"],
      experience: "7 years",
      imgUrl: "https://example.com/james-wilson.jpg",
    },
    {
      name: "Chris Johnson",
      gender: "Male",
      specialization: ["Men's & Women's Haircut", "Hair Styling", "Hair Spa"],
      experience: "8 years",
      imgUrl: "https://example.com/chris-johnson.jpg",
    },

    // Female employees (Only style women)
    {
      name: "Emma Roberts",
      gender: "Female",
      specialization: ["Women's Haircut", "Hair Spa", "Facial & Cleanup"],
      experience: "6 years",
      imgUrl: "https://example.com/emma-roberts.jpg",
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
      imgUrl: "https://example.com/sophia-martinez.jpg",
    },
    {
      name: "Olivia Thompson",
      gender: "Female",
      specialization: ["Women's Haircut", "Hair Color", "Facial & Cleanup"],
      experience: "4 years",
      imgUrl: "https://example.com/olivia-thompson.jpg",
    },
  ];
};

export default employees;
