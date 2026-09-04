quando eu clico em GERAR REGISTRO... fica tudo branco, tdo oq eu clico fica branco ou cinza, precisamos terminar de configurar as outras coisas né?
ainda esta branco
todos estão abrinso assim..

Sim — isso acontece porque o GitHub Pages está servindo os arquivos .md como texto puro. No GitHub, o próprio GitHub renderiza Markdown bonitinho; no Pages, quando você abre diretamente docs/coleta-evidencias.md, o navegador recebe o Markdown cru.

A solução mais profissional é manter os .md no repositório e criar uma Knowledge Base GG que lê esses arquivos e renderiza dentro da identidade visual do site.

Vamos corrigir isso agora

Crie dentro da pasta docs um novo arquivo:

docs/index.html

A estrutura ficará:

docs/
├── index.html             ← NOVO
├── coleta-evidencias.md
├── cadeia-de-custodia.md
├── guia-preenchimento.md
├── exemplo-caso.md
└── referencias.md

Abra docs/index.html, apague tudo e cole:

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
          content="GG Digital Forensics Knowledge Base">

    <meta name="author"
          content="Geovanni Andrade">

    <title>GG Digital Forensics | Knowledge Base</title>

    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js"></script>

    <style>

        :root {
            --bg: #05080d;
            --sidebar: #080d14;
            --panel: #0b1119;
            --panel-soft: #0f1722;

            --border: #1c2a3a;
            --border-light: #283c52;

            --blue: #2f81f7;
            --blue-light: #58a6ff;
            --cyan: #22d3ee;
            --green: #3fb950;

            --text: #e6edf3;
            --text-secondary: #9ba8b6;
            --text-muted: #667584;

            --font:
                Inter,
                "Segoe UI",
                Arial,
                sans-serif;

            --mono:
                Consolas,
                "Courier New",
                monospace;
        }


        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }


        html {
            scroll-behavior: smooth;
        }


        body {
            background: var(--bg);
            color: var(--text);
            font-family: var(--font);
            min-height: 100vh;
        }


        a {
            color: inherit;
            text-decoration: none;
        }


        /* =============================================
           HEADER
        ============================================== */

        .header {
            position: sticky;
            top: 0;
            z-index: 1000;

            height: 70px;

            display: flex;
            align-items: center;

            background:
                rgba(5, 8, 13, 0.95);

            border-bottom:
                1px solid var(--border);

            backdrop-filter: blur(15px);
        }


        .header-inner {
            width: 100%;

            padding: 0 24px;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }


        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }


        .brand-logo {
            width: 42px;
            height: 42px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 8px;

            border:
                1px solid var(--blue-light);

            background:
                rgba(47, 129, 247, 0.1);

            color: white;

            font-family: var(--mono);
            font-size: 0.8rem;
            font-weight: bold;
        }


        .brand-copy strong {
            display: block;

            font-size: 0.8rem;
            letter-spacing: 1px;
        }


        .brand-copy span {
            display: block;

            margin-top: 3px;

            color: var(--text-muted);

            font-family: var(--mono);
            font-size: 0.62rem;
        }


        .home-button {
            padding: 9px 14px;

            border:
                1px solid var(--border-light);

            border-radius: 6px;

            color: var(--text-secondary);

            font-size: 0.75rem;

            transition: 0.2s;
        }


        .home-button:hover {
            border-color: var(--blue-light);
            color: white;
        }


        /* =============================================
           LAYOUT
        ============================================== */

        .app {
            display: grid;

            grid-template-columns:
                285px
                minmax(0, 1fr);

            min-height:
                calc(100vh - 70px);
        }


        /* =============================================
           SIDEBAR
        ============================================== */

        .sidebar {
            position: sticky;
            top: 70px;

            height:
                calc(100vh - 70px);

            overflow-y: auto;

            padding:
                28px 18px;

            background:
                var(--sidebar);

            border-right:
                1px solid var(--border);
        }


        .sidebar-label {
            display: block;

            padding:
                0 10px 12px;

            color:
                var(--text-muted);

            font-family:
                var(--mono);

            font-size:
                0.58rem;

            letter-spacing:
                2px;
        }


        .nav-section {
            margin-bottom:
                30px;
        }


        .nav-link {
            width: 100%;

            display: flex;

            gap: 12px;

            align-items: center;

            padding:
                11px 12px;

            margin-bottom:
                4px;

            border:
                1px solid transparent;

            border-radius:
                7px;

            color:
                var(--text-secondary);

            font-size:
                0.77rem;

            cursor:
                pointer;

            transition:
                0.2s;
        }


        .nav-link:hover {
            background:
                rgba(47, 129, 247, 0.06);

            border-color:
                var(--border);

            color:
                white;
        }


        .nav-link.active {
            background:
                rgba(47, 129, 247, 0.12);

            border-color:
                rgba(88, 166, 255, 0.3);

            color:
                var(--blue-light);
        }


        .nav-id {
            width: 28px;
            height: 28px;

            display: flex;
            justify-content: center;
            align-items: center;

            flex-shrink: 0;

            border-radius:
                5px;

            background:
                #101925;

            font-family:
                var(--mono);

            font-size:
                0.6rem;
        }


        .sidebar-bottom {
            padding:
                18px 10px;

            border-top:
                1px solid var(--border);

            color:
                var(--text-muted);

            font-family:
                var(--mono);

            font-size:
                0.58rem;

            line-height:
                1.8;
        }


        .sidebar-bottom strong {
            color:
                var(--blue-light);
        }


        /* =============================================
           CONTENT AREA
        ============================================== */

        .content-area {
            min-width: 0;

            background:
                radial-gradient(
                    circle at top right,
                    rgba(47, 129, 247, 0.06),
                    transparent 22%
                ),
                var(--bg);
        }


        .content-header {
            padding:
                42px 55px 30px;

            border-bottom:
                1px solid var(--border);
        }


        .content-header small {
            display: block;

            margin-bottom:
                8px;

            color:
                var(--blue-light);

            font-family:
                var(--mono);

            font-size:
                0.62rem;

            letter-spacing:
                2px;
        }


        .content-header h1 {
            font-size:
                clamp(1.8rem, 4vw, 2.8rem);

            letter-spacing:
                -1px;
        }


        .content-header p {
            max-width:
                700px;

            margin-top:
                10px;

            color:
                var(--text-secondary);

            font-size:
                0.85rem;

            line-height:
                1.7;
        }


        .status-row {
            display: flex;
            flex-wrap: wrap;

            gap:
                10px;

            margin-top:
                20px;
        }


        .status-pill {
            padding:
                5px 9px;

            border:
                1px solid var(--border-light);

            border-radius:
                100px;

            color:
                var(--text-muted);

            font-family:
                var(--mono);

            font-size:
                0.56rem;
        }


        .status-pill.active {
            color:
                var(--green);

            border-color:
                rgba(63, 185, 80, 0.28);

            background:
                rgba(63, 185, 80, 0.04);
        }


        /* =============================================
           DOCUMENT
        ============================================== */

        .document-wrapper {
            max-width:
                1050px;

            padding:
                45px 55px 100px;
        }


        .markdown-body {
            color:
                #c9d1d9;

            line-height:
                1.8;

            font-size:
                0.93rem;
        }


        .markdown-body h1 {
            font-size:
                2rem;

            color:
                #ffffff;

            margin:
                45px 0 20px;

            padding-bottom:
                12px;

            border-bottom:
                1px solid var(--border);
        }


        .markdown-body h1:first-child {
            margin-top:
                0;
        }


        .markdown-body h2 {
            margin:
                42px 0 15px;

            color:
                #f0f6fc;

            font-size:
                1.45rem;
        }


        .markdown-body h3 {
            margin:
                32px 0 12px;

            color:
                #e6edf3;

            font-size:
                1.1rem;
        }


        .markdown-body h4 {
            margin:
                25px 0 10px;

            color:
                var(--blue-light);
        }


        .markdown-body p {
            margin:
                14px 0;

            color:
                #b6c2cf;
        }


        .markdown-body strong {
            color:
                #f0f6fc;
        }


        .markdown-body a {
            color:
                var(--blue-light);

            text-decoration:
                underline;
        }


        .markdown-body ul,
        .markdown-body ol {
            margin:
                16px 0 18px 24px;
        }


        .markdown-body li {
            margin:
                7px 0;
        }


        .markdown-body blockquote {
            margin:
                22px 0;

            padding:
                14px 18px;

            border-left:
                3px solid var(--blue);

            background:
                rgba(47, 129, 247, 0.05);

            color:
                #b8c5d3;
        }


        .markdown-body hr {
            height: 1px;

            margin:
                38px 0;

            border: none;

            background:
                var(--border);
        }


        /* =============================================
           CODE
        ============================================== */

        .markdown-body code {
            padding:
                2px 6px;

            border-radius:
                4px;

            background:
                #111a26;

            color:
                #8ec5ff;

            font-family:
                var(--mono);

            font-size:
                0.84em;
        }


        .markdown-body pre {
            position:
                relative;

            margin:
                20px 0;

            padding:
                20px;

            overflow-x:
                auto;

            border:
                1px solid var(--border);

            border-radius:
                8px;

            background:
                #070b11;
        }


        .markdown-body pre code {
            padding:
                0;

            background:
                transparent;

            color:
                #c8d7e6;

            font-size:
                0.78rem;

            line-height:
                1.8;
        }


        /* =============================================
           TABLES
        ============================================== */

        .markdown-body table {
            width:
                100%;

            margin:
                22px 0 30px;

            border-collapse:
                collapse;

            overflow:
                hidden;

            border:
                1px solid var(--border);

            border-radius:
                8px;
        }


        .markdown-body th {
            padding:
                11px 13px;

            background:
                #111a26;

            border:
                1px solid var(--border);

            color:
                #e6edf3;

            font-size:
                0.76rem;

            text-align:
                left;
        }


        .markdown-body td {
            padding:
                11px 13px;

            border:
                1px solid var(--border);

            color:
                #aebccc;

            font-size:
                0.78rem;

            vertical-align:
                top;
        }


        /* =============================================
           LOADING
        ============================================== */

        .loading {
            padding:
                80px 20px;

            text-align:
                center;

            color:
                var(--text-muted);

            font-family:
                var(--mono);

            font-size:
                0.75rem;
        }


        .loading-dot {
            display:
                inline-block;

            width:
                7px;
            height:
                7px;

            margin-right:
                8px;

            border-radius:
                50%;

            background:
                var(--blue-light);

            box-shadow:
                0 0 15px
                rgba(88, 166, 255, 0.8);

            animation:
                blink 1s infinite;
        }


        @keyframes blink {

            0%,
            100% {
                opacity:
                    0.25;
            }

            50% {
                opacity:
                    1;
            }
        }


        /* =============================================
           ERROR
        ============================================== */

        .error {
            margin:
                45px;

            padding:
                25px;

            border:
                1px solid rgba(248, 81, 73, 0.35);

            border-radius:
                8px;

            background:
                rgba(248, 81, 73, 0.05);

            color:
                #fca5a5;
        }


        /* =============================================
           MOBILE
        ============================================== */

        @media (max-width: 850px) {

            .app {
                grid-template-columns:
                    1fr;
            }


            .sidebar {
                position:
                    relative;

                top:
                    0;

                height:
                    auto;

                border-right:
                    none;

                border-bottom:
                    1px solid var(--border);
            }


            .nav-section {
                display:
                    grid;

                grid-template-columns:
                    repeat(2, 1fr);

                gap:
                    5px;
            }


            .nav-link {
                margin:
                    0;
            }


            .content-header,
            .document-wrapper {
                padding-left:
                    25px;

                padding-right:
                    25px;
            }

        }


        @media (max-width: 520px) {

            .brand-copy span {
                display:
                    none;
            }


            .nav-section {
                grid-template-columns:
                    1fr;
            }


            .content-header {
                padding-top:
                    30px;
            }


            .document-wrapper {
                padding-top:
                    30px;
            }


            .markdown-body {
                font-size:
                    0.86rem;
            }

        }


        /* =============================================
           PRINT
        ============================================== */

        @media print {

            .header,
            .sidebar,
            .content-header {
                display:
                    none !important;
            }


            .app {
                display:
                    block;
            }


            .document-wrapper {
                max-width:
                    none;

                padding:
                    0;
            }


            body,
            .content-area {
                background:
                    white !important;

                color:
                    black !important;
            }


            .markdown-body,
            .markdown-body p,
            .markdown-body li,
            .markdown-body td {
                color:
                    #111827 !important;
            }


            .markdown-body h1,
            .markdown-body h2,
            .markdown-body h3,
            .markdown-body strong {
                color:
                    #000000 !important;
            }


            .markdown-body pre {
                background:
                    #f8fafc !important;

                border:
                    1px solid #cbd5e1;
            }


            .markdown-body pre code,
            .markdown-body code {
                color:
                    #111827 !important;

                background:
                    #f1f5f9 !important;
            }

        }

    </style>
</head>


<body>

<header class="header">

    <div class="header-inner">

        <a
            href="../index.html"
            class="brand"
        >

            <div class="brand-logo">
                GG
            </div>

            <div class="brand-copy">

                <strong>
                    GG // DIGITAL FORENSICS
                </strong>

                <span>
                    KNOWLEDGE BASE / DFIR DOCUMENTATION
                </span>

            </div>

        </a>


        <a
            href="../index.html"
            class="home-button"
        >
            ← Voltar ao projeto
        </a>

    </div>

</header>



<div class="app">


    <!-- SIDEBAR -->

    <aside class="sidebar">


        <span class="sidebar-label">
            KNOWLEDGE BASE
        </span>


        <div class="nav-section">


            <button
                class="nav-link"
                data-doc="coleta-evidencias"
            >

                <span class="nav-id">
                    01
                </span>

                Coleta de Evidências

            </button>


            <button
                class="nav-link"
                data-doc="cadeia-de-custodia"
            >

                <span class="nav-id">
                    02
                </span>

                Cadeia de Custódia

            </button>


            <button
                class="nav-link"
                data-doc="guia-preenchimento"
            >

                <span class="nav-id">
                    03
                </span>

                Guia de Preenchimento

            </button>


            <button
                class="nav-link"
                data-doc="exemplo-caso"
            >

                <span class="nav-id">
                    04
                </span>

                Caso Prático

            </button>


            <button
                class="nav-link"
                data-doc="referencias"
            >

                <span class="nav-id">
                    05
                </span>

                Referências

            </button>

        </div>


        <div class="sidebar-bottom">

            <strong>
                GG-DFIR
            </strong>

            <br>

            Digital Evidence
            <br>
            & Chain of Custody

            <br><br>

            PRESERVE
            <br>
            VERIFY
            <br>
            TRACE

        </div>

    </aside>



    <!-- CONTENT -->

    <main class="content-area">


        <section class="content-header">

            <small>
                GG-DFIR / DOCUMENTATION
            </small>

            <h1 id="document-title">
                Knowledge Base
            </h1>

            <p id="document-description">
                Documentação técnica do projeto GG Digital Evidence & Chain of Custody.
            </p>


            <div class="status-row">

                <span class="status-pill active">
                    ● DOCUMENTATION ONLINE
                </span>

                <span class="status-pill">
                    REV 1.0
                </span>

                <span class="status-pill">
                    DFIR
                </span>

            </div>

        </section>



        <div class="document-wrapper">


            <article
                id="markdown-content"
                class="markdown-body"
            >

                <div class="loading">

                    <span class="loading-dot"></span>

                    Carregando documentação...

                </div>

            </article>


        </div>


    </main>


</div>



<script>

    "use strict";


    /* =============================================
       DOCUMENT DEFINITIONS
    ============================================== */

    const documents = {

        "coleta-evidencias": {

            file:
                "coleta-evidencias.md",

            title:
                "Coleta de Evidências Digitais",

            description:
                "Procedimento técnico para identificação, coleta, preservação e verificação de integridade."

        },


        "cadeia-de-custodia": {

            file:
                "cadeia-de-custodia.md",

            title:
                "Cadeia de Custódia",

            description:
                "Processo de rastreabilidade, responsabilidade e transferência de evidências digitais."

        },


        "guia-preenchimento": {

            file:
                "guia-preenchimento.md",

            title:
                "Guia de Preenchimento",

            description:
                "Manual de utilização do formulário GG Digital Evidence Chain of Custody."

        },


        "exemplo-caso": {

            file:
                "exemplo-caso.md",

            title:
                "Caso Prático DFIR",

            description:
                "Simulação completa de coleta, preservação, análise e cadeia de custódia."

        },


        "referencias": {

            file:
                "referencias.md",

            title:
                "Referências Técnicas",

            description:
                "Normas, legislação e publicações utilizadas como base conceitual do projeto."

        }

    };


    /* =============================================
       GET QUERY PARAMETER
    ============================================== */

    const parameters =
        new URLSearchParams(
            window.location.search
        );


    let currentDocument =
        parameters.get("doc")
        ||
        "coleta-evidencias";


    if (!documents[currentDocument]) {

        currentDocument =
            "coleta-evidencias";

    }


    /* =============================================
       LOAD DOCUMENT
    ============================================== */

    async function loadDocument(
        documentId,
        pushHistory = true
    ) {

        const config =
            documents[documentId];


        if (!config) {
            return;
        }


        currentDocument =
            documentId;


        setActiveNavigation(
            documentId
        );


        document.getElementById(
            "document-title"
        ).textContent =
            config.title;


        document.getElementById(
            "document-description"
        ).textContent =
            config.description;


        document.title =
            `${config.title} | GG Digital Forensics`;


        const container =
            document.getElementById(
                "markdown-content"
            );


        container.innerHTML = `

            <div class="loading">

                <span class="loading-dot"></span>

                Carregando documentação...

            </div>

        `;


        try {

            const response =
                await fetch(
                    config.file,
                    {
                        cache:
                            "no-cache"
                    }
                );


            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );

            }


            const markdown =
                await response.text();


            const html =
                marked.parse(
                    markdown
                );


            const safeHtml =
                DOMPurify.sanitize(
                    html,
                    {
                        ADD_ATTR: [
                            "align"
                        ]
                    }
                );


            container.innerHTML =
                safeHtml;


            container
                .querySelectorAll(
                    'a[href^="http"]'
                )
                .forEach(
                    link => {

                        link.target =
                            "_blank";

                        link.rel =
                            "noopener noreferrer";

                    }
                );


            if (pushHistory) {

                const url =
                    new URL(
                        window.location
                    );


                url.searchParams.set(
                    "doc",
                    documentId
                );


                window.history.pushState(
                    {
                        doc:
                            documentId
                    },
                    "",
                    url
                );

            }


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        } catch (error) {

            container.innerHTML = `

                <div class="error">

                    <strong>
                        Falha ao carregar o documento.
                    </strong>

                    <br><br>

                    Arquivo:
                    ${config.file}

                    <br><br>

                    Verifique se o arquivo existe no diretório
                    <code>docs/</code>.

                </div>

            `;


            console.error(
                "GG Knowledge Base:",
                error
            );

        }

    }


    /* =============================================
       ACTIVE NAVIGATION
    ============================================== */

    function setActiveNavigation(
        documentId
    ) {

        document
            .querySelectorAll(
                ".nav-link"
            )
            .forEach(
                link => {

                    link.classList.toggle(
                        "active",
                        link.dataset.doc ===
                        documentId
                    );

                }
            );

    }


    /* =============================================
       NAVIGATION EVENTS
    ============================================== */

    document
        .querySelectorAll(
            ".nav-link"
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        loadDocument(
                            link.dataset.doc
                        );

                    }
                );

            }
        );


    /* =============================================
       BROWSER HISTORY
    ============================================== */

    window.addEventListener(
        "popstate",
        () => {

            const params =
                new URLSearchParams(
                    window.location.search
                );


            const documentId =
                params.get("doc")
                ||
                "coleta-evidencias";


            loadDocument(
                documentId,
                false
            );

        }
    );


    /* =============================================
       INITIAL LOAD
    ============================================== */

    loadDocument(
        currentDocument,
        false
    );


    /* =============================================
       CONSOLE
    ============================================== */

    console.log(
        "%cGG // DIGITAL FORENSICS",
        "color:#58a6ff;font-weight:bold;font-size:16px;font-family:monospace"
    );


    console.log(
        "%cKnowledge Base initialized.",
        "color:#3fb950;font-family:monospace"
    );

</script>


</body>
</html>

Faça o commit.

Depois temos que corrigir os links da Home

Hoje seu index.html tem links assim:

href="docs/coleta-evidencias.md"

É por isso que você cai no texto cru.

Vamos mudar os 5 cards.

No index.html, procure e substitua:

href="docs/coleta-evidencias.md"

por:

href="docs/?doc=coleta-evidencias"

Depois:

href="docs/cadeia-de-custodia.md"

por:

href="docs/?doc=cadeia-de-custodia"

Depois:

href="docs/guia-preenchimento.md"

por:

href="docs/?doc=guia-preenchimento"

Depois:

href="docs/exemplo-caso.md"

por:

href="docs/?doc=exemplo-caso"

E:

href="docs/referencias.md"

por:

href="docs/?doc=referencias"

Faça outro Commit changes.

Depois disso muda completamente

Quando você clicar em Coleta de Evidências, em vez disso:

<div align="center">

# GG // DIGITAL FORENSICS
...

vai abrir algo assim:

┌─────────────────────────────────────────────────────────┐
│ GG // DIGITAL FORENSICS               ← Voltar projeto │
│ KNOWLEDGE BASE                                          │
├─────────────────────┬───────────────────────────────────┤
│ KNOWLEDGE BASE      │ GG-DFIR / DOCUMENTATION           │
│                     │                                   │
│ 01 Coleta           │ Coleta de Evidências Digitais    │
│ 02 Custódia         │                                   │
│ 03 Guia             │ 1. Objetivo                      │
│ 04 Caso Prático     │                                   │
│ 05 Referências      │ Este documento define...         │
│                     │                                   │
│ GG-DFIR             │ [ código PowerShell ]             │
│ PRESERVE            │                                   │
│ VERIFY              │ [ tabelas ]                       │
│ TRACE               │                                   │
└─────────────────────┴───────────────────────────────────┘

E o mais interessante: não haverá cinco sites diferentes. A mesma Knowledge Base troca o conteúdo quando você clica no menu lateral.

Então teremos:

Home → Knowledge Base → Formulário → Home

tudo com a mesma identidade GG Digital Forensics.

Faça primeiro o docs/index.html, depois altere esses cinco links do index.html. Atualize o Pages com Ctrl + F5 e aí todos aqueles .md crus deixam de aparecer pela interface normal do projeto.

Markdown(3).md colado
Arquivo
edite o codigo e me reenvie atualizado

Sim. Vou te mandar o index.html inteiro já atualizado, para você não precisar procurar e substituir link por link.

Abra:

index.html → Edit → apague tudo → cole exatamente isto:

<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <meta name="description"
          content="GG Digital Forensics - Digital Evidence & Chain of Custody. Projeto de DFIR, preservação, integridade e rastreabilidade de evidências digitais.">

    <meta name="author"
          content="Geovanni Andrade">

    <title>GG Digital Forensics | Chain of Custody</title>

    <link rel="stylesheet"
          href="assets/css/style.css">

</head>


<body>


<!-- =========================================================
     HEADER
========================================================== -->

<header class="header">

    <div class="container header-content">


        <a href="index.html"
           class="brand">

            <div class="brand-symbol">
                GG
            </div>


            <div class="brand-text">

                <strong>
                    GG // DIGITAL FORENSICS
                </strong>

                <span>
                    Evidence & Incident Response
                </span>

            </div>

        </a>



        <nav class="navigation">

            <a href="#overview">
                Overview
            </a>

            <a href="#workflow">
                Workflow
            </a>

            <a href="#features">
                Recursos
            </a>

            <a href="#documentation">
                Documentação
            </a>


            <a href="templates/chain-of-custody.html"
               class="nav-button">

                Abrir Formulário

            </a>

        </nav>

    </div>

</header>



<main>


<!-- =========================================================
     HERO
========================================================== -->

<section class="hero">

    <div class="hero-grid"></div>


    <div class="container hero-content">


        <div class="hero-left">


            <div class="classification">

                <span class="classification-dot"></span>

                DIGITAL FORENSICS & INCIDENT RESPONSE

            </div>


            <h1>

                Digital Evidence

                <span>
                    & Chain of Custody
                </span>

            </h1>


            <p class="hero-description">

                Processo estruturado para identificação, coleta,
                preservação, verificação de integridade e
                rastreabilidade de evidências digitais.

            </p>


            <div class="hero-actions">


                <a href="templates/chain-of-custody.html"
                   class="button button-primary">

                    Criar Registro de Evidência

                </a>


                <a href="docs/?doc=coleta-evidencias"
                   class="button button-secondary">

                    Explorar Documentação

                </a>

            </div>



            <div class="hero-tags">

                <span>
                    DFIR
                </span>

                <span>
                    Incident Response
                </span>

                <span>
                    Blue Team
                </span>

                <span>
                    Evidence Handling
                </span>

            </div>


        </div>



        <!-- TERMINAL -->

        <div class="hero-terminal">


            <div class="terminal-header">


                <div class="terminal-dots">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <span>
                    evidence-control.log
                </span>

            </div>



            <div class="terminal-body">


                <p>

                    <span class="terminal-muted">
                        $
                    </span>

                    gg-dfir --status

                </p>


                <p>

                    <span class="terminal-label">
                        SYSTEM
                    </span>

                    GG Digital Evidence Control

                </p>


                <p>

                    <span class="terminal-label">
                        CASE
                    </span>

                    INC-2026-001

                </p>


                <p>

                    <span class="terminal-label">
                        EVIDENCE
                    </span>

                    EVD-001

                </p>


                <p>

                    <span class="terminal-label">
                        INTEGRITY
                    </span>

                    SHA-256 VERIFIED

                </p>


                <p>

                    <span class="terminal-label">
                        CUSTODY
                    </span>

                    ACTIVE

                </p>


                <div class="terminal-divider"></div>


                <p class="terminal-success">

                    ✓ Evidence integrity validated

                </p>


                <p class="terminal-cursor">
                    _
                </p>


            </div>


        </div>


    </div>

</section>



<!-- =========================================================
     OVERVIEW
========================================================== -->

<section class="section"
         id="overview">


    <div class="container">


        <div class="section-heading">


            <span class="section-number">
                01
            </span>


            <div>

                <span class="section-eyebrow">
                    PROJECT OVERVIEW
                </span>

                <h2>
                    Preservação de evidências digitais
                </h2>

            </div>


        </div>



        <div class="overview-grid">


            <div class="overview-content">


                <p class="lead">

                    O <strong>GG Digital Evidence & Chain of Custody</strong>
                    é um projeto desenvolvido para documentar o ciclo de
                    vida de uma evidência digital durante um processo
                    de investigação e resposta a incidentes.

                </p>


                <p>

                    A solução reúne documentação técnica e uma interface
                    web para registrar informações relacionadas à origem,
                    integridade, armazenamento e transferência de
                    artefatos digitais.

                </p>


                <p>

                    O objetivo é permitir que cada etapa realizada sobre
                    uma evidência possa ser posteriormente identificada,
                    validada e reconstruída.

                </p>


            </div>



            <div class="principles-grid">


                <div class="principle-card">

                    <span class="principle-number">
                        01
                    </span>

                    <h3>
                        Identificação
                    </h3>

                    <p>

                        Registro da origem, ativo, incidente e
                        características da evidência.

                    </p>

                </div>



                <div class="principle-card">

                    <span class="principle-number">
                        02
                    </span>

                    <h3>
                        Integridade
                    </h3>

                    <p>

                        Verificação criptográfica utilizando hashes
                        para detectar alterações.

                    </p>

                </div>



                <div class="principle-card">

                    <span class="principle-number">
                        03
                    </span>

                    <h3>
                        Preservação
                    </h3>

                    <p>

                        Proteção da evidência contra alteração,
                        execução ou acesso não autorizado.

                    </p>

                </div>



                <div class="principle-card">

                    <span class="principle-number">
                        04
                    </span>

                    <h3>
                        Rastreabilidade
                    </h3>

                    <p>

                        Registro cronológico de cada mudança
                        de custódia.

                    </p>

                </div>


            </div>


        </div>


    </div>

</section>



<!-- =========================================================
     STATS
========================================================== -->

<section class="stats">


    <div class="container stats-grid">


        <div class="stat-item">

            <strong>
                SHA-256
            </strong>

            <span>
                Verificação de Integridade
            </span>

        </div>


        <div class="stat-item">

            <strong>
                DFIR
            </strong>

            <span>
                Digital Forensics
            </span>

        </div>


        <div class="stat-item">

            <strong>
                CoC
            </strong>

            <span>
                Chain of Custody
            </span>

        </div>


        <div class="stat-item">

            <strong>
                A4
            </strong>

            <span>
                Documento Imprimível
            </span>

        </div>


    </div>


</section>



<!-- =========================================================
     WORKFLOW
========================================================== -->

<section class="section section-dark"
         id="workflow">


    <div class="container">


        <div class="section-heading">


            <span class="section-number">
                02
            </span>


            <div>

                <span class="section-eyebrow">
                    EVIDENCE LIFECYCLE
                </span>

                <h2>
                    Fluxo operacional
                </h2>

            </div>


        </div>



        <p class="section-intro">

            Uma evidência deve possuir rastreabilidade desde o momento
            em que é identificada até sua análise, armazenamento ou
            encerramento.

        </p>



        <div class="workflow">


            <!-- 01 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    01
                </div>

                <div class="workflow-content">

                    <span>
                        DETECTION
                    </span>

                    <h3>
                        Incidente
                    </h3>

                    <p>

                        Identificação do evento de segurança e
                        abertura do caso.

                    </p>

                </div>

            </div>


            <div class="workflow-arrow">
                ↓
            </div>



            <!-- 02 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    02
                </div>

                <div class="workflow-content">

                    <span>
                        IDENTIFICATION
                    </span>

                    <h3>
                        Evidência
                    </h3>

                    <p>

                        Registro da origem, ativo e artefato
                        identificado.

                    </p>

                </div>

            </div>


            <div class="workflow-arrow">
                ↓
            </div>



            <!-- 03 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    03
                </div>

                <div class="workflow-content">

                    <span>
                        COLLECTION
                    </span>

                    <h3>
                        Coleta
                    </h3>

                    <p>

                        Aquisição controlada da evidência e
                        seus metadados.

                    </p>

                </div>

            </div>


            <div class="workflow-arrow">
                ↓
            </div>



            <!-- 04 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    04
                </div>

                <div class="workflow-content">

                    <span>
                        INTEGRITY
                    </span>

                    <h3>
                        Hash
                    </h3>

                    <p>

                        Cálculo de assinatura criptográfica
                        para validação de integridade.

                    </p>

                </div>

            </div>


            <div class="workflow-arrow">
                ↓
            </div>



            <!-- 05 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    05
                </div>

                <div class="workflow-content">

                    <span>
                        PRESERVATION
                    </span>

                    <h3>
                        Preservação
                    </h3>

                    <p>

                        Proteção contra modificação, exclusão
                        ou execução acidental.

                    </p>

                </div>

            </div>


            <div class="workflow-arrow">
                ↓
            </div>



            <!-- 06 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    06
                </div>

                <div class="workflow-content">

                    <span>
                        CUSTODY
                    </span>

                    <h3>
                        Custódia
                    </h3>

                    <p>

                        Registro formal dos responsáveis
                        pela posse da evidência.

                    </p>

                </div>

            </div>


            <div class="workflow-arrow">
                ↓
            </div>



            <!-- 07 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    07
                </div>

                <div class="workflow-content">

                    <span>
                        FORENSICS
                    </span>

                    <h3>
                        Análise
                    </h3>

                    <p>

                        Investigação realizada em ambiente
                        apropriado e controlado.

                    </p>

                </div>

            </div>


            <div class="workflow-arrow">
                ↓
            </div>



            <!-- 08 -->

            <div class="workflow-item">

                <div class="workflow-icon">
                    08
                </div>

                <div class="workflow-content">

                    <span>
                        ARCHIVE
                    </span>

                    <h3>
                        Encerramento
                    </h3>

                    <p>

                        Armazenamento, retenção ou descarte
                        documentado.

                    </p>

                </div>

            </div>


        </div>


    </div>

</section>



<!-- =========================================================
     HASH
========================================================== -->

<section class="section">


    <div class="container">


        <div class="section-heading">


            <span class="section-number">
                03
            </span>


            <div>

                <span class="section-eyebrow">
                    INTEGRITY CONTROL
                </span>

                <h2>
                    Verificação criptográfica
                </h2>

            </div>


        </div>



        <div class="hash-grid">


            <div class="hash-description">


                <p class="lead">

                    O hash criptográfico permite verificar se uma
                    evidência digital sofreu alterações durante
                    seu ciclo de custódia.

                </p>


                <p>

                    O projeto utiliza principalmente SHA-256 para
                    registrar e posteriormente validar a integridade
                    dos artefatos coletados.

                </p>


            </div>



            <div class="code-card">


                <div class="code-header">

                    <span>
                        PowerShell
                    </span>

                    <span class="code-status">
                        DFIR
                    </span>

                </div>


                <pre><code>Get-FileHash `
-Path "C:\Evidence\suspicious.exe" `
-Algorithm SHA256</code></pre>


            </div>


        </div>


    </div>

</section>



<!-- =========================================================
     FEATURES
========================================================== -->

<section class="section section-soft"
         id="features">


    <div class="container">


        <div class="section-heading">


            <span class="section-number">
                04
            </span>


            <div>

                <span class="section-eyebrow">
                    PLATFORM
                </span>

                <h2>
                    Recursos do projeto
                </h2>

            </div>


        </div>



        <div class="feature-grid">


            <article class="feature-card">

                <div class="feature-top">

                    <span class="feature-id">
                        GG-01
                    </span>

                    <span class="feature-type">
                        EVIDENCE
                    </span>

                </div>

                <h3>
                    Registro de Evidências
                </h3>

                <p>

                    Formulário dedicado para registrar origem,
                    ativo, características e identificação
                    da evidência.

                </p>

            </article>



            <article class="feature-card">

                <div class="feature-top">

                    <span class="feature-id">
                        GG-02
                    </span>

                    <span class="feature-type">
                        HASH
                    </span>

                </div>

                <h3>
                    Controle de Integridade
                </h3>

                <p>

                    Registro de hashes criptográficos para
                    validação da integridade da evidência.

                </p>

            </article>



            <article class="feature-card">

                <div class="feature-top">

                    <span class="feature-id">
                        GG-03
                    </span>

                    <span class="feature-type">
                        CUSTODY
                    </span>

                </div>

                <h3>
                    Histórico de Custódia
                </h3>

                <p>

                    Controle cronológico de entrega,
                    recebimento e finalidade de cada
                    transferência.

                </p>

            </article>



            <article class="feature-card">

                <div class="feature-top">

                    <span class="feature-id">
                        GG-04
                    </span>

                    <span class="feature-type">
                        REPORT
                    </span>

                </div>

                <h3>
                    Documento A4
                </h3>

                <p>

                    Formulário preparado para impressão,
                    assinatura e geração de PDF pelo navegador.

                </p>

            </article>



            <article class="feature-card">

                <div class="feature-top">

                    <span class="feature-id">
                        GG-05
                    </span>

                    <span class="feature-type">
                        GUIDE
                    </span>

                </div>

                <h3>
                    Guia Técnico
                </h3>

                <p>

                    Documentação para orientar o processo
                    de coleta e preenchimento dos registros.

                </p>

            </article>



            <article class="feature-card">

                <div class="feature-top">

                    <span class="feature-id">
                        GG-06
                    </span>

                    <span class="feature-type">
                        LAB
                    </span>

                </div>

                <h3>
                    Caso Prático
                </h3>

                <p>

                    Exemplo fictício demonstrando a utilização
                    do processo durante um incidente.

                </p>

            </article>


        </div>


    </div>

</section>



<!-- =========================================================
     DOCUMENTATION / KNOWLEDGE BASE
========================================================== -->

<section class="section"
         id="documentation">


    <div class="container">


        <div class="section-heading">


            <span class="section-number">
                05
            </span>


            <div>

                <span class="section-eyebrow">
                    GG KNOWLEDGE BASE
                </span>

                <h2>
                    Documentação técnica
                </h2>

            </div>


        </div>



        <p class="section-intro">

            Consulte os procedimentos, conceitos, guias,
            simulações e referências utilizadas no projeto
            através da Knowledge Base GG.

        </p>



        <div class="documents-grid">


            <!-- COLETA -->

            <a href="docs/?doc=coleta-evidencias"
               class="document-card">


                <span class="document-icon">
                    01
                </span>


                <div>

                    <small>
                        PROCEDURE
                    </small>

                    <h3>
                        Coleta de Evidências
                    </h3>

                    <p>
                        Identificação, coleta, metadados e preservação.
                    </p>

                </div>


                <span class="document-arrow">
                    →
                </span>


            </a>



            <!-- CUSTÓDIA -->

            <a href="docs/?doc=cadeia-de-custodia"
               class="document-card">


                <span class="document-icon">
                    02
                </span>


                <div>

                    <small>
                        CHAIN OF CUSTODY
                    </small>

                    <h3>
                        Cadeia de Custódia
                    </h3>

                    <p>
                        Rastreabilidade, posse e transferência de evidências.
                    </p>

                </div>


                <span class="document-arrow">
                    →
                </span>


            </a>



            <!-- GUIA -->

            <a href="docs/?doc=guia-preenchimento"
               class="document-card">


                <span class="document-icon">
                    03
                </span>


                <div>

                    <small>
                        USER GUIDE
                    </small>

                    <h3>
                        Guia de Preenchimento
                    </h3>

                    <p>
                        Manual completo para utilização do formulário GG.
                    </p>

                </div>


                <span class="document-arrow">
                    →
                </span>


            </a>



            <!-- CASO -->

            <a href="docs/?doc=exemplo-caso"
               class="document-card">


                <span class="document-icon">
                    04
                </span>


                <div>

                    <small>
                        PRACTICAL CASE
                    </small>

                    <h3>
                        Caso Prático DFIR
                    </h3>

                    <p>
                        Simulação completa de incidente e tratamento da evidência.
                    </p>

                </div>


                <span class="document-arrow">
                    →
                </span>


            </a>



            <!-- REFERÊNCIAS -->

            <a href="docs/?doc=referencias"
               class="document-card">


                <span class="document-icon">
                    05
                </span>


                <div>

                    <small>
                        REFERENCES
                    </small>

                    <h3>
                        Referências Técnicas
                    </h3>

                    <p>
                        Normas, legislação, NIST e documentação técnica.
                    </p>

                </div>


                <span class="document-arrow">
                    →
                </span>


            </a>



            <!-- FORM -->

            <a href="templates/chain-of-custody.html"
               class="document-card highlighted">


                <span class="document-icon">
                    GG
                </span>


                <div>

                    <small>
                        INTERACTIVE FORM
                    </small>

                    <h3>
                        Chain of Custody Form
                    </h3>

                    <p>
                        Criar, preencher e imprimir um registro de evidência.
                    </p>

                </div>


                <span class="document-arrow">
                    →
                </span>


            </a>


        </div>


    </div>

</section>



<!-- =========================================================
     STANDARDS
========================================================== -->

<section class="section section-dark">


    <div class="container">


        <div class="standards">


            <div>


                <span class="section-eyebrow">
                    GOVERNANCE & FORENSICS
                </span>


                <h2>
                    Referências do projeto
                </h2>


                <p>

                    A documentação considera conceitos relacionados
                    à identificação, coleta, aquisição, preservação
                    e rastreabilidade de evidências digitais.

                </p>


            </div>



            <div class="standards-list">


                <div>

                    <strong>
                        ISO/IEC 27037
                    </strong>

                    <span>
                        Digital Evidence Guidelines
                    </span>

                </div>


                <div>

                    <strong>
                        NIST SP 800-86
                    </strong>

                    <span>
                        Forensics & Incident Response
                    </span>

                </div>


                <div>

                    <strong>
                        Chain of Custody
                    </strong>

                    <span>
                        Evidence Traceability
                    </span>

                </div>


                <div>

                    <strong>
                        CPP
                    </strong>

                    <span>
                        Arts. 158-A a 158-F
                    </span>

                </div>


            </div>


        </div>


    </div>

</section>



<!-- =========================================================
     CTA
========================================================== -->

<section class="cta">


    <div class="container cta-content">


        <span class="cta-label">
            GG // DIGITAL FORENSICS
        </span>


        <h2>
            Inicie um registro de evidência
        </h2>


        <p>

            Utilize o formulário web para documentar
            uma cadeia de custódia digital de forma
            organizada e pronta para impressão.

        </p>


        <a href="templates/chain-of-custody.html"
           class="button button-primary button-large">

            Abrir Chain of Custody

        </a>


    </div>


</section>


</main>



<!-- =========================================================
     FOOTER
========================================================== -->

<footer class="footer">


    <div class="container footer-content">


        <div>


            <div class="footer-logo">
                GG
            </div>


            <strong>
                GG // DIGITAL FORENSICS
            </strong>


            <p>
                Digital Evidence & Chain of Custody
            </p>


        </div>



        <div class="footer-middle">


            <span>
                PRESERVE
            </span>


            <span>
                VERIFY
            </span>


            <span>
                TRACE
            </span>


        </div>



        <div class="footer-author">


            <span>
                Developed by
            </span>


            <a href="https://github.com/geovanniandrade"
               target="_blank"
               rel="noopener noreferrer">

                Geovanni Andrade

            </a>


        </div>


    </div>



    <div class="footer-bottom">


        <div class="container">


            <span>
                Academic & Laboratory Project
            </span>


            <span>
                GG Digital Forensics © 2026
            </span>


        </div>


    </div>


</footer>



<script src="assets/js/app.js"></script>


</body>

</html>
O que já corrigi nesse código

Agora os links são:

Coleta de Evidências
→ docs/?doc=coleta-evidencias

Cadeia de Custódia
→ docs/?doc=cadeia-de-custodia

Guia de Preenchimento
→ docs/?doc=guia-preenchimento

Caso Prático
→ docs/?doc=exemplo-caso

Referências
→ docs/?doc=referencias

E também alterei o botão principal:

Explorar Documentação

para abrir diretamente a Knowledge Base GG, em vez de apenas rolar a página.

O conteúdo que você já colocou no projeto apresenta a interface web como ponto central para documentação, formulário, guia, caso e geração de PDF, então essa alteração deixa a navegação coerente com a arquitetura que estamos montando.

Agora faça
Substitua o index.html por esse.
Commit changes.
Confirme que você já criou o docs/index.html que te enviei na etapa anterior.
Aguarde o Pages atualizar.
Ctrl + F5.

Depois, ao clicar em Coleta de Evidências, ele não deverá mais mostrar Markdown cru. Vai abrir a GG Knowledge Base com menu lateral.

porque agora está assim?

<div align="center">

🛡️ GG // DIGITAL FORENSICS
Digital Evidence & Chain of Custody

DFIR • Incident Response • Evidence Preservation • Forensic Integrity

Projeto prático voltado à coleta, preservação, integridade, documentação e rastreabilidade de evidências digitais durante investigações e processos de resposta a incidentes de segurança.

<br>






PRESERVE • VERIFY • TRACE

</div>

🔎 Sobre o projeto

O GG Digital Evidence & Chain of Custody é um projeto acadêmico e prático desenvolvido com foco em Digital Forensics & Incident Response (DFIR).

A proposta é estabelecer um processo estruturado para a coleta de artefatos digitais suspeitos e manutenção de sua cadeia de custódia, possibilitando registrar todo o ciclo de vida de uma evidência desde sua identificação até o armazenamento ou encerramento do caso.

Além da documentação técnica, o projeto possui uma interface web própria, desenvolvida para facilitar o preenchimento, visualização e impressão de registros de cadeia de custódia.

O projeto busca simular uma abordagem aplicável a ambientes corporativos de:

SOC;
CSIRT;
Blue Team;
DFIR;
resposta a incidentes;
investigação forense digital.
🎯 Objetivo

Criar um processo reutilizável para cenários de investigação de incidentes envolvendo arquivos maliciosos, artefatos suspeitos e outras evidências digitais.

O processo busca garantir cinco princípios fundamentais:

Pilar	Objetivo
🔍 Identificação	Registrar claramente a evidência e sua origem
🔐 Integridade	Demonstrar que a evidência não sofreu alterações
🔗 Rastreabilidade	Registrar todo o histórico de posse e transferência
📦 Preservação	Proteger o artefato durante todo o processo
📝 Documentação	Permitir auditoria e reconstrução das ações realizadas
🔄 Ciclo de Vida da Evidência

O fluxo adotado pelo projeto considera as principais etapas de tratamento de uma evidência digital.

┌─────────────────────────┐
│        INCIDENTE        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      IDENTIFICAÇÃO      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│         COLETA          │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   HASH / INTEGRIDADE    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      PRESERVAÇÃO        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  REGISTRO DE CUSTÓDIA   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      TRANSFERÊNCIA      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│     ANÁLISE FORENSE     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      ARMAZENAMENTO      │
│             /           │
│       ENCERRAMENTO      │
└─────────────────────────┘
🧪 Processo de Coleta
01 — Identificação do incidente

A primeira etapa consiste no registro inicial do evento de segurança e na criação de um identificador único para permitir sua rastreabilidade.

Exemplo:

INC-2026-001

O registro poderá conter informações como:

identificador do incidente;
data da ocorrência;
horário;
responsável pela coleta;
departamento;
classificação do incidente.
02 — Identificação do ativo

Após identificar o incidente, devem ser registradas informações sobre o equipamento ou sistema onde a evidência foi localizada.

Exemplos:

Hostname
Endereço IPv4
Endereço MAC
Sistema Operacional
Versão / Build
Usuário ativo
Número de série
Localização física

Essas informações ajudam a estabelecer a origem técnica da evidência.

03 — Identificação da evidência

O artefato localizado deve ser documentado antes de qualquer movimentação ou análise.

Informações importantes incluem:

Nome do arquivo
Caminho original
Tamanho em bytes
Data de criação
Última modificação
Último acesso
Tipo de artefato

Exemplo:

C:\Windows\Temp\suspicious_payload.exe
04 — Verificação de integridade

Antes da transferência ou manipulação da evidência, deve ser calculado um hash criptográfico.

O projeto utiliza principalmente SHA-256 como mecanismo de verificação de integridade.

Exemplo utilizando PowerShell:

Get-FileHash -Path "C:\Evidence\suspicious.exe" -Algorithm SHA256

Também pode ser registrado o hash MD5 para fins complementares:

Get-FileHash -Path "C:\Evidence\suspicious.exe" -Algorithm MD5

O hash funciona como uma impressão digital matemática do arquivo.

Caso o conteúdo da evidência seja alterado, o valor calculado será diferente, permitindo identificar uma possível modificação.

05 — Coleta de metadados

Informações adicionais do arquivo também podem ser coletadas para auxiliar a investigação.

Exemplo em PowerShell:

Get-ItemProperty -Path "C:\Evidence\suspicious.exe" |
    Select-Object FullName,
                  Length,
                  CreationTimeUtc,
                  LastWriteTimeUtc,
                  LastAccessTimeUtc |
    Format-List

Esses dados ajudam a registrar características temporais importantes para uma análise forense.

06 — Preservação da evidência

Após a coleta, a evidência deve ser protegida contra alterações ou execução acidental.

Entre as medidas recomendadas estão:

armazenamento controlado;
restrição de acesso;
verificação de hashes;
registro dos responsáveis;
utilização de mídia destinada à coleta;
acondicionamento seguro;
criptografia do contêiner;
documentação de qualquer transferência.

Quando necessário, uma amostra pode ser acondicionada em um contêiner criptografado.

Exemplo:

evidence_INC-2026-001.7z
🔐 Integridade Criptográfica

O projeto registra dois valores principais:

SHA-256
SHA-256
64 caracteres hexadecimais

Utilizado como principal mecanismo de verificação de integridade.

MD5
MD5
32 caracteres hexadecimais

Pode ser utilizado como identificador complementar durante processos de triagem e correlação.

O valor de hash deve ser registrado antes e depois das etapas relevantes de transferência ou armazenamento, permitindo verificar que a evidência permaneceu íntegra.

🔗 Cadeia de Custódia

A cadeia de custódia representa o histórico documentado da evidência.

Toda alteração de posse física ou lógica deve possuir um registro contendo, no mínimo:

Data
Hora
Responsável pela entrega
Responsável pelo recebimento
Finalidade da transferência
Local de armazenamento
Validação / assinatura

Exemplo:

Nº	Data / Hora	Entregue por	Recebido por	Finalidade
01	03/09/2026 - 14:30	Analista DFIR	Analista DFIR	Coleta inicial
02	03/09/2026 - 16:10	Analista DFIR	Analista Forense	Análise
03	04/09/2026 - 09:00	Analista Forense	Responsável pela Custódia	Armazenamento

Os dados acima são apenas exemplos fictícios utilizados para demonstração.

📝 GG Chain of Custody Form

O projeto possui um documento próprio para registro de cadeia de custódia.

O formulário permite registrar:

ID do incidente;
ID da evidência;
data e hora da coleta;
responsável pela coleta;
informações do ativo;
informações do artefato;
hash SHA-256;
hash MD5;
armazenamento;
acondicionamento;
histórico de transferências;
responsáveis;
assinaturas;
encerramento da custódia.

O documento foi desenvolvido para ser preenchido diretamente pelo navegador.

templates/chain-of-custody.html
🖨️ Documento Imprimível

Uma das propostas do projeto é permitir que o registro seja utilizado tanto digitalmente quanto como documento formal.

A versão web será preparada para:

preenchimento no navegador;
impressão em papel;
formato A4;
exportação utilizando impressão para PDF;
layout corporativo;
assinatura manual;
arquivamento do registro.

Isso permite utilizar a interface web como ferramenta de apoio e gerar posteriormente um documento estático para armazenamento.

🌐 Interface Web

O projeto também inclui uma interface própria:

GG // DIGITAL FORENSICS
Digital Evidence & Chain of Custody

A interface será responsável por centralizar o processo de documentação.

Recursos
Dashboard DFIR;
visualização do ciclo de vida da evidência;
criação de registro;
formulário de cadeia de custódia;
documentação técnica;
guia de preenchimento;
exemplo de incidente;
impressão;
geração de PDF pelo navegador.
🧭 Fluxo Operacional
INCIDENT DETECTED
        │
        ▼
IDENTIFY EVIDENCE
        │
        ▼
REGISTER SOURCE
        │
        ▼
CALCULATE HASH
        │
        ▼
COLLECT ARTIFACT
        │
        ▼
PRESERVE EVIDENCE
        │
        ▼
REGISTER CUSTODY
        │
        ▼
FORENSIC ANALYSIS
        │
        ▼
ARCHIVE / CLOSE
📂 Estrutura do Projeto
gg-chain-of-custody/
│
├── assets/
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── img/
│   │   └── gg-logo.svg
│   │
│   └── js/
│       └── app.js
│
├── docs/
│   │
│   ├── cadeia-de-custodia.md
│   ├── coleta-evidencias.md
│   ├── exemplo-caso.md
│   ├── guia-preenchimento.md
│   └── referencias.md
│
├── templates/
│   └── chain-of-custody.html
│
├── README.md
└── index.html
📚 Documentação

O repositório foi dividido em documentos específicos para facilitar a consulta.

Documento	Finalidade
coleta-evidencias.md	Processo técnico de coleta de evidências
cadeia-de-custodia.md	Conceitos e processo de cadeia de custódia
guia-preenchimento.md	Instruções de utilização do formulário
exemplo-caso.md	Simulação prática de um incidente
referencias.md	Referências técnicas, normativas e legais
🛠️ Tecnologias utilizadas

<div align="center">







</div>

🛡️ Áreas relacionadas

O projeto possui relação direta com diferentes áreas de Segurança da Informação:

Digital Forensics
DFIR
Incident Response
CSIRT
SOC
Blue Team
Evidence Preservation
Malware Triage
Forensic Integrity
Security Operations
⚖️ Referências Técnicas e Legais

O desenvolvimento considera conceitos relacionados a:

ISO/IEC 27037

Diretrizes relacionadas à:

identificação;
coleta;
aquisição;
preservação de evidências digitais.
Cadeia de Custódia

O projeto também considera os princípios de rastreabilidade da cadeia de custódia previstos nos:

Artigos 158-A a 158-F
Código de Processo Penal Brasileiro

Além de práticas utilizadas em processos de:

Digital Forensics;
Incident Response;
Evidence Handling;
preservação de integridade;
documentação de incidentes.
🧪 Ambiente de Laboratório

Todos os exemplos apresentados neste projeto são desenvolvidos em ambiente:

LABORATÓRIO
CONTROLADO
AUTORIZADO
FICTÍCIO

Nenhuma amostra real de malware é disponibilizada neste repositório.

O foco do projeto está na documentação, preservação e rastreabilidade da evidência, e não na distribuição ou execução de código malicioso.

⚠️ Disclaimer

Este projeto foi desenvolvido para fins acadêmicos, educacionais, profissionais e de laboratório.

Os nomes de empresas, usuários, equipamentos, endereços, hashes, incidentes e evidências utilizados nos exemplos podem ser fictícios ou anonimizados.

O conteúdo não deve substituir procedimentos oficiais estabelecidos por autoridades competentes, políticas internas, requisitos jurídicos ou orientação de profissionais especializados.

🚀 Roadmap

Criação do repositório

Estrutura inicial do projeto

Documentação base

Identidade GG Digital Forensics

Desenvolvimento da interface web

Desenvolvimento do formulário interativo

Layout de impressão A4

Exportação para PDF

Caso prático completo

Publicação via GitHub Pages

Finalização da documentação

👨‍💻 Autor

<div align="center">

Geovanni Andrade

TI • Infraestrutura • Cybersecurity

Blue Team • SOC • Incident Response • DFIR




GG // DIGITAL FORENSICS
PRESERVE. VERIFY. TRACE.

Digital Evidence & Chain of Custody

</div>

Fechar
