module.exports = {
    // 指定每个缩进级别的空格数
    tabWidth: 4,
    jsxSingleQuote: true,
    jsxBracketSameLine: true,
    //  最大行长
    printWidth: 120,
    // 使用单引号而不是双引号
    singleQuote: true,
    // 在语句的末尾打印分号
    semi: false,
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 200,
            },
        },
    ],
    arrowParens: 'always',
}

