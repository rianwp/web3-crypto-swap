import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

interface ISwapPositionButtonProps {
	handleClick: () => void
}

const SwapPositionButton = ({ handleClick }: ISwapPositionButtonProps) => {
	return (
		<Button
			onClick={handleClick}
			variant="ghost"
			size="icon"
			className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all duration-200 hover:rotate-180"
		>
			<ArrowUpDown className="h-4 w-4" />
		</Button>
	)
}

export default SwapPositionButton
