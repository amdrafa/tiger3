import editIcon from "../assets/pencil.svg"

interface IAreaContact {
    name: string;
    email: string;
}

interface IArea {
    name: string;
    description?: string;
    contacts: IAreaContact[];
    costCenter: string;
}

interface IAreasProps {
    areas: IArea[];
}

export function AreasTable({ areas }: IAreasProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >
                            Description
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >
                            Cost Center
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >
                            Contacts
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >

                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {areas.map((item) => (
                        <tr key={item.name} className="hover:bg-slate-100">
                            <td className="px-6 py-4 whitespace-nowrap">{item?.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item?.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item?.costCenter}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item?.contacts?.length > 1 ? (
                                    <span>{item?.contacts[0]?.name}, e mais {item?.contacts?.length}</span>
                                ) : (
                                    <span>{item?.contacts[0]?.name}</span>
                                )}
                            </td>
                            <td className="px-4 py-4 flex justify-center">
                                <img className="cursor-pointer" src={editIcon} alt="Edit icon" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}