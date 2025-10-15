import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const apiData = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setUser(data);
    };
    apiData();
  }, []);

  return (
    <>
      {user?.map((data) => (
        <>
            <div>
                <img src={data.image} alt={data.title} />
                <h2>{data.title}</h2>
            </div>
        
        </>
      ))}
    </>
  );
};

export default HeroSection;
