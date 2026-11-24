export function BrowserPreview({ style = 'corporate' }) {
  return (
    <div className={`browser-preview preview-${style}`} aria-hidden="true">
      <div className="browser-bar"><i /><i /><i /><span /></div>
      <div className="browser-content">
        <div className="preview-nav"><b /><span /><span /><span /></div>
        <div className="preview-hero"><div className="preview-lines"><i /><i /><i /><b /></div><div className="preview-visual"><span /></div></div>
        <div className="preview-cards"><i /><i /><i /></div>
      </div>
    </div>
  );
}

export function PhonePreview({ color = 'orange' }) {
  return (
    <div className={`phone-preview phone-${color}`} aria-hidden="true">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-brand" />
        <div className="phone-banner" />
        <div className="phone-row"><i /><span /></div>
        <div className="phone-row"><i /><span /></div>
        <div className="phone-row"><i /><span /></div>
        <div className="phone-action" />
      </div>
    </div>
  );
}
