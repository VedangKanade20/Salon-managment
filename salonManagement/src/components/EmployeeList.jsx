import React from "react";
import ProfileCard from "./ProfileCard";
import employees from "../data/employees";

const EmployeeList = () => {
  const employeeList = employees();

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {employeeList.map((employee, index) => {
        <ProfileCard key={index} employees={employee} />;
      })}
    </div>
  );
};

export default EmployeeList;
