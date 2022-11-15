import { ModalContainer, ModalProvider } from '@faceless-ui/modal'
import { ToastContainer } from 'react-toastify'

function Layout ({ children }) {
  return (
    <div className='h-screen bg-gradient-to-r from-slate-800 to-gray-800 w-full flex justify-center items-center flex-col relative'>
      <ToastContainer
        position='bottom-center'
        theme='dark'
        autoClose={1000}
        newestOnTop
        hideProgressBar
        closeOnClick
        rtl={false}
        draggable
      />
      <ModalProvider transTime={250}>
        {children}
        <ModalContainer />
      </ModalProvider>
    </div>
  )
}

export default Layout
