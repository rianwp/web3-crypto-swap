'use client'

import { ConnectKitButton } from 'connectkit'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

const ConnectWallet = () => {
	return (
		<ConnectKitButton.Custom>
			{({ isConnected, isConnecting, show, address }) => {
				return (
					<Button
						onClick={show}
						size="lg"
						disabled={isConnecting}
						className="cursor-pointer h-12"
					>
						{isConnecting ? (
							<Loader2 className="mr-2 h-5 w-5 animate-spin" />
						) : null}
						{isConnected ? address : 'Connect Wallet'}
					</Button>
				)
			}}
		</ConnectKitButton.Custom>
	)
}

export default ConnectWallet
