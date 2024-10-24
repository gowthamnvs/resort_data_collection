import React from 'react';

const Marketing = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Current Marketing Channels</label>
        <div className="mt-2 space-y-2">
          {[
            'Social Media',
            'Travel Websites',
            'Local Advertising',
            'Word of Mouth',
            'Email Marketing',
            'Print Media',
            'Radio/TV',
            'Travel Agents',
          ].map((channel) => (
            <label key={channel} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="marketingChannels"
                value={channel.toLowerCase()}
                onChange={(e) => {
                  const current = data.marketingChannels || [];
                  if (e.target.checked) {
                    updateData({ marketingChannels: [...current, e.target.value] });
                  } else {
                    updateData({
                      marketingChannels: current.filter((ch) => ch !== e.target.value),
                    });
                  }
                }}
                checked={(data.marketingChannels || []).includes(channel.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{channel}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Social Media Presence</label>
        <div className="mt-2 space-y-2">
          {[
            'Facebook',
            'Instagram',
            'Twitter',
            'TikTok',
            'YouTube',
            'LinkedIn',
            'Pinterest',
          ].map((platform) => (
            <div key={platform} className="flex items-center space-x-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="socialMedia"
                  value={platform.toLowerCase()}
                  onChange={(e) => {
                    const current = data.socialMedia || [];
                    if (e.target.checked) {
                      updateData({ socialMedia: [...current, e.target.value] });
                    } else {
                      updateData({
                        socialMedia: current.filter((sm) => sm !== e.target.value),
                      });
                    }
                  }}
                  checked={(data.socialMedia || []).includes(platform.toLowerCase())}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">{platform}</span>
              </label>
              <input
                type="text"
                placeholder={`${platform} handle/URL`}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={data[`${platform.toLowerCase()}Handle`] || ''}
                onChange={(e) =>
                  updateData({ [`${platform.toLowerCase()}Handle`]: e.target.value })
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Co-Marketing Interest</label>
        <div className="mt-2 space-y-2">
          {[
            'Featured Listings',
            'Special Deals Promotion',
            'Social Media Collaboration',
            'Email Marketing Campaigns',
            'Joint Events',
            'Influencer Partnerships',
          ].map((option) => (
            <label key={option} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="coMarketingInterest"
                value={option.toLowerCase()}
                onChange={(e) => {
                  const current = data.coMarketingInterest || [];
                  if (e.target.checked) {
                    updateData({ coMarketingInterest: [...current, e.target.value] });
                  } else {
                    updateData({
                      coMarketingInterest: current.filter((opt) => opt !== e.target.value),
                    });
                  }
                }}
                checked={(data.coMarketingInterest || []).includes(option.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Marketing Budget</label>
        <select
          name="marketingBudget"
          value={data.marketingBudget || ''}
          onChange={(e) => updateData({ marketingBudget: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select budget range</option>
          <option value="0-1000">$0 - $1,000 per month</option>
          <option value="1001-5000">$1,001 - $5,000 per month</option>
          <option value="5001-10000">$5,001 - $10,000 per month</option>
          <option value="10001-plus">$10,001+ per month</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Current Marketing Challenges</label>
        <textarea
          name="marketingChallenges"
          value={data.marketingChallenges || ''}
          onChange={(e) => updateData({ marketingChallenges: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe your main marketing challenges..."
        />
      </div>
    </div>
  );
};

export default Marketing;