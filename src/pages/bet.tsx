import { Header } from "../components/header";
import Modal from 'react-modal'
import { Helmet } from "react-helmet"
import { useState, useEffect } from 'react';
import { customStyles } from "../styles/modal";
import logo from "../assets/tigergpt.png";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";
import { useNavigate } from "react-router-dom";
import { HackPanel } from "../components/hack-panel";
import Loading from "../components/loading";


export function Bet() {

    const navigate = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false)

    const [isCalculatingAnswer, setIsCalculatingAnswer] = useState(true)

    const [isFirstModalOpen, setIsFirstModalOpen] = useState(true)




    function afterOpenModal() {
        setTimeout(function () {
            // Função que será executada após 4 segundos
            console.log('depois de 4 segundos dentro da funcao do modal');
        }, 4000);
    }

    function closeModal() {
        setIsOpen(false);
    }


    function closFirstModal() {
        setIsFirstModalOpen(false);
    }

    const [isVisible, setIsVisible] = useState(false);



    return (
        <div className="px-6">
            <Header />
            <div className="flex flex-col justify-between items-center">
                {isVisible ? (
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-2xl mb-4">
                        Saldo: <span className="text-green-600 ml-2"> R$250,00</span>
                    </span>
                ) : (
                    <span className="text-white border-2 p-2 rounded-md w-40 flex justify-center font-bold text-xl mb-4">
                        Saldo: R$0,00
                    </span>
                )}
                {false ? (
                    <Loading />
                ) : (
                    <HackPanel
                        rounds="3"
                    />
                )}
            </div>


            <div className="w-full h-screen flex justify-center items-center mt-8">
                <iframe
                    title="Seu iFrame"
                    className="w-full h-full"
                    src="https://cassinopix.com/casino/pgsoft/fortune-tiger?ref=0a450b95e2b4&src=plxqkvyaeprwgphrnjxx&utm_source=71388"
                    frameBorder="0"
                ></iframe>
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
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
            >
                <h2 className="text-gray-100 text-3xl font-bold mb-4 text-center">Parabéns! Você ganhou <span className="text-green-600">R$250,00</span></h2>

                <div className="text-center text-gray-200 text-lg mb-6">
                    Você acabou de lucrar com o <span className="text-green-600 font-bold">sinal automático</span> da inteligência artificial TigetGPT.
                </div>


                <div className="flex flex-col space-y-3 mb-8">
                    <button className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                        onClick={() => {
                            localStorage.removeItem("alreadyElsDisplayed17");
                            navigate("/secondplay");
                            window.location.reload()
                        }}
                    >
                        Jogar novamente
                    </button>
                    {/* <span className="w-full flex justify-center text-gray-100">
                        ou
                    </span>
                    <button disabled className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                        onClick={() => {
                            localStorage.removeItem("alreadyElsDisplayed17");
                            navigate("/register");
                            window.location.reload()
                        }}
                    >
                        Resgatar dinheiro
                    </button> */}
                </div>

                <div className="flex justify-center items-center space-x-4">
                    <img width={80} src={logo} alt="Logo Pequena Tiger GPT" />
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-44 flex justify-center font-bold text-xl">
                        Saldo: <span className="text-green-600 ml-2"> R$250,00</span>
                    </span>
                </div>
            </Modal>


        </div>
    )
}