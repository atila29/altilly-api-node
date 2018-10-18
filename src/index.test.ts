import { test } from "ava";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import "chai/register-should";
chai.use(chaiAsPromised);

import AltillyApi from "."


test("uses the production domain", async () => {
  const client = new AltillyApi({ key: "key", secret: "secret" });

  client.baseUrl.should.equal("https://api.altilly.com/api");
});

test("uses the passed baseUrl when provided", async () => {
  const client = new AltillyApi({ key: "key", secret: "secret", baseUrl: "example.com" });

  client.baseUrl.should.equal("example.com");
});
