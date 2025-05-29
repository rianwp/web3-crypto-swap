import { cn } from '@/lib/utils'
import Brand from './Brand'
import ListWrapper from './List/Wrapper'
import CtaButton from '../Common/CtaButton'
import ConnectWallet from '../ConnectWallet'

const link = [
	{
		href: '/',
		content: 'Swap',
	},
	{
		href: '/tokens',
		content: 'Tokens',
	},
]

const Header = () => {
	return (
		<nav
			className={cn(
				'w-full flex flex-row px-4 md:px-8 py-10 justify-between font-medium h-navbar items-center'
			)}
		>
			<ListWrapper>
				<Brand />
				{link.map((item, index) => (
					<CtaButton key={index} ctaType="link" href={item.href}>
						{item.content}
					</CtaButton>
				))}
			</ListWrapper>

			<ListWrapper>
				<ConnectWallet />
			</ListWrapper>
		</nav>
	)
}

export default Header
