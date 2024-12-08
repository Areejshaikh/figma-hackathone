interface tProps {
    text: string,
    colorType: string; // Define a prop to determine color type

}



function Buttons({ text, colorType }: tProps) {

    let buttonColor;

    if (colorType === 'primary') {
        buttonColor =' bg-[[#000000]]'
    } else if (colorType === 'secondary') {
        buttonColor = 'bg-[#00FF66]';
    }else {
        buttonColor = 'bg-pink-300'; // Default color
    }

    return (


        <button
            className={`mt-8 h-12 w-48 font-semibold 
                 text-black border border-black rounded-md hover:shadow-sm hover:shadow-black p-0 md:p-2 ${buttonColor}`}
        >
            {text}
        </button>
    )
    
}
export default Buttons
