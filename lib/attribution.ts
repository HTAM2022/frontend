export function parseAttribution(
  searchParams: URLSearchParams,
  referrer: string,
  landingUrl: string,
) {
  return {
    utmSource: searchParams.get("utm_source") ?? "",
    utmMedium: searchParams.get("utm_medium") ?? "",
    utmCampaign: searchParams.get("utm_campaign") ?? "",
    utmContent: searchParams.get("utm_content") ?? "",
    utmTerm: searchParams.get("utm_term") ?? "",
    fbclid: searchParams.get("fbclid") ?? "",
    ttclid: searchParams.get("ttclid") ?? "",
    scCid: searchParams.get("ScCid") ?? searchParams.get("sc_cid") ?? "",
    landingPageUrl: landingUrl,
    referrer,
    firstSeenAt: new Date().toISOString(),
  }
}
