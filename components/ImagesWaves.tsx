'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ImagesWavesProps {
    myclassName?: string
}
const ImagesWaves = ({myclassName}: ImagesWavesProps) => {
    const { theme } = useTheme()
    const [clientSideRendered, setclientSideRendered] = useState(false)

    useEffect(() => {
        setclientSideRendered(true)
    }, [])

    if (!clientSideRendered) {
        return null
    }
    return (
        <>
            {theme === 'light' && (
                <Image src="/white.png" alt="waves" width={2000} height={62} className={`w-full lg:block ${myclassName}`} />
            )}
             {theme === 'dark' && (
                <Image src="/dark.png" alt="waves" width={2000} height={62} className={`w-full lg:block ${myclassName}`} />
            )}
        </>
    )
}

export default ImagesWaves