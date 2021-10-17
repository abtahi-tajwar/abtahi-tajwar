import React from 'react'
import { useRef, useEffect } from 'react'

export function Box({ children, className, match}) {
    const boxRef = useRef()
    const callibrateDimension = (box) => {
        if(match === 'width') {
            console.log('Width')
            box.style.width = box.offsetHeight+"px"
        } else {
            box.style.height = box.offsetWidth+"px"
        }
    }
    useEffect(() => {
        const box = boxRef.current
        callibrateDimension(box)
    }, [match])
    return (
        <div className={className} ref={boxRef}>
            {children}
        </div>
    )
}


