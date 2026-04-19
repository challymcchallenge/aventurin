declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    strokeWidth?: number | string
    absoluteStrokeWidth?: boolean
  }
  export type LucideIcon = FC<LucideProps>
  export const Mountain: LucideIcon
  export const Menu: LucideIcon
  export const X: LucideIcon
  export const Sun: LucideIcon
  export const Moon: LucideIcon
  export const MapPin: LucideIcon
  export const Phone: LucideIcon
  export const Clock: LucideIcon
  export const Send: LucideIcon
  export const CheckCircle: LucideIcon
  export const CheckCircle2: LucideIcon
  export const ArrowRight: LucideIcon
  export const ArrowUpRight: LucideIcon
  export const ChevronLeft: LucideIcon
  export const ChevronRight: LucideIcon
  export const ZoomIn: LucideIcon
  export const Star: LucideIcon
  export const Users: LucideIcon
  export const Calendar: LucideIcon
  export const Shield: LucideIcon
  export const MessageCircle: LucideIcon
  export const Facebook: LucideIcon
  export const Instagram: LucideIcon
}
