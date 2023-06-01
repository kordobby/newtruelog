import { TPosts, TTags } from '@/libs/types';

export const getTagGroups = (option: 'tags', post: TPosts) => {
  const selectedPosts = post.filter((value) => value?.[option]);
  const items = [...selectedPosts.map((value) => value[option]).flat()];
  const itemObj: { [itemName: string]: number } = {};
  items.forEach((item) => {
    if (!item) return;
    if (item in itemObj) {
      itemObj[item]++;
    } else {
      itemObj[item] = 1;
    }
  });
  return itemObj as TTags;
};
