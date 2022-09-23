export function Newsletter() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex bg-gray-100 rounded-lg overflow-hidden">
            <div className="sm:w-1/3 lg:w-1/2 hidden sm:block bg-gray-200 relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQorekgKdZQ2-HPgbP4zzLQ_faZbUlALJfA&usqp=CAU?auto=format&q=75&fit=crop&w=750"
                loading="lazy"
                alt="Photo by mymind"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>

            <div className="w-full sm:w-2/3 lg:w-1/2 flex items-center p-4 sm:p-8 lg:pl-10">
              <div className="w-full flex sm:block flex-col items-center">
                <div className="mb-4 sm:mb-8">
                  <h2 className="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">
                    Get the latest updates
                  </h2>
                  <p className="text-gray-500 text-center sm:text-left">
                    Sign up for our newsletter
                  </p>
                </div>

                <form className="w-full max-w-md flex gap-2 mb-3 sm:mb-5">
                  <input
                    placeholder="Email"
                    className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />

                  <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">
                    Send
                  </button>
                </form>

                <p className="text-gray-400 text-xs text-center sm:text-left">
                  By signing up to our newsletter you agree to our{" "}
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                  >
                    Term of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
