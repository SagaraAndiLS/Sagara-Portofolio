const base = { viewBox: '0 0 24 24', 'aria-hidden': true }

/* Definisi gradasi untuk logo berwarna ganda (dipasang sekali di TechStack) */
export const LogoDefs = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="tl-python" x1="0" y1="0" x2="1" y2="1">
        <stop offset="50%" stopColor="#4B8BBE" />
        <stop offset="50%" stopColor="#FFD43B" />
      </linearGradient>
      <linearGradient id="tl-canva" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
      <linearGradient id="tl-looker" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C4B5FD" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
)

export const PowerBIIcon = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <rect x="3" y="12" width="4.2" height="9" rx="1.3" opacity=".55" />
    <rect x="9.6" y="6.5" width="4.2" height="14.5" rx="1.3" opacity=".78" />
    <rect x="16.2" y="2" width="4.6" height="19" rx="1.4" />
  </svg>
)

const Plus = ({ cx, cy, l, fill }) => {
  const t = l * 0.36
  return (
    <g fill={fill}>
      <rect x={cx - t / 2} y={cy - l / 2} width={t} height={l} />
      <rect x={cx - l / 2} y={cy - t / 2} width={l} height={t} />
    </g>
  )
}

export const TableauIcon = (p) => (
  <svg {...base} {...p}>
    <Plus cx={12} cy={12} l={9} fill="#E97627" />
    <Plus cx={12} cy={3.2} l={4.6} fill="#7C9CD1" />
    <Plus cx={12} cy={20.8} l={4.6} fill="#7C9CD1" />
    <Plus cx={3.2} cy={12} l={4.6} fill="#7C9CD1" />
    <Plus cx={20.8} cy={12} l={4.6} fill="#7C9CD1" />
  </svg>
)

export const LookerStudioIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M11 3a9 9 0 1 0 9 9h-9z" fill="url(#tl-looker)" />
    <path d="M13.5 2.1A9 9 0 0 1 21.9 10.5h-8.4z" fill="#8B5CF6" opacity=".7" />
  </svg>
)

export const AccessIcon = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <rect x="3" y="2" width="18" height="20" rx="3.2" />
    <path
      d="M12 6l4.6 11.5h-2.2l-.95-2.5h-2.9l-.95 2.5H7.4L12 6zm0 3.6-1.1 3h2.2l-1.1-3z"
      fill="rgb(var(--ink-800))"
    />
  </svg>
)

export const CanvaIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10.5" fill="url(#tl-canva)" />
    <path
      d="M15.9 9.3a4.5 4.5 0 1 0 0 5.4"
      fill="none"
      stroke="#fff"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
)

export const PythonIcon = ({ Si, ...p }) => <Si {...p} fill="url(#tl-python)" />
