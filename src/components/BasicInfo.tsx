import React from 'react';

const BasicInfo = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Resort Name</label>
        <input
          type="text"
          name="resortName"
          value={data.resortName || ''}
          onChange={(e) => updateData({ resortName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={data.location || ''}
          onChange={(e) => updateData({ location: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Full address"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Person Name</label>
          <input
            type="text"
            name="contactName"
            value={data.contactName || ''}
            onChange={(e) => updateData({ contactName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Role</label>
          <select
            name="contactRole"
            value={data.contactRole || ''}
            onChange={(e) => updateData({ contactRole: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select role</option>
            <option value="owner">Owner</option>
            <option value="manager">Manager</option>
            <option value="supervisor">Supervisor</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={data.contactEmail || ''}
            onChange={(e) => updateData({ contactEmail: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
          <input
            type="tel"
            name="contactPhone"
            value={data.contactPhone || ''}
            onChange={(e) => updateData({ contactPhone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Accommodation Types</label>
        <select
          name="accommodationTypes"
          value={data.accommodationTypes || []}
          onChange={(e) => {
            const options = e.target.options;
            const value = [];
            for (let i = 0; i < options.length; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            updateData({ accommodationTypes: value });
          }}
          multiple
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="standard-room">Standard Rooms</option>
          <option value="deluxe-room">Deluxe Rooms</option>
          <option value="suite">Suites</option>
          <option value="cottage">Cottages</option>
          <option value="villa">Villas</option>
          <option value="camping">Camping Sites</option>
        </select>
        <p className="mt-1 text-sm text-gray-500">Hold Ctrl/Cmd to select multiple options</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Event Types Hosted</label>
        <div className="mt-2 space-y-2">
          {[
            'Family Gatherings',
            'Corporate Events',
            'Weddings',
            'Birthday Parties',
            'Team Building',
            'Conferences',
            'Retreats',
          ].map((eventType) => (
            <label key={eventType} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="eventTypes"
                value={eventType.toLowerCase()}
                onChange={(e) => {
                  const current = data.eventTypes || [];
                  if (e.target.checked) {
                    updateData({ eventTypes: [...current, e.target.value] });
                  } else {
                    updateData({
                      eventTypes: current.filter((type) => type !== e.target.value),
                    });
                  }
                }}
                checked={(data.eventTypes || []).includes(eventType.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{eventType}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;