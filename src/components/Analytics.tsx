import Script from "next/script";

/**
 * Analytics hook (Part 5). Renders a GA4 tag only when a measurement ID is
 * supplied via NEXT_PUBLIC_ANALYTICS_ID — otherwise no-ops, so the feature is
 * wired and ready but stays dormant until Travis provides an ID.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
