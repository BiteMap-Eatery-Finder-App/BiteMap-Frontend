import logoNavBar from '../Assets/LogoNavBar.png'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full h-[70px] bg-lightGray/10 flex flex-row justify-between py-4 px-10 justify-between items-center border-b-[1px] border-lightGray'>
        <img src={logoNavBar} className='h-[40px] w-auto cursor-pointer'/>
        <div className='w-[220px] h-full flex flex-row justify-between'>
            <button className='rounded-md text-[18px] font-mulish text-lightRed font-semibold hover:text-darkRed transitiion-[0.5s]'>Sign in</button>
            <button className='rounded-md w-[120px] font-mulish font-semibold text-lightRed border-[1px] cursor-pointer
                                border-lightRed text-[18px] hover:text-white hover:bg-darkRed hover:border-[0px] transition-[0.5s]'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar