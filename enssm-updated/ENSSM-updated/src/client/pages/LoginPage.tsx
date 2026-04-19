import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 700));
    if (email === '123' && password === '123') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use username: 123 and password: 123');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-xl group-hover:bg-white/20 transition-all duration-300">
              <GraduationCap className="w-9 h-9 text-cyan-300" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">ENS-SM</p>
              <p className="text-white/60 text-xs">Higher School for Teachers of the Deaf</p>
            </div>
          </Link>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-4 py-1.5 rounded-full text-xs font-medium border border-white/20">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            First Institution of its Kind in Africa & Arab World
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="px-8 pt-8 pb-5 border-b border-white/10">
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
            <p className="text-white/60 text-sm mt-1">Sign in to access your ENS-SM portal</p>
          </div>

          <div className="px-8 py-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-500/20 border border-red-400/40 text-red-200 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">Username</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text" id="email" required value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type={showPassword ? 'text' : 'password'} id="password" required value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl pl-10 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60 transition-all"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit" disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 disabled:opacity-60 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                {isLoading
                  ? <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  : <><span>Sign In</span><ArrowRight className="w-4 h-4" /></>
                }
              </button>
            </form>
          </div>

          <div className="px-8 pb-8 text-center">
            <p className="text-white/50 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-cyan-300 font-semibold hover:text-cyan-100 hover:underline transition-colors">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
