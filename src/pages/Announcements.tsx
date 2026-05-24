import React from 'react';
import { announcements } from '../data/mockData';

const tagColor: Record<string, { bg: string; text: string }> = {
  Event: { bg: '#dbeafe', text: '#1e40af' },
  Policy: { bg: '#fef9c3', text: '#ca8a04' },
  Tech: { bg: '#dcfce7', text: '#16a34a' },
};

const Announcements: React.FC = () => (
  <div style={{ padding: 24 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {announcements.map(a => (
        <div key={a.id} style={{ background: '#fff', borderRadius: 12, padding: 22, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: tagColor[a.tag]?.bg || '#f1f5f9', color: tagColor[a.tag]?.text || '#64748b' }}>{a.tag}</span>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f172a' }}>{a.title}</h3>
            </div>
            <span style={{ fontSize: 12, color: '#94a3b8', flexShrink: 0 }}>{a.date}</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{a.body}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Announcements;
