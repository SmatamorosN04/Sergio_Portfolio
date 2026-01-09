
type ButtonProps ={
    redirect: string
    name: string
}

const RedirectButton: React.FC<ButtonProps> = ({ redirect, name }) => {
   const handleRedirect = () => {
       window.location.href = redirect
   };

    return(
        <button onClick={handleRedirect} className='w-27.5 h-10 ml-2.5 bg-white rounded-2xl '>
            {name}
        </button>
    )
}
export default RedirectButton;