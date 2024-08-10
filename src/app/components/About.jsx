import React from 'react'
import Image from 'next/image'
const About = (props) => {
  return (
    <div className='flex bg-slate-50 w-5/6 mx-auto p-10'>
      <div className='mr-8'>
        <Image 
        src="/assets/Farhan.jpg" // Path from the public directory
        alt="foto"
        width={300} // Adjust width as needed
        height={300} // Adjust height as needed
        // layout="responsive" // Make image responsive
        objectFit="cover" // Control how the image is resized
        className=''
        />
      </div>
        {/* <img src="Farhan.jpg" alt="foto" /> */}
        {/* <h1 className='text-black'>Name: {props.fullname}</h1> */}
        <div>
            <h1 className='font-bold text-4xl text-black'>About Me</h1>
            <p className='font-normal text-blue-300'> Muhammad Farhan. Seorang anak perantauan yang berasal dari Depok dan sekarang sedang menempuh pendidikan di prodi Sistem dan Teknologi Informasi Institut Teknologi Bandung. Orang-orang memanggilku sebagai orang yang ceria sekaligus orang yang bersemangat dalam segala hal. Minat ku sekarang aku ingin mendalami dunia software engineering (Baru belajar bgt jangan dibully) karena melihat bagaimana variasi dari aplikasi yang ada di dunia saat ini dan bakatku sekarang adalah tidur (Hehehehe).
<br /><br />
            </p>
        </div>
    </div>
  )
}

export default About