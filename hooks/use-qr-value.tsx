import { qrValueContext } from "@/context/qr-value-provider";
import { useContext } from "react";

export function useQRValue() {
    const {qrValue, setQrValue} = useContext(qrValueContext)


    const handleQRValue = (value: string) => {
        setQrValue(value)
    }

    return {
        qrValue,
        handleQRValue
    }
}