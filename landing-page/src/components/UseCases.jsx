const posts = [
  {
    id: 1,
    title: 'Multimodal Chatbot for Children',
    href: '#',
    description:
      'We designed, developed, and deployed a scalable, Multimodal Chatbot using Retrieval-Augmented Generation (RAG) and fine-tuning, crafted to offer interactive Q\&A sessions for children with special needs and their families.',
    imageUrl: '/assets/images/chatbot.jpg',
    date: 'Jan 10, 2024',
    datetime: '2024-01-10',
    category: { title: 'Case Study', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Search Engine for Construction Management',
    href: '#',
    description:
      'We developed a Semantic Search platform for a major construction management company, streamlining information retrieval, compliance, and project management to enhance decision-making and minimize errors and delays in the construction industry.',
    imageUrl: '/assets/images/const.jpg',
    date: 'Jan 20, 2024',
    datetime: '2024-01-20',
    category: { title: 'Case Study', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Generative AI for Legal Case Summarization',
    href: '#',
    description:
      'We created a Generative AI for legal case summarization to streamline the review of lengthy documents, enabling legal professionals to quickly grasp case essentials, improve research accuracy, and devise effective strategies.',
    imageUrl: '/assets/images/legal.jpg',
    date: 'Jan 25, 2024',
    datetime: '2024-01-25',
    category: { title: 'Case Study', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Moderation and Evaluation for AI Models',
    href: '#',
    description:
      'We engineered a moderation and evaluation framework for a major HR company to examine LLM-based user-facing chatbot. Our tool helped the company to comprehensively monitor content quality, assessing model biases, and enforcing company\'s guidelines.',
    imageUrl: '/assets/images/evalai.png',
    date: 'Jan 10, 2024',
    datetime: '2024-01-10',
    category: { title: 'Case Study', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Flow Automation for Human Resources',
    href: '#',
    description:
      'We developed an flow automation system, designed to revolutionize human resources (HR) management. Our solution automates key HR processes, from recruitment to performance evaluations, enabling HR teams to focus on strategic initiatives rather than administrative tasks.',
    imageUrl: '/assets/images/hr.png',
    date: 'Jan 25, 2024',
    datetime: '2024-01-25',
    category: { title: 'Case Study', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: 'Content Generation for Marketing',
    href: '#',
    description:
      'We engineered a content generation platform for a digital marketing company. Utilizing advanced AI, our solution not only boosts engagement but also streamlines workflow, allowing marketers to focus on strategy and creative direction, driving better results and efficiency.',
    imageUrl: '/assets/images/dg.png',
    date: 'Jan 20, 2024',
    datetime: '2024-01-20',
    category: { title: 'Case Study', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]


export function UseCases() {
  return (
    <div id="casestudies" className="bg-white pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Case Studies</h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Can't find what you need? <a className="text-blue-700" href="mailto:support@modalica.ai"> Email our support team </a> and we will get back to you, shortly.
          </p> */}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-2 flex items-center gap-x-4 text-xs">
                  {/* <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time> */}
                  {/* <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a> */}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  {/* <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                      <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3> */}
                  <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>x
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div> */}
              </div>
            </article>
          ))}
        </div>
        {/* <div className="mt-8 flex border-gray-100 pt-8">
              <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                See more blogs <span aria-hidden="true">&rarr;</span>
              </a>
          </div> */}
        {/* <div className="mt-12 flex border-gray-500 pt-8 border-t">
          <p>
            Can't find what you need? <a className="text-blue-700" href="mailto:support@topaiadvisors.com"> Email our support team </a> and we will get back to you, shortly.
          </p>
        </div> */}
      </div>
    </div>
  )
}
