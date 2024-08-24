module.exports = {
    rules: {
        // Define o comprimento máximo do cabeçalho do commit (mensagem completa do commit).
        // Aqui, é definido como 85 caracteres.
        'header-max-length': [2, 'always', 85],

        // Define o comprimento mínimo do cabeçalho do commit para garantir que não esteja vazio.
        // Aqui, é definido como 10 caracteres para garantir que o cabeçalho não seja muito curto.
        'header-min-length': [2, 'always', 10],

        // Define os tipos de commits permitidos. Os tipos permitidos são: feature, bugfix, refactor e docs.
        'type-enum': [
            2, // Nível de severidade: 2 significa erro
            'always', // Sempre aplicar esta regra
            ['feature', 'bugfix', 'refactor', 'docs'] // Lista de tipos permitidos
        ],

        // Garante que o sujeito (mensagem do commit) não esteja vazio.
        'subject-empty': [2, 'never'],

        // Desativa a verificação do caso do sujeito (não estamos impondo regras sobre maiúsculas/minúsculas).
        'subject-case': [0],

        // Desativa a verificação do ponto final no sujeito (não estamos impondo que a mensagem deve terminar com um ponto final).
        'subject-full-stop': [0],

        // Desativa a verificação do ponto final no cabeçalho (não estamos impondo que o cabeçalho deve terminar com um ponto final).
        'header-full-stop': [0],

        // Define um padrão regex para o sujeito do commit.
        // O padrão exige que o sujeito siga o formato: [WRH-<numero>] - <mensagem do commit>.
        // Explicação da regex:
        // \[WRH-\d+\]: Texto fixo "[WRH-" seguido por um ou mais dígitos e um fechamento de colchete "]"
        // -: Outro hífen seguido por um espaço
        // .+: Uma ou mais ocorrências de qualquer caractere (mensagem do commit)
        'subject-pattern': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'subject-pattern': ({ subject }) => {
                    const regex = new RegExp(/^\[WRH-\d+\] - .{1,}$/);
                    return [
                        regex.test(subject),
                        `Your subject should follow the commit message pattern ([WRH-<numero da task>] - <mensagem do commit>)`,
                    ];
                },
            },
        },
    ],
};
