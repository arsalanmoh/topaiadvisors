export function Trusted() {
    return (
        <div className="bg-white pb-16 py-6 sm:py-8 sm:pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg font-semibold leading-8 text-gray-900">
                        Why choose us? We offer unparalleled quality. Your pojects are led by the world’s best AI experts and scientists from
                    </h2>
                    <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            src="/assets/images/princeton.png"
                            alt="Princeton"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            src="/assets/images/mit.png"
                            alt="MIT"
                            width={158}
                            height={48}
                        />

                        <img
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            src="/assets/images/google.png"
                            alt="Google"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            src="/assets/images/berk.png"
                            alt="Berkeley"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            src="/assets/images/stanford.png"
                            alt="Stanford"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
