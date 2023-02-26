const KontentDelivery = require("@kontent-ai/delivery-sdk");
export const Kentico = async () => {
  // initialize delivery client
  const deliveryClient = KontentDelivery.createDeliveryClient({
    projectId: process.env.KENTICO_KEY,
  });

  // fetch items

  return await deliveryClient
    .items()
    .type("article_example_content_type")
    .toPromise()
    .then((response) => {
      return response;
    });
  // read data of firs
};
