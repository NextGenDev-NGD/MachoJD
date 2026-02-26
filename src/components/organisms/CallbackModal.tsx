import { memo, useState } from 'react';
import { Button } from '../atoms/Button';

interface CallbackModalProps {
  isOpen: boolean;
  estimateTotal: number;
  onClose: () => void;
  onSubmit: (name: string, phone: string) => void;
}

export const CallbackModal = memo(({ isOpen, estimateTotal, onClose, onSubmit }: CallbackModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-xl font-bold text-gray-800 mb-1">📞 Request Callback</h2>
        <p className="text-sm text-gray-500 mb-4">
          Your estimate:{' '}
          <span className="font-bold text-green-600">${estimateTotal.toLocaleString()}</span>
        </p>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="John Smith"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <Button onClick={handleSubmit} fullWidth disabled={!name || !phone}>
            Submit Request
          </Button>
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
});
