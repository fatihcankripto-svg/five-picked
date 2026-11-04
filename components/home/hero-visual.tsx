'use client'

import { useState } from 'react'
import { AudioLines, Layers3, Sparkles, Pause, Play } from 'lucide-react'

export function HeroVisual() {
  const [paused, setPaused] = useState(false)
  return <div className={`fp-hero-scene${paused ? ' fp-scene-paused' : ''}`}>
    <div aria-hidden="true" className="absolute inset-0">
    <div className="fp-hero-halo" />
    <div className="fp-hero-ring fp-spin">{[0,1,2,3,4].map(i=><span key={i} className="absolute inset-0" style={{transform:`rotate(${i*72}deg)`}}><span className="fp-dot absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" /></span>)}</div>
    <div className="fp-hero-inner-ring" />
    <span className="fp-gradient-text fp-hero-five">5</span>
    <div className="fp-scene-label fp-scene-label-ai"><span className="fp-scene-icon"><Sparkles size={20} /></span><span><span className="block text-[10px] uppercase tracking-[.17em] text-muted-foreground">Create something</span><span className="mt-1 block text-sm font-semibold">AI & design</span></span></div>
    <div className="fp-scene-label fp-scene-label-sound"><AudioLines className="text-[#8ed6df]" size={24} /><div className="fp-mini-wave">{[12,23,16,31,20,36,16,25,12].map((h,i)=><span key={i} style={{height:h,animationDelay:`${i * -.17}s`}} />)}</div></div>
    <div className="fp-scene-label fp-scene-label-stack"><span className="fp-scene-icon"><Layers3 size={20} /></span><span><span className="block text-[10px] uppercase tracking-[.17em] text-muted-foreground">Find your fit</span><span className="mt-1 block text-sm font-semibold">Five clear options</span></span></div>
    <span className="fp-scene-caption">Less searching. More doing.</span>
    </div>
    <button type="button" aria-label={paused ? 'Play illustration animation' : 'Pause illustration animation'} aria-pressed={paused} onClick={() => setPaused(!paused)} className="fp-scene-motion absolute right-0 top-0 flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
      {paused ? <Play aria-hidden="true" size={14} /> : <Pause aria-hidden="true" size={14} />}
    </button>
  </div>
}
