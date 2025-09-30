
type BackgroundPatternProps = {
  type: 'pixel' | 'pixel-multi' | 'rectangle' | 'background'
  className?: string
}

export function BackgroundPattern({ type, className = '' }: BackgroundPatternProps) {
  const getPattern = () => {
    switch (type) {
      case 'pixel':
        return (
          <div className={`w-full ${className}`}>
            <img 
              src="/webflow-export/images/pixel.svg" 
              alt="" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        )
      
      case 'pixel-multi':
        return (
          <div 
            className={`w-full h-full bg-cover bg-no-repeat bg-center ${className}`}
            style={{
              backgroundImage: "url('/webflow-export/images/PIXEL-MULTI-BACKGROUND.svg')",
              backgroundPosition: '0 0',
              backgroundSize: 'auto'
            }}
          />
        )
      
      case 'rectangle':
        return (
          <div 
            className={`w-full h-full bg-cover bg-no-repeat bg-center ${className}`}
            style={{
              backgroundImage: "url('/webflow-export/images/background-rectangle.svg')",
              backgroundPosition: '50%',
              backgroundSize: 'auto'
            }}
          />
        )
      
      case 'background':
        return (
          <div 
            className={`w-full h-full bg-cover bg-no-repeat bg-center ${className}`}
            style={{
              backgroundImage: "url('/webflow-export/images/Background.svg')",
              backgroundPosition: '0 0',
              backgroundSize: 'auto'
            }}
          />
        )
      
      default:
        return null
    }
  }

  return getPattern()
}

export default BackgroundPattern
