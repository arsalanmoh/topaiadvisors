import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Why use Modalica?',
      answer:
        'Despite the soaring enthusiasm for AI, the majority of AI projects get stuck in the demo phase. Modalica is your key to unlocking full-scale production, seamlessly transitioning from demo to a full-scale product. We ensure you can rapidly progress from ideation to full-scale production, saving time and money.',
    },
    {
      question: ' Can a general software engineering team without extensive AI knowledge use Modalica?',
      answer: 'Absolutely! Modalica is designed to be accessible even for developers with minimal AI knowledge. We provide over 20 step-by-step tutorials to guide you through all the services offered, ensuring a smooth learning curve and efficient use of our platform.',
    },
    {
      question: 'Who can benefit from using Modalica?',
      answer: 'AI developers and businesses looking to rapidly develop and deploy AI applications, in particular, Generative AI, will find Modalica extremely beneficial. It is ideal for projects that require quick turnaround, reducing development time from months to just a few days.',
    },
  ],
  [
    {
      question:
        'What makes Modalica different from other AI platforms?',
      answer:
        'Modalica stands out due to its focus on Multimodal Generative AI applications and its comprehensive set of tools for seamless creation, deployment, and management of AI projects. Its ability to drastically reduce development time while maintaining high quality makes it a unique choice for developers and businesses alike.',
    },

    {
      question: 'How do I get started with Modalica?',
      answer:
        'If you have received an invitation, you can directly create an account on our platform. If not, please sign up for our waitlist. We enroll new users on a rolling basis and will notify you once you are selected to join.',
    },
    {
      question:
        'Are there any official libraries or SDKs available for Modalica?',
      answer:
        ' Yes, Modalica provides HTTP APIs and an official Python SDK for easy interaction. We are also developing SDKs for C++, Java, and Go to further enhance your experience with our API.',
    },
  ],
  [
    {
      question: 'What are some examples of applications that can be built using Modalica?',
      answer:
        'Modalica enables the creation of diverse AI applications, including Retrieval-Augmented Generation (RAG) for context-aware responses and Multimodal Search for processing multiple data forms simultaneously.',
    },
    {
      question: 'Does Modalica offer free consultation?',
      answer:
        'Yes, Modalica proudly offers an exclusive, free consultation service for executives, particularly those new to the Generative AI space. This is an opportunity for business leaders to gain insights from our team of industry leaders, Ivy League academics, and renowned researchers on integrating AI into their strategies. To secure this complimentary consultation, email us at info@modalica.ai.',
    },
    {
      question: 'What does Modalica offer today?',
      answer:
        'Modalica is your ultimate AI development toolkit. Modalica streamlines AI application development and deployment, significantly reducing time and cost.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-32"
    >
      <Container id="faq" className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
