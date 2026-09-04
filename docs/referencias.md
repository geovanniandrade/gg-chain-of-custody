<div align="center">

# 📚 GG // DIGITAL FORENSICS

## Referências Técnicas, Normativas e Legais

**Digital Evidence & Chain of Custody References**

`GG-DFIR-REF-01 • REV 1.0`

---

**PRESERVE • VERIFY • TRACE**

</div>

---

# 1. Objetivo

Este documento reúne as principais referências utilizadas como base conceitual para o projeto:

> **GG Digital Evidence & Chain of Custody**

As referências foram organizadas em quatro grupos:

```text
01  Normas Técnicas

02  Legislação Brasileira

03  Digital Forensics & Incident Response

04  Documentação Técnica das Ferramentas
```

O projeto utiliza essas fontes como apoio para conceitos relacionados à:

- identificação de evidências digitais;
- coleta;
- aquisição;
- preservação;
- integridade;
- rastreabilidade;
- cadeia de custódia;
- resposta a incidentes;
- análise forense;
- documentação de evidências.

---

# 2. Referências Principais

| Referência | Área | Aplicação no Projeto |
|---|---|---|
| **ISO/IEC 27037:2012** | Evidência Digital | Identificação, coleta, aquisição e preservação |
| **ABNT NBR ISO/IEC 27037:2013** | Evidência Digital | Adoção brasileira da ISO/IEC 27037 |
| **Código de Processo Penal — Arts. 158-A a 158-F** | Cadeia de Custódia | Rastreabilidade, posse, manuseio e preservação |
| **NIST SP 800-86** | Digital Forensics / IR | Integração de técnicas forenses à resposta a incidentes |
| **Microsoft PowerShell Documentation** | Ferramentas | Hashes e identificação técnica do host |

---

# 3. ISO/IEC 27037:2012

## Título

**ISO/IEC 27037:2012 — Information technology — Security techniques — Guidelines for identification, collection, acquisition and preservation of digital evidence**

A norma apresenta diretrizes para atividades relacionadas ao tratamento de potenciais evidências digitais.

Seu escopo contempla principalmente:

```text
IDENTIFICATION

COLLECTION

ACQUISITION

PRESERVATION
```

Esses conceitos possuem relação direta com o processo implementado no projeto GG.

---

# 4. Aplicação da ISO/IEC 27037 no Projeto

A estrutura do projeto utiliza conceitos da norma em diferentes etapas.

## Identificação

Relacionada ao registro de:

```text
Case ID

Evidence ID

Sistema de origem

Artefato

Caminho original

Custodiante
```

---

## Coleta

Relacionada ao processo de obtenção controlada do artefato.

```text
IDENTIFY
    │
    ▼
REGISTER
    │
    ▼
COLLECT
```

---

## Aquisição

Relacionada à obtenção ou criação de uma representação da evidência para tratamento técnico.

Dependendo do tipo de investigação, isso pode envolver:

```text
Arquivo

Imagem de disco

Memória

Logs

Dados de rede

Outras fontes digitais
```

---

## Preservação

Relacionada às ações utilizadas para proteger a evidência contra alterações indevidas.

No projeto GG são considerados mecanismos como:

```text
Hash criptográfico

Controle de acesso

Storage identificado

Cópia de trabalho

Histórico de custódia

Registro de movimentações
```

---

# 5. ABNT NBR ISO/IEC 27037:2013

No Brasil, a referência correspondente é:

**ABNT NBR ISO/IEC 27037:2013 — Tecnologia da informação — Técnicas de segurança — Diretrizes para identificação, coleta, aquisição e preservação de evidência digital.**

A publicação brasileira corresponde à adoção nacional da ISO/IEC 27037.

Para fins deste projeto:

```text
ISO/IEC 27037:2012
=
REFERÊNCIA INTERNACIONAL
```

e:

```text
ABNT NBR ISO/IEC 27037:2013
=
REFERÊNCIA BRASILEIRA
```

---

# 6. Importância para DFIR

A preservação de evidências digitais possui papel importante em atividades de:

```text
SOC

CSIRT

Blue Team

Digital Forensics

Incident Response

Internal Investigation

Security Operations
```

Uma investigação técnica deve permitir compreender não apenas o conteúdo analisado, mas também como a evidência foi obtida e tratada.

---

# 7. Código de Processo Penal Brasileiro

A cadeia de custódia também é tratada pelo Código de Processo Penal brasileiro.

A referência utilizada neste projeto está localizada nos:

```text
ARTIGOS

158-A

158-B

158-C

158-D

158-E

158-F
```

do Decreto-Lei nº 3.689/1941 — Código de Processo Penal.

Esses dispositivos foram inseridos pela Lei nº 13.964/2019.

---

# 8. Artigo 158-A

O Art. 158-A estabelece o conceito jurídico de cadeia de custódia como o conjunto de procedimentos utilizados para manter e documentar a história cronológica de um vestígio.

O conceito envolve rastrear:

```text
RECONHECIMENTO

POSSE

MANUSEIO

TRAJETÓRIA

DESCARTE
```

Esse princípio possui relação direta com o histórico de transferências implementado no formulário GG.

---

# 9. Artigo 158-B

O Art. 158-B apresenta etapas relacionadas ao rastreamento do vestígio.

Para o contexto deste projeto, conceitos relacionados a etapas como:

```text
Reconhecimento

Isolamento

Fixação

Coleta

Acondicionamento

Transporte

Recebimento

Processamento

Armazenamento

Descarte
```

são particularmente relevantes para compreender o ciclo de vida de uma evidência.

---

# 10. Aplicação no Projeto GG

O projeto não reproduz literalmente um procedimento policial ou pericial oficial.

Ele utiliza os princípios de rastreabilidade como referência para criar um fluxo acadêmico e técnico de evidência digital.

Exemplo:

```text
RECONHECIMENTO
       │
       ▼
IDENTIFICAÇÃO
       │
       ▼
COLETA
       │
       ▼
ACONDICIONAMENTO
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

---

# 11. NIST SP 800-86

## Referência

**NIST Special Publication 800-86**

**Guide to Integrating Forensic Techniques into Incident Response**

Autores:

```text
Karen Kent

Suzanne Chevalier

Tim Grance

Hung Dang
```

Publicação:

```text
National Institute of Standards and Technology
2006
```

---

# 12. Objetivo do NIST SP 800-86

O guia apresenta orientações para utilização de técnicas de computação forense em processos de resposta a incidentes de segurança.

A publicação trata a computação forense sob uma perspectiva de tecnologia da informação e resposta a incidentes.

Entre as fontes de dados abordadas estão:

```text
Files

Operating Systems

Network Traffic

Applications
```

---

# 13. Processo Forense

O NIST SP 800-86 apresenta um processo de alto nível composto por atividades como:

```text
COLLECTION
     │
     ▼
EXAMINATION
     │
     ▼
ANALYSIS
     │
     ▼
REPORTING
```

Esse conceito é utilizado como referência para organização do fluxo técnico do projeto.

---

# 14. Relação com o GG Digital Forensics

No projeto:

```text
COLLECTION
```

está relacionado à identificação e obtenção controlada da evidência.

```text
EXAMINATION
```

está relacionado à preparação e inspeção do material coletado.

```text
ANALYSIS
```

está relacionado à interpretação técnica dos dados.

```text
REPORTING
```

está relacionado à documentação do incidente e cadeia de custódia.

---

# 15. Microsoft PowerShell

O projeto utiliza comandos PowerShell para demonstrar a obtenção de informações técnicas durante uma coleta em sistemas Windows.

As referências são provenientes da documentação oficial Microsoft Learn.

---

# 16. Get-FileHash

Cmdlet:

```powershell
Get-FileHash
```

Utilizado para calcular o hash de um arquivo.

Exemplo:

```powershell
Get-FileHash `
    -Path "C:\Evidence\suspicious.exe" `
    -Algorithm SHA256
```

Aplicação:

```text
Verificação de integridade

Identificação de arquivos

Comparação de cópias
```

---

# 17. SHA-256

No projeto GG, o SHA-256 é utilizado como o principal algoritmo de hash para verificação de integridade.

Exemplo:

```text
EVIDENCE
    │
    ▼
SHA-256
    │
    ▼
TRANSFER
    │
    ▼
SHA-256
    │
    ▼
COMPARE
```

Resultado esperado:

```text
MATCH
```

---

# 18. MD5

O formulário também permite registrar MD5 como identificador complementar.

Entretanto, ele não é tratado como o principal mecanismo criptográfico do projeto.

Estrutura adotada:

```text
SHA-256
PRIMARY INTEGRITY HASH
```

```text
MD5
COMPLEMENTARY IDENTIFIER
```

---

# 19. Get-CimInstance

O projeto utiliza:

```powershell
Get-CimInstance
```

para coletar informações do sistema Windows.

Exemplo:

```powershell
Get-CimInstance Win32_ComputerSystem |
    Select-Object Name,
                  Domain,
                  Manufacturer,
                  Model
```

Aplicação:

```text
Hostname

Domínio

Fabricante

Modelo
```

---

# 20. Identificação do Número de Série

Exemplo:

```powershell
Get-CimInstance Win32_BIOS |
    Select-Object SerialNumber
```

Aplicação:

```text
Serial Number

Service Tag

Asset Identification
```

---

# 21. Get-NetIPConfiguration

O cmdlet:

```powershell
Get-NetIPConfiguration
```

é utilizado para obter informações de configuração de rede.

Exemplo:

```powershell
Get-NetIPConfiguration |
    Where-Object IPv4Address -ne $null |
    Select-Object InterfaceAlias,
                  IPv4Address,
                  NetAdapter.MacAddress
```

Aplicação:

```text
Interface

IPv4

MAC Address
```

---

# 22. Fontes Primárias x Fontes Complementares

Para manter a qualidade das referências, o projeto prioriza fontes primárias.

## Fontes primárias

```text
ISO

ABNT

Presidência da República / Legislação Federal

NIST

Microsoft Learn
```

## Fontes complementares

Artigos, livros, treinamentos e materiais acadêmicos podem auxiliar na compreensão, mas não substituem as referências oficiais quando o objetivo é confirmar:

```text
Normas

Legislação

Documentação de comandos

Publicações técnicas oficiais
```

---

# 23. Hierarquia Utilizada no Projeto

```text
                ┌─────────────┐
                │     ISO     │
                │    ABNT     │
                └──────┬──────┘
                       │
                       ▼
              EVIDÊNCIA DIGITAL
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
       LEGISLAÇÃO             NIST
          CPP                  DFIR
             │                   │
             └─────────┬─────────┘
                       │
                       ▼
               PROCESSO GG DFIR
                       │
                       ▼
             MICROSOFT POWERSHELL
                       │
                       ▼
                IMPLEMENTAÇÃO
```

---

# 24. Referências Bibliográficas

## ISO

**INTERNATIONAL ORGANIZATION FOR STANDARDIZATION; INTERNATIONAL ELECTROTECHNICAL COMMISSION.**

ISO/IEC 27037:2012 — Information technology — Security techniques — Guidelines for identification, collection, acquisition and preservation of digital evidence.

Geneva: ISO, 2012.

---

## ABNT

**ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS.**

ABNT NBR ISO/IEC 27037:2013 — Tecnologia da informação — Técnicas de segurança — Diretrizes para identificação, coleta, aquisição e preservação de evidência digital.

Rio de Janeiro: ABNT, 2013.

---

## BRASIL

**BRASIL. Decreto-Lei nº 3.689, de 3 de outubro de 1941.**

Código de Processo Penal.

Capítulo relacionado ao exame de corpo de delito, cadeia de custódia e perícias em geral.

Arts. 158-A a 158-F.

---

## BRASIL — Lei nº 13.964/2019

**BRASIL. Lei nº 13.964, de 24 de dezembro de 2019.**

Aperfeiçoa a legislação penal e processual penal.

Entre suas alterações, introduziu dispositivos relacionados à cadeia de custódia no Código de Processo Penal.

---

## NIST

**KENT, Karen; CHEVALIER, Suzanne; GRANCE, Tim; DANG, Hung.**

Guide to Integrating Forensic Techniques into Incident Response.

NIST Special Publication 800-86.

Gaithersburg: National Institute of Standards and Technology, 2006.

DOI:

```text
10.6028/NIST.SP.800-86
```

---

## MICROSOFT

**MICROSOFT.**

Microsoft Learn — PowerShell Documentation.

Documentação técnica utilizada para os cmdlets:

```text
Get-FileHash

Get-CimInstance

Get-NetIPConfiguration
```

Consulta utilizada como referência técnica para os comandos apresentados no laboratório.

---

# 25. Matriz de Aplicação das Referências

| Recurso GG | ISO / ABNT | CPP | NIST | Microsoft |
|---|:---:|:---:|:---:|:---:|
| Identificação da evidência | ✅ | ✅ | ✅ | — |
| Registro do host | — | — | ✅ | ✅ |
| Coleta | ✅ | ✅ | ✅ | — |
| Hash SHA-256 | ✅ | — | ✅ | ✅ |
| Preservação | ✅ | ✅ | ✅ | — |
| Histórico de custódia | ✅ | ✅ | ✅ | — |
| Análise forense | — | — | ✅ | — |
| Dados de rede | — | — | ✅ | ✅ |
| Documentação | ✅ | ✅ | ✅ | — |

> A marcação indica relação conceitual com a referência e não significa que cada documento prescreva exatamente a implementação utilizada no projeto.

---

# 26. Mapeamento do Projeto

```text
ISO/IEC 27037
       │
       ├── Identification
       ├── Collection
       ├── Acquisition
       └── Preservation
       │
       ▼
GG DIGITAL EVIDENCE
       │
       ├── Case Information
       ├── Source System
       ├── Digital Evidence
       ├── Cryptographic Integrity
       ├── Collection & Preservation
       ├── Custody History
       ├── Forensic Notes
       └── Responsibility
```

---

# 27. Legislação e Cadeia de Custódia

```text
CPP
ARTS. 158-A A 158-F
       │
       ▼
HISTÓRICO CRONOLÓGICO
       │
       ▼
POSSE
       │
       ▼
MANUSEIO
       │
       ▼
RASTREABILIDADE
       │
       ▼
DESTINAÇÃO FINAL
```

---

# 28. NIST e Incident Response

```text
INCIDENT
    │
    ▼
COLLECTION
    │
    ▼
EXAMINATION
    │
    ▼
ANALYSIS
    │
    ▼
REPORTING
```

Esse processo complementa a visão de preservação e cadeia de custódia utilizada no laboratório.

---

# 29. Integridade no Projeto

```text
ORIGINAL FILE
      │
      ▼
  SHA-256
      │
      ▼
 COLLECTION
      │
      ▼
  SHA-256
      │
      ▼
 COMPARISON
      │
      ▼
  VERIFIED
```

A documentação do Microsoft PowerShell é utilizada para fundamentar tecnicamente a execução do comando de hash utilizado nos exemplos.

---

# 30. Limitações

Este projeto não pretende substituir:

```text
Normas oficiais

Procedimentos policiais

Procedimentos periciais

Políticas corporativas

Assessoria jurídica

Procedimentos de órgãos públicos

Manuais oficiais de ferramentas
```

O objetivo é aplicar conceitos reconhecidos em um ambiente acadêmico e controlado.

---

# 31. Direitos Autorais das Normas

Normas ISO e ABNT são documentos protegidos por direitos autorais.

Por esse motivo, este repositório:

```text
NÃO DISTRIBUI

NÃO REPRODUZ

NÃO DISPONIBILIZA

O TEXTO INTEGRAL DAS NORMAS
```

São apresentados apenas:

- identificação das normas;
- referências bibliográficas;
- conceitos gerais utilizados pelo projeto;
- aplicação acadêmica dos princípios estudados.

---

# 32. Data de Consulta

As referências oficiais deste projeto foram revisadas em:

```text
SETEMBRO / 2026
```

Como normas, publicações técnicas e documentação podem ser revisadas ao longo do tempo, recomenda-se consultar sempre a versão oficial vigente.

---

# 33. Documentos do Projeto

As referências apresentadas neste documento servem como apoio aos seguintes arquivos:

```text
README.md

docs/coleta-evidencias.md

docs/cadeia-de-custodia.md

docs/guia-preenchimento.md

docs/exemplo-caso.md

templates/chain-of-custody.html
```

---

# 34. Conclusão

O projeto GG busca combinar três perspectivas complementares:

```text
PADRONIZAÇÃO TÉCNICA

            +

RASTREABILIDADE

            +

RESPOSTA A INCIDENTES
```

A combinação dessas referências permite estruturar um processo de laboratório baseado em:

```text
IDENTIFY

COLLECT

PRESERVE

VERIFY

TRACE

ANALYZE

DOCUMENT
```

---

<div align="center">

## GG // DIGITAL FORENSICS

### TECHNICAL & LEGAL REFERENCES

`PRESERVE. VERIFY. TRACE.`

**Geovanni Andrade • 2026**

</div>
