import {
    UsersIcon,
    WalletIcon,
    ChatBubbleBottomCenterTextIcon,
    ArrowPathRoundedSquareIcon,
    ChartBarSquareIcon,
} from '@heroicons/react/20/solid'
const features = [
    {
        name: 'AI Consulting Sessions:',
        description: 'We provide epert AI consulting sessions with personalized strategies to leverage AI in your business, led by world-class AI industry leaders.',
        icon: UsersIcon,
    },
    {
        name: 'Production-grade Chatbots (LLM-based, RAG, etc.):',
        description: 'We design, implement, and deliver LLM-based and Retrievable-Augmented Generative (RAG) chatbots, tailored to your use case, enhancing customer interaction and engagement.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Media/Document Digitalization:',
        description: "We specialize in the digitalization of media and documents, employing cutting-edge AI technologies to preserve and enhance accessibility to your valuable assets.",
        icon: WalletIcon,
    },
    {
        name: 'E2E AI Solutions',
        description: 'We offer comprehensive end-to-end (E2E) AI solutions, managing every aspect from development to deployment, to optimize your business processes seamlessly.',
        icon: ArrowPathRoundedSquareIcon,
    },
    {
        name: 'Evaluation, Moderation, and Brand Safety:',
        description: 'We ensure your brand\'s integrity and safety online with our evaluation, moderation, and brand protection services, focused on AI applications.',
        icon: ChartBarSquareIcon,
    },
    {
        name: 'Automation:',
        description: 'We drive operational excellence through AI-powered automation, streamlining workflows, reducing errors, and enhancing productivity across your organization.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
]

export function Services() {
    return (
        <div id="services" className="bg-gray-900 pt-24 sm:pt-32 pb-12 sm:pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No AI Expertise? No problem.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Elevate your business with premier AI talents, guiding you from ideation to full-scale AI application deployment.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-white">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>

            </div>
        </div>
    )
}
