import {exists} from 'https://deno.land/std/fs/mod.ts'

const CONFIG_NAME = 'mnml-styles.config.ts'
const CONFIG_PATH = `./${CONFIG_NAME}`
const OUTPUT_NAME = 'mnml-styles.css'

if (!await exists(CONFIG_PATH)) console.error(new Error(`Could not find \`${CONFIG_NAME}\``))
else {
	const {default: config} = await import(`file://${Deno.cwd()}/${CONFIG_PATH}`)
	await Deno.writeTextFile(`${Deno.cwd()}/${config.outputDir}${OUTPUT_NAME}`, config.theme)
}