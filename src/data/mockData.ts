import { Employee, Task, Announcement } from '../types';

export const employees: Employee[] = [
  { id: '1', name: 'Faizan Mahfooz', department: 'Engineering', role: 'Frontend Intern', status: 'active', avatar: 'FM', joinDate: '2025-01-10' },
  { id: '2', name: 'Priya Sharma', department: 'Design', role: 'UI/UX Designer', status: 'remote', avatar: 'PS', joinDate: '2024-03-15' },
  { id: '3', name: 'Arjun Mehta', department: 'Engineering', role: 'Senior Engineer', status: 'active', avatar: 'AM', joinDate: '2023-06-01' },
  { id: '4', name: 'Liu Wei', department: 'Product', role: 'Product Manager', status: 'on-leave', avatar: 'LW', joinDate: '2022-11-20' },
  { id: '5', name: 'Sara Khan', department: 'HR', role: 'HR Specialist', status: 'active', avatar: 'SK', joinDate: '2024-07-05' },
  { id: '6', name: 'Ravi Patel', department: 'Engineering', role: 'Backend Engineer', status: 'remote', avatar: 'RP', joinDate: '2023-09-12' },
];

export const tasks: Task[] = [
  { id: '1', title: 'Redesign dashboard homepage', assignee: 'Priya Sharma', priority: 'high', status: 'in-progress', deadline: '2025-06-10' },
  { id: '2', title: 'Fix Redux state sync bug', assignee: 'Faizan Mahfooz', priority: 'high', status: 'todo', deadline: '2025-06-08' },
  { id: '3', title: 'Write API integration docs', assignee: 'Arjun Mehta', priority: 'medium', status: 'done', deadline: '2025-06-05' },
  { id: '4', title: 'Onboard new engineering hires', assignee: 'Sara Khan', priority: 'medium', status: 'in-progress', deadline: '2025-06-15' },
  { id: '5', title: 'Optimize Webpack bundle size', assignee: 'Faizan Mahfooz', priority: 'high', status: 'todo', deadline: '2025-06-12' },
  { id: '6', title: 'Q2 product roadmap review', assignee: 'Liu Wei', priority: 'low', status: 'done', deadline: '2025-06-01' },
];

export const announcements: Announcement[] = [
  { id: '1', title: 'ByteDance Hackathon 2025', body: 'Register for the annual internal hackathon. Teams of 3–5. Submit ideas by June 15.', date: '2025-06-01', tag: 'Event' },
  { id: '2', title: 'Office Hours Update', body: 'The Kolkata office will follow new flex timing from June 10. Check the HR portal for details.', date: '2025-05-28', tag: 'Policy' },
  { id: '3', title: 'New Design System Released', body: 'Version 3.0 of the internal component library is live. Migration guide in Confluence.', date: '2025-05-25', tag: 'Tech' },
];

export const activityData = [
  { day: 'Mon', tasks: 4, meetings: 2 },
  { day: 'Tue', tasks: 7, meetings: 4 },
  { day: 'Wed', tasks: 5, meetings: 3 },
  { day: 'Thu', tasks: 9, meetings: 5 },
  { day: 'Fri', tasks: 6, meetings: 2 },
  { day: 'Sat', tasks: 2, meetings: 1 },
  { day: 'Sun', tasks: 1, meetings: 0 },
];

export const departmentData = [
  { name: 'Engineering', value: 45 },
  { name: 'Design', value: 15 },
  { name: 'Product', value: 20 },
  { name: 'HR', value: 12 },
  { name: 'Others', value: 8 },
];
