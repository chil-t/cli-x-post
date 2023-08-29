async function main() {
    const inquirerModule = await import('inquirer');
    const inquirer = inquirerModule.default;

    const question = [
        {
            type: 'list',
            name: 'implementation',
            message: "Githup repo implementation?",
            choices: ['New Branch','New Feature','Bug Fix','Code Refactor','Documentation','Tests','Style','Performance Improvement','Dependency Update','Merge','Revert'],
        },
    ]

    inquirer
    .prompt(
        question
    )
    .then((answers: any) => {
        // Use user feedback for... whatever!!
    })
    .catch((error: any) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

main();
