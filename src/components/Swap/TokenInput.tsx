import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { capitalize } from '@/lib/utils'
import Image from 'next/image'

interface ITokenInputProps {
	balance: number
	type: 'from' | 'to'
	inDollar: number
	handleSelectToken: () => void
	handleInput: () => void
	currentToken: {
		name: string
		img?: string
	}
}

const TokenInput = ({
	balance,
	type,
	inDollar,
	handleSelectToken,
	handleInput,
	currentToken,
}: ITokenInputProps) => {
	// validation input
	// handle select token in parent
	return (
		<div className="space-y-2">
			<div className="flex justify-between text-sm">
				<span className="text-gray-300">{capitalize(type)}</span>
				<span className="text-gray-300">Balance: {balance}</span>
			</div>
			<div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors">
				<div className="flex items-center justify-between">
					<Button
						onClick={handleSelectToken}
						variant="ghost"
						className="flex items-center space-x-2 text-white hover:text-white/90 hover:bg-white/10 px-4 py-2 h-auto"
					>
						{currentToken.img ? (
							<div className="w-8 h-8 rounded-full flex items-center justify-center">
								<Image
									src={currentToken.img}
									alt={currentToken.name}
									width={32}
									height={32}
									className="w-full h-full"
								/>
							</div>
						) : null}

						<span className="font-medium">{currentToken.name}</span>
						<ChevronDown className="h-4 w-4" />
					</Button>
					<Input
						onChange={handleInput}
						placeholder="0.0"
						className="text-right bg-transparent border-none text-white placeholder:text-gray-400 text-xl font-medium focus:ring-0 focus:outline-none w-32"
						readOnly
					/>
				</div>
				<div className="flex justify-end mt-2">
					<span className="text-gray-400 text-sm">~${inDollar}</span>
				</div>
			</div>
		</div>
	)
}

export default TokenInput
