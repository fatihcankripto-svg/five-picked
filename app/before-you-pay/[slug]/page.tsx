import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CompanyChecklist } from '@/components/company-checklist'
import { getPaymentCompanies } from '@/lib/before-you-pay'
import { pageMetadata } from '@/lib/metadata'

export const dynamicParams = false

export function generateStaticParams() {
  return getPaymentCompanies().map(({ slug }) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const company = getPaymentCompanies().find((entry) => entry.slug === slug)
  if (!company) return {}
  return pageMetadata({
    title: `${company.name}: costs and terms before you pay`,
    description: `Read the dated source record for ${company.name}, open its official sources and work through your own payment checklist.`,
    alternates: { canonical: `/before-you-pay/${slug}` },
    // A utility view of existing records, not another competing product review.
    robots: { index: false, follow: true },
  })
}

export default async function CompanyPaymentPage({ params }: Props) {
  const { slug } = await params
  const company = getPaymentCompanies().find((entry) => entry.slug === slug)
  if (!company) notFound()
  return <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-14">
    <Breadcrumbs items={[{ label: 'Before you pay', href: '/before-you-pay' }, { label: company.name }]} />
    <h1 className="mt-10 text-4xl font-semibold tracking-tight text-foreground">{company.name}: check before you pay</h1>
    <p className="mt-5 text-muted-foreground">These are dated source records, not live quotes. Confirm the final offer on the provider’s website. Some visit links may earn us a commission. <Link href="/affiliate-disclosure" className="underline">Read our affiliate disclosure</Link>.</p>
    <noscript><p className="mt-5 text-sm text-muted-foreground">You can read the full record and open its sources without JavaScript. The check counter, reset and copy buttons need JavaScript.</p></noscript>
    <CompanyChecklist key={company.slug} company={company} />
    <p className="mt-8"><Link href="/before-you-pay" className="text-primary underline underline-offset-4">Choose another company</Link></p>
  </div>
}
