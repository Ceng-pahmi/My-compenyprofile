'use client'
import Image from 'next/image'
import { getData } from '@/API/data'
import { useEffect, useState } from 'react';


export default function Teams() {
//   const teamMembers = await getTeamMembers()
  const [datas, setDatas] = useState([]);

  const handleGetData = async () => {
    const data = await getData();
    setDatas(data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {datas.map((results: any,index) => (
          <div key={index} className="bg-muted p-6 rounded-lg shadow-md text-center">
            {results?.image_url && (
            <img
            src={results?.image_url}
            alt={results?.id?.name}
            className="rounded-full w-20 h-20 m-3"
            />
            )}
            <h2 className="text-xl font-semibold mb-2">{`${results.name.first} ${results.name.last}`}</h2>
            <p className="text-muted-foreground mb-2">{results.email}</p>
            <p className="text-sm">{`${results.location.city}, ${results.location.country}`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

