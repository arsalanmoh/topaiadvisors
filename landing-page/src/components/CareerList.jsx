import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const statuses = {
  'Accepting New Applicants': 'text-green-700 bg-green-50 ring-green-600/20',
  'Open Soon': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}
const projects = [
  {
    id: 1,
    name: 'Full-time ML Software Engineer',
    href: '#',
    status: 'Open Soon',
    dueDate: 'Feb. 15, 2024',
  },
  {
    id: 1,
    name: 'Full-time Front-end Software Engineer',
    href: '#',
    status: 'Open Soon',
    dueDate: 'Feb. 15, 2024',
  },
  {
    id: 1,
    name: 'Summer Intern Software Engineer',
    href: '#',
    status: 'Open Soon',
    dueDate: 'Feb. 15, 2024',
  },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function CareerList() {
  return (
    <div className="pt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <ul role="list" className="divide-y divide-gray-100">
          {projects.map((project) => (
            <li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
              <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{project.name}</p>
                  <p
                    className={classNames(
                      statuses[project.status],
                      'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                    )}
                  >
                    {project.status}
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                  <p className="whitespace-nowrap">
                    Due on <time>{project.dueDate}</time>
                  </p>
                </div>
              </div>
              {project.status === 'Accepting New Applicants' && (
                <div className="flex flex-none items-center gap-x-4">
                  <a
                    href={project.href}
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hidden sm:block"
                  >
                    View Job Description<span className="sr-only">, {project.name}</span>
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
