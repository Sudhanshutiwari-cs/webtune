import { useId } from 'react'

type RibbonProps = {
  className?: string
}

export function RibbonTopRight({ className = '' }: RibbonProps) {
  const id = useId()
  return (
    <svg
      viewBox="0 0 800 700"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd8b5" stopOpacity="0" />
          <stop offset="25%" stopColor="#ffb98a" />
          <stop offset="55%" stopColor="#f0a6e8" />
          <stop offset="78%" stopColor="#c4a6ff" />
          <stop offset="100%" stopColor="#a6d2ff" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe6ff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#9fd2ff" />
          <stop offset="100%" stopColor="#c9b6ff" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      <path
        d="M820 120 C 740 200, 640 330, 600 430"
        stroke={`url(#${id}-b)`}
        strokeWidth="110"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
        filter={`url(#${id}-blur)`}
      />
      <path
        d="M60 -20 C 220 60, 330 220, 430 360 C 520 480, 640 530, 840 520"
        stroke={`url(#${id}-a)`}
        strokeWidth="130"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
        filter={`url(#${id}-blur)`}
      />
    </svg>
  )
}

export function RibbonLeftWave({ className = '' }: RibbonProps) {
  const id = useId()
  return (
    <svg
      viewBox="0 0 600 300"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-w`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffc9a8" />
          <stop offset="50%" stopColor="#f3b2ee" />
          <stop offset="100%" stopColor="#bfe3ff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <path
        d="M-40 80 C 80 40, 160 90, 240 150 C 320 210, 420 220, 560 140"
        stroke={`url(#${id}-w)`}
        strokeWidth="70"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
        filter={`url(#${id}-blur)`}
      />
    </svg>
  )
}

export function Blob({ className = '' }: RibbonProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  )
}
