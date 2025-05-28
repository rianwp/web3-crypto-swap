'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/wagmiConfig'
import { ConnectKitProvider } from 'connectkit'

interface IDefaultLayoutProps {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const ProviderWrapper = ({ children }: IDefaultLayoutProps) => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<ConnectKitProvider>{children}</ConnectKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}

export default ProviderWrapper
