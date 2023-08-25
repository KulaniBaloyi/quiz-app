"use client"

import Image from "next/image"
import { useEffect, useState } from "react"


export default function Home() {
  const [isLoading,setIsLoading]= useState(true)
  const [isMounted,setIsMounted] = useState(false)
  const [data,setData] = useState(null)
  const [images,setImages]= useState(null)
  // const getDadJokes = async()=>{
  //   try{
  //     const res = await fetch(`https://api.api-ninjas.com/v1/celebrity?nationality=us`,{
  //       "method":"GET",
  //       "content-type":"",
  //       "headers":{
  //         "X-Api-Key":"nIWUGjIm/KhyU3uS62yQrQ==dqSPa1jntQO7eR04"
  //       }
  //     })

  //     if (!res.ok){
  //       return new Error("Something went wrong")
  //     }
  //     const json = await res.json()
  //     setData(json)

  //   }catch(err){
      
  //   }
  //   finally{
  //     setIsLoading(false)
  //   }
   
  // }
  const Gallery = async()=>{
    try{
      const res = await fetch(`https://api.unsplash.com/photos/?client_id=LJPPIPgDCoBibT5mLgd-AmL3K9p8rdF6yBmWak15J_E`)

      if (!res.ok){
        return new Error("Something went wrong")
      }
      const json = await res.json()
      setImages(json)

    }catch(err){
      
    }

   
  }

  useEffect(()=>{
    setIsMounted(true)
    Gallery()

  },[])

  if(!isMounted) return
  return (
    <>
       {/* {isLoading?
      <p>Loading...</p>
      :
      <div>
      {data&&data.map((item,index)=>{
        return <div key={index}>
          <ul className="flex flex-col gap-5">
            <li>name: {item.name}</li>
            <li>net worth: {item.net_worth}</li>
            <li>Height: {item.height}m</li>
          </ul>
          <section className="flex gap-5">
            <p>Occupation</p>
            <br/>
            {item.occupation&&item?.occupation.map((o,i)=>{
              return <p key={i} className="p-3 rounded-md border text-grey-600 ">{o.replace(/_/g, ' ')}</p>
            })}
          </section>
        </div>
      })}
      
     </div>
    } */}
    <h1>Welcome to my quiz app!!!! : )</h1>
    {/* <pre className="bg-[#1f2937] text-[#e5e7eb]">
        <code className="grid">
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
            

        </code>

      </pre> */}
      <div className="gap-5 grid grid-cols-5 w-full p-5">
      {images&&images.map((image=>{
        return <div key={image.id} className="rounded-lg border overflow-hidden relative aspect-square h-full">
           <Image onError={()=>"Failed to load image"} fill src={image.urls.regular} alt={image.slug} className="object-cover"/>
           <p>Its working</p>
        </div>
      }))}
       </div>

     
    </>
   
   
  )
}
