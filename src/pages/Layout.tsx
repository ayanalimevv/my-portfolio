import { ReactNode } from "react"
import { useLocation } from "react-router-dom"
import BreadCrumbs from "../components/BreadCrumbs"

const Layout = ({ children, isGridLayout }: { children: ReactNode, isGridLayout: boolean }) => {
    const location = useLocation()
    return (
        <div className='flex justify-center items-center min-h-[90vh]'>
            <div className="mockup-browser bg-base-300 border border-slate-600 lg:min-w-[600px] lg:min-h-[400px] shadow-lg">
                <div className="mockup-browser-toolbar">
                    <div className="input items-center" style={{ display: 'flex !important' }}><BreadCrumbs /></div>
                </div>

                <div className='flex gap-6 pb-4 px-4 pt-2 border-b border-b-slate-800'>
                    {location.pathname === "/off" ||
                        <>
                            <img onClick={() => history.go(-1)} className='cursor-pointer hover:opacity-80 hover:scale-95 transition-all duration-200' src="./back.svg" width={15} height={15} alt="" />

                            <div className="tooltip ml-auto tooltip-left" data-tip="Shut Down">
                                <a href={'/off'}> <img className='cursor-pointer hover:opacity-80 hover:scale-95 transition-all duration-200' src="./off.svg" width={15} height={15} alt="" />
                                </a>
                            </div>
                        </>
                    }
                </div>

                <div className={isGridLayout ? `bg-base-300 p-4 gap-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6` : 'bg-base-300 p-4 flex flex-col gap-2'}>
                    {children}
                </div>
            </div>
        </div >
    )
}

export default Layout