export const contactContent = `
<h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-left">
  Get in Touch
  <span class="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></span>
</h2>
<div class="max-w-2xl w-full mx-auto bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-gray-200">
  <form class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input type="text" id="name" name="name" class="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out" placeholder="Your Name">
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out" placeholder="your@example.com">
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea id="message" name="message" rows="5" class="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out" placeholder="Your message here..."></textarea>
    </div>
    <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:scale-105">
      Send Message
    </button>
  </form>
</div>
`;