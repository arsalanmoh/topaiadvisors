import { RocketLaunchIcon, PresentationChartBarIcon, ChevronDoubleUpIcon, ArrowTrendingUpIcon, LockClosedIcon, ServerIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const features = [
    {
    
        name: 'Plug-and-Play APIs for Easy Development:',
        description:
          'Our Plug-and-Play APIs, complemented by over 20 step-by-step tutorials, streamline the integration of cutting-edge AI features for developers of any experience level. With a focus on simplicity, these APIs facilitate rapid deployment, significantly cutting down development time and complexity.',
        icon: RocketLaunchIcon,
      },
  {
    
    name: 'Scalable Production-grade Services:',
    description:
      'While current solutions offer libraries requiring developers to manage setup, scaling, and security across platforms, we provide scalable services ready for direct interaction through RESTful APIs.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Unified Cross-platform APIs:',
    description: 'Modalica enables users to seamlessly switch between platforms, like Google and OpenAI, through its services. This eliminates the need for any future migrations.',
    icon: Squares2X2Icon,
  },
  {
    name: 'Evaluation and Moderation for Brand Safety:',
    description: 'We provide user feedback collection APIs and dashboards for monitoring quality. Additionally, our autonomous moderation system uses state-of-the-art models for sentiment analysis, fact-checking, and brand safety.',
    icon: PresentationChartBarIcon,
  },
]

export function Features() {
  return (
    <div id="features" className="overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Build and Deploy in Minutes</h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Secure Production-Grade Cross-Platform AI Development</p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Although the enthusiasm for AI is high, more than 50% of AI projects do not advance beyond fail to reach production. Modalica addresses this disparity. 
              It provides companies from startups to enterprises with an effective way to develop and deploy production-grade AI apps.
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-40 sm:px-12 lg:px-4">
          <img
                    src="/assets/images/g-sdk.png" 
                    alt="Product screenshot"
                    width={1216}
                    height={700}
                    className="-mb-12 rounded-xl bg-gray-800 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
