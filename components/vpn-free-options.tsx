import Link from 'next/link'

export function VpnFreeOptions() {
  return <section aria-labelledby="free-vpn-data" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="free-vpn-data" className="text-xl font-semibold text-foreground">Need a free VPN with unlimited data?</h2>
    <p className="mt-3 text-muted-foreground">Start with Proton VPN Free if your main concern is running out of data. It has no data or time cap, but that does not mean every paid feature is included. If choosing a location matters more than unlimited use, compare Windscribe’s free allowance before deciding.</p>
    <p className="mt-3 text-muted-foreground">Official plan details checked <time dateTime="2026-11-04">November 4, 2026</time>. This is a comparison of published conditions, not a speed or streaming test.</p>
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[560px] text-left">
        <caption className="mb-3 text-left text-muted-foreground">Two ongoing free plans: data allowance and the trade-off</caption>
        <thead><tr className="border-b border-border">
          {['Free plan', 'Data allowance', 'What to check', 'Official source'].map((heading) => <th key={heading} scope="col" className="px-3 py-3 font-semibold">{heading}</th>)}
        </tr></thead>
        <tbody>
          <tr className="border-b border-border align-top">
            <th scope="row" className="px-3 py-3 font-semibold">Proton VPN Free</th>
            <td className="px-3 py-3">No data or time cap; one device at a time.</td>
            <td className="px-3 py-3">Free server changes are randomly assigned and have a cooldown. You cannot freely pick any country.</td>
            <td className="px-3 py-3"><a href="https://protonvpn.com/free-vpn" className="text-primary underline underline-offset-4">Free plan</a>; <a href="https://protonvpn.com/support/change-server-free-plan" className="text-primary underline underline-offset-4">server selection</a></td>
          </tr>
          <tr className="align-top">
            <th scope="row" className="px-3 py-3 font-semibold">Windscribe Free</th>
            <td className="px-3 py-3">10 GB/month with a confirmed email; 2 GB/month without one.</td>
            <td className="px-3 py-3">Access to servers in 10 countries. Its policy says unsubscribing from promotional emails reduces the allowance to 2 GB/month.</td>
            <td className="px-3 py-3"><a href="https://windscribe.com/knowledge-base/articles/how-much-does-it-cost-to-use-windscribe" className="text-primary underline underline-offset-4">Free-plan conditions</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 className="mt-6 font-semibold text-foreground">Which trade-off can you live with?</h3>
    <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
      <li><strong className="text-foreground">You want to leave the VPN connected:</strong> Proton’s uncapped data avoids a monthly allowance running out. Connection quality still depends on your network and the server.</li>
      <li><strong className="text-foreground">You need a particular location:</strong> check Windscribe’s free server list against your destination, then decide whether its data allowance is enough.</li>
      <li><strong className="text-foreground">You want supported streaming:</strong> do not equate unlimited data with guaranteed access. <a href="https://protonvpn.com/support/streaming-troubleshooting-guide" className="text-primary underline underline-offset-4">Proton’s streaming support</a> directs free users to a paid plan for streaming coverage.</li>
    </ul>
    <h3 className="mt-6 font-semibold text-foreground">Free plan, free trial or refund?</h3>
    <p className="mt-3 text-muted-foreground">An ongoing free plan has no scheduled trial expiry. A trial lasts for a set period and may renew into a paid subscription. A money-back guarantee requires an eligible purchase and a refund request. The paid VPNs further down this page are alternatives to consider if a free plan cannot meet your needs.</p>
    <p className="mt-4 text-muted-foreground">Before paying, compare the full subscription and renewal amounts in our <Link href="/blog/2026-vpn-price-index" className="text-primary underline underline-offset-4">dated VPN price index</Link>. To check a free connection on your own network, follow our <Link href="/blog/vpn-speed-test-2026" className="text-primary underline underline-offset-4">repeatable VPN speed-check guide</Link>.</p>
  </section>
}
