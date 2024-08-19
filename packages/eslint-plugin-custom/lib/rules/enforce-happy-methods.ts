import { TSESLint, TSESTree } from '@typescript-eslint/utils';
// import { inspect } from 'util'

type MessageIds = 'messageIdForFailure';

const enforceHappyMethodsRule: TSESLint.RuleModule<MessageIds> = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        messages: {
            messageIdForFailure: 'method {{methodName}} should start with "happy"',
        },
        //fixable: 'code',
        schema: [], // no options
    },
    create: context => ({
        MethodDefinition(node) {
            // console.debug('node', inspect(node, { depth: 10 }));
            const methodName = (node.key as TSESTree.Identifier)?.name;
            if (!methodName.startsWith('happy')) {
                context.report({
                    node,
                    messageId: 'messageIdForFailure',
                    data: {
                        methodName,
                    },
                    /*fix(fixer) {
                        return fixer.replaceText(node.key, `happy${methodName}`);
                    },*/
                });
            }
        },
    })
}

export default enforceHappyMethodsRule