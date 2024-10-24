import React from 'react';

const BookingPricing = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Current Booking Methods</label>
        <div className="mt-2 space-y-2">
          {[
            'Direct Phone',
            'Email',
            'Website Form',
            'Online Booking Platform',
            'Travel Agents',
            'Walk-in',
            'Social Media',
          ].map((method) => (
            <label key={method} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="bookingMethods"
                value={method.toLowerCase()}
                onChange={(e) => {
                  const current = data.bookingMethods || [];
                  if (e.target.checked) {
                    updateData({ bookingMethods: [...current, e.target.value] });
                  } else {
                    updateData({
                      bookingMethods: current.filter((m) => m !== e.target.value),
                    });
                  }
                }}
                checked={(data.bookingMethods || []).includes(method.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Room Price Range (Low Season)</label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <input
              type="number"
              name="lowSeasonPriceMin"
              value={data.lowSeasonPriceMin || ''}
              onChange={(e) => updateData({ lowSeasonPriceMin: e.target.value })}
              placeholder="Min"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="number"
              name="lowSeasonPriceMax"
              value={data.lowSeasonPriceMax || ''}
              onChange={(e) => updateData({ lowSeasonPriceMax: e.target.value })}
              placeholder="Max"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Room Price Range (Peak Season)</label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <input
              type="number"
              name="peakSeasonPriceMin"
              value={data.peakSeasonPriceMin || ''}
              onChange={(e) => updateData({ peakSeasonPriceMin: e.target.value })}
              placeholder="Min"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="number"
              name="peakSeasonPriceMax"
              value={data.peakSeasonPriceMax || ''}
              onChange={(e) => updateData({ peakSeasonPriceMax: e.target.value })}
              placeholder="Max"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Event Space Pricing</label>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Conference Room',
            'Banquet Hall',
            'Garden Area',
            'Beach Front',
            'Pool Side',
          ].map((space) => (
            <div key={space}>
              <label className="block text-sm text-gray-600">{space}</label>
              <input
                type="number"
                name={`eventSpace${space.replace(/\s+/g, '')}Price`}
                value={data[`eventSpace${space.replace(/\s+/g, '')}Price`] || ''}
                onChange={(e) =>
                  updateData({
                    [`eventSpace${space.replace(/\s+/g, '')}Price`]: e.target.value,
                  })
                }
                placeholder="Price per hour"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Available Discounts</label>
        <div className="mt-2 space-y-2">
          {[
            'Early Bird',
            'Group Booking',
            'Extended Stay',
            'Off-season',
            'Corporate',
            'Last Minute',
            'Loyalty Program',
          ].map((discount) => (
            <label key={discount} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="availableDiscounts"
                value={discount.toLowerCase()}
                onChange={(e) => {
                  const current = data.availableDiscounts || [];
                  if (e.target.checked) {
                    updateData({ availableDiscounts: [...current, e.target.value] });
                  } else {
                    updateData({
                      availableDiscounts: current.filter((d) => d !== e.target.value),
                    });
                  }
                }}
                checked={(data.availableDiscounts || []).includes(discount.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{discount}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPricing;