interface Theme {
	properties: {
		[property: string]: {
			[value: string]: string
		}
	}
}

interface PropertySchema {
	property: string
	selector: string
	value: string
}

export default {
	name: 'mnml-styles default',
	reader: (theme: Theme) => {
		let properties: Array<PropertySchema> = []

		Object.entries(theme.properties).forEach(a => {
			const [property] = a
			Object.entries(a[1]).forEach(b => {
				const [value, selector] = b
				properties.push({property, selector, value})
			})
		})

		return Promise.resolve(properties)
	},

	writer: (schemaArray: Array<PropertySchema>) => Promise.resolve(schemaArray.map(({selector, value, property}) => `${selector}{${property}:${value}}`).join('\n'))
}