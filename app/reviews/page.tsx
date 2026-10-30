import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { reviews } from '@/data/reviews'
export const metadata = contentMetadata({ title: 'Product reviews and buying notes', description: 'Read independent product research with trade-offs, alternatives and links to official product details. No invented ratings or testimonials.', path: '/reviews' })
export default function ReviewsPage() { return <ContentPage eyebrow="Reviews" title="Product reviews" intro="Detailed research to help you decide who a product suits and what to check before subscribing."><ul>{reviews.map((review) => <li key={review.toolSlug}><Link href={`/reviews/${review.toolSlug}`}>{review.headline}</Link><p>{review.intro}</p></li>)}</ul></ContentPage> }
