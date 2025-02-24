'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'


const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export function Hero_2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            <div className="relative isolate">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-2 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-2">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        {/* <div className="flex">
                            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <span className="font-semibold text-indigo-600">
                                    Partnered with teams in EU
                                                   <span className="text-xl" > 🇪🇺 </span>
                                </span>
                                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                                <a href="#" className="flex items-center gap-x-1">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    We are now offering services worldwide.
                                </a>
                            </div>
                        </div> */}
                        <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Top AI Advisors
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Partner with the world&apos;s best AI experts to navigate the complexities of AI integration and sail smoothly from ideation to production.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            {/* <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Contact Us
                            </a> */}
                            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                        <img src="/assets/images/serv.png" width="600" height="1200" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}
