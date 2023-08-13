import { AreasTable } from "../../components/areas-table";
import { Button } from "../../components/buttons/button-primary";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

export function Areas() {

    // requisition comes here

    const areasData = [
        {
            name: "John Doe",
            description: "Lorem ipsum dolor sit amet",
            contacts: [
                {
                    name: "João Pedro",
                    email: "email 1"
                },
                {
                    name: "Carlos Silva",
                    email: "email 2"
                },
                {
                    name: "contact 3",
                    email: "email 3"
                },
                {
                    name: "contact 4",
                    email: "email 4"
                }
            ],
            costCenter: "CC001",
        },
        {
            name: "Jane Smith",
            description: "Consectetur adipiscing elit",
            contacts: [
                {
                    name: "Junior Correa",
                    email: "email 2"
                }
            ],
            costCenter: "CC002",
        },
        {
            name: "Jane Smith",
            description: "Consectetur adipiscing elit",
            contacts: [
                {
                    name: "Junior Correa",
                    email: "email 2"
                }
            ],
            costCenter: "CC002",
        },
        {
            name: "Jane Smith",
            description: "Consectetur adipiscing elit",
            contacts: [
                {
                    name: "Junior Correa",
                    email: "email 2"
                }
            ],
            costCenter: "CC002",
        },
        {
            name: "Jane Smith",
            description: "Consectetur adipiscing elit",
            contacts: [
                {
                    name: "Junior Correa",
                    email: "email 2"
                }
            ],
            costCenter: "CC002",
        },
        {
            name: "Jane Smith",
            description: "Consectetur adipiscing elit",
            contacts: [
                {
                    name: "Junior Correa",
                    email: "email 2"
                }
            ],
            costCenter: "CC002",
        },
        {
            name: "Jane Smith",
            description: "Consectetur adipiscing elit",
            contacts: [
                {
                    name: "Junior Correa",
                    email: "email 2"
                }
            ],
            costCenter: "CC002",
        },


    ];

    return (
        <>
            <Header />
            <main className="p-10">
                <div className="mb-2 p-4">
                    <h1 className="text-3xl font-bold">
                        Áreas
                    </h1>
                </div>
                <div className="flex justify-between items-center mb-8 p-4">
                    <span className="w-80 hidden sm:block">
                        <Input
                            hasSearchIcon={true}
                        />
                    </span>
                    <Button
                        text="Criar área"
                    />
                </div>
                <AreasTable areas={areasData} />
            </main>
        </>
    )
}