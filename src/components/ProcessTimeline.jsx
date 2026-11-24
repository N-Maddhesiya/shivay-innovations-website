const steps = [
  ['01', 'Discovery', 'We understand your goals, audience, current process and expected outcomes.'],
  ['02', 'Scope & proposal', 'We confirm deliverables, timeline, responsibilities, exclusions and pricing.'],
  ['03', 'Design & approval', 'We share the proposed structure and visual direction for feedback.'],
  ['04', 'Development & testing', 'We build, review and test the agreed features across supported devices.'],
  ['05', 'Launch & support', 'We deploy after approval and provide handover and agreed support.'],
];

export default function ProcessTimeline() {
  return (
    <div className="process-list">
      {steps.map(([number, title, body]) => (
        <div className="process-step" key={number}>
          <div className="process-index">{number}</div>
          <div className="process-copy"><h3>{title}</h3><p>{body}</p></div>
        </div>
      ))}
    </div>
  );
}
