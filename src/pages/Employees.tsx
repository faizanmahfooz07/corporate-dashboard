import React from 'react';
import { useAppSelector } from '../store/hooks';
import { employees } from '../data/mockData';

const statusColor: Record<string, { bg: string; text: string }> = {
  active: { bg: '#dcfce7', text: '#16a34a' },
  remote: { bg: '#dbeafe', text: '#1e40af' },
  'on-leave': { bg: '#fef9c3', text: '#ca8a04' },
};

const Employees: React.FC = () => {
  const { searchQuery } = useAppSelector(s => s.dashboard);

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>{filtered.length} employees found</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {filtered.map(emp => (
          <div key={emp.id} style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                {emp.avatar}
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 600, color: '#0f172a', fontSize: 15 }}>{emp.name}</p>
                <p style={{ margin: '2px 0 0', fontSize: 13, color: '#64748b' }}>{emp.role}</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: '#64748b', background: '#f1f5f9', padding: '3px 10px', borderRadius: 20 }}>{emp.department}</span>
              <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: statusColor[emp.status].bg, color: statusColor[emp.status].text }}>
                {emp.status}
              </span>
            </div>
            <p style={{ margin: '12px 0 0', fontSize: 12, color: '#94a3b8' }}>Joined: {emp.joinDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
