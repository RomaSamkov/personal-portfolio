const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="primary-color text-4xl font-bold leading-tight">
          Contact Me
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#526d7749] rounded-xl">
          <div className="p-10">
            <form action="https://getform.io/f/pbmqwvob" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder:gray-400 
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder:gray-400 
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder:gray-400 
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold border bg-gray-700 bg-opacity-25 border-gray-700 text-white rounded-md 
                    hover:bg-gradient-to-br from-orange-500 to-pink-500"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
