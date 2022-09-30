export const GA_TRACING_ID =process.env.NEXT_PUBLIC_GA_TRACKING_ID;


 export const PageView = (url) => {
    window.gtag('config', GA_TRACING_ID, {
        page_path:url,
    })
 };

 export const Event = ({action, category, label, value}) => {
    window.gtag('event', action , {
        event_category:category,
        event_label:label,
        value:value,
    })
 }
