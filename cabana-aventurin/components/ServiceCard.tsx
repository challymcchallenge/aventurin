import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

interface Service {
  id: string
  tag: string
  tagColor: string
  titlu: string
  hook: string
  descriere: string
  features: string[]
  pret: string
  cta: string
  ctaLink: string
  icon: string
}

const tagStyles: Record<string, string> = {
  forest: 'bg-forest-50 text-forest-700 dark:bg-forest-950 dark:text-forest-400',
  purple: 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400',
  blue:   'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
  pink:   'bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-400',
  green:  'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  amber:  'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
  sky:    'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-400',
  orange: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400',
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
      {/* Tag */}
      <div className="p-6 pb-0">
        <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
            tagStyles[service.tagColor] ?? tagStyles.forest
          }`}
        >
          {service.tag}
        </span>

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-2">
          <span className="text-3xl shrink-0 mt-0.5">{service.icon}</span>
          <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {service.titlu}
          </h3>
        </div>

        {/* Hook */}
        <p className="text-forest-600 dark:text-forest-400 font-medium text-sm italic mb-3">
          {service.hook}
        </p>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {service.descriere}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-6 pt-4 mt-auto border-t border-gray-100 dark:border-gray-700">
        <p className="text-xs text-gray-400 dark:text-gray-500 italic mb-4">
          {service.pret}
        </p>
        <Link
          href={service.ctaLink}
          className="flex items-center justify-between w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 group-hover:shadow-md"
        >
          <span>{service.cta}</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>
    </div>
  )
}
