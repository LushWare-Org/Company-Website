import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
 Search, 
  Filter, 
  Mail, Phone, Globe, 
  Clock,  ArrowLeft,  Eye, EyeOff,
  AlertCircle,
  SearchX,
} from 'lucide-react';
import { fetchAllInquiries, updateInquiryStatus } from '../services/adminService';

interface Inquiry {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  country: string;
  inquiryType: string;
  status: 'seen' | 'not-seen';
  requirements?: string;
  organization?: string;
  createdAt: string;
  message?: string;
  industry?: string;
  project?: string;
  teamMembers?: string;
}

export default function CommandCenter() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [showFilter, setShowFilter] = useState(false);

  // Design Tokens - Emerald Theme
  const sidebarWidth = selectedInquiry ? "w-1/3" : "w-full";
  const borderStyle = "border-emerald-100/60";
  
  // Counts
  const totalCount = inquiries.length;
  const unseenCount = inquiries.filter(i => i.status === 'not-seen').length;


  // Fetch inquiries on mount
  useEffect(() => {
    const loadInquiries = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/admin');
          return;
        }
        
        const data = await fetchAllInquiries(token);
        setInquiries(Array.isArray(data) ? data : data.inquiries || []);
      } catch (err) {
        setError('Failed to load inquiries');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInquiries();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    navigate('/admin');
  };

  const setInquiryStatus = async (inquiry: Inquiry, status: 'seen' | 'not-seen') => {
    if (inquiry.status === status) return;
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) return;

      await updateInquiryStatus(inquiry._id, status, token);

      setInquiries((prev) =>
        prev.map((i) => (i._id === inquiry._id ? { ...i, status } : i))
      );

      setSelectedInquiry((prev) =>
        prev?._id === inquiry._id ? { ...prev, status } : prev
      );
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleMarkAsSeen = async (inquiry: Inquiry) => {
    const newStatus = inquiry.status === 'seen' ? 'not-seen' : 'seen';
    await setInquiryStatus(inquiry, newStatus);
  };

  const handleSelectInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    void setInquiryStatus(inquiry, 'seen');
  };

  const filteredInquiries = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return inquiries.filter((inquiry) => {
      const matchesSearch =
        `${inquiry.firstName} ${inquiry.lastName}`.toLowerCase().includes(normalizedSearch) ||
        inquiry.email.toLowerCase().includes(normalizedSearch) ||
        inquiry.organization?.toLowerCase().includes(normalizedSearch);

      const matchesType = filterType === 'all' || inquiry.inquiryType === filterType;

      return matchesSearch && matchesType;
    });
  }, [inquiries, searchTerm, filterType]);

  const inquiryDetailBlocks: Record<string, Array<{
    key: keyof Inquiry;
    label: string;
    className: string;
    labelClass: string;
    valueClass: string;
  }>> = {
    solution: [
      {
        key: 'industry',
        label: 'Industry',
        className: 'bg-blue-50/50 border-blue-200 border-2 rounded-lg p-4',
        labelClass: 'text-blue-700',
        valueClass: 'text-blue-950',
      },
      {
        key: 'requirements',
        label: 'Requirements',
        className: 'bg-blue-50/50 border-blue-200 border-2 rounded-lg p-4',
        labelClass: 'text-blue-700',
        valueClass: 'text-blue-950',
      },
    ],
    project: [
      {
        key: 'project',
        label: 'Project Name',
        className: 'bg-purple-50/80 border-purple-200 border-2 rounded-lg p-4',
        labelClass: 'text-purple-700',
        valueClass: 'text-purple-950',
      },
      {
        key: 'teamMembers',
        label: 'Team Members',
        className: 'bg-purple-50/80 border-purple-200 border-2 rounded-lg p-4',
        labelClass: 'text-purple-700',
        valueClass: 'text-purple-950',
      },
      {
        key: 'requirements',
        label: 'Requirements',
        className: 'bg-purple-50/80 border-purple-200 border-2 rounded-lg p-4',
        labelClass: 'text-purple-700',
        valueClass: 'text-purple-950',
      },
    ],
    consultation: [
      {
        key: 'message',
        label: 'Message',
        className: 'bg-amber-50 border-amber-200 border-2 rounded-lg p-4',
        labelClass: 'text-amber-700',
        valueClass: 'text-amber-950',
      },
      {
        key: 'requirements',
        label: 'Additional Details',
        className: 'bg-amber-50 rounded-lg p-4',
        labelClass: 'text-amber-700',
        valueClass: 'text-amber-950',
      },
    ],
  };

  return (
    <div className="flex h-screen bg-emerald-50 text-emerald-950 font-sans overflow-hidden">
      
        <aside className="w-16 flex flex-col items-center py-8 border-r border-emerald-100 bg-white justify-between shadow-[2px_0_12px_rgba(0,0,0,0.02)] z-30">
          
          {/* Top Section: Branding & View Stats */}
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Animated Logo */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1  rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            {/* Vertical Metric Badges */}
            <nav className="flex flex-col gap-4">

              <div className="group relative flex justify-center">
                <div className="relative p-2.5 text-orange-600 hover:bg-orange-50 rounded-xl transition-all">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
                  {unseenCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-orange-600 text-white text-[9px] font-black rounded-full border-2 border-white shadow-sm">
                      {unseenCount}
                    </span>
                  )}
                </div>
                <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 px-3 py-1.5 rounded-lg bg-orange-600 text-white text-[12px] font-bold uppercase tracking-widest transition-all origin-left whitespace-nowrap z-50 shadow-xl">
                  New : {unseenCount}
                </span>
              </div>

              {/* Total Stat Badge */}
              <div className="group relative flex justify-center">
                <div className="relative p-2.5 text-emerald-600 bg-emerald-50 rounded-xl border border-emerald-100 transition-all">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                  {totalCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-emerald-600 text-white text-[9px] font-black rounded-full border-2 border-white shadow-sm">
                      {totalCount}
                    </span>
                  )}
                </div>
                {/* Tooltip Label */}
                <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[12px] font-bold uppercase tracking-widest transition-all origin-left whitespace-nowrap z-50 shadow-xl">
                  Total: {totalCount}
                </span>
              </div>


            </nav>
          </div>

          {/* Bottom Section: Profile & Logout */}
          <div className="flex flex-col items-center gap-6">

            
            <button 
              onClick={handleLogout}
              className="group relative p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
              title="Logout"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
              {/* Tooltip */}
              <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 px-3 py-1.5 rounded-lg bg-red-600 text-white text-[12px] font-bold uppercase tracking-widest transition-all origin-left whitespace-nowrap z-50 shadow-xl">
                Logout
              </span>
            </button>
          </div>
        </aside>

      {/* 2. Content Area */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* List Section */}
        <section className={`${sidebarWidth} flex flex-col transition-all duration-300 ease-in-out border-r ${borderStyle} bg-white`}>
          <header className="px-6 py-5 bg-gradient-to-r from-white via-emerald-50/30 to-white border-b border-emerald-100 flex flex-col gap-4">
            
            {/* Left Side: Title + Status Badge */}
            <div className="flex items-center gap-4">

              <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight leading-none">
                  Client Requests
                </h2>

              </div>
            </div>

            {/* Right Side: Interactive Search + Actions */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              <div className="relative group flex-1 md:flex-auto">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search 
                    className="text-slate-400 group-focus-within:text-emerald-500 group-focus-within:scale-110 transition-all duration-300" 
                    size={18} 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Find a request..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-11 pr-4 py-2.5 bg-white border border-slate-400 rounded-2xl text-sm transition-all duration-300 
                            placeholder:text-slate-600
                            hover:border-emerald-300
                            focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:shadow-inner"
                />
                <kbd className="hidden md:inline-flex absolute right-3 top-1/2 -translate-y-1/2 h-5 items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-sans text-[10px] font-medium text-slate-400">
                  ⌘K
                </kbd>
              </div>

              {/* Filter Dropdown */}
              <div className="relative flex-shrink-0">
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className={`p-2.5 rounded-xl transition-all border w-full md:w-auto ${
                    filterType !== 'all' 
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-600' 
                      : 'bg-slate-50 border-slate-400 text-slate-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600'
                  }`}
                >
                  <Filter size={20} />
                </button>
                
                {showFilter && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-50">
                    <div className="p-3 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Filter by Type</p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setFilterType('all');
                          setShowFilter(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                          filterType === 'all'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        All Inquiries
                      </button>
                      <button
                        onClick={() => {
                          setFilterType('solution');
                          setShowFilter(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium mt-1 ${
                          filterType === 'solution'
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        Solution Inquiries
                      </button>
                      <button
                        onClick={() => {
                          setFilterType('project');
                          setShowFilter(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium mt-1 ${
                          filterType === 'project'
                            ? 'bg-purple-100 text-purple-700'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        Project Inquiries
                      </button>
                      <button
                        onClick={() => {
                          setFilterType('consultation');
                          setShowFilter(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium mt-1 ${
                          filterType === 'consultation'
                            ? 'bg-amber-100 text-amber-700'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        Consultation Inquiries
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50/50">
            {loading ? (
              /* 1. Animated Skeleton Loader */
              <div className="p-4 space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 animate-pulse flex gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-3 bg-slate-100 rounded w-1/3" />
                      <div className="h-3 bg-slate-100 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              /* 2. Error State with "Try Again" vibe */
              <div className="flex flex-col items-center justify-center h-64 p-6 text-center">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle size={32} />
                </div>
                <h3 className="text-slate-800 font-semibold text-lg">Something went wrong</h3>
                <p className="text-slate-500 text-sm max-w-[200px] mt-1">{error}</p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              /* 3. Creative Empty State */
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-emerald-100 rounded-full blur-2xl opacity-50 scale-150" />
                  <div className="relative w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center text-emerald-500">
                    <SearchX size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-slate-800 font-bold text-xl">No results found</h3>
                <p className="text-slate-500 text-sm mt-2 max-w-[240px]">
                  We couldn't find any inquiries matching <span className="font-bold text-emerald-600">"{searchTerm}"</span>
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-6 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Clear search and try again
                </button>
              </div>
            ) : (
              /* 4. Active List with Hover Effects */
              <div className="p-4 space-y-3">
                {filteredInquiries.map((inquiry, index) => (
                  <div 
                    key={inquiry._id}
                    className="transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <InquiryItem 
                      inquiry={inquiry}
                      active={selectedInquiry?._id === inquiry._id}
                      onClick={() => handleSelectInquiry(inquiry)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. Detail Section (Conditional) */}
        {selectedInquiry && (
          <section className="flex-1 bg-white flex flex-col animate-in slide-in-from-right duration-300">
            <header className="px-8 py-4 border-b border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-emerald-50/30 to-white">
            <button 
              onClick={() => setSelectedInquiry(null)}
              className="group flex items-center gap-2.5 px-4 py-2 bg-slate-50 hover:bg-white border border-slate-200/60 rounded-full transition-all duration-300 active:scale-95 flex-shrink-0"
            >
              <div className="relative">
                <ArrowLeft 
                  size={16} 
                  className="text-slate-500 group-hover:-translate-x-1 transition-transform duration-300" 
                />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-600 group-hover:text-emerald-600 transition-colors">
                Back to List
              </span>
            </button>
              <div className="flex gap-3 flex-shrink-0">
                <button 
                  onClick={() => handleMarkAsSeen(selectedInquiry)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 whitespace-nowrap ${
                    selectedInquiry.status === 'seen' 
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                  }`}
                >
                  {selectedInquiry.status === 'seen' ? <Eye size={14} /> : <EyeOff size={14} />}
                  {selectedInquiry.status === 'seen' ? 'MARK UNSEEN' : 'MARK SEEN'}
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-xl font-bold text-emerald-700">
                    {selectedInquiry.firstName.charAt(0)}{selectedInquiry.lastName.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                      {selectedInquiry.firstName} {selectedInquiry.lastName}
                    </h2>
                    <p className="text-gray-600 font-medium">
                      {selectedInquiry.organization || selectedInquiry.inquiryType.charAt(0).toUpperCase() + selectedInquiry.inquiryType.slice(1)} Inquiry
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-2 gap-14 mb-16">
                  <DetailBlock icon={<Mail />} label="Email" value={selectedInquiry.email} />
                  <DetailBlock icon={<Phone />} label="WhatsApp" value={selectedInquiry.whatsapp} />
                  <DetailBlock icon={<Globe />} label="Location" value={selectedInquiry.country} />
                  <DetailBlock icon={<Clock />} label="Received" value={new Date(selectedInquiry.createdAt).toLocaleDateString()} />
                </div>

                {/* Conditional Fields Based on Inquiry Type */}
                {inquiryDetailBlocks[selectedInquiry.inquiryType]?.some((block) => {
                  const value = selectedInquiry[block.key];
                  return value !== undefined && value !== '';
                }) && (
                  <div className="space-y-6 mb-8">
                    {inquiryDetailBlocks[selectedInquiry.inquiryType].map((block) => {
                      const value = selectedInquiry[block.key];
                      if (value === undefined || value === '') return null;

                      return (
                        <div key={block.label} className={block.className}>
                          <p className={`text-xs font-black uppercase tracking-widest mb-1 ${block.labelClass}`}>
                            {block.label}
                          </p>
                          <p className={`text-lg font-semibold ${block.valueClass}`}>
                            {String(value)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* General Message/Details (if any) */}
                {(selectedInquiry.message || selectedInquiry.requirements) && !selectedInquiry.inquiryType && (
                  <div className="space-y-4 p-8 border-emerald-200 border-2 bg-emerald-50 rounded-3xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Details</h3>
                    <div className="text-lg leading-relaxed text-emerald-800">
                      {selectedInquiry.message && <p className="mb-4">"{selectedInquiry.message}"</p>}
                      {selectedInquiry.requirements && <p>"{selectedInquiry.requirements}"</p>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

// --- Internal Components ---

function InquiryItem({ inquiry, active, onClick }: { inquiry: Inquiry; active: boolean; onClick: () => void }) {


  const getTimeAgo = (date: string) => {
    const now = new Date();
    const submitted = new Date(date);
    const diff = Math.floor((now.getTime() - submitted.getTime()) / 1000);
    
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div 
      onClick={onClick}
      className={`relative px-5 py-4 rounded-lg cursor-pointer transition-all duration-300 ${
        active 
          ? 'shadow-md z-10 scale-[1.02] border-l-4 border-l-emerald-500' 
          : ''
      } ${
        inquiry.status === 'not-seen'
          ? inquiry.inquiryType === 'solution'
            ? 'border-blue-500 border hover:border-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
            : inquiry.inquiryType === 'project'
            ? 'border-purple-500 border hover:border-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.1)]'
            : 'border-amber-500 border hover:border-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
          : 'border border-transparent'
      }`}
    >
      <div className="flex justify-between items-center mb-1">
        <h4 className={`font-bold text-lg transition-colors ${
          active 
            ? 'text-emerald-700' 
            : inquiry.status === 'not-seen'
            ? 'text-gray-950 font-extrabold'
            : 'text-gray-900'
        }`}>
          {inquiry.firstName} {inquiry.lastName}
        </h4>
        <span className={`text-xs font-bold uppercase tracking-tighter ${
          inquiry.status === 'not-seen' ? 'text-gray-800 font-extrabold' : 'text-gray-700'
        }`}>
          {getTimeAgo(inquiry.createdAt)}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <p className={`text-sm font-medium truncate flex-1 ${
          inquiry.status === 'not-seen' ? 'text-gray-700 font-semibold' : 'text-gray-500'
        }`}>
          {inquiry.organization || inquiry.email}
        </p>
        
        {/* Dynamic Badge */}
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-inset transition-all ${
          inquiry.inquiryType === 'solution' 
            ? 'bg-blue-100 text-blue-700 ring-blue-600/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]' 
            : inquiry.inquiryType === 'project'
            ? 'bg-purple-100 text-purple-700 ring-purple-600/20 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
            : 'bg-amber-100 text-amber-700 ring-amber-600/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
        }`}>
          {inquiry.inquiryType}
        </span>
      </div>
    </div>
  );
}

function DetailBlock({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 text-gray-600 font-bold scale-100">{icon}</div>
      <div>
        <p className="text-[12px] font-bold uppercase tracking-widest text-emerald-700 mb-0.5">{label}</p>
        <p className="text-md font-semibold text-emerald-900">{value}</p>
      </div>
    </div>
  );
}