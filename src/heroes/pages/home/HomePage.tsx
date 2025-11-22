import { use, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams } from 'react-router';

import { HeroGrid } from '@/heroes/components/HeroGrid';
import { HeroStats } from '@/heroes/components/HeroStats';
import { TabsContent } from '@/components/ui/tabs';
import { CustomBreadCromb } from '@/components/custom/CustomBreadCromb';

import { CustomPagination, Header } from '@/components/custom';

import { useHeroSummaryInformation } from '@/heroes/hooks/useHeroSummaryInformation';
import { usePaginationHero } from '@/heroes/hooks/usePaginationHero';
import { FavoriteHeroContext } from '@/heroes/context/FavoriteHeroContext';

export const HomePage = () => {

	const [searchParams, setSearchParams] = useSearchParams();

	const { favoritesCount, favorites } = use(FavoriteHeroContext);

	const activeTab: string = searchParams.get('tab') ?? 'all';
	const page = searchParams.get('page') ?? '1';
	const limit = searchParams.get('limit') ?? '6';

	const validTab = useMemo(() => {
		const tabs = ['all', 'favorites', 'hero', 'villain'];
		return tabs.includes(activeTab) ? activeTab : 'all';
	}, [activeTab]);

	const { data: responseHeroes } = usePaginationHero(+page, +limit, validTab);
	const { data: summaryInformation } = useHeroSummaryInformation();

	return (
		<>
			<>
				{/* Header */}
				<Header
					title='Universo de SuperHéroes'
					description='Descubre, explora y administra super héroes y villanos'
				/>

				{/*Breadcumb*/}
				<CustomBreadCromb currentPage='Super Héroes'
				// BreadCrumbs={[{label: 'hero1', to: 'hero/1'},{label: 'hero2', to: 'hero/2'}]}
				/>

				{/* Stats Dashboard*/}
				<HeroStats />

				{/* Tabs */}
				<Tabs value={validTab} className="mb-8">
					<TabsList className="grid w-full grid-cols-4">

						<TabsTrigger
							onClick={() => setSearchParams(prev => {
								prev.set('tab', 'all');
								prev.set('page', '1');
								return prev;
							})}
							value="all">
							All Characters ({summaryInformation?.totalHeroes})
						</TabsTrigger>

						<TabsTrigger
							onClick={() => setSearchParams(prev => {
								prev.set('tab', 'favorites');
								return prev;
							})}
							value="favorites"
							className="flex items-center gap-2">
							Favorites ({favoritesCount})
						</TabsTrigger>

						<TabsTrigger
							onClick={() => setSearchParams(prev => {
								prev.set('tab', 'hero');
								prev.set('page', '1');
								return prev;
							})}
							value="hero">Heroes ({summaryInformation?.heroCount})</TabsTrigger>

						<TabsTrigger
							onClick={() => setSearchParams(prev => {
								prev.set('tab', 'villain');
								prev.set('page', '1');
								return prev;
							})}
							value="villain">Villains ({summaryInformation?.villainCount})</TabsTrigger>

					</TabsList>

					<TabsContent value='all'>
						<h2>Todos los personajes</h2>
						<HeroGrid heroes={responseHeroes?.heroes ?? []} />
					</TabsContent>
					<TabsContent value='favorites'>
						<h2>Favoritos</h2>
						<HeroGrid heroes={favorites} />
					</TabsContent>
					<TabsContent value='hero'>
						<h2>Héroes</h2>
						<HeroGrid heroes={responseHeroes?.heroes ?? []} />
					</TabsContent>
					<TabsContent value='villain'>
						<h2>Villanos</h2>
						<HeroGrid heroes={responseHeroes?.heroes ?? []} />
					</TabsContent>
				</Tabs>

				{/*Character Grid */}


				{/*Pagination */}
				{
					(validTab !== 'favorites') && <CustomPagination totalPages={responseHeroes?.pages ?? 0} />
				}

			</>
		</>
	)
}
