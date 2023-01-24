import { MongoClient } from "mongodb";

import type { ConnectOptions, Collection } from "mongodb";

const getClient = async (): Promise<MongoClient> =>
  await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.c19f6.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
    } as ConnectOptions
  );

export const mongo = async <T extends Partial<Document>>(
  _collection: string
): Promise<{
  client: MongoClient;
  collection: Collection<T>;
}> => {
  const client = await getClient();
  const collection = client.db().collection<T>(_collection);

  return { client, collection };
};
