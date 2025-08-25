import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUtmParams() {
  if (typeof window === 'undefined') return {}
  
  const url = new URL(window.location.href)
  const utmSource = url.searchParams.get('utm_source')
  const utmMedium = url.searchParams.get('utm_medium')
  const utmCampaign = url.searchParams.get('utm_campaign')
  const utmTerm = url.searchParams.get('utm_term')
  const utmContent = url.searchParams.get('utm_content')
  
  const utmParams: Record<string, string> = {}
  
  if (utmSource) utmParams.utm_source = utmSource
  if (utmMedium) utmParams.utm_medium = utmMedium
  if (utmCampaign) utmParams.utm_campaign = utmCampaign
  if (utmTerm) utmParams.utm_term = utmTerm
  if (utmContent) utmParams.utm_content = utmContent
  
  return utmParams
}