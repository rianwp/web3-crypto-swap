interface IListWrapperProps {
	children: React.ReactNode
}

const ListWrapper = ({ children }: IListWrapperProps) => {
	return (
		<div className="flex flex-row gap-x-8 items-baseline text-lg">
			{children}
		</div>
	)
}

export default ListWrapper
