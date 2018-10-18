import { test } from "ava";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import "chai/register-should";
chai.use(chaiAsPromised);

import {PublicApi} from "."


test("public call get currency should have status 200", async () => {
  const api = new PublicApi();

  const result = await api.publicCurrencyGet();

  result.status.should.equal(200);
});
