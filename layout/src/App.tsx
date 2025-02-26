const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Search Field */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Search</label>
            <input
              type="search"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400"
              placeholder="Search here..."
            />
          </div>

          {/* Telephone Input */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400"
              placeholder="Enter your phone number"
            />
          </div>

          {/* URL Input */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Website</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400"
              placeholder="Enter your website URL"
            />
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Select Date</label>
            <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400" />
          </div>

          {/* Month Picker */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Select Month</label>
            <input type="month" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400" />
          </div>

          {/* Week Picker */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Select Week</label>
            <input type="week" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400" />
          </div>

          {/* Number Input */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Enter Age</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400"
              placeholder="Enter your age"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Select Time</label>
            <input type="time" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400" />
          </div>

          {/* Color Picker */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Pick a Color</label>
            <input type="color" className="w-full h-10 border border-gray-300 rounded-md" />
          </div>

          {/* Range Slider */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Experience Level</label>
            <input type="range" min="0" max="10" className="w-full" />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Upload File</label>
            <input
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-400 file:bg-gray-200 file:px-2 file:py-1 file:border-0 file:rounded-md file:text-gray-700 hover:file:bg-gray-300"
            />
          </div>

          {/* Hidden Input (for backend tracking) */}
          <input type="hidden" value="user_id_12345" />

          {/* Radio Buttons */}
          <div>
            <label className="block text-[15px] font-medium text-gray-600 mb-2">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="male" />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="female" />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Checkbox */}
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-[15px] font-medium text-gray-600">I agree to the terms and conditions</span>
            </label>
          </div>

          {/* Submit & Reset Buttons */}
          <div className="flex space-x-4">
            <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
            <button type="reset" className="w-1/2 bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
