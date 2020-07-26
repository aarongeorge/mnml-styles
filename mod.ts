import {exists} from 'https://deno.land/std/fs/mod.ts'

const CONFIG_NAME = 'mnml-styles.config.ts'
console.log(1)
const CONFIG_PATH = `./${CONFIG_NAME}`
console.log(2)
const OUTPUT_NAME = 'mnml-styles.css'
console.log(3)
if (!await exists(CONFIG_PATH)) console.error(new Error(`Could not find \`${CONFIG_NAME}\``))
else {
	console.log(4)
	console.log(Deno.cwd())
	const {default: config} = await import(`${Deno.cwd()}/${CONFIG_PATH}`)
	console.log(5)
	await Deno.writeTextFile(`${Deno.cwd()}/${config.outputDir}${OUTPUT_NAME}`, config.theme)
	console.log(6)
}