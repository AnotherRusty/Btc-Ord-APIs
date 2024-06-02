/**
 * Ordinals API
 * A service that indexes Bitcoin Ordinals data and exposes it via REST API endpoints.
 *
 * OpenAPI spec version: v0.0.1
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("InscriptionsApi", () => {
  let instance: api.InscriptionsApi
  beforeEach(function() {
    instance = new api.InscriptionsApi(config)
  });

  test("getInscription", () => {
    const id: string = "id_example"
    return expect(instance.getInscription(id, {})).resolves.toBe(null)
  })
  test("getInscriptionContent", () => {
    const id: string = "id_example"
    return expect(instance.getInscriptionContent(id, {})).resolves.toBe(null)
  })
  test("getInscriptionTransfers", () => {
    const id: string = "id_example"
    const offset: number = 56
    const limit: number = 56
    return expect(instance.getInscriptionTransfers(id, offset, limit, {})).resolves.toBe(null)
  })
  test("getInscriptions", () => {
    const genesis_block: string = "genesis_block_example"
    const from_genesis_block_height: string = "from_genesis_block_height_example"
    const to_genesis_block_height: string = "to_genesis_block_height_example"
    const from_genesis_timestamp: number = 56
    const to_genesis_timestamp: number = 56
    const from_sat_ordinal: number = 56
    const to_sat_ordinal: number = 56
    const from_sat_coinbase_height: string = "from_sat_coinbase_height_example"
    const to_sat_coinbase_height: string = "to_sat_coinbase_height_example"
    const from_number: number = 56
    const to_number: number = 56
    const id: Array<string> = ["id_example"]
    const number: Array<number> = [56]
    const output: string = "output_example"
    const address: Array<string> = ["address_example"]
    const mime_type: Array<string> = ["mime_type_example"]
    const rarity: Array<string> = ["rarity_example"]
    const offset: number = 56
    const limit: number = 56
    const order_by: string = "order_by_example"
    const order: string = "order_example"
    return expect(instance.getInscriptions(genesis_block, from_genesis_block_height, to_genesis_block_height, from_genesis_timestamp, to_genesis_timestamp, from_sat_ordinal, to_sat_ordinal, from_sat_coinbase_height, to_sat_coinbase_height, from_number, to_number, id, number, output, address, mime_type, rarity, offset, limit, order_by, order, {})).resolves.toBe(null)
  })
})

describe("SatoshisApi", () => {
  let instance: api.SatoshisApi
  beforeEach(function() {
    instance = new api.SatoshisApi(config)
  });

  test("getSatoshi", () => {
    const ordinal: number = 56
    return expect(instance.getSatoshi(ordinal, {})).resolves.toBe(null)
  })
})

describe("StatusApi", () => {
  let instance: api.StatusApi
  beforeEach(function() {
    instance = new api.StatusApi(config)
  });

  test("getApiStatus", () => {
    return expect(instance.getApiStatus({})).resolves.toBe(null)
  })
})

