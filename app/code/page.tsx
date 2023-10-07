'use client'
import { useQRValue } from "@/hooks/use-qr-value"
import { faDownload, faLink, faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import {saveAs} from 'file-saver'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function CodePage(){
    const {qrValue} = useQRValue()
    console.log(qrValue)
    const [qrUrl, setQrUrl] = useState<string>()
    useEffect(()=>{
        if(!qrValue) return
        setQrUrl("https://quickchart.io/qr?text=" + qrValue)
    },[qrValue])

    const downloadQR = () => {
        qrUrl && saveAs(qrUrl, 'qr.png');
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(qrValue)
        toast.success("Copied to clipboard",{
            autoClose: 1000,
            position: "top-right",
        })
    }



    return (
        <main className="grid place-content-center min-h-screen w-full bg-main bg-darkblue">
            <ToastContainer/>
            <div className="flex flex-col items-center gap-5">
                <div className="relative w-[200px] md:w-[300px] aspect-square z-10 rounded-full bg-blue bg-opacity-25 p-5">
                    <img src={"https://quickchart.io/qr?text=" + qrValue} className="w-full rounded-2xl z-20"/>
                </div >
                <div className="flex gap-5">
                    <button onClick={e=>{
                        e.preventDefault()
                        downloadQR()
                    }} className="bg-blue text-white outline-none p-2.5 rounded-xl flex gap-2.5 items-center">Download <FontAwesomeIcon icon={faDownload}/></button>
                    <button onClick={e=>{
                        e.preventDefault()
                        copyToClipboard()
                    }} className="bg-blue text-white outline-none p-2.5 rounded-xl flex gap-2.5 items-center">Share <FontAwesomeIcon icon={faLink}/></button>
                </div>
            </div>
        </main>
    )
}