import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
      <circle cx="5.5" cy="9.5" r="2.2" />
      <path d="M2 18v-.6A3.8 3.8 0 0 1 5.6 14" />
      <circle cx="18.5" cy="9.5" r="2.2" />
      <path d="M22 18v-.6A3.8 3.8 0 0 0 18.4 14" />
    </svg>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
      <path d="m12 12 7-7" />
      <path d="M16 3.5V8h4.5" />
    </svg>
  )
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  )
}

export function BarChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <rect x="3" y="13" width="4" height="8" rx="1" />
      <rect x="10" y="9" width="4" height="12" rx="1" />
      <rect x="17" y="4" width="4" height="17" rx="1" />
    </svg>
  )
}

export function TrendIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  )
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3h6" />
      <path d="M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3" />
      <path d="M7 15h10" />
    </svg>
  )
}

export function GaugeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="m12 14 4-4" />
      <path d="M4 17h16" />
    </svg>
  )
}

export function MagnetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 4v8a6 6 0 0 0 12 0V4" />
      <path d="M6 8h3M15 8h3" />
      <path d="M9 4v8a3 3 0 0 0 6 0V4" />
    </svg>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  )
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" aria-hidden {...props}>
      <path d="M0 15.5C0 8.4 4.2 2.6 11.2 0l1.6 3C8.9 5 7 7.8 6.8 10.4c.4-.1.9-.2 1.4-.2 3.1 0 5.4 2.4 5.4 5.6 0 3.4-2.6 6-6 6C3.2 21.8 0 19.4 0 15.5zm18 0C18 8.4 22.2 2.6 29.2 0l1.6 3c-3.9 2-5.8 4.8-6 7.4.4-.1.9-.2 1.4-.2 3.1 0 5.4 2.4 5.4 5.6 0 3.4-2.6 6-6 6-4.4 0-7.6-2.4-7.6-6.3z" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

export function MoveIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M3 12h18" />
      <path d="m9 6 3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />
    </svg>
  )
}
