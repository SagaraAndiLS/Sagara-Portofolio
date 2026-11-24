const base = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }

export const PowerBIIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="12" width="4.2" height="9" rx="1.3" opacity=".55" />
    <rect x="9.6" y="6.5" width="4.2" height="14.5" rx="1.3" opacity=".78" />
    <rect x="16.2" y="2" width="4.6" height="19" rx="1.4" />
  </svg>
)

const Plus = ({ cx, cy, l }) => {
  const t = l * 0.36
  return (
    <>
      <rect x={cx - t / 2} y={cy - l / 2} width={t} height={l} />
      <rect x={cx - l / 2} y={cy - t / 2} width={l} height={t} />
    </>
  )
}

export const TableauIcon = (p) => (
  <svg {...base} {...p}>
    <Plus cx={12} cy={12} l={9} />
    <Plus cx={12} cy={3.2} l={4.6} />
    <Plus cx={12} cy={20.8} l={4.6} />
    <Plus cx={3.2} cy={12} l={4.6} />
    <Plus cx={20.8} cy={12} l={4.6} />
  </svg>
)

export const LookerStudioIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M11 3a9 9 0 1 0 9 9h-9z" />
    <path d="M13.5 2.1A9 9 0 0 1 21.9 10.5h-8.4z" opacity=".6" />
  </svg>
)