import dayjs from "dayjs"
import { useState } from "react"

interface panelProps {
    rounds: string;
}

export function HackPanel({rounds}: panelProps) {

    const [entrance, setEntrance] = useState(dayjs().format('h:mm'))
    const [validUntil, setValidUntil] = useState(dayjs().add(3, 'minutes').format('h:mm'))

    return (
        <div className="bg-red-950 text-gray-100 w-60 p-2 rounded-md bg-opacity-40 flex flex-col items-center justify-center font-bold ">
            <div>🎰 Nº de rodadas: {rounds} </div>
            <div>🕒 Válido até: {validUntil}</div>
            <div>💵 Entrar: {entrance}</div>
        </div>
    )
}