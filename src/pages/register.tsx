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


export function Register() {

    const navigate = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false)

    const [isCalculatingAnswer, setIsCalculatingAnswer] = useState(true)

    const [isFirstModalOpen, setIsFirstModalOpen] = useState(true)



    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        setTimeout(function () {
            // Função que será executada após 4 segundos
            console.log('depois de 4 segundos dentro da funcao do modal');
        }, 4000);
    }

    const [isVisible, setIsVisible] = useState(false);



    return (
        <div className="px-6">
            <Header />
            <div className="flex flex-col justify-between items-center">
                <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-2xl mb-2">
                    Saldo: <span className="text-green-600 ml-2"> R$450,00</span>
                </span>

            </div>

            <div className="p-4">
                <h2 className="text-white text-3xl font-bold mb-4">
                    Cadastro
                </h2>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">Nome</span>
                    <input min={1} className="rounded-md h-8 p-2" />
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">E-mail</span>
                    <input className="rounded-md h-8 p-2" />
                </div>

                <div className="flex flex-col mb-10">
                    <span className="text-white text-xl mb-1">Chave Pix</span>
                    <input className="rounded-md h-8 p-2" />
                </div>

                <button className="p-4 bg-green-600 rounded-2xl mb-4 w-full text-white text-xl font-bold"
                    onClick={() => {
                        navigate("/vsltiger");
                    }}
                >
                    Concluir cadastro
                </button>
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
        </div>
    )
}