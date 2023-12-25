/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center bg-red-500 h-screen">
      <div className="flex flex-col items-center bg-white w-1/2 p-10 h-1/2 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-green-700">Merry Christmas!</h1>
        <span className="flex flex-wrap w-full justify-center text-center py-4">
          <p className="text-lg">It's a year and half late, but please enjoy this song to celebrate the youngest addition to the Berlanga family.  We love you so much, Alex!</p>
        </span>
        <audio controls src="alex.wav" />
        <Image src="/hbm-logo.png" alt="logo" width={100} height={50} className="pt-5"/>
      </div>
    </div>
  )
}
