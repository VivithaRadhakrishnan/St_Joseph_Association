import React from "react";
import MemberCard from "../components/MemberCard"; // adjust path if needed
import sampleImg from "../assets/images/cuteBunImage.png"; // replace with real images

const Members = () => {
  // Fake data for 20 members
  const members = [
    { img: sampleImg, name: "John Doe", age: 45, qualification: "B.A", years: 10 },
    { img: sampleImg, name: "Mary Smith", age: 38, qualification: "M.Sc", years: 8 },
    { img: sampleImg, name: "Paul Johnson", age: 50, qualification: "Ph.D", years: 15 },
    { img: sampleImg, name: "Sarah Williams", age: 42, qualification: "MBA", years: 12 },
    { img: sampleImg, name: "David Brown", age: 35, qualification: "B.Com", years: 6 },
    { img: sampleImg, name: "Emily Davis", age: 29, qualification: "B.Tech", years: 3 },
    { img: sampleImg, name: "Michael Wilson", age: 60, qualification: "M.A", years: 25 },
    { img: sampleImg, name: "Linda Taylor", age: 33, qualification: "M.Ed", years: 5 },
    { img: sampleImg, name: "Robert Thomas", age: 47, qualification: "MBA", years: 14 },
    { img: sampleImg, name: "Patricia Moore", age: 41, qualification: "B.Sc", years: 9 },
    { img: sampleImg, name: "James Anderson", age: 36, qualification: "M.Tech", years: 7 },
    { img: sampleImg, name: "Barbara Martin", age: 55, qualification: "Ph.D", years: 20 },
    { img: sampleImg, name: "Charles Lee", age: 39, qualification: "MBA", years: 10 },
    { img: sampleImg, name: "Elizabeth Perez", age: 30, qualification: "B.Ed", years: 4 },
    { img: sampleImg, name: "Thomas White", age: 52, qualification: "M.Sc", years: 18 },
    { img: sampleImg, name: "Jennifer Harris", age: 28, qualification: "B.A", years: 2 },
    { img: sampleImg, name: "Christopher Clark", age: 48, qualification: "MBA", years: 16 },
    { img: sampleImg, name: "Susan Lewis", age: 34, qualification: "B.Sc", years: 6 },
    { img: sampleImg, name: "Daniel Young", age: 40, qualification: "M.A", years: 11 },
    { img: sampleImg, name: "Nancy Hall", age: 37, qualification: "B.Com", years: 7 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-24 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Members;
