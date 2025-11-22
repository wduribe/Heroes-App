import { Badge } from '@/components/ui/badge'
import { HeroStateCard } from './HeroStateCard'
import { Heart, User, Zap } from 'lucide-react'
import { useHeroSummaryInformation } from '../hooks/useHeroSummaryInformation'


export const HeroStats = () => {

    const { data: summaryInformation } = useHeroSummaryInformation();

    

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <HeroStateCard
                title='Total de personajes'
                icon={<User className='h-4 w-4 text-muted-foreground' />}
            >
                <div className='text-2xl font-bold'>{summaryInformation?.totalHeroes}</div>
                <div className='flex gap-1 mt-2'>
                    <Badge variant="secondary" className='text-xs'>
                        {summaryInformation?.heroCount} Heroes
                    </Badge>
                    <Badge variant="destructive" className='text-xs'>
                        {summaryInformation?.villainCount} Villians
                    </Badge>
                </div>
            </HeroStateCard>

            <HeroStateCard
                title='Favoritos'
                icon={<Heart className='h-4 w-4 text-muted-foreground' />}
            >
                <div className='text-2xl font-bold text-red-600'>3</div>
                <p className='text-xs text-muted-foreground '>18.8% of total</p>
            </HeroStateCard>

            <HeroStateCard
                title='Fuerte'
                icon={<Zap className='h-4 w-4 text-muted-foreground' />}
            >
                <div className='text-lg font-bold'>{summaryInformation?.strongestHero.alias}</div>
                <p className='text-xs text-muted-foreground'>Strength: {summaryInformation?.strongestHero.strength! * 10}/100</p>
            </HeroStateCard>

            <HeroStateCard
                title='Inteligente'
                icon={<Heart className='h-4 w-4 text-muted-foreground' />}
            >
                <div className='text-lg font-bold'>{summaryInformation?.smartestHero.alias}</div>
                <p className='text-xs text-muted-foreground'>Intelligence: {summaryInformation?.smartestHero.intelligence! * 10}/100</p>
            </HeroStateCard>

        </div>
    )
}
