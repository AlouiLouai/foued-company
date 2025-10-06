"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function AnimateOnScroll({
  children,
  animation = { opacity: 0, y: 100, duration: 1, ease: "power3.out" },
  delay = 0,
  start = "top 80%",
  stagger,
}: any) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const element = ref.current
    if (element) {
      const targets = stagger ? Array.from((element as HTMLElement).children) : element;
      gsap.fromTo(
        targets,
        { ...animation, delay },
        {
          ...animation,
          opacity: 1,
          y: 0,
          stagger: stagger,
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: "play none none none",
          },
        }
      )
    }
  }, [animation, delay, start, stagger])

  return <div ref={ref}>{children}</div>
}