import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

//Use mocha's `describe` to label a group of tests
describe('Example Tests', () => {
	// Simple test to get us started with the syntax
	it('should equal 2', () => {
		//Chai's `expect` lets us use natural sounding function calls to check values.
		expect(1 + 1).to.equal(2);
		//Learn more with Chai's docs: https://www.chaijs.com/
	});

	//You can nest `describe` groups. Let's see how to write a test for our component's output using astro-component-tester
	describe('MyComponent', async () => {
		let component;
		// First, run the component and get its output. This returns an object containing the generated html (`.html`)
		before(async () => {
			component = await getComponentOutput('./src/MyComponent.astro');
		});

		// Unless you modified /src/Component.astro, this should pass, as the component renders a div as its first and outermost element
		it('should be a div', () => {
			expect(component.html.startsWith("div"));
		});

		it('contains the word "special"', () => {
			expect(component.html).to.contain("special");
		})
	});

	describe('MyComponent called with a prefix prop', async () => {
		let component;

		const prefix = "Message: "
		before(async () => {
			component = await getComponentOutput('./src/MyComponent.astro', { prefix })
		})

		it('contains the prefix that we passed', () => {
			expect(component.html).to.contain(prefix);
		})
	})
});
