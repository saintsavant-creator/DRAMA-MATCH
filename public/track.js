// DramaMatch lightweight analytics tracker
(function() {
  try {
    var p = window.location.pathname;
    var s = window.location.search;
    var params = new URLSearchParams(s);
    var data = JSON.stringify({
      page: p,
      referrer: document.referrer || '',
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || ''
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track/pageview', new Blob([data], { type: 'application/json' }));
    } else {
      fetch('/api/track/pageview', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: data, keepalive: true });
    }
  } catch(e) {}
})();
