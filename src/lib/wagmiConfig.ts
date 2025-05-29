import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { getDefaultConfig } from 'connectkit'

export const config = createConfig(
	getDefaultConfig({
		chains: [mainnet],
		transports: {
			[mainnet.id]: http(
				`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`
			),
		},
		walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID || '',
		appName: 'EZwap',
	})
)
