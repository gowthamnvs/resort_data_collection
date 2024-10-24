import React from 'react';

const AppFeedback = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Overall App Concept Rating</label>
        <div className="mt-2 flex items-center space-x-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <label key={rating} className="inline-flex flex-col items-center">
              <input
                type="radio"
                name="appConceptRating"
                value={rating}
                onChange={(e) => updateData({ appConceptRating: parseInt(e.target.value) })}
                checked={data.appConceptRating === rating}
                className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="mt-1 text-sm text-gray-600">{rating}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Most Valuable Features</label>
        <div className="mt-2 space-y-2">
          {[
            'Online Booking System',
            'Inventory Management',
            'Payment Processing',
            'Customer Management',
            'Analytics Dashboard',
            'Marketing Tools',
            'Mobile App Access',
            'Integration Capabilities',
          ].map((feature) => (
            <label key={feature} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="valuableFeatures"
                value={feature.toLowerCase()}
                onChange={(e) => {
                  const current = data.valuableFeatures || [];
                  if (e.target.checked) {
                    updateData({ valuableFeatures: [...current, e.target.value] });
                  } else {
                    updateData({
                      valuableFeatures: current.filter((f) => f !== e.target.value),
                    });
                  }
                }}
                checked={(data.valuableFeatures || []).includes(feature.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Partnership Concerns</label>
        <div className="mt-2 space-y-2">
          {[
            'Cost',
            'Technical Integration',
            'Time Investment',
            'Staff Training',
            'Data Security',
            'Contract Terms',
            'Support Quality',
          ].map((concern) => (
            <label key={concern} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="partnershipConcerns"
                value={concern.toLowerCase()}
                onChange={(e) => {
                  const current = data.partnershipConcerns || [];
                  if (e.target.checked) {
                    updateData({ partnershipConcerns: [...current, e.target.value] });
                  } else {
                    updateData({
                      partnershipConcerns: current.filter((c) => c !== e.target.value),
                    });
                  }
                }}
                checked={(data.partnershipConcerns || []).includes(concern.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{concern}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Feature Suggestions</label>
        <textarea
          name="featureSuggestions"
          value={data.featureSuggestions || ''}
          onChange={(e) => updateData({ featureSuggestions: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Any additional features you'd like to see in the app..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Additional Comments</label>
        <textarea
          name="additionalComments"
          value={data.additionalComments || ''}
          onChange={(e) => updateData({ additionalComments: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Any other feedback or comments about the app..."
        />
      </div>
    </div>
  );
};

export default AppFeedback;