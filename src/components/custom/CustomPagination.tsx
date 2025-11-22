import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router';

interface Props {
    totalPages: number,
}

export const CustomPagination = ({ totalPages }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const queryPage = searchParams.get('page') ?? '1';
    const page: number = isNaN(+queryPage) ? 1 : +queryPage;

    const handlePageChanged = (page: number) => {
        if (page < 1 || page > totalPages) return;

        setSearchParams(prev => {
            prev.set('page', page.toString())
            return prev;
        });

    }

    return (
        <div className="flex items-center justify-center space-x-2">
            <Button
                disabled={+page === 1}
                variant="outline" size="sm"
                onClick={() => handlePageChanged(page - 1)}
            >
                <ChevronLeft className="h-4 w-4" />
                Anteriores
            </Button>

            {
                Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        onClick={() => handlePageChanged(index + 1)}
                        key={index} variant={+page === index + 1 ? 'default' : 'outline'} size="sm">
                        {index + 1}
                    </Button>
                ))
            }

            {/* <Button variant="outline" size="sm">
                2
            </Button>
            <Button variant="outline" size="sm">
                3
            </Button>
            <Button variant="ghost" size="sm" disabled>
                <MoreHorizontal className="h-4 w-4" />
            </Button> */}

            <Button
                disabled={+page === totalPages}
                variant="outline" size="sm"
                onClick={() => handlePageChanged(page + 1)}
            >
                Siguientes
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
