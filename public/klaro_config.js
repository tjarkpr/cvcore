var klaroConfig = {
    acceptAll: true,
    services: [
        {
            name: 'google-tag-manager',
            required: true,
            purposes: ['marketing'],
            onAccept: `
                for(let k of Object.keys(opts.consents)){
                    if (opts.consents[k]){
                        let eventName = 'klaro-'+k+'-accepted'
                        dataLayer.push({'event': eventName})
                    }
                }
            `,
            onInit: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){dataLayer.push(arguments)}
                gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied'})
                gtag('set', 'ads_data_redaction', true)
            `,
        },
        {
            name: 'google-analytics',
            cookies: [/^_ga(_.*)?/],
            purposes: ['marketing'],
            onAccept: `gtag('consent', 'update', {'analytics_storage': 'granted',})`,
            onDecline: `gtag('consent', 'update', {'analytics_storage': 'denied',})`,
        }
    ]
}