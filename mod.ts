import {exists} from 'https://deno.land/std/fs/mod.ts'
import defaultParser from './parsers/default/index.ts'

const CONFIG_NAME = 'mnml-styles.config.ts'
const CONFIG_PATH = `./${CONFIG_NAME}`
const OUTPUT_NAME = 'mnml-styles.css'

if (!await exists(CONFIG_PATH)) console.error(new Error(`Could not find \`${CONFIG_NAME}\``))
else {
	let mnmlstylecss = ''
	const {default: config} = await import(`file://${Deno.cwd()}/${CONFIG_PATH}`)
	config.parser = config.parser || defaultParser
	console.log(`Using parser: ${config.parser.name}`)
	mnmlstylecss = await defaultParser.reader(config.theme).then(defaultParser.writer)
	console.log(mnmlstylecss)
	await Deno.writeTextFile(`${Deno.cwd()}/${config.outputDir}${OUTPUT_NAME}`, mnmlstylecss)
}