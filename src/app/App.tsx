import { useState } from 'react';
import { Eye, EyeOff, Chrome, Apple, Linkedin, Instagram, Globe } from 'lucide-react';
import loginImage from 'figma:asset/fdd938158edaa77698f6588026b69f60d6b40941.png';
import logo from 'figma:asset/923f72df8f09213cbcf726eac15640015cadd1f4.png';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in with:', { email, password, rememberMe });
  };

  const handleSSOLogin = (provider: string) => {
    console.log(`Sign in with ${provider}`);
    // Placeholder for SSO integration
  };

  return (
    <div className="size-full flex">
      {/* Left Panel - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 to-white p-8 xl:p-12 flex-col justify-between h-full overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 justify-center gap-6 xl:gap-8">
          <h1 className="text-[#002F6D] font-bold leading-tight text-center text-5xl xl:text-6xl pt-4">
            Empowering<br />Hospitality
          </h1>
          
          <div className="flex-1 flex items-center justify-center min-h-0">
            <img 
              src={loginImage} 
              alt="Bepoz Platform Features" 
              className="max-w-lg xl:max-w-2xl w-full h-auto max-h-full object-contain drop-shadow-xl"
            />
          </div>

          {/* Advertisement / Info Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm shrink-0 bg-[rgba(233,233,233,0.6)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wide">New</span>
              <span className="text-sm font-semibold text-gray-800">Check out our new Loyalty Kiosk</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2 xl:line-clamp-none">
              Discover how our Loyalty Kiosk changes the way customers connect with your venue. Explore our modern, intuitive loyalty experience built for real venues.
            </p>
            <a href="https://bepoz.com.au" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] text-sm font-medium hover:underline inline-flex items-center gap-1 group">
              Explore features 
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Footer with Socials */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200/60 shrink-0">
          <div className="text-gray-500 text-sm">
            © Bepoz Pty Ltd 2024
          </div>
          
          <div className="flex items-center gap-5">
            <a 
              href="https://www.linkedin.com/company/bepoz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077B5] transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.instagram.com/bepoz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E1306C] transition-colors transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://bepoz.com.au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0066FF] transition-colors transform hover:scale-110"
              aria-label="Website"
            >
              <Globe size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src={logo} 
              alt="Bepoz Logo" 
              className="w-48 h-auto mx-auto block"
            />
          </div>

          {/* Welcome Section */}
          <div className="mb-8 text-center">
            <h3 className="text-gray-900 text-2xl font-bold mb-2">Welcome to Bepoz Nexus</h3>
            <p className="text-gray-600 text-sm">Manage your Bepoz cloud platform securely, anywhere</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSignIn} className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-gray-600 text-sm mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#0066FF] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#0066FF] text-white py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* SSO Buttons */}
          <div className="space-y-3">
            {/* Google SSO */}
            <button
              type="button"
              onClick={() => handleSSOLogin('Google')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <Chrome size={20} className="text-gray-700" />
              <span className="text-gray-700">Continue with Google</span>
            </button>

            {/* Microsoft SSO */}
            <button
              type="button"
              onClick={() => handleSSOLogin('Microsoft')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <svg className="w-5 h-5" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h11v11H0z" fill="#F25022"/>
                <path d="M12 0h11v11H12z" fill="#7FBA00"/>
                <path d="M0 12h11v11H0z" fill="#00A4EF"/>
                <path d="M12 12h11v11H12z" fill="#FFB900"/>
              </svg>
              <span className="text-gray-700">Continue with Microsoft</span>
            </button>

            {/* Apple SSO */}
            <button
              type="button"
              onClick={() => handleSSOLogin('Apple')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <Apple size={20} className="text-gray-700" />
              <span className="text-gray-700">Continue with Apple</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-[#0066FF] hover:underline">
                Sign up now
              </a>
            </p>
          </div>

          {/* Mobile Footer */}
          <div className="lg:hidden mt-12 text-center text-gray-500 text-sm">
            © Bepoz Pty Ltd 2024
          </div>
        </div>
      </div>
    </div>
  );
}