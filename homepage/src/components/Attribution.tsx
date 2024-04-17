import { IAttribute } from 'interface/iattribute'
import type { MouseEvent, ReactElement } from 'react'

interface Properties {
	attribute: IAttribute
}

function onClick(event: MouseEvent): void {
	event.stopPropagation()
}

export default function ImageAttribution({ attribute }: Properties): ReactElement {
	return (
		<>
			{/* <div className='absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-current text-black text-opacity-30' /> */}
			<div className='absolute bottom-1 right-1 px-1 text-xs text-white'>
				<span>Image by </span>
				<a
					href={attribute.author.url}
					target='_blank'
					rel='noreferrer noopener'
					className='underline'
					onClick={onClick}
				>
					{attribute.author.name}
				</a>
				<span> on </span>
				<a
					href={attribute.site.url}
					target='_blank'
					rel='noreferrer noopener'
					className='underline'
					onClick={onClick}
				>
					{attribute.site.name}
				</a>
			</div>
		</>
	)
}
