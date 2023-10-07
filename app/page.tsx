'use client'
import Image from 'next/image'
import logo from '@/assets/logo-qr-generator.svg'
import { useQRValue } from '@/hooks/use-qr-value'
import { useRouter } from 'next/navigation'

export default function Home() {
  const {handleQRValue} = useQRValue()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleQRValue(e.target.value)
  }
  return (
    <main className="grid place-content-center min-h-screen w-full bg-main bg-darkblue">
      <div className='flex flex-col gap-5 items-center'>
        <Image src={logo} alt="QR Generator" />
        <div className='flex justify-between bg-darkblue border-2 border-blue rounded-xl p-2.5'>
          <input onChange={e=>{
            const value = e.target.value
            handleQRValue(value)
          }} type="text" placeholder='enter an url' className='md:min-w-[400px] bg-transparent text-white outline-none placeholder:text-gray' />
          <button onClick={e=>{
            e.preventDefault()
            router.push('/code')
          }} className='bg-blue rounded-xl px-5 py-2.5 text-white'>QR code</button>
        </div>
    </div>

    </main>
  )
}
