<div align="center">

# 🔗 GG // DIGITAL FORENSICS

## Cadeia de Custódia de Evidências Digitais

**Digital Evidence Chain of Custody**

`GG-DFIR-COC-02 • REV 1.0`

---

**PRESERVE • VERIFY • TRACE**

</div>

---

# 1. Objetivo

Este documento apresenta o processo de **cadeia de custódia aplicado a evidências digitais** dentro do projeto GG Digital Forensics.

A cadeia de custódia tem como finalidade manter um registro cronológico das ações realizadas sobre uma evidência, permitindo identificar:

- onde a evidência foi encontrada;
- quem realizou a coleta;
- quando a coleta ocorreu;
- como sua integridade foi verificada;
- onde foi armazenada;
- quem teve sua posse;
- por qual motivo houve uma transferência;
- quando a evidência foi analisada;
- quando foi arquivada ou encerrada.

A proposta é garantir **rastreabilidade durante todo o ciclo de vida da evidência**.

---

# 2. O que é Cadeia de Custódia

A cadeia de custódia representa o histórico documentado de uma evidência.

Em um cenário digital, não basta apenas armazenar um arquivo suspeito.

É necessário demonstrar:

```text
QUEM
teve contato com a evidência

QUANDO
isso ocorreu

ONDE
ela permaneceu armazenada

POR QUE
houve determinada movimentação

COMO
sua integridade foi verificada
```

A cadeia de custódia deve acompanhar a evidência desde sua identificação até seu encerramento.

---

# 3. Princípio de Rastreabilidade

Toda evidência deve possuir um histórico que permita reconstruir sua trajetória.

Exemplo:

```text
INCIDENTE
    │
    ▼
IDENTIFICAÇÃO
    │
    ▼
COLETA
    │
    ▼
PRESERVAÇÃO
    │
    ▼
TRANSFERÊNCIA
    │
    ▼
ANÁLISE
    │
    ▼
ARMAZENAMENTO
    │
    ▼
ENCERRAMENTO
```

Cada transição relevante deve possuir um registro associado.

---

# 4. Elementos Fundamentais

O projeto GG utiliza os seguintes pilares:

| Pilar | Finalidade |
|---|---|
| **Identificação** | Determinar exatamente qual evidência está sendo tratada |
| **Integridade** | Permitir verificar se o conteúdo sofreu alteração |
| **Custódia** | Identificar quem possui responsabilidade pela evidência |
| **Rastreabilidade** | Registrar toda movimentação relevante |
| **Preservação** | Proteger a evidência durante todo o processo |
| **Documentação** | Permitir reconstrução e auditoria das ações |

---

# 5. Identificadores

Cada incidente e cada evidência devem possuir identificadores próprios.

## Case ID

Formato utilizado pelo projeto:

```text
INC-ANO-NÚMERO
```

Exemplo:

```text
INC-2026-001
```

---

## Evidence ID

Formato:

```text
EVD-NÚMERO
```

Exemplo:

```text
EVD-001
```

---

## Relação

Um incidente pode possuir diversas evidências.

Exemplo:

```text
INC-2026-001

├── EVD-001
├── EVD-002
├── EVD-003
└── EVD-004
```

Cada evidência deve possuir seu próprio registro.

---

# 6. Custodiante

O custodiante é o responsável pela posse ou guarda da evidência em determinado momento.

Durante um incidente podem existir diferentes responsáveis.

Exemplo:

```text
Analista SOC
     │
     ▼
Analista DFIR
     │
     ▼
Analista Forense
     │
     ▼
Responsável pelo Storage
```

Toda mudança entre responsáveis deve ser registrada.

---

# 7. Custodiante Inicial

O custodiante inicial é o profissional responsável pela primeira coleta ou registro formal da evidência.

Informações recomendadas:

```text
Nome completo
Cargo
Equipe
Departamento
Organização
Data
Hora
Fuso horário
```

Exemplo:

```text
Custodiante:
Analista DFIR

Equipe:
CSIRT

Timezone:
UTC-03:00 / Brasília
```

---

# 8. Registro Inicial

No momento da identificação da evidência devem ser registrados:

```text
Case ID
Evidence ID
Data da coleta
Hora da coleta
Fuso horário
Custodiante inicial
Sistema de origem
Caminho original
Nome do artefato
Tamanho
Hash SHA-256
Local inicial de guarda
```

Esse registro representa o ponto inicial da cadeia de custódia.

---

# 9. Sistema de Origem

O sistema onde a evidência foi identificada também deve ser documentado.

Campos utilizados pelo projeto:

```text
Hostname
IPv4
MAC Address
Sistema Operacional
Build
Número de Série
Usuário
Localização
```

Exemplo:

```text
Hostname:
WS-FINANCE-01

IPv4:
192.168.10.25

User:
CORP\usuario
```

---

# 10. Identificação da Evidência

A evidência deve possuir informações suficientes para diferenciá-la de outros artefatos.

Registrar:

```text
Evidence ID
Nome original
Caminho original
Tipo
Tamanho
Data de criação
Data de modificação
Último acesso
Hash criptográfico
```

Exemplo:

```text
Evidence ID:
EVD-001

Filename:
suspicious_payload.exe

Path:
C:\Windows\Temp\suspicious_payload.exe
```

---

# 11. Integridade

A integridade da evidência é registrada por meio de valores de hash.

O projeto utiliza principalmente:

```text
SHA-256
```

E permite também:

```text
MD5
```

como identificador complementar.

---

## 11.1 Hash inicial

Antes da movimentação da evidência:

```powershell
Get-FileHash `
    -Path "C:\Evidence\suspicious.exe" `
    -Algorithm SHA256
```

O valor deve ser registrado no formulário.

---

## 11.2 Verificação posterior

Após uma cópia ou transferência, um novo cálculo pode ser realizado.

```text
HASH ORIGINAL
        │
        ▼
    TRANSFERÊNCIA
        │
        ▼
 NOVO CÁLCULO
        │
        ▼
    COMPARAÇÃO
```

Resultado esperado:

```text
ORIGINAL SHA-256
=
VERIFIED SHA-256
```

Quando os valores são iguais:

```text
INTEGRITY STATUS

VERIFIED
```

---

# 12. Transferência de Custódia

Uma transferência ocorre quando a responsabilidade pela evidência passa de uma pessoa, equipe ou local de guarda para outro.

Exemplos:

```text
SOC → DFIR

DFIR → Engenharia Reversa

Engenharia Reversa → Storage Forense

Storage Forense → Arquivamento
```

Cada transferência deve ser registrada.

---

# 13. Campos Obrigatórios da Transferência

O projeto utiliza os seguintes campos:

| Campo | Descrição |
|---|---|
| **Data / Hora** | Momento da transferência |
| **Entregue por** | Responsável anterior |
| **Recebido por** | Novo responsável |
| **Finalidade** | Motivo da movimentação |
| **Local de guarda** | Destino da evidência |
| **Validação** | Assinatura, rubrica ou identificação |

Exemplo:

```text
Data/Hora:
03/09/2026 16:10

Entregue por:
Analista DFIR

Recebido por:
Analista Forense

Finalidade:
Análise técnica do artefato

Destino:
Estação Forense DFIR-02
```

---

# 14. Histórico Cronológico

O histórico deve seguir a ordem em que as movimentações ocorreram.

Exemplo:

| Nº | Data/Hora | Entregue por | Recebido por | Finalidade / Guarda |
|---:|---|---|---|---|
| 01 | 03/09/2026 14:30 | Analista DFIR | Analista DFIR | Coleta inicial |
| 02 | 03/09/2026 16:10 | Analista DFIR | Analista Forense | Análise |
| 03 | 04/09/2026 09:00 | Analista Forense | Custodiante | Cofre digital |
| 04 | 10/09/2026 15:00 | Custodiante | Custodiante | Arquivamento |

> Dados fictícios utilizados para demonstração.

---

# 15. Local de Guarda

A localização da evidência deve ser conhecida durante todo seu ciclo de vida.

Exemplos:

```text
DFIR-MEDIA-01

Storage de Evidências

Estação Forense DFIR-02

Cofre Digital

Laboratório de Engenharia Reversa
```

Não registrar apenas:

```text
Servidor
```

Preferir uma identificação específica:

```text
Storage DFIR
Volume: EVIDENCE-01
Case: INC-2026-001
Evidence: EVD-001
```

---

# 16. Acondicionamento

A evidência pode ser protegida utilizando um contêiner próprio para armazenamento.

Exemplo:

```text
evidence_INC-2026-001_EVD-001.7z
```

O registro deve diferenciar:

```text
EVIDÊNCIA ORIGINAL

e

CONTÊINER DE ARMAZENAMENTO
```

Cada um pode possuir seu próprio hash.

---

# 17. Identificação da Mídia

Quando a evidência for armazenada em mídia específica, registrar:

```text
Media ID
Fabricante
Modelo
Número de Série
Responsável
Localização
```

Exemplo:

```text
Media ID:
DFIR-MEDIA-01
```

Isso permite relacionar:

```text
INCIDENTE
    │
EVIDÊNCIA
    │
CONTÊINER
    │
MÍDIA
    │
CUSTODIANTE
```

---

# 18. Registro de Ações

A cadeia de custódia não deve registrar apenas transferências físicas.

Também podem ser documentadas ações relevantes como:

```text
Coleta
Aquisição
Transferência
Entrada no laboratório
Análise
Mudança de storage
Arquivamento
Descarte
```

Sempre que uma ação alterar a responsabilidade ou localização da evidência, deve existir rastreabilidade.

---

# 19. Continuidade da Custódia

A documentação deve evitar períodos em que não seja possível identificar:

```text
quem possuía a evidência;

onde ela estava;

qual ação estava sendo realizada;

quando ocorreu a transferência.
```

Um histórico incompleto reduz a capacidade de reconstruir o tratamento realizado sobre a evidência.

---

# 20. Sinais de Rastreabilidade Incompleta

Exemplos de situações que devem ser evitadas:

```text
Evidência sem identificador

Transferência sem data

Responsável não identificado

Local de guarda desconhecido

Hash não registrado

Movimentação sem finalidade

Arquivo renomeado sem documentação

Mídia não identificada

Evidência analisada sem registro de recebimento
```

Quando alguma exceção ocorrer, ela deve ser documentada no campo de observações.

---

# 21. Alterações Durante a Análise

A análise forense deve, sempre que possível, ser executada utilizando uma cópia destinada ao trabalho técnico.

Estrutura conceitual:

```text
EVIDÊNCIA ORIGINAL
       │
       │ preservada
       │
       └─────────────┐
                     ▼
               CÓPIA DE ANÁLISE
                     │
                     ▼
               INVESTIGAÇÃO
```

O objetivo é manter o material original preservado.

---

# 22. Evidência Original x Cópia de Trabalho

É importante diferenciar os dois objetos.

## Original

```text
Preservado
Identificado
Hash registrado
Acesso controlado
```

## Cópia de trabalho

```text
Utilizada na análise
Pode ser manipulada conforme o procedimento
Relacionada à evidência original
Integridade verificável
```

---

# 23. Observações Técnicas

O formulário GG possui um campo específico de observações.

Utilize-o para registrar:

- condições incomuns durante a coleta;
- erros;
- exceções;
- ferramentas utilizadas;
- alterações necessárias;
- divergências de hash;
- problemas de acesso;
- limitações;
- informações relevantes para reconstrução do processo.

Exemplo:

```text
A coleta foi realizada às 14:32.

O equipamento permaneceu ligado durante
a identificação inicial.

O SHA-256 foi calculado antes da transferência.

A cópia foi armazenada em DFIR-MEDIA-01.
```

---

# 24. Encerramento da Custódia

Ao final do processo, deve ser registrado o destino da evidência.

Possíveis estados utilizados pelo projeto:

```text
ACTIVE
UNDER ANALYSIS
ARCHIVED
CLOSED
```

O encerramento pode representar:

```text
arquivamento;

retenção;

devolução;

descarte controlado;

conclusão da investigação.
```

A ação realizada deve permanecer documentada.

---

# 25. Descarte

Quando houver descarte autorizado, registrar:

```text
Data
Hora
Responsável
Método
Autorização
Evidence ID
Motivo
```

Não utilizar apenas:

```text
Arquivo apagado
```

O registro deve permitir compreender o que ocorreu com a evidência.

---

# 26. Responsabilidade e Homologação

Ao final do registro, o documento deve possuir identificação dos responsáveis.

No formulário GG são previstas duas validações:

```text
Custodiante Inicial
/
Responsável pela Coleta
```

e

```text
Responsável pela Validação
/
Liderança DFIR
```

O material-base também prevê assinatura do custodiante inicial e do responsável de liderança/supervisão. 

---

# 27. Fluxo Completo GG

```text
┌─────────────────────────────┐
│        INCIDENTE            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      CRIAÇÃO DO CASE ID     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│    IDENTIFICAÇÃO DO ATIVO   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ IDENTIFICAÇÃO DA EVIDÊNCIA  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      HASH SHA-256           │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│         COLETA              │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       PRESERVAÇÃO           │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│   REGISTRO DO CUSTODIANTE   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ TRANSFERÊNCIAS DE CUSTÓDIA  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      ANÁLISE FORENSE        │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       ARQUIVAMENTO          │
│             OU              │
│       ENCERRAMENTO          │
└─────────────────────────────┘
```

---

# 28. Checklist da Cadeia de Custódia

Antes de considerar o registro completo:

- [ ] Case ID registrado
- [ ] Evidence ID registrado
- [ ] Custodiante inicial identificado
- [ ] Data da coleta registrada
- [ ] Hora da coleta registrada
- [ ] Fuso horário registrado
- [ ] Sistema de origem identificado
- [ ] Caminho original registrado
- [ ] Metadados registrados
- [ ] SHA-256 original registrado
- [ ] Meio de armazenamento identificado
- [ ] Local inicial de guarda registrado
- [ ] Transferências registradas cronologicamente
- [ ] Entregue por identificado
- [ ] Recebido por identificado
- [ ] Finalidade registrada
- [ ] Local de guarda registrado
- [ ] Observações relevantes documentadas
- [ ] Status final atualizado
- [ ] Responsáveis identificados

---

# 29. Formulário GG

O registro oficial do projeto está disponível em:

```text
templates/chain-of-custody.html
```

A estrutura do formulário é dividida em:

```text
01  CASE INFORMATION

02  SOURCE SYSTEM

03  DIGITAL EVIDENCE

04  CRYPTOGRAPHIC INTEGRITY

05  COLLECTION & PRESERVATION

06  CUSTODY HISTORY

07  FORENSIC NOTES

08  RESPONSIBILITY & APPROVAL
```

---

# 30. Impressão e PDF

O formulário pode ser preenchido pelo navegador e convertido em documento utilizando:

```text
Imprimir / Gerar PDF
```

No navegador:

```text
Ctrl + P
```

Depois:

```text
Destino
↓
Salvar como PDF
```

A versão impressa utiliza layout A4 e remove os elementos de navegação da interface.

---

# 31. Referências do Projeto

O projeto utiliza como referência conceitos relacionados a:

```text
ISO/IEC 27037

Digital Evidence

Digital Forensics

Incident Response

Chain of Custody

Preservação de Integridade

Rastreabilidade de Evidências
```

Também considera, em contexto brasileiro, os conceitos relacionados à cadeia de custódia previstos nos:

```text
Artigos 158-A a 158-F
Código de Processo Penal
```

As referências completas estão disponíveis em:

```text
docs/referencias.md
```

---

# 32. Aviso

Este material foi desenvolvido para:

```text
USO ACADÊMICO

LABORATÓRIO

ESTUDO DE DFIR

SIMULAÇÃO DE INCIDENTES

PORTFÓLIO TÉCNICO
```

Em investigações reais, devem ser considerados os procedimentos oficiais da organização, requisitos jurídicos aplicáveis, autorização, escopo da investigação e orientação dos responsáveis técnicos e legais.

---

# 33. Documentos Relacionados

```text
docs/coleta-evidencias.md

docs/guia-preenchimento.md

docs/exemplo-caso.md

docs/referencias.md

templates/chain-of-custody.html
```

---

<div align="center">

## GG // DIGITAL FORENSICS

### DIGITAL EVIDENCE CHAIN OF CUSTODY

`PRESERVE. VERIFY. TRACE.`

**Geovanni Andrade • 2026**

</div>
