import { NotionAPI } from "notion-client";
import { idToUuid } from "notion-utils";

export const getPosts = async () => {
  const id = "notionId";
  const api = new NotionAPI();
  const response = await api.getPage(id);

  const uuid = idToUuid(id);
};
