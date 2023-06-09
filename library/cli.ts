#!/usr/bin/env tsx

import { generate } from "./generate"
import args from "command-line-args"

const contractsDirPath = args([{ name: "src", type: String }]).src
if (!contractsDirPath) throw new Error("You didn't provide a path for contracts directory.")
generate(contractsDirPath)
