import { Header } from '@/components/custom';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadCromb } from '@/components/custom/CustomBreadCromb';


export const SearchPage = () => {
  return (
    <>
      <Header
        title='Busqueda de SuperHéroes'
        description='Descubre, explora y administra super héroes y villanos'
      />

      <CustomBreadCromb currentPage='Buscador de Super héroes'/>  

      {/*Stats Dashboard*/}
      <HeroStats />

      {/*Filter and search*/}
      <SearchControls/>


    </>
  )
}

export default SearchPage;
