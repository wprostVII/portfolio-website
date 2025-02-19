import Images from '@/data/images-for-galary'
import Link from 'next/link'

const GalaryContainer = () => {
    return (
        <div className="grid grid-cols-1 gap-2 relative px-6 py-2 overflow-y-scroll h-[94vh] grayscale-[.5] hover:filter-none"> 
            {
                Images.map((image, index) => {
                    return <Link href={image.src} prefetch key={`${index}_${image.name}`}>
                        <img 
                            width={image.width ? image.width : 600} 
                            height={image.height ? image.height : 600}
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
