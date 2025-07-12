import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'

export default function VantaBackground({ children }) {
    const vantaRef   = useRef(null)
    const [vanta, setVanta] = useState(null)

    useEffect(() => {
        if (!vanta) {
            setVanta(
                FOG({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200,
                    minWidth: 200,
                    highlightColor: 0x6e7681,
                    midtoneColor:   0x30363d,
                    lowlightColor:  0x161b22,
                    baseColor:      0x0d1117,
                    blurFactor: 0.6,
                    zoom: 1,
                    speed: 1
                })
            )
        }
        return () => { vanta && vanta.destroy() }
    }, [vanta])

    return (
        <div ref={vantaRef} className="vanta-wrapper">
            {children}
        </div>
    )
}