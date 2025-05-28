import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'

const robotoSans = Roboto({
	subsets: ['latin'],
	weight: '400',
	fallback: ['Arial'],
})

const Brand = () => {
	return <div className={cn(robotoSans.className, 'text-2xl')}>EZwap</div>
}

export default Brand
