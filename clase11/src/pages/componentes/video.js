export default function Video (datos) {
    return (
        <div>
        
        <video width={datos.width} height={datos.height} controls>
            <source src={datos.src} type={datos.type} />
        </video>
        
        </div>
    )
};