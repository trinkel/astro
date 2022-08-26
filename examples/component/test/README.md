# `test` directory

It's common practice to write tests for your code. A test is a small script that runs part of your code and makes sure the result is what you intended. This folder should contain your tests. If you don't want to write tests, feel free to delete this folder!

You can either write your code first and then write the tests, or write the tests first to establish the goals of your component (this is known as Test-Driven Development). Ultimately, what's important is that your code works and you know it!

This template uses [Mocha](https://mochajs.org/), a framework that helps you structure your tests, and [Chai](https://www.chaijs.com/), a library that helps you test values for specific conditions. We've also included [astro-component-tester](https://github.com/Princesseuh/astro-component-tester), which you can call to check the HTML output of your component.


A commented example test (`example.test.js`) is included in this folder to help you learn how to write basic tests.

You can run all of the tests in this folder using the `test` npm script. (If you're using npm, run: `npm run test`)
