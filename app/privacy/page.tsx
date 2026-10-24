import { ContentPage, contentMetadata } from '@/components/content-page'
import { siteConfig } from '@/lib/site'

export const metadata = contentMetadata({
  title: 'Privacy Policy',
  description:
    'FIVE PICKED has no accounts, no forms and no newsletter, and we never sell your data. Read how we handle privacy.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title="Privacy policy"
      intro="FIVE PICKED is designed to collect as little information about you as possible. This page explains what that means in practice. Last updated: October 24, 2026."
    >
      <h2>No accounts, no forms</h2>
      <p>
        You cannot create an account on FIVE PICKED, and there are no sign-up forms, newsletters or comment boxes. We
        do not ask for your name, email address or any other personal details to use the site.
      </p>

      <h2>We do not sell your data</h2>
      <p>
        <strong>We do not sell, rent or trade personal data.</strong> We do not build advertising profiles, and we do
        not run third-party analytics or advertising trackers on this site.
      </p>

      <h2>Technical information</h2>
      <p>
        Like any website, our hosting provider may automatically process basic technical information such as your IP
        address, browser type and the pages requested. This is used only to deliver the site securely and reliably,
        for example to prevent abuse, and is handled by the hosting provider under its own privacy terms.
      </p>

      <h2>Cookies</h2>
      <p>
        FIVE PICKED does not set cookies for tracking or advertising. Because of this, you will not see a cookie
        banner on our site. Websites you visit through our links may set their own cookies, as described below.
      </p>

      <h2>Links to other websites and affiliate links</h2>
      <p>
        When you click &ldquo;Visit website&rdquo;, you leave FIVE PICKED and go to a third-party site. Some of these
        links are affiliate links. When you use one, the destination site or an affiliate network it works with may
        use cookies or similar technology to record that you arrived from FIVE PICKED, so that we can be credited for
        the referral. This happens on their side, after you click, and we do not receive your personal information
        from it. These companies have their own privacy policies, and we encourage you to read them.
      </p>

      <h2>Emailing us</h2>
      <p>
        If you choose to email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, we will use your
        message and email address only to reply to you. We do not add you to any list and do not share your message
        with third parties. You can ask us to delete your messages at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights over your personal data, such as the right to ask what we
        hold about you or to ask us to delete it. Because we collect almost no personal data, there is usually
        little to share or delete. If you have a request, email us and we will respond.
      </p>

      <h2>Children</h2>
      <p>
        FIVE PICKED is not directed at children under 13, and we do not knowingly collect personal information from
        them.
      </p>

      <h2>Changes</h2>
      <p>
        If we ever change how we handle information, we will update this page and the date above. If you have any
        questions, email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </ContentPage>
  )
}
