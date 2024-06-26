import type { KeyboardEvent, ReactElement } from 'react'
import { useMediaQuery } from 'utils'
import myselfimage from '../media/images/me.png'
import { useNavigate } from 'react-router-dom'

const PREFERRED_IMAGE_WIDTH = 100
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9

export default function AboutMe(): ReactElement {
  const isTabletAndUp = useMediaQuery('(min-width: 600px)')

  const navigate = useNavigate()

  function onClick(): void {
    window.scrollTo(0, 0)
    navigate('aboutMe')
  }

  function onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      onClick()
    }
  }

  const imageWidth = Math.min(
    PREFERRED_IMAGE_WIDTH,
    window.innerWidth - MOBILE_PADDING
  )
  const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT)

  return (
    <div>
      <button
        className='fixed text-left bg-clip-text bg-green-500'
        type='button'
        onClick={onClick}
        onKeyDown={onKeyDown}>
        <div className='m-5 flex items-center' >
          <p className=' font-luckiest text-3xl m-3 text-white'>About Me</p>
          <img
            className='rounded-full '
            loading={
              !isTabletAndUp
                ? 'lazy'
                : 'eager'
            }
            decoding={
              !isTabletAndUp
                ? 'async'
                : 'sync'
            }
            width={imageWidth}
            height={imageHeight}
            style={{
              backgroundColor: 'green'
            }}
            src={`${myselfimage}?&w=${imageWidth * window.devicePixelRatio
              }&h=${imageHeight * window.devicePixelRatio}`}
            alt='about me'
          />
        </div>
      </button>
    </div>
  );
}
