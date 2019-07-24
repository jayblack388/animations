import { useRef, useState, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"

const useMeasure = () => {
  const ref = useRef()
  const [bounds, set] = useState({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => ro.observe(ref.current), ro.disconnect, [])
  return [{ ref }, bounds]
}

export default useMeasure
