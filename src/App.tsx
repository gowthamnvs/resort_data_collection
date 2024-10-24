import React, { useState } from 'react';
import { CircleDot, Plus } from 'lucide-react';
import BasicInfo from './components/BasicInfo';
import FacilitiesServices from './components/FacilitiesServices';
import BookingPricing from './components/BookingPricing';
import InventorySales from './components/InventorySales';
import PainPoints from './components/PainPoints';
import Partnership from './components/Partnership';
import Marketing from './components/Marketing';
import AppFeedback from './components/AppFeedback';
import { saveResort } from './services/resortService';

const steps = [
  { id: 'basic', title: 'Basic Info', component: BasicInfo },
  { id: 'facilities', title: 'Facilities & Services', component: FacilitiesServices },
  { id: 'booking', title: 'Booking & Pricing', component: BookingPricing },
  { id: 'inventory', title: 'Inventory & Sales', component: InventorySales },
  { id: 'painpoints', title: 'Pain Points', component: PainPoints },
  { id: 'partnership', title: 'Partnership', component: Partnership },
  { id: 'marketing', title: 'Marketing', component: Marketing },
  { id: 'feedback', title: 'App Feedback', component: AppFeedback },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const updateData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async () => {
    try {
      setIsSaving(true);
      setSaveError('');
      setSaveSuccess(false);

      await saveResort(formData);
      
      setSaveSuccess(true);
      setFormData({}); // Reset form
      setCurrentStep(0); // Go back to first step
    } catch (error) {
      setSaveError('Failed to save resort data. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Resort Data Collection</h1>
              <button
                onClick={() => {
                  setFormData({});
                  setCurrentStep(0);
                  setSaveSuccess(false);
                  setSaveError('');
                }}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Resort
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center ${
                      index === currentStep
                        ? 'text-blue-600'
                        : index < currentStep
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }`}
                  >
                    <CircleDot className="w-5 h-5" />
                    <span className="hidden sm:block text-sm ml-2">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <CurrentStepComponent data={formData} updateData={updateData} />

            {/* Error and Success Messages */}
            {saveError && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {saveError}
              </div>
            )}
            {saveSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                Resort data saved successfully!
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSaving}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : 'Save Resort'}
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;