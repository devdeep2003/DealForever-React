import { X } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPassword({ isOpen, onClose }: ForgotPasswordModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-md max-h-[90vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="relative gradient-gold px-6 py-5 rounded-t-2xl flex-shrink-0">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold text-white pr-8">Forgot Your Password</h2>
          <p className="text-white/80 text-xs mt-2">
            Please enter your registered Dealforever User ID and click on the submit button. A new password will be generated and sent to you on your Email ID and as an SMS on your mobile number that has been registered.
          </p>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#191717] text-center mb-6">Change Password For</h3>
              <div>
                <label className="block text-sm font-medium text-[#555] mb-2">Distributor ID</label>
                <input
                  type="text"
                  placeholder="Enter your Distributor ID"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#aa8453] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Button */}
        <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0">
          <button className="btn-primary w-full rounded-lg">Submit</button>
        </div>
      </div>
    </div>
  );
}
