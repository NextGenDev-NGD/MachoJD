import { memo } from 'react';
import { PriceBreakdownCard } from '../molecules/PriceBreakdownCard';
import { NotesSection } from '../molecules/NotesSection';
import { Button } from '../atoms/Button';
import { EstimateResult } from '../../types';

interface ResultsPanelProps {
  estimate: EstimateResult;
  onRequestCallback: () => void;
}

export const ResultsPanel = memo(({ estimate, onRequestCallback }: ResultsPanelProps) => (
  <div className="space-y-4">
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center shadow-lg">
      <p className="text-sm opacity-90 mb-1">Your Estimate</p>
      <p className="text-4xl font-bold">${estimate.breakdown.total.toLocaleString()}</p>
      <p className="text-sm opacity-80 mt-1">All-inclusive price estimate</p>
    </div>
    <PriceBreakdownCard breakdown={estimate.breakdown} />
    <NotesSection
      notes={estimate.notes}
      timeEstimate={estimate.timeEstimate}
      crewSize={estimate.crewSize}
    />
    <div className="space-y-2">
      <Button onClick={onRequestCallback} fullWidth variant="secondary">
        📞 Request Callback
      </Button>
      <p className="text-xs text-center text-gray-300">
        * Estimate only. Final pricing may vary based on on-site assessment.
      </p>
    </div>
  </div>
));
