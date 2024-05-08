import { IAttribute } from 'types/iattribute'
import type { MouseEvent, ReactElement } from 'react'

interface Properties {
    attribute: IAttribute
}

function onClick(event: MouseEvent): void {
    event.stopPropagation()
}

export default function Attribution({ attribute }: Properties): ReactElement {
    return (
        <>
            <div className='absolute bottom-1 right-1 px-1 text-xs text-white'>
                <span>{attribute.type} </span>
                <span>by </span>
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
