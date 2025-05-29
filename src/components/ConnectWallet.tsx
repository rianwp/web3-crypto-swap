'use client'

import { ConnectKitButton } from 'connectkit'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IConnectWalletProps {
	className?: string
}

const ConnectWallet = ({ className }: IConnectWalletProps) => {
	return (
		<ConnectKitButton.Custom>
			{({ isConnected, isConnecting, show, address }) => {
				return (
					<Button
						className={cn(
							className,
							'w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-12 rounded-xl transition-colors'
						)}
						onClick={show}
						size="lg"
						disabled={isConnecting}
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
