import logo from "../../assets/tigergpt.png";


export function Header() {

    return (
        <>
            <header className="flex justify-center items-center py-4 px-20 ">
                <img width={110} src={logo} alt="Logo Tiger GPT" />
            </header>
        </>
    );
}
