import { Header } from "../components/header";
import Modal from 'react-modal'
import { Helmet } from "react-helmet"
import { useState, useEffect } from 'react';
import { customStyles } from "../styles/modal";
import { useNavigate } from "react-router-dom";
import { HackPanel } from "../components/hack-panel";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";
import receipt from "../assets/comprovante.jpg";
import Loading from "../components/loading";
import close from "../assets/close.png";

export function Creative() {

    const [modalIsOpen, setIsOpen] = useState(false)

    const [isReceiptOpen, setIsReceiptOpen] = useState(false)

    const [isVideoLoading, setIsVideoLoading] = useState(true)

    const [isButtonLoading, setIsButtonLoading] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setIsVideoLoading(false)
        }, 2000);
    }, [])


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setTimeout(function () {
                // Função que será executada após 4 segundos
                console.log('Ação disparada após 3 segundos!');
                openModal()
            }, 3000);
        }
    }, [isVisible])

    useEffect(() => {
        /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
        const SECONDS_TO_DISPLAY = 6;

        /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
        let attempts = 0;
        let elsDisplayed = false;
        const alreadyDisplayedKey = `alreadyElsDisplayedCreative${SECONDS_TO_DISPLAY}`
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
        <div className="px-6">
            <Header />
            <div className="flex flex-col justify-center items-center">
                {isVisible ? (
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-2xl mb-4">
                        Saldo: <span className="text-green-600 ml-2"> R$200,00</span>
                    </span>
                ) : (
                    <span className="text-white border-2 p-2 rounded-md w-40 flex justify-center font-bold text-xl mb-4">
                        Saldo: R$0,00
                    </span>
                )}
            </div>
            <div className="flex justify-center">
                <HackPanel
                    rounds="3"
                />
            </div>
            <div className="p-4">
                {isVideoLoading ? (
                    <Loading />
                ) : (
                    <div className="border-[8px] rounded-lg border-red-950 mb-6">
                        <div dangerouslySetInnerHTML={{ __html: '<div id="vid_64dd65ccfc6f5800092718d8" style="position:relative;width:100%;padding: 178.21782178217822% 0 0;"><img id="thumb_64dd65ccfc6f5800092718d8" src="https://images.converteai.net/5ed6c64f-24d6-4556-9bf4-152ac30aac75/players/64dd65ccfc6f5800092718d8/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_64dd65ccfc6f5800092718d8" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>' }} />
                        <Helmet>
                            <script type="text/javascript" id="scr_64dd65ccfc6f5800092718d8">var s=document.createElement("script");s.src="https://scripts.converteai.net/5ed6c64f-24d6-4556-9bf4-152ac30aac75/players/64dd65ccfc6f5800092718d8/player.js",s.async=!0,document.head.appendChild(s);</script>
                        </Helmet>
                    </div>
                )}
            </div>

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



            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
            >
                {isReceiptOpen ? (
                    <>
                        <div className="flex justify-end">
                            <img width={15} src={close} alt="Logo Pequena Tiger GPT" />
                        </div>
                        <h2 className="text-gray-100  text-3xl font-bold mb-6 text-center">Pagamento concluído: <span className="text-yellow-500">R$200,00</span></h2>

                        <div className="flex justify-center space-x-4 items-center mb-8">
                            <img width={200} src={receipt} alt="receipt" />
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-gray-100 text-3xl font-bold mb-2 text-center">Parabéns! Você ganhou <span className="text-yellow-500">R$200,00</span></h2>

                        <div className="text-center text-gray-200 text-lg mb-6">
                            Você pode <span className="text-green-600 font-bold">sacar seu dinheiro </span> agora ou continuar jogando.
                        </div>

                        <div className="flex flex-col space-y-3 mb-8">
                            <button className="p-4 bg-yellow-500 rounded-2xl w-full text-white text-xl font-bold">
                                Jogar novamente
                            </button>
                            <span className="w-full flex justify-center text-gray-100">
                                ou
                            </span>
                            <button className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                                onClick={() => {
                                    // localStorage.removeItem("alreadyElsDisplayed17");
                                    // navigate("/vsltiger");
                                    // window.location.reload()
                                    setIsButtonLoading(true)
                                    setTimeout(() => {
                                        setIsButtonLoading(false)
                                        setIsReceiptOpen(true)
                                    }, 4000);
                                }}
                            >
                                {isButtonLoading ? (
                                    <div className="flex items-center justify-center ">
                                        <div className="animate-spin rounded-full border-t-4 border-yellow-500 border-opacity-60 h-8 w-8"></div>
                                    </div>
                                ) : (
                                    'Sacar dinheiro agora'
                                )}
                            </button>
                        </div>
                    </>
                )}

                <div className="flex justify-between items-center space-x-4 items-center">
                    <img width={120} src={google} alt="Logo Pequena Tiger GPT" />
                    <img width={120} src={chat} alt="Logo Pequena Tiger GPT" />
                </div>
            </Modal>
        </div>
    )
}