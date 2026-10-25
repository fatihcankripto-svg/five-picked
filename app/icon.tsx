import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

const dots = [
  { left: 29, top: 4 },
  { left: 53, top: 21 },
  { left: 44, top: 49 },
  { left: 14, top: 49 },
  { left: 5, top: 21 },
]

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#0c1424',
          borderRadius: 14,
        }}
      >
        {dots.map((dot) => (
          <div
            key={`${dot.left}-${dot.top}`}
            style={{
              position: 'absolute',
              left: dot.left,
              top: dot.top,
              width: 6,
              height: 6,
              borderRadius: 3,
              background: '#f5b544',
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            left: 15,
            top: 15,
            width: 34,
            height: 34,
            borderRadius: 17,
            background: '#f5b544',
            color: '#0c1424',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 25,
            fontWeight: 800,
            fontFamily: 'sans-serif',
          }}
        >
          5
        </div>
      </div>
    ),
    size,
  )
}
