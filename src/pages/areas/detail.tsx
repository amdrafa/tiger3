import { DeleteButton } from "../../components/buttons/button-delete";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

export function AreasDetail() {
    return (
        <>
            <Header />
            <main className="p-10">

                <div className="flex justify-between items-center mb-8 p-4">
                    <h1 className="text-3xl font-bold">
                        Editar área
                    </h1>
                    <DeleteButton
                        text="Excluir área"
                    />
                </div>

                <div className="bg-white p-6 md:grid grid-cols-2 gap-20  items-center">
                    <Input />
                    <Input />
                </div>

            </main>
        </>
    )
}