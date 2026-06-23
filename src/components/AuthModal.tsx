import { useState, useRef, useEffect } from "react";
import { X, Eye, EyeOff, ArrowLeft } from "lucide-react";
import ForgotPasswordModal from "./ForgotPassword";
import TermsAndConditionsModal from "./TermsandConditions";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: "signin" | "signup";
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode,
}: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [loginType, setLoginType] = useState<"id" | "mobile">("id");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(30);
  const [showPassword, setShowPassword] = useState(false);
  const [signupType, setSignupType] = useState<"firm" | "individual">(
    "individual",
  );
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [AgeAccepted, setAgeAccepted] = useState(false);

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setMode(initialMode);
    setShowOtp(false);
    setOtp(["", "", "", "", "", ""]);
    setSignupType("individual");
    setTermsAccepted(false);
  }, [initialMode, isOpen]);

  useEffect(() => {
    if (showOtp && otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showOtp, otpTimer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />
        <div className="relative bg-white rounded-2xl w-full max-w-md max-h-[90vh] flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="relative gradient-gold px-6 py-5 flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            {showOtp ? (
              <button
                onClick={() => setShowOtp(false)}
                className="absolute top-4 left-4 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            ) : null}
            <h2 className="text-2xl font-bold text-white pr-8">
              {showOtp
                ? "Verify OTP"
                : mode === "signin"
                  ? "Sign In"
                  : "Sign Up"}
            </h2>
            <p className="text-white/80 text-sm mt-1 pr-8">
              {showOtp
                ? "Enter the 6-digit code sent to your device"
                : mode === "signin"
                  ? "Welcome back to Deal Forever"
                  : "Join the Deal Forever family"}
            </p>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {showOtp ? (
                /* OTP Section */
                <div>
                  <div className="text-center mb-6">
                    <p className="text-sm text-[#555] mb-4">
                      Please enter the 6-digit OTP we sent to
                    </p>
                    <p className="text-sm font-semibold text-[#191717] mb-6">
                      97*****6789
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 mb-6">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          otpRefs.current[i] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                        className="otp-input"
                      />
                    ))}
                  </div>
                  <div className="text-center mb-6">
                    {otpTimer > 0 ? (
                      <p className="text-sm text-[#888]">
                        Resend OTP in{" "}
                        <span className="text-[#aa8453] font-semibold">
                          {String(otpTimer).padStart(2, "0")}:
                          {String(otpTimer).padStart(2, "0")}
                        </span>
                      </p>
                    ) : (
                      <button
                        onClick={() => setOtpTimer(30)}
                        className="text-sm text-[#aa8453] font-semibold hover:underline"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                  <button className="text-sm text-[#555] hover:text-[#aa8453] transition-colors mb-4 w-full text-center">
                    Edit Phone Number
                  </button>
                  <button className="btn-primary w-full rounded-lg">
                    Sign In
                  </button>
                </div>
              ) : mode === "signin" ? (
                /* Sign In Form */
                <div>
                  {/* Login Type Toggle */}
                  <div className="flex bg-[#f5f3ef] rounded-lg p-1 mb-6">
                    <button
                      onClick={() => setLoginType("id")}
                      className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                        loginType === "id"
                          ? "bg-white shadow text-[#191717]"
                          : "text-[#888]"
                      }`}
                    >
                      Distributor ID
                    </button>
                    <button
                      onClick={() => setLoginType("mobile")}
                      className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                        loginType === "mobile"
                          ? "bg-white shadow text-[#191717]"
                          : "text-[#888]"
                      }`}
                    >
                      Mobile / Email
                    </button>
                  </div>

                  {loginType === "id" ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#555] mb-1">
                          Distributor ID
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Distributor ID"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#555] mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors pr-12"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#aa8453]"
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-[#555]">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#aa8453] focus:ring-[#aa8453]"
                          />
                          Remember me
                        </label>
                        <button
                          onClick={() => setShowForgotModal(true)}
                          className="text-sm text-[#aa8453] font-medium hover:underline"
                        >
                          Forgot Password?
                        </button>
                      </div>
                      <button className="btn-primary w-full rounded-lg">
                        Sign In
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#555] mb-1">
                          Mobile Number or Email
                        </label>
                        <input
                          type="text"
                          placeholder="Enter mobile number or email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                        />
                      </div>
                      <button
                        onClick={() => setShowOtp(true)}
                        className="btn-primary w-full rounded-lg"
                      >
                        Send OTP
                      </button>
                    </div>
                  )}

                  <div className="mt-6 text-center">
                    <p className="text-sm text-[#888]">
                      Don't have an account?{" "}
                      <button
                        onClick={() => setMode("signup")}
                        className="text-[#aa8453] font-semibold hover:underline"
                      >
                        Create account
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                /* Sign Up Form */
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-2">
                      Type
                    </label>
                    <div className="flex gap-3">
                      <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#aa8453] transition-colors has-[:checked]:border-[#aa8453] has-[:checked]:bg-[#faf8f5]">
                        <input
                          type="radio"
                          name="type"
                          value="firm"
                          checked={signupType === "firm"}
                          onChange={() => setSignupType("firm")}
                          className="text-[#aa8453] focus:ring-[#aa8453]"
                        />
                        <span className="text-sm font-medium">Firm</span>
                      </label>
                      <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#aa8453] transition-colors has-[:checked]:border-[#aa8453] has-[:checked]:bg-[#faf8f5]">
                        <input
                          type="radio"
                          name="type"
                          value="individual"
                          checked={signupType === "individual"}
                          onChange={() => setSignupType("individual")}
                          className="text-[#aa8453] focus:ring-[#aa8453]"
                        />
                        <span className="text-sm font-medium">Individual</span>
                      </label>
                    </div>
                  </div>

                  {signupType === "firm" && (
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Firm Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your firm name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Country"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Pincode"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      District
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your District"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Sponsor ID
                    </label>
                    <input
                      type="text"
                      placeholder="Enter sponsor ID"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">
                      Sponsor Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter sponsor name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="border-t pt-4 mt-4 space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#aa8453] focus:ring-[#aa8453]"
                      />

                      <span className="text-xs text-[#555]">
                        I have read and agree to the{" "}
                        <button
                          type="button"
                          onClick={() => setShowTermsModal(true)}
                          className="text-[#aa8453] font-semibold hover:underline"
                        >
                          Terms and Conditions
                        </button>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={AgeAccepted}
                        onChange={() => setAgeAccepted(!AgeAccepted)}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#aa8453] focus:ring-[#aa8453]"
                      />

                      <span className="text-xs text-[#555]">
                        I am at least 18 years of age
                      </span>
                    </label>
                  </div>

                  <button
                    disabled={!termsAccepted && !AgeAccepted}
                    className="btn-primary w-full rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Create Account
                  </button>
                  <div className="text-center">
                    <p className="text-sm text-[#888]">
                      Already have an account?{" "}
                      <button
                        onClick={() => setMode("signin")}
                        className="text-[#aa8453] font-semibold hover:underline"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={showForgotModal}
        onClose={() => setShowForgotModal(false)}
      />

      {/* Terms and Conditions Modal */}
      <TermsAndConditionsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />
    </>
  );
}