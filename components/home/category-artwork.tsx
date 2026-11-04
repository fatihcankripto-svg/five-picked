/** Decorative editorial illustrations, not product screenshots or test results. */
export function CategoryArtwork({ slug }: { slug: string }) {
  return (
    <div aria-hidden="true" className={`fp-category-art fp-art-${slug}`}>
      <svg viewBox="0 0 360 170" fill="none" className="h-full w-full" focusable="false">
        <ellipse cx="180" cy="145" rx="112" ry="12" fill="currentColor" opacity=".06" />
        {slug === 'ai-tools' ? <>
          <path d="M55 85H305M180 20V150M85 30L275 140M85 140L275 30" stroke="currentColor" opacity=".16" />
          <circle cx="180" cy="85" r="62" stroke="currentColor" opacity=".2" strokeDasharray="3 7" className="fp-art-orbit" />
          <rect x="139" y="44" width="82" height="82" rx="25" fill="#17243b" stroke="currentColor" strokeWidth="1.5" />
          <path d="M180 59L187 78L206 85L187 92L180 111L173 92L154 85L173 78Z" fill="currentColor" />
          {[[76,59],[278,45],[280,116],[89,126]].map(([x,y],i)=><g key={i} className="fp-art-satellite" style={{animationDelay:`${i * -.8}s`}}><rect x={x-16} y={y-16} width="32" height="32" rx="10" fill="#142039" stroke="currentColor" strokeOpacity=".45" /><circle cx={x} cy={y} r="4" fill={i%2?'#8ed6df':'currentColor'} /></g>)}
        </> : slug === 'web-hosting-and-domains' ? <>
          <path d="M75 126H285M180 35V143" stroke="currentColor" opacity=".2" />
          {[0,1,2].map(i=><g key={i} className="fp-art-stack" style={{animationDelay:`${i * -.6}s`}}><rect x="105" y={31+i*35} width="150" height="29" rx="8" fill="#16243a" stroke="currentColor" strokeOpacity={.35+i*.2} /><circle cx="123" cy={45+i*35} r="3" fill="currentColor" /><path d={`M138 ${45+i*35}H191`} stroke="currentColor" opacity=".35" /><circle cx="237" cy={45+i*35} r="3" fill="#8ed6df" /></g>)}
          <path d="M80 48H62V126H92M273 64H298V126H267" stroke="currentColor" strokeDasharray="3 5" opacity=".4" />
          <circle cx="62" cy="48" r="5" fill="#8ed6df" /><circle cx="298" cy="64" r="5" fill="currentColor" />
        </> : slug === 'vpn-and-security' ? <>
          <ellipse cx="180" cy="87" rx="106" ry="59" stroke="currentColor" opacity=".12" /><ellipse cx="180" cy="87" rx="130" ry="36" stroke="currentColor" strokeDasharray="3 7" opacity=".3" />
          <path d="M180 25L229 43V80C229 111 204 132 180 144C156 132 131 111 131 80V43L180 25Z" fill="#17273a" stroke="currentColor" strokeWidth="1.5" />
          <path d="M161 84L175 98L201 69" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="74" cy="86" r="6" fill="#8ed6df" className="fp-art-satellite" /><circle cx="286" cy="86" r="6" fill="currentColor" />
        </> : slug === 'online-courses' ? <>
          <g className="fp-art-stack"><rect x="83" y="30" width="194" height="112" rx="12" fill="#16243a" stroke="currentColor" strokeOpacity=".5" /><path d="M83 52H277" stroke="currentColor" opacity=".2" /><circle cx="96" cy="41" r="2" fill="currentColor" /><circle cx="104" cy="41" r="2" fill="currentColor" opacity=".5" />
          <rect x="96" y="65" width="92" height="63" rx="6" fill="currentColor" fillOpacity=".09" /><path d="M134 83L151 96L134 109V83Z" fill="currentColor" />
          <path d="M203 74H262M203 89H250M203 104H256" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".4" /><path d="M203 120H243" stroke="#8ed6df" strokeWidth="4" strokeLinecap="round" /></g>
          <circle cx="278" cy="130" r="19" fill="#203443" stroke="#8ed6df" /><path d="M270 130L276 136L286 124" stroke="#8ed6df" strokeWidth="2" strokeLinecap="round" />
        </> : slug === 'email-marketing' ? <>
          <path d="M85 99C85 40 277 36 277 95" stroke="currentColor" opacity=".3" strokeDasharray="4 6" />
          <g className="fp-art-stack"><rect x="111" y="53" width="138" height="86" rx="12" fill="#17263b" stroke="currentColor" strokeOpacity=".7" /><path d="M115 61L180 105L245 61M114 132L156 95M246 132L204 95" stroke="currentColor" strokeOpacity=".5" /><path d="M180 35V18M165 38L158 26M195 38L202 26" stroke="currentColor" strokeLinecap="round" /></g>
          <g className="fp-art-satellite"><rect x="261" y="80" width="41" height="32" rx="8" fill="#1b3440" stroke="#8ed6df" strokeOpacity=".6" /><path d="M272 102V94M282 102V89M292 102V84" stroke="#8ed6df" strokeWidth="3" /></g>
          <circle cx="77" cy="104" r="13" fill="#1a2b40" stroke="currentColor" strokeOpacity=".4" /><path d="M72 104H82M77 99V109" stroke="currentColor" />
        </> : <>
          <rect x="89" y="25" width="185" height="113" rx="10" fill="#17243b" stroke="currentColor" strokeOpacity=".5" />
          <path d="M89 47H274M89 111H274" stroke="currentColor" opacity=".2" /><circle cx="102" cy="36" r="2" fill="currentColor" />
          <rect x="101" y="57" width="91" height="44" rx="5" fill="currentColor" fillOpacity=".12" /><path d="M139 67L155 79L139 91V67Z" fill="currentColor" />
          {[30,53,38,64,44,22,49,34].map((h,i)=><path key={i} d={`M${205+i*7} ${79-h/4}V${79+h/4}`} stroke="#8ed6df" strokeWidth="3" strokeLinecap="round" className="fp-art-wave" style={{animationDelay:`${i * -.15}s`}} />)}
          <path d="M104 124H179M191 124H255" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity=".5" />
          <path d="M181 113V136" stroke="#8ed6df" strokeWidth="2" /><rect x="66" y="71" width="40" height="52" rx="9" fill="#18313b" stroke="#8ed6df" strokeOpacity=".6" className="fp-art-satellite" /><path d="M77 84H95M77 93H89M77 102H92" stroke="#8ed6df" strokeOpacity=".6" />
        </>}
      </svg>
    </div>
  )
}
