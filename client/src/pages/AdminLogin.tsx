import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../services/adminService';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await adminLogin(username, password);

      // Store JWT token
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminUsername', data.username);

      // Redirect to admin dashboard
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-stretch font-sans selection:bg-emerald-500 selection:text-white">
      


      {/* Center: The Hero Identity */}
      <div className="hidden lg:flex flex-1 bg-gray-50 items-center justify-center p-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
            style={{ backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`, backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}>
        </div>
        
        <div className="max-w-xl relative z-10">
          <h2 className="text-[12rem] font-bold text-gray-900 leading-[0.7] tracking-tighter mb-10">
            LUSH<br/><span className="text-emerald-500">WARE.</span>
          </h2>
          <div className="flex items-start gap-8">
            <div className="w-px h-24 bg-gray-200"></div>
            <p className="text-xl text-gray-500 font-medium leading-tight">
              Hosting Your Life to  <span className="text-gray-900 underline decoration-2 decoration-emerald-500 underline-offset-8">The Next Level.</span> 
            </p>
          </div>
        </div>
      </div>

      {/* Right: The High-Precision Form */}
      <div className="w-full lg:w-[500px] xl:w-[600px] bg-white border-l border-gray-100 flex items-center justify-center p-8 md:p-16 relative">
        
        <div className="w-full max-w-sm">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-black text-white bg-gray-900 px-2 py-0.5 rounded uppercase tracking-widest">Secure</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Personnel Verification</span>
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight italic uppercase">Entry.</h1>
          </div>

          {error && (
            <div className="mb-10 p-5 bg-red-50 border-2 border-red-500 rounded-none flex items-center gap-4 transition-all animate-pulse">
              <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-[11px] font-black text-red-700 uppercase tracking-widest leading-none">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-12">
            <div className="group">
              <label className="block text-[14px] font-black text-gray-600 uppercase tracking-[0.4em] mb-4 group-focus-within:text-emerald-500 transition-colors">
                Account_ID
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                className="w-full bg-transparent border-b-4 border-gray-200 py-4 text-2xl font-bold text-gray-900 focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-300"
                placeholder="SYSTEM_ROOT"
                required
              />
            </div>

            <div className="group">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-[14px] font-black text-gray-600 uppercase tracking-[0.4em] group-focus-within:text-emerald-500 transition-colors">
                  Password
                </label>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full bg-transparent border-b-4 border-gray-200 py-4 text-2xl font-bold text-gray-900 focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-300"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-6 bg-gray-900 text-white rounded-full flex items-center justify-between px-10 group hover:bg-emerald-600 transition-all active:scale-[0.98] disabled:bg-gray-200 shadow-2xl shadow-gray-200"
            >
              <span className="text-xs font-black uppercase tracking-[0.4em]">Sign In</span>
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </form>

          <div className="mt-20 flex justify-between items-end">
              <div className="flex gap-2">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-gray-100 rounded-full"></div>)}
              </div>
              <p className="text-[10px] font-mono text-gray-300 italic">authorized_personnel_only</p>
          </div>
        </div>

        {/* Creative Corner Micro-Detail */}
        <div className="absolute top-10 right-10">
            <div className="w-20 h-20 border-r-2 border-t-2 border-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
