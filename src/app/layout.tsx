import { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import '@/styles/globals.css'
import ProviderWrapper from '@/components/ProviderWrapper'

interface IRootLayoutProps {
	children: React.ReactNode
}

const plexSans = IBM_Plex_Sans({
	variable: '--font-plex-sans',
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
	fallback: ['Arial'],
})

export const metadata: Metadata = {
	title: 'EZwap',
	description: 'Easy crypto swap app',
}

const RootLayout = ({ children }: Readonly<IRootLayoutProps>) => {
	return (
		<ProviderWrapper>
			<html lang="en">
				<body className={cn(plexSans.className, 'antialiased')}>
					<Header />
					{children}
				</body>
			</html>
		</ProviderWrapper>
	)
}

export default RootLayout
