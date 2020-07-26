import properties from './properties/index.ts'

let output: string[] = []

Object.entries(properties).forEach(a => {
	const [property] = a

	output.push(`/* property: ${property} */`)
	Object.entries(a[1]).forEach(b => {
		const [value, selector] = b
		output.push(`${selector}{${property}:${value}}`)
	})
})

export default output.join('\n')