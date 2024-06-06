import type { IAttribute } from 'types/iattribute'
import type { MouseEvent, ReactElement } from 'react'

interface Properties {
    attribute: IAttribute
}

function onClick(event: MouseEvent): void {
    event.stopPropagation()
}

export default function Attribution({ attribute }: Properties): ReactElement {
    if(attribute.author.name == 'Yoshi Miyamoto'){
        attribute.site.url = ""
        attribute.site.name = ""
    }

    return (
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

                 {attribute.site.url? ' on ': '' }  

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
    )
}
