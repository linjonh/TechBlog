/**
 * 上传网站的搜索数据到algoliasearch 平台 https://www.algolia.com/
 * 需要提供appId,writeKey在本地时用dotenv：npm install dotenv
 * 在github actions时用secrets env：
 *    - name: Run script
        env:
          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
          ALGOLIA_WRITE_KEY: ${{ secrets.ALGOLIA_WRITE_KEY }}
        run: npm run upload
 */

import dotenv from "dotenv";
import { algoliasearch } from "algoliasearch";
import fs from "fs";

// 仅在本地加载 .env（GitHub Actions 自动提供环境变量）
dotenv.config();
const appId = process.env.ALGOLIA_APP_ID;
const writeKey = process.env.ALGOLIA_WRITE_KEY;
console.log(appId, writeKey);
const client = algoliasearch(appId, writeKey);

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = fs.readFileSync("./public/index.json", "utf-8");
  const jsondata = JSON.parse(datasetRequest);

  return await client.saveObjects({
    indexName: "prod_techblog_index",
    objects: jsondata,
  });
};

processRecords()
  .then(() => console.log("Successfully indexed objects!"))
  .catch((err) => console.error(err));
