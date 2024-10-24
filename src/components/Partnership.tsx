import React from 'react';

const Partnership = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Interest in App Listing</label>
        <select
          name="appListingInterest"
          value={data.appListingInterest || ''}
          onChange={(e) => updateData({ appListingInterest: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select option</option>
          <option value="very-interested">Very Interested</option>
          <option value="somewhat-interested">Somewhat Interested</option>
          <option value="need-more-info">Need More Information</option>
          <option value="not-interested">Not Interested</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Collaboration Model</label>
        <div className="mt-2 space-y-2">
          {[
            'Monthly Subscription',
            'Commission per Booking',
            'Annual Membership',
            'Pay-per-listing',
            'Revenue Sharing',
          ].map((model) => (
            <label key={model} className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="collaborationModel"
                value={model.toLowerCase()}
                onChange={(e) => updateData({ collaborationModel: e.target.value })}
                checked={data.collaborationModel === model.toLowerCase()}
                className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{model}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Booking Integration Interest</label>
        <select
          name="bookingIntegrationInterest"
          value={data.bookingIntegrationInterest || ''}
          onChange={(e) => updateData({ bookingIntegrationInterest: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select option</option>
          <option value="full">Full Integration</option>
          <option value="partial">Partial Integration</option>
          <option value="manual">Manual Management</option>
          <option value="undecided">Undecided</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Revenue Sharing Preferences</label>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Accessories Sales</label>
            <select
              name="accessoriesRevenueShare"
              value={data.accessoriesRevenueShare || ''}
              onChange={(e) => updateData({ accessoriesRevenueShare: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select percentage</option>
              <option value="90-10">90-10 Split</option>
              <option value="80-20">80-20 Split</option>
              <option value="70-30">70-30 Split</option>
              <option value="other">Other (specify)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Food Sales</label>
            <select
              name="foodRevenueShare"
              value={data.foodRevenueShare || ''}
              onChange={(e) => updateData({ foodRevenueShare: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select percentage</option>
              <option value="90-10">90-10 Split</option>
              <option value="80-20">80-20 Split</option>
              <option value="70-30">70-30 Split</option>
              <option value="other">Other (specify)</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Additional Partnership Requirements</label>
        <textarea
          name="partnershipRequirements"
          value={data.partnershipRequirements || ''}
          onChange={(e) => updateData({ partnershipRequirements: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Any specific requirements or concerns about partnership..."
        />
      </div>
    </div>
  );
};

export default Partnership;