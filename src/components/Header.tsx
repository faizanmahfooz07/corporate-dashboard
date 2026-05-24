import React from 'react';
import { Search, Bell } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSearchQuery } from '../store/dashboardSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeTab, searchQuery } = useAppSelector(s => s.dashboard);

  const tabLabels: Record<string, string> = {
    overview: 'Overview', employees: 'Employees',
    tasks: 'Tasks', announcements: 'Announcements', settings: 'Settings',
  };

  return (
    <header style={{
      height: 64, background: '#fff', borderBottom: '1px solid #e2e8f0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', flexShrink: 0,
    }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: 0 }}>
        {tabLabels[activeTab]}
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', borderRadius: 8, padding: '8px 12px', gap: 8 }}>
          <Search size={16} color="#94a3b8" />
          <input
            value={searchQuery}
            onChange={e => dispatch(setSearchQuery(e.target.value))}
            placeholder="Search..."
            style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: 14, color: '#0f172a', width: 180 }}
          />
        </div>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color="#64748b" />
          <span style={{ position: 'absolute', top: -4, right: -4, background: '#e11d48', borderRadius: '50%', width: 8, height: 8 }} />
        </div>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
          FM
        </div>
      </div>
    </header>
  );
};

export default Header;
