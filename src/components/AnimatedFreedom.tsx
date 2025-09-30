import { useState, useEffect } from 'react'

const fontVariants = [
  { 
    name: 'Pixelify Sans, monospace', 
    size: '2.2rem', 
    borderRadius: 'rounded-full',
    background: '#00FF6D',
    text: '#0043FF'
  },
  { 
    name: 'Rubik Microbe, cursive', 
    size: '2rem', 
    borderRadius: 'rounded-lg',
    background: '#FFFF00',
    text: '#E600FF'
  },
  { 
    name: 'Orbitron, monospace', 
    size: '1.8rem', 
    borderRadius: 'rounded-none',
    background: '#00FFCE',
    text: '#FF003D'
  },
  { 
    name: 'IBM Plex Mono, monospace', 
    size: '2rem', 
    borderRadius: 'rounded-md',
    background: '#FF7300',
    text: '#5218EF'
  }
]

const getRandomBorder = () => {
  return Math.random() < 0.4 // 40% de chance d'avoir un contour
}

export function AnimatedFreedom() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasBorder, setHasBorder] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fontVariants.length)
        setHasBorder(getRandomBorder())
        setIsAnimating(false)
      }, 50)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const currentVariant = fontVariants[currentFontIndex]

  return (
    <div 
      className={`uui-badge-group_badge is-primary ${currentVariant.borderRadius} transition-all duration-100`}
      style={{
        fontFamily: currentVariant.name,
        fontSize: currentVariant.size,
        backgroundColor: currentVariant.background,
        color: currentVariant.text,
        textShadow: isAnimating ? `0 0 10px ${currentVariant.text}40` : 'none',
        width: '200px',
        height: '60px',
        textAlign: 'center',
        lineHeight: '1',
        border: hasBorder ? `1px solid ${currentVariant.text}` : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="text-block-8-copy" style={{ 
        fontFamily: currentVariant.name,
        fontSize: currentVariant.size,
        color: currentVariant.text,
        textAlign: 'center',
        lineHeight: '1'
      }}>
        FREEDOM
      </div>
    </div>
  )
}

export default AnimatedFreedom
