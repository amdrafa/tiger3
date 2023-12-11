import { Header } from "../components/header";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";
import { Helmet } from "react-helmet";


export function VslTiger() {


    const [selectedHour] = useState(dayjs().add(2.8, 'hour').format('h:mm'))

    const [viewers, setViewers] = useState(800);

    useEffect(() => {
        const interval = setInterval(() => {
            // Incrementando o número de espectadores de forma gradual entre 800 e 1200
            setViewers((prevViewers) => {
                const targetViewers = Math.floor(Math.random() * 401) + 1200; // Número aleatório entre 800 e 1200
                const step = (targetViewers - prevViewers) / 10; // Incremento gradual ao longo de 10 atualizações
                const nextViewers = prevViewers + step;
                return Math.round(nextViewers); // Arredondando para o número inteiro mais próximo
            });
        }, 3000); // Atualizar a cada 1 segundo (1000 ms)

        return () => clearInterval(interval); // Limpando o intervalo quando o componente é desmontado
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
        const SECONDS_TO_DISPLAY = 345;

        /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
        let attempts = 0;
        let elsDisplayed = false;
        const alreadyDisplayedKey = `alreadyElsDisplayedVSL${SECONDS_TO_DISPLAY}`
        const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

        const showHiddenElements = function () {
            elsDisplayed = true;
            setIsVisible(true);
            localStorage.setItem(alreadyDisplayedKey, true)
        }

        const startWatchVideoProgress = function () {
            if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                if (attempts >= 10) return;
                attempts += 1;
                return setTimeout(function () { startWatchVideoProgress() }, 1000);
            }

            smartplayer.instances[0].on('timeupdate', () => {
                if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
                if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
                showHiddenElements();
            })
        }


        if (alreadyElsDisplayed === 'true') {
            setTimeout(function () { showHiddenElements(); }, 100);
        } else {
            startWatchVideoProgress()
        }
    }, [])

    return (
        <>
            <div className="text-center bg-yellow-400 font-bold text-gray-700 text-lg px-1">
                Essa página sairá do ar hoje, {dayjs().format('DD/MM/YYYY')}.
            </div>
            <div className="px-2">
                <Header />
                <div className="flex justify-center">
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-2xl mb-4">
                        Saldo: <span className="text-green-600 ml-2"> R$450,00</span>
                    </span>
                </div>
                {/* <div className="text-center text-white font-bold text-2xl mt-2 mb-8">
                SAQUE SEU <span className="text-yellow-500 font-extrabold">DINHEIRO</span>, GANHE <span className="bg-green-600 p-0.2">ACESSO AO APP</span> E FAÇA MAIS DE <span className="text-yellow-500 font-extrabold">R$759,00 </span>ATÉ HOJE ÀS <span className="bg-green-600 p-0.2"> {selectedHour} HORAS</span>
            </div> */}

                <div className="justify-center flex text-yellow-400 font-extrabold text-4xl">
                    Atenção!
                </div>

                <div className="text-center text-white font-bold text-2xl mt-2 mb-8">
                    Você precisa ser um <span className="text-yellow-500 font-extrabold">usuário premium</span> para sacar seu dinheiro.
                </div>

                <div className="text-center text-white font-bold text-2xl mt-2 mb-8 mx-2">
                    A taxa para se tornar usuário premium é de <span className="text-yellow-300 font-extrabold bg-red-600 p-0.5">R$19,90</span>.
                </div>

                {/* <div className="border-[8px] rounded-lg border-red-950 mb-6">
                <div dangerouslySetInnerHTML={{ __html: '<div id="vid_656f1db83e97e50009923412" style="position:relative;width:100%;padding: 178.21782178217822% 0 0;"><img id="thumb_656f1db83e97e50009923412" src="https://images.converteai.net/20fc57a9-9d12-47a2-b1f8-a9836bc4c0e0/players/656f1db83e97e50009923412/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_656f1db83e97e50009923412" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>' }} />
                <Helmet>
                    <script type="text/javascript" id="scr_656f1db83e97e50009923412">var s=document.createElement("script");s.src="https://scripts.converteai.net/20fc57a9-9d12-47a2-b1f8-a9836bc4c0e0/players/656f1db83e97e50009923412/player.js",s.async=!0,document.head.appendChild(s);</script>
                </Helmet>
            </div> */}


                <div className="flex justify-center mb-8 mx-4">
                    <a href="https://go.perfectpay.com.br/PPU38CNK630">
                        <button
                            className="bg-green-600 p-4 rounded-2xl text-white text-xl font-bold">
                            PAGAR TAXA E SACAR RESTANTE DO DINHEIRO (R$429,90)
                        </button>
                    </a>
                </div>


                <div className="flex justify-center mb-6">
                    <p className="text-white font-bold px-10 text-center">
                        <span className="text-green-600">{`${viewers} `}</span>{`pessoas já adquiriram o TigetGPT hoje, dia ${dayjs().format('DD/MM/YYYY')}.`}
                    </p>
                </div>

                {/* {isVisible ? (
                <div className="flex justify-center mb-8">
                    <button className="bg-green-600 p-4 rounded-2xl text-white font-bold">
                        QUERO APROVEITAR ESSA CHANCE
                    </button>
                </div>
            ) : (
                <div className="flex justify-center mb-6">
                    <p className="text-white font-bold px-10 text-center">
                        <span className="text-green-600">{`${viewers} `}</span>{`pessoas já adquiriram o TigetGPT`}
                    </p>
                </div>
            )} */}


                <footer>
                    <div className="flex justify-center space-x-4 items-center mb-6">
                        <img width={120} src={google} alt="Logo Pequena Tiger GPT" />
                        <img width={120} src={chat} alt="Logo Pequena Tiger GPT" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-gray-200 mb-10">
                        <div className="text-xl font-bold text-white">
                            Copyright 2023 - (TigerGPT)
                        </div>
                        <div className="mb-2">
                            Todos os direitos reservados.
                        </div>
                        <div>
                            Termos de uso
                        </div>
                        <div>
                            Privacidade
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}