import React from 'react';

const PainPoints = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Current Booking Management Challenges</label>
        <div className="mt-2 space-y-2">
          {[
            'Double Bookings',
            'Payment Processing',
            'Calendar Management',
            'Customer Communication',
            'Staff Coordination',
            'Inventory Tracking',
            'Event Planning',
          ].map((challenge) => (
            <label key={challenge} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="bookingChallenges"
                value={challenge.toLowerCase()}
                onChange={(e) => {
                  const current = data.bookingChallenges || [];
                  if (e.target.checked) {
                    updateData({ bookingChallenges: [...current, e.target.value] });
                  } else {
                    updateData({
                      bookingChallenges: current.filter((c) => c !== e.target.value),
                    });
                  }
                }}
                checked={(data.bookingChallenges || []).includes(challenge.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{challenge}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Frequently Requested Services</label>
        <textarea
          name="requestedServices"
          value={data.requestedServices || ''}
          onChange={(e) => updateData({ requestedServices: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="List services that guests frequently request but you currently don't offer..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Operational Pain Points</label>
        <textarea
          name="operationalPainPoints"
          value={data.operationalPainPoints || ''}
          onChange={(e) => updateData({ operationalPainPoints: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe your main operational challenges..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">App Solution Expectations</label>
        <div className="mt-2 space-y-2">
          {[
            'Online Booking System',
            'Payment Processing',
            'Inventory Management',
            'Staff Management',
            'Customer Communication',
            'Analytics and Reporting',
            'Event Planning Tools',
            'Marketing Tools',
          ].map((expectation) => (
            <label key={expectation} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="appExpectations"
                value={expectation.toLowerCase()}
                onChange={(e) => {
                  const current = data.appExpectations || [];
                  if (e.target.checked) {
                    updateData({ appExpectations: [...current, e.target.value] });
                  } else {
                    updateData({
                      appExpectations: current.filter((exp) => exp !== e.target.value),
                    });
                  }
                }}
                checked={(data.appExpectations || []).includes(expectation.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{expectation}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PainPoints;