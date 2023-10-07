'use client'
import { createContext, useState } from "react";


interface QrValueContext {
    qrValue: string;
    setQrValue: (value: string) => void;
}

export const qrValueContext = createContext<QrValueContext>({
    qrValue: '',
    setQrValue: (value: string) => {}
})

export function QRValueProvider({ children }: { children: React.ReactNode }) {
    const [qrValue, setQrValue] = useState<string>('')

    return (
        <qrValueContext.Provider value={{ qrValue, setQrValue }}>
            {children}
        </qrValueContext.Provider>
    )
}