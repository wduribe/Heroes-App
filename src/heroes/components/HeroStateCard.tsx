import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { JSX, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren{
    title: string,
    icon: JSX.Element
}

export const HeroStateCard = ({ title, icon, children  }: Props) => {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0'>
                <CardTitle className='text-sm font-medium'>{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent className='pb-0'>
                {children}                
            </CardContent>
        </Card>
    )
}
