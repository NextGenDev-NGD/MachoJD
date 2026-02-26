import { useState } from 'react';
import { useTreeEstimator } from './hooks/useTreeEstimator';
import { EstimatorForm } from './components/organisms/EstimatorForm';
import { ResultsPanel } from './components/organisms/ResultsPanel';
import { CallbackModal } from './components/organisms/CallbackModal';

export default function TreeCuttingEstimator() {
  const {
    treeDetails,
    serviceOptions,
    locationDetails,
    estimate,
    isCalculating,
    updateTreeDetails,
    updateServiceOptions,
    updateLocationDetails,
    calculatePrice,
    reset,
  } = useTreeEstimator();

  const [showModal, setShowModal] = useState(false);

  const handleCallbackSubmit = (name: string, phone: string) => {
    setShowModal(false);
    alert(`Thank you, ${name}! We'll call you at ${phone} shortly.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center text-white mb-8 pt-6">
          <h1 className="text-4xl font-bold mb-2">🌳 Tree Service Calculator</h1>
          <p className="text-green-200 text-lg">Professional estimates in seconds</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EstimatorForm
            treeDetails={treeDetails}
            serviceOptions={serviceOptions}
            locationDetails={locationDetails}
            isCalculating={isCalculating}
            onUpdateTree={updateTreeDetails}
            onUpdateService={updateServiceOptions}
            onUpdateLocation={updateLocationDetails}
            onCalculate={calculatePrice}
            onReset={reset}
          />

          <div>
            {estimate ? (
              <ResultsPanel
                estimate={estimate}
                onRequestCallback={() => setShowModal(true)}
              />
            ) : (
              <div className="bg-white bg-opacity-10 rounded-xl p-10 text-center text-white border border-white border-opacity-20 h-full flex flex-col items-center justify-center">
                <p className="text-6xl mb-4">🌿</p>
                <p className="text-xl font-semibold mb-2">Ready to Estimate</p>
                <p className="text-green-200">
                  Fill in the details on the left and click{' '}
                  <strong>Calculate Estimate</strong> to get your price.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CallbackModal
        isOpen={showModal}
        estimateTotal={estimate?.breakdown.total ?? 0}
        onClose={() => setShowModal(false)}
        onSubmit={handleCallbackSubmit}
      />
    </div>
  );
}
