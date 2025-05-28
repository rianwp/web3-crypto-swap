import { cn } from '@/lib/utils'
import Link from 'next/link'
import '@/styles/btn.css'

interface ICtaButtonProps {
	children: React.ReactNode
	href: string
	ctaType?: string
}

const CtaButton = ({ children, href, ctaType }: ICtaButtonProps) => {
	return (
		<Link href={href} className={cn('btn', ctaType ? `btn--${ctaType}` : '')}>
			{children}
		</Link>
	)
}

export default CtaButton
