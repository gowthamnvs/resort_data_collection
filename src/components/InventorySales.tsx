import React from 'react';

const InventorySales = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Current Rental Items</label>
        <div className="mt-2 space-y-2">
          {[
            'Speakers',
            'Projector',
            'Tents',
            'Tables and Chairs',
            'BBQ Equipment',
            'Sports Equipment',
            'Beach/Pool Equipment',
          ].map((item) => (
            <label key={item} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="rentalItems"
                value={item.toLowerCase()}
                onChange={(e) => {
                  const current = data.rentalItems || [];
                  if (e.target.checked) {
                    updateData({ rentalItems: [...current, e.target.value] });
                  } else {
                    updateData({
                      rentalItems: current.filter((i) => i !== e.target.value),
                    });
                  }
                }}
                checked={(data.rentalItems || []).includes(item.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Interested in Selling Through App</label>
        <select
          name="interestedInSelling"
          value={data.interestedInSelling || ''}
          onChange={(e) => updateData({ interestedInSelling: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select option</option>
          <option value="yes">Yes, interested</option>
          <option value="maybe">Maybe, need more information</option>
          <option value="no">No, not interested</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">High Demand Items</label>
        <div className="mt-2 space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Food Items</label>
            <textarea
              name="highDemandFood"
              value={data.highDemandFood || ''}
              onChange={(e) => updateData({ highDemandFood: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="List high-demand food items..."
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Accessories</label>
            <textarea
              name="highDemandAccessories"
              value={data.highDemandAccessories || ''}
              onChange={(e) => updateData({ highDemandAccessories: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="List high-demand accessories..."
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Current Sales Items</label>
        <div className="mt-2 grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Item Categories</label>
            <div className="mt-2 space-y-2">
              {[
                'Souvenirs',
                'Local Products',
                'Beach/Pool Accessories',
                'Toiletries',
                'Snacks and Beverages',
                'Party Supplies',
              ].map((category) => (
                <label key={category} className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="salesCategories"
                    value={category.toLowerCase()}
                    onChange={(e) => {
                      const current = data.salesCategories || [];
                      if (e.target.checked) {
                        updateData({ salesCategories: [...current,e.target.value] });
                      } else {
                        updateData({
                          salesCategories: current.filter((cat) => cat !== e.target.value),
                        });
                      }
                    }}
                    checked={(data.salesCategories || []).includes(category.toLowerCase())}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySales;