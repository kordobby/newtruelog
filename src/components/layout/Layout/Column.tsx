import SideCard from '../../SideCard';
import Category from '@/components/Category';
import Search from '@/components/Search';
import Profile from '@/components/Profile';
import Feed from '@/components/Feed';
import MobileProfile from '@/components/Profile/MobileProfile';
import MobileContact from '@/components/SideCard/MobileContact';
import ColumnWrapper from './ColumnWrapper';
import { getTagGroups } from '@/utils/getTagGroups';
import { getPosts } from '@/libs/api/getPosts';

const Column = async () => {
  const posts = await getPosts();
  if (!posts?.data) return <></>;

  const tags = getTagGroups('tags', posts?.data);
  const data = posts?.data;
  return (
    <ColumnWrapper>
      <div className="left-col">
        <Profile />
      </div>
      <div className="center-col">
        <MobileProfile />
        <MobileContact />
        <Feed posts={data} tags={tags} />
      </div>
      <div className="right-col">
        <Search />
        <Category tags={tags} />
        <SideCard category="contact" />
        <SideCard category="service" />
      </div>
    </ColumnWrapper>
  );
};

export default Column;
