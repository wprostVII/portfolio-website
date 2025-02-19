import Images from '@/data/images-for-galary'
import Link from 'next/link'

const GalaryContainer = () => {
    return (
        <div className="grid grid-cols-1 gap-2 relative px-6 py-2 overflow-y-scroll h-[94vh]"> 
            {
                Images.map((image, index) => {
                    return <Link href={image.src} prefetch key={`${index}_${image.name}`}>
                        <img 
                            width={image.width ? image.width : 400} 
                            height={image.height ? image.height : 400}
                            src={image.src}
                            alt={image.alt}
                        />
                    </Link>
                })
            }
        </div>
    ) 
}

export { GalaryContainer }
