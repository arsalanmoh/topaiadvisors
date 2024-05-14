import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export function FallBackBlog() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Revolutionizing LLM Reliability</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Seamless Switching to Fallback Models in Production</h1>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src='/assets/images/hotswap.png'
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Switching between different models without interruption.
          </figcaption>
        </figure>
        <p className="mt-6 text-xl leading-8">
          In today&aposs fast-paced digital environment, the reliability of language model-based applications, especially chat models, is paramount. Businesses and developers heavily rely on these models for various purposes, ranging from customer support to interactive AI-driven systems. However, one of the primary challenges faced in this domain is ensuring uninterrupted service, even when the primary model encounters issues.
        </p>
        <figure className="mt-10 border-l border-indigo-600 pl-9">
          <blockquote className="font-semibold text-gray-900">
            <p>
              “There was a day in November, 2023 that the open AI API went down for half a day. I remember not sleeping until we added Azure integration for fallback! If we had Modalica then, it would have been a breeze.”
            </p>
          </blockquote>
          <figcaption className="mt-6 flex gap-x-4">
            <img
              className="h-6 w-6 flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-sm leading-6">
              <strong className="font-semibold text-gray-900">Vahed</strong> – CEO
            </div>
          </figcaption>
        </figure>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Model Hub Enables Seamless Fallback Model Switching for Uninterrupted Service</h2>
          <p className="mt-6">
            Applications developed using Modelica can leverage the advanced capabilities of the Model Hub framework. This framework facilitates seamless transitions between various high-quality, production-ready models. Such a feature is particularly crucial in scenarios where the primary model faces operational challenges or becomes temporarily unavailable. The automatic shift to an alternate, pre-selected model within Model Hub ensures a continuous and superior user experience, a vital aspect for businesses dependent on uninterrupted chat services.
          </p>
          <p className="mt-10">
            In situations where the primary chat model experiences latency or is temporarily overloaded, the application can seamlessly switch to an alternative model within the Model Hub. This switch occurs without any noticeable impact on the user experience, thereby preserving the continuity and fluidity of communication. The integration of a diverse array of models from multiple providers within the Model Hub enhances this capability. It guarantees the availability of a dependable backup model, thus reinforcing the trust and reliability of your service to your clients.
          </p>
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Take the Next Step: Reach Out to Our Team</h2>
          <p className="mt-6">
            Discover the full spectrum of AI-driven solutions with Modalica. While our Model Hub framework, featured in our recent blog post, represents a significant advancement in ensuring uninterrupted service for language model-based applications, it&aposs just the beginning of what we offer. Modalica is equipped to cater to a wide array of business needs, integrating cutting-edge technology to streamline operations, enhance customer interactions, and drive innovation.
          </p>
          <p className="mt-8">
            We invite executives, especially those exploring Generative AI for the first time, to learn more about our comprehensive services.
            Join our exclusive waitlist or connect with us directly at  <a className="text-blue-700" href="mailto:info@modalica.ai">info@modalica.ai</a> for a free consultation session.
            During this session, you will have the opportunity to engage with our team of industry pioneers, Ivy League academics, and renowned researchers. This is an invitation to revolutionize your business with Modalica&aposs cutting-edge AI solutions.
            Reach out today and take the first step towards transforming your business with the power of AI.
          </p>
        </div>
      </div>
    </div>
  )
}
