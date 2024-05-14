const stats = [
    { id: 1, name: 'Supported Regions', value: 'Worldwide' },
    { id: 2, name: 'Total AI Consulting Provided', value: '500+ Hours' },
    { id: 3, name: 'AI Software Engineers', value: '50+' },
    { id: 4, name: 'AI Project Managers', value: '10+' },
]

export function Stats() {
    return (
        <div className="bg-gray-900 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Our In-house Team Takes You From Ideation to Production
                        </h2>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-white p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            {/* <p className="mt-24 text-lg leading-8 text-gray-300">
                Can't find what you need? <a className="text-blue-700" href="mailto:support@topaiadvisors.com"> Email our support team </a> and we will get back to you, shortly.
            </p> */}
        </div>
    )
}
