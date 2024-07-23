import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const App = () => {
  const gsapRef = useRef()

  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:100,
  //     duration:1,
  //     delay:1,
  //   })
  // })
  // by using ref

    useGSAP(()=>{
    gsap.to(gsapRef.current,{
      x:100,
      duration:1,
      delay:1,
    })
  })

  return (
    <main>
      <div ref={gsapRef} className="box">
         
      </div>
    </main>
  )
}

export default App