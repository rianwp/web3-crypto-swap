'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import ConnectWallet from '../ConnectWallet'
import TokenInput from './TokenInput'
import SwapPositionButton from './SwapPositionButton'
import SettingsButton from './SettingsButton'

const Swap = () => {
	const handleInput = () => {}
	const handleSelectToken = () => {}
	const handleSwapPosition = () => {}
	return (
		<Card className="w-full max-w-md bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 border-slate-700/50 backdrop-blur-sm shadow-2xl">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
				<CardTitle className="text-xl font-semibold text-white">Swap</CardTitle>
				<SettingsButton />
			</CardHeader>

			<CardContent className="space-y-4">
				<TokenInput
					balance={0.0}
					currentToken={{ name: 'ETH' }}
					handleInput={handleInput}
					inDollar={0.0}
					type="from"
					handleSelectToken={handleSelectToken}
				/>
				<div className="flex justify-center py-2">
					<SwapPositionButton handleClick={handleSwapPosition} />
				</div>
				<TokenInput
					balance={0.0}
					currentToken={{ name: 'BTC' }}
					handleInput={handleInput}
					inDollar={0.0}
					type="to"
					handleSelectToken={handleSelectToken}
				/>
				<div className="bg-white/5 rounded-xl p-3 border border-white/10 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-gray-300">Rate</span>
						<span className="text-white">1 BTC = 15.42 ETH</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-300">Slippage</span>
						<span className="text-white">0.5%</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-300">Network Fee</span>
						<span className="text-white">~$12.50</span>
					</div>
				</div>
				<ConnectWallet className="text-lg" />
			</CardContent>
		</Card>
	)
}

export default Swap
