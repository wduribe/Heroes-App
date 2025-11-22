import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Link } from "react-router"

interface BreadCrumb {
    label: string,
    to: string,
}

interface Props {
    currentPage: string,
    BreadCrumbs?: BreadCrumb[],
}

export const CustomBreadCromb = ({ currentPage, BreadCrumbs = [] }: Props) => {
    return (
        <div className="mb-5">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to='/'>Inicio</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>

                    {
                        BreadCrumbs.map(crumb => (
                            <div key={crumb.to} className="flex items-center gap-1.5 md:gap-2.5">
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link to={crumb.to}>{crumb.label}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                            </div>
                        ))
                    }

                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
