<div align="center">

# 🛡️ GG // DIGITAL FORENSICS

## Digital Evidence & Chain of Custody

**DFIR • Incident Response • Evidence Preservation • Forensic Integrity**

Projeto prático voltado à **coleta, preservação, integridade, documentação e rastreabilidade de evidências digitais** durante investigações e processos de resposta a incidentes de segurança.

<br>

![Status](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-2563eb?style=for-the-badge)
![DFIR](https://img.shields.io/badge/DFIR-Digital%20Forensics-0f172a?style=for-the-badge)
![Blue Team](https://img.shields.io/badge/BLUE%20TEAM-Incident%20Response-0284c7?style=for-the-badge)

---

### `PRESERVE • VERIFY • TRACE`

</div>

# 🔎 Sobre o projeto

O **GG Digital Evidence & Chain of Custody** é um projeto acadêmico e prático desenvolvido com foco em **Digital Forensics & Incident Response (DFIR)**.

A proposta é estabelecer um processo estruturado para a coleta de artefatos digitais suspeitos e manutenção de sua **cadeia de custódia**, possibilitando registrar todo o ciclo de vida de uma evidência desde sua identificação até o armazenamento ou encerramento do caso.

Além da documentação técnica, o projeto possui uma **interface web própria**, desenvolvida para facilitar o preenchimento, visualização e impressão de registros de cadeia de custódia.

O projeto busca simular uma abordagem aplicável a ambientes corporativos de:

- SOC;
- CSIRT;
- Blue Team;
- DFIR;
- resposta a incidentes;
- investigação forense digital.

---

# 🎯 Objetivo

Criar um processo reutilizável para cenários de investigação de incidentes envolvendo **arquivos maliciosos, artefatos suspeitos e outras evidências digitais**.

O processo busca garantir cinco princípios fundamentais:

| Pilar | Objetivo |
|---|---|
| 🔍 **Identificação** | Registrar claramente a evidência e sua origem |
| 🔐 **Integridade** | Demonstrar que a evidência não sofreu alterações |
| 🔗 **Rastreabilidade** | Registrar todo o histórico de posse e transferência |
| 📦 **Preservação** | Proteger o artefato durante todo o processo |
| 📝 **Documentação** | Permitir auditoria e reconstrução das ações realizadas |

---

# 🔄 Ciclo de Vida da Evidência

O fluxo adotado pelo projeto considera as principais etapas de tratamento de uma evidência digital.

```text
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
```

---

# 🧪 Processo de Coleta

## 01 — Identificação do incidente

A primeira etapa consiste no registro inicial do evento de segurança e na criação de um identificador único para permitir sua rastreabilidade.

Exemplo:

```text
INC-2026-001
```

O registro poderá conter informações como:

- identificador do incidente;
- data da ocorrência;
- horário;
- responsável pela coleta;
- departamento;
- classificação do incidente.

---

## 02 — Identificação do ativo

Após identificar o incidente, devem ser registradas informações sobre o equipamento ou sistema onde a evidência foi localizada.

Exemplos:

```text
Hostname
Endereço IPv4
Endereço MAC
Sistema Operacional
Versão / Build
Usuário ativo
Número de série
Localização física
```

Essas informações ajudam a estabelecer a **origem técnica da evidência**.

---

## 03 — Identificação da evidência

O artefato localizado deve ser documentado antes de qualquer movimentação ou análise.

Informações importantes incluem:

```text
Nome do arquivo
Caminho original
Tamanho em bytes
Data de criação
Última modificação
Último acesso
Tipo de artefato
```

Exemplo:

```text
C:\Windows\Temp\suspicious_payload.exe
```

---

## 04 — Verificação de integridade

Antes da transferência ou manipulação da evidência, deve ser calculado um **hash criptográfico**.

O projeto utiliza principalmente **SHA-256** como mecanismo de verificação de integridade.

Exemplo utilizando PowerShell:

```powershell
Get-FileHash -Path "C:\Evidence\suspicious.exe" -Algorithm SHA256
```

Também pode ser registrado o hash MD5 para fins complementares:

```powershell
Get-FileHash -Path "C:\Evidence\suspicious.exe" -Algorithm MD5
```

O hash funciona como uma **impressão digital matemática do arquivo**.

Caso o conteúdo da evidência seja alterado, o valor calculado será diferente, permitindo identificar uma possível modificação.

---

## 05 — Coleta de metadados

Informações adicionais do arquivo também podem ser coletadas para auxiliar a investigação.

Exemplo em PowerShell:

```powershell
Get-ItemProperty -Path "C:\Evidence\suspicious.exe" |
    Select-Object FullName,
                  Length,
                  CreationTimeUtc,
                  LastWriteTimeUtc,
                  LastAccessTimeUtc |
    Format-List
```

Esses dados ajudam a registrar características temporais importantes para uma análise forense.

---

## 06 — Preservação da evidência

Após a coleta, a evidência deve ser protegida contra alterações ou execução acidental.

Entre as medidas recomendadas estão:

- armazenamento controlado;
- restrição de acesso;
- verificação de hashes;
- registro dos responsáveis;
- utilização de mídia destinada à coleta;
- acondicionamento seguro;
- criptografia do contêiner;
- documentação de qualquer transferência.

Quando necessário, uma amostra pode ser acondicionada em um contêiner criptografado.

Exemplo:

```text
evidence_INC-2026-001.7z
```

---

# 🔐 Integridade Criptográfica

O projeto registra dois valores principais:

### SHA-256

```text
SHA-256
64 caracteres hexadecimais
```

Utilizado como principal mecanismo de verificação de integridade.

### MD5

```text
MD5
32 caracteres hexadecimais
```

Pode ser utilizado como identificador complementar durante processos de triagem e correlação.

O valor de hash deve ser registrado **antes e depois das etapas relevantes de transferência ou armazenamento**, permitindo verificar que a evidência permaneceu íntegra.

---

# 🔗 Cadeia de Custódia

A cadeia de custódia representa o histórico documentado da evidência.

Toda alteração de posse física ou lógica deve possuir um registro contendo, no mínimo:

```text
Data
Hora
Responsável pela entrega
Responsável pelo recebimento
Finalidade da transferência
Local de armazenamento
Validação / assinatura
```

Exemplo:

| Nº | Data / Hora | Entregue por | Recebido por | Finalidade |
|---:|---|---|---|---|
| 01 | 03/09/2026 - 14:30 | Analista DFIR | Analista DFIR | Coleta inicial |
| 02 | 03/09/2026 - 16:10 | Analista DFIR | Analista Forense | Análise |
| 03 | 04/09/2026 - 09:00 | Analista Forense | Responsável pela Custódia | Armazenamento |

> Os dados acima são apenas exemplos fictícios utilizados para demonstração.

---

# 📝 GG Chain of Custody Form

O projeto possui um documento próprio para registro de cadeia de custódia.

O formulário permite registrar:

- ID do incidente;
- ID da evidência;
- data e hora da coleta;
- responsável pela coleta;
- informações do ativo;
- informações do artefato;
- hash SHA-256;
- hash MD5;
- armazenamento;
- acondicionamento;
- histórico de transferências;
- responsáveis;
- assinaturas;
- encerramento da custódia.

O documento foi desenvolvido para ser preenchido diretamente pelo navegador.

```text
templates/chain-of-custody.html
```

---

# 🖨️ Documento Imprimível

Uma das propostas do projeto é permitir que o registro seja utilizado tanto digitalmente quanto como documento formal.

A versão web será preparada para:

- preenchimento no navegador;
- impressão em papel;
- formato A4;
- exportação utilizando impressão para PDF;
- layout corporativo;
- assinatura manual;
- arquivamento do registro.

Isso permite utilizar a interface web como ferramenta de apoio e gerar posteriormente um documento estático para armazenamento.

---

# 🌐 Interface Web

O projeto também inclui uma interface própria:

```text
GG // DIGITAL FORENSICS
Digital Evidence & Chain of Custody
```

A interface será responsável por centralizar o processo de documentação.

### Recursos

- Dashboard DFIR;
- visualização do ciclo de vida da evidência;
- criação de registro;
- formulário de cadeia de custódia;
- documentação técnica;
- guia de preenchimento;
- exemplo de incidente;
- impressão;
- geração de PDF pelo navegador.

---

# 🧭 Fluxo Operacional

```text
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
```

---

# 📂 Estrutura do Projeto

```text
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
```

---

# 📚 Documentação

O repositório foi dividido em documentos específicos para facilitar a consulta.

| Documento | Finalidade |
|---|---|
| `coleta-evidencias.md` | Processo técnico de coleta de evidências |
| `cadeia-de-custodia.md` | Conceitos e processo de cadeia de custódia |
| `guia-preenchimento.md` | Instruções de utilização do formulário |
| `exemplo-caso.md` | Simulação prática de um incidente |
| `referencias.md` | Referências técnicas, normativas e legais |

---

# 🛠️ Tecnologias utilizadas

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-Web%20Interface-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Interface-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Application-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PowerShell](https://img.shields.io/badge/PowerShell-DFIR-5391FE?style=flat-square&logo=powershell&logoColor=white)

</div>

---

# 🛡️ Áreas relacionadas

O projeto possui relação direta com diferentes áreas de Segurança da Informação:

```text
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
```

---

# ⚖️ Referências Técnicas e Legais

O desenvolvimento considera conceitos relacionados a:

### ISO/IEC 27037

Diretrizes relacionadas à:

- identificação;
- coleta;
- aquisição;
- preservação de evidências digitais.

### Cadeia de Custódia

O projeto também considera os princípios de rastreabilidade da cadeia de custódia previstos nos:

```text
Artigos 158-A a 158-F
Código de Processo Penal Brasileiro
```

Além de práticas utilizadas em processos de:

- Digital Forensics;
- Incident Response;
- Evidence Handling;
- preservação de integridade;
- documentação de incidentes.

---

# 🧪 Ambiente de Laboratório

Todos os exemplos apresentados neste projeto são desenvolvidos em ambiente:

```text
LABORATÓRIO
CONTROLADO
AUTORIZADO
FICTÍCIO
```

Nenhuma amostra real de malware é disponibilizada neste repositório.

O foco do projeto está na **documentação, preservação e rastreabilidade da evidência**, e não na distribuição ou execução de código malicioso.

---

# ⚠️ Disclaimer

Este projeto foi desenvolvido para **fins acadêmicos, educacionais, profissionais e de laboratório**.

Os nomes de empresas, usuários, equipamentos, endereços, hashes, incidentes e evidências utilizados nos exemplos podem ser fictícios ou anonimizados.

O conteúdo não deve substituir procedimentos oficiais estabelecidos por autoridades competentes, políticas internas, requisitos jurídicos ou orientação de profissionais especializados.

---

# 🚀 Roadmap

- [x] Criação do repositório
- [x] Estrutura inicial do projeto
- [x] Documentação base
- [x] Identidade GG Digital Forensics
- [ ] Desenvolvimento da interface web
- [ ] Desenvolvimento do formulário interativo
- [ ] Layout de impressão A4
- [ ] Exportação para PDF
- [ ] Caso prático completo
- [ ] Publicação via GitHub Pages
- [ ] Finalização da documentação

---

# 👨‍💻 Autor

<div align="center">

## Geovanni Andrade

**TI • Infraestrutura • Cybersecurity**

**Blue Team • SOC • Incident Response • DFIR**

[![GitHub](https://img.shields.io/badge/GitHub-geovanniandrade-181717?style=for-the-badge&logo=github)](https://github.com/geovanniandrade)

---

## GG // DIGITAL FORENSICS

### `PRESERVE. VERIFY. TRACE.`

**Digital Evidence & Chain of Custody**

</div>
