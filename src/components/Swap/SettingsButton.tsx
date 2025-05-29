import { Settings } from 'lucide-react'
import { Button } from '../ui/button'

const SettingsButton = () => {
	// handlelocally
	return (
		<Button
			variant="ghost"
			size="icon"
			className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
		>
			<Settings className="h-4 w-4" />
		</Button>
	)
}

export default SettingsButton
