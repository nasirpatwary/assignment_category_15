const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center  container mx-auto">
           <div>
           <h2 className="font-extrabold text-9xl text-center bg-gradient-to-r from-sky-900 via-blue-500 bg-300% to-green-400 text-transparent bg-clip-text animate-gradient dark:text-gray-400">
                <span className="sr-only">Error</span>404
            </h2>
            <h2 className="text-2xl font-semibold md:text-3xl bg-gradient-to-r from-sky-900 via-blue-500 bg-300% to-green-400 text-transparent bg-clip-text animate-gradient">
                Sorry, we couldn't find this page.
            </h2>
           </div>
        </div>
    );
};

export default ErrorPage;