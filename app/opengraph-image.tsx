import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'FIVE PICKED — The 5 best tools, hand-picked for you.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0c1424',
          padding: '80px',
          color: '#eef1f6',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 700 }}>
          <div style={{ fontSize: 28, letterSpacing: 8, color: '#f5b544', fontWeight: 700 }}>FIVE PICKED</div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, marginTop: 28 }}>
            The 5 best tools, hand-picked for you.
          </div>
          <div style={{ fontSize: 28, color: '#9aa6bb', marginTop: 28 }}>fivepicked.com</div>
        </div>
        <div style={{ fontSize: 460, fontWeight: 800, color: '#f5b544', lineHeight: 1 }}>5</div>
      </div>
    ),
    size,
  )
}
