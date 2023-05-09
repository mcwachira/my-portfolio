export const GA_TRACING_ID =process.env.NEXT_PUBLIC_GA_TRACKING_ID;


//pagerView :tracks users navigating to different pages
 export const PageView = (url) => {
    if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACING_ID, {
        page_path:url,
    })
}
 };

 //event: used to track events
 export const Event = ({action, category, label, value}) => {
    window.gtag('event', action , {
        event_category:category,
        event_label:label,
        value:value,
    })
 }
