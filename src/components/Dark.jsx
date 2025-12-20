export default function Dark({zIndex, onClick, show}) {
    return (
        <div onClick={onClick} className={`${zIndex} w-full fixed h-full backdrop-blur-lg top-0 bg-black/50 ${show ? '' : 'hide'} `}>
            
        </div>
    )
}