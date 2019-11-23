import { UrlService } from "../services/url.service";

export default () => {
  const urlservice = UrlService;
  const getShortUrl = async (url) => {
    const response = await urlservice.getshorturl({ url });
    return response;
  };
  const getLongUrl = async (url) => {
    const response = await urlservice.getlongurl({ url });
    return response;
  };
  return { getShortUrl, getLongUrl };
};
