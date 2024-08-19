import * as vitest from 'vitest';
import { RuleTester } from '@typescript-eslint/rule-tester';
import myRule from './enforce-happy-methods';

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;


const ruleTester = new RuleTester({
    // Resolves the direct path to the package in node_modules
    /* RuleTester must use the @typescript-eslint parser to be able to
     * cope with TypeScript features like type annotations etc */
    // parser: require.resolve("@typescript-eslint/parser")
});

ruleTester.run('enforce-happy-methods', myRule, {
    valid: [``, {
        code: `
    class MyClass extends RestDataSource {
        async happyMyInnerFunction() {
        }   
    }
    `
    }],
    invalid: [
        {
            code: `
    class MyClass extends RestDataSource {
        async myInnerFunction() {
        }   
    }
    `,
            errors: [{ messageId: 'messageIdForFailure' }],
        }
    ],
});

