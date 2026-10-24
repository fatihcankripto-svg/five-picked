import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5b544',
          borderRadius: 14,
          color: '#0c1424',
          fontSize: 48,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        5
      </div>
    ),
    size,
  )
}
