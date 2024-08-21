import React from 'react'
const getPredictedAge=async(name)=>{
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json();
}
const getPredictedGender=async(name)=>{
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json();
}
const getPredictedCountry=async(name)=>{
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json();
}
async function page({params}) {
  const getAge = getPredictedAge(params.name);
  const getGender = getPredictedGender(params.name);
  const getCountry=getPredictedCountry(params.name);
  const[age,gender,country]=await Promise.all([getAge,getGender,getCountry])
  return (
    <div className='min-h-screen flex items-center justify-center  '>
      <div>
      <h1 className=' text-5xl font-bold text-teal-500'>Personal Info</h1>
      <div className='mt-5 p-6 text-4xl space-y-5 '>
      <div>Age: {age?.age}</div>
      <div>Gender: {gender?.gender}</div>
      <div>Country: {country?.country[0].country_id}</div>
      </div>
      </div>
    </div>
  )
}

export default page
