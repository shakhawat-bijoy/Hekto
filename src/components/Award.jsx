import Image from './layer/Image'
import award from '../assets/award.png'

const Award = () => {
  return (
    <div>
        <Image className="mx-auto lg:mt-24 mt-8" src={award}/>
    </div>
  )
}

export default Award