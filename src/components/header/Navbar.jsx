import logo from '../../assets/images/fyndah_logo.png';


function Navbar() {
    
  return (
    <nav className='sticky top-0 z-50 bg-white flex items-center justify-between px-4 w-full h-[16dvh] sm:px-5 md:px-6 lg:px-16 '>
        <div className='max-w-[8rem] md:max-w-[10rem] h-auto  transform -translate-x-3 '>
            <img src={logo} className='w-full h-full object-cover' alt="company logo" />
        </div>
        <button className="bg-accent text-primary font-poppins text-lg md:text-xl rounded-lg py-2 px-4 capitalize font-medium"><a href="https://fyndah.com/signup" target="_blank" rel="noopener noreferrer">Get started</a></button>
    </nav>
  )
}

export default Navbar