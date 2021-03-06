import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect
        x={1.5}
        y={1.5}
        width={45}
        height={45}
        rx={9.5}
        fill="none"
        stroke="#EA46BB"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.336 15.2l5.52 8.376L9.288 32h4.032l3.552-5.544L20.448 32h4.056l-5.592-8.4 5.544-8.4h-3.984l-3.552 5.568-3.504-5.568h-4.08zm21.027 17.088c1.728 0 3.024-.696 3.864-1.824V32h3.264V14.48h-3.456v6.624c-.864-1.008-2.088-1.584-3.672-1.584-3.312 0-5.616 2.736-5.616 6.456s2.328 6.312 5.616 6.312zm.744-2.832c-1.728 0-2.856-1.464-2.856-3.552 0-2.112 1.104-3.576 2.856-3.576 1.752 0 2.976 1.44 2.976 3.576s-1.176 3.552-2.976 3.552z"
        fill="#29031E"
      />
    </svg>
  )
}

export default SvgComponent
