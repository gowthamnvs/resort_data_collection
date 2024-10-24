import React from 'react';

const FacilitiesServices = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Available Amenities</label>
        <div className="mt-2 space-y-2">
          {[
            'Swimming Pool',
            'Restaurant',
            'Bar',
            'Spa',
            'Gym',
            'Conference Room',
            'Parking',
            'WiFi',
            'Room Service',
            'Laundry',
            'Garden',
            'Beach Access',
            'Kids Play Area',
            'BBQ Area',
          ].map((amenity) => (
            <label key={amenity} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="amenities"
                value={amenity.toLowerCase()}
                onChange={(e) => {
                  const current = data.amenities || [];
                  if (e.target.checked) {
                    updateData({ amenities: [...current, e.target.value] });
                  } else {
                    updateData({
                      amenities: current.filter((a) => a !== e.target.value),
                    });
                  }
                }}
                checked={(data.amenities || []).includes(amenity.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Catering Services</label>
        <select
          name="cateringService"
          value={data.cateringService || ''}
          onChange={(e) => updateData({ cateringService: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select option</option>
          <option value="in-house">In-house Restaurant/Catering</option>
          <option value="third-party">Third-party Catering Partners</option>
          <option value="both">Both Options Available</option>
          <option value="none">No Catering Services</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Entertainment Options</label>
        <div className="mt-2 space-y-2">
          {[
            'Live Music',
            'DJ Services',
            'Karaoke',
            'Game Room',
            'Movie Screening',
            'Cultural Shows',
            'Water Sports',
          ].map((option) => (
            <label key={option} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="entertainmentOptions"
                value={option.toLowerCase()}
                onChange={(e) => {
                  const current = data.entertainmentOptions || [];
                  if (e.target.checked) {
                    updateData({ entertainmentOptions: [...current, e.target.value] });
                  } else {
                    updateData({
                      entertainmentOptions: current.filter((o) => o !== e.target.value),
                    });
                  }
                }}
                checked={(data.entertainmentOptions || []).includes(option.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Activities Offered</label>
        <div className="mt-2 space-y-2">
          {[
            'Swimming',
            'Hiking',
            'Cycling',
            'Yoga',
            'Cooking Classes',
            'Art Classes',
            'Team Building Activities',
            'Water Sports',
            'Garden Tours',
            'Local Tours',
          ].map((activity) => (
            <label key={activity} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="activities"
                value={activity.toLowerCase()}
                onChange={(e) => {
                  const current = data.activities || [];
                  if (e.target.checked) {
                    updateData({ activities: [...current, e.target.value] });
                  } else {
                    updateData({
                      activities: current.filter((a) => a !== e.target.value),
                    });
                  }
                }}
                checked={(data.activities || []).includes(activity.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{activity}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Accessibility Features</label>
        <div className="mt-2 space-y-2">
          {[
            'Wheelchair Access',
            'Elevator',
            'Accessible Parking',
            'Accessible Bathrooms',
            'Braille Signage',
            'Audio Guides',
            'Service Animals Welcome',
          ].map((feature) => (
            <label key={feature} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="accessibilityFeatures"
                value={feature.toLowerCase()}
                onChange={(e) => {
                  const current = data.accessibilityFeatures || [];
                  if (e.target.checked) {
                    updateData({ accessibilityFeatures: [...current, e.target.value] });
                  } else {
                    updateData({
                      accessibilityFeatures: current.filter((f) => f !== e.target.value),
                    });
                  }
                }}
                checked={(data.accessibilityFeatures || []).includes(feature.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{feature}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesServices;