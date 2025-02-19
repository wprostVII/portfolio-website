import Images from '@/data/images-for-galary'

const GalaryContainer = () => {
    return (
        <div className="grid grid-cols-1 gap-2 relative px-6 py-2 overflow-y-scroll h-[94vh]"> 
            {
                Images.map((image, index) => {
                    return <img 
                        width={image.width ? image.width : 400} 
                        height={image.height ? image.height : 400}
                        src={image.src}
                        alt={image.alt}
                        key={`${index}_${image.name}`}
                    />
                })
            }
        </div>
    ) 
}

export { GalaryContainer }
