import Swap from '@/components/Swap'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'EZwap',
	description: 'Easy crypto swap app',
}

const Page = () => {
	return (
		<div className="h-full-navbar flex justify-center items-center">
			<Swap />
		</div>
	)
}

export default Page
