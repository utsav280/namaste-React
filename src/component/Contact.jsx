const Contact = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      <div className="p-6 bg-gradient-to-r from-orange-300 to-orange-500 flex flex-col items-center justify-center w-full mt-4 flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center transform transition duration-300 hover:shadow-2xl hover:scale-105">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-2">Phone: 1234567890</p>
          <p className="text-lg text-gray-700">Email: abc@gmail.com</p>
          <div className="mt-6">
            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-orange-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
