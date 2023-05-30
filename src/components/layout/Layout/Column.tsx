import SideCard from '../../SideCard';
import Category from '@/components/Category';
import Search from '@/components/Search';
import Profile from '@/components/Profile';
import Feed from '@/components/Feed';
import MobileProfile from '@/components/Profile/MobileProfile';
import MobileSearch from '@/components/Search/MobileSearch';
import MobileContact from '@/components/SideCard/MobileContact';
import ColumnWrapper from './ColumnWrapper';

const Column = () => {
  return (
    <ColumnWrapper>
      <div className="left-col">
        <Profile />
      </div>
      <div className="center-col">
        <MobileProfile />
        <MobileContact />
        {/* @ts-expect-error Async Server Component */}
        <Feed />
      </div>
      <div className="right-col">
        <Search />
        <Category />
        <SideCard category="contact" />
        <SideCard category="service" />
      </div>
    </ColumnWrapper>
  );
};

export default Column;
