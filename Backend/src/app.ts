import * as express from "express";
import { myDataSource } from "./connection/data-source";
import shopRouter from "./routers/shop.router";

myDataSource
  .initialize()
  .then(async () => {
    const app: express.Express = express();
    const port = 3000;
    app.use(express.json());
    app.use("/shops", shopRouter);
    
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error: unknown) => console.log(error));
