<div align="center">

# 🚨 GG // DIGITAL FORENSICS

## Caso Prático — Coleta e Cadeia de Custódia

**Simulação de Incidente com Arquivo Executável Suspeito**

`GG-DFIR-CASE-01 • REV 1.0`

---

**PRESERVE • VERIFY • TRACE**

</div>

---

# 1. Visão Geral

Este documento apresenta uma simulação completa de utilização do processo:

> **GG Digital Evidence & Chain of Custody**

O cenário demonstra como uma equipe de segurança poderia registrar uma evidência digital após a identificação de um arquivo executável suspeito em uma estação de trabalho corporativa.

O objetivo é demonstrar:

- abertura do incidente;
- identificação do ativo;
- identificação da evidência;
- coleta de metadados;
- cálculo de hash;
- preservação;
- acondicionamento;
- registro de custódia;
- transferência para análise;
- encerramento do caso.

---

# 2. Aviso

Todos os dados apresentados neste documento são:

```text
FICTÍCIOS

SIMULADOS

CRIADOS PARA LABORATÓRIO
```

Nenhum malware real é disponibilizado neste projeto.

Os hashes, usuários, equipamentos e incidentes apresentados servem exclusivamente para demonstração acadêmica.

---

# 3. Cenário

Em **04/09/2026**, a equipe de segurança recebeu um alerta relacionado à execução de um arquivo incomum em uma estação do setor financeiro.

O arquivo havia sido localizado no diretório de downloads de um usuário após o recebimento de uma mensagem de phishing simulada contendo uma suposta nota fiscal.

O endpoint gerou um alerta relacionado à tentativa de execução do arquivo:

```text
NF_093821_visualizador.exe
```

A equipe iniciou o processo de resposta a incidentes e decidiu preservar o arquivo como evidência para análise posterior.

---

# 4. Resumo Executivo

```text
CASE ID
INC-2026-004

EVIDENCE ID
EVD-001

INCIDENT TYPE
Suspicious Executable / Phishing

SOURCE HOST
GG-WS-FIN-07

USER
GGLAB\financeiro07

ARTIFACT
NF_093821_visualizador.exe

STATUS
CLOSED

INTEGRITY
VERIFIED
```

---

# 5. Linha do Tempo

| Horário | Evento |
|---|---|
| **09:14** | Usuário recebe mensagem de phishing simulada |
| **09:18** | Arquivo é salvo na estação |
| **09:20** | Endpoint gera alerta de execução suspeita |
| **09:23** | SOC inicia triagem |
| **09:28** | Estação é isolada da rede |
| **09:35** | Caso `INC-2026-004` é criado |
| **09:42** | Evidência `EVD-001` é identificada |
| **09:46** | Metadados são coletados |
| **09:49** | SHA-256 inicial é calculado |
| **10:02** | Evidência é copiada para mídia DFIR |
| **10:06** | Integridade da cópia é validada |
| **10:15** | Evidência é transferida para análise |
| **13:40** | Análise técnica é concluída |
| **15:00** | Evidência é arquivada |
| **16:10** | Caso é encerrado |

---

# 6. Identificação do Incidente

## Case Information

```text
Case ID:
INC-2026-004

Evidence ID:
EVD-001

Status inicial:
ACTIVE

Severidade:
ALTA

Data do incidente:
04/09/2026

Data da coleta:
04/09/2026

Hora da coleta:
09:42

Fuso horário:
UTC-03:00 / Brasília
```

---

# 7. Custodiante Inicial

```text
Nome:
Geovanni Andrade

Função:
Analista de Segurança / DFIR

Equipe:
GG Security Operations

Departamento:
Cybersecurity / Incident Response

Responsabilidade:
Identificação, coleta inicial e preservação da evidência
```

---

# 8. Sistema de Origem

O artefato foi localizado na seguinte estação:

```text
Hostname:
GG-WS-FIN-07

IPv4:
10.10.10.107

MAC Address:
00:50:56:A4:27:91

Sistema Operacional:
Windows 11 Enterprise

Build:
26100

Asset Tag:
GG-FIN-WS-007

Usuário:
GGLAB\financeiro07

Localização:
Laboratório GG / VLAN 10 USERS
```

---

# 9. Coleta das Informações do Host

Durante o procedimento de laboratório foram utilizados comandos para registrar informações do equipamento.

## Hostname e domínio

```powershell
Get-CimInstance Win32_ComputerSystem |
    Select-Object Name,
                  Domain,
                  Manufacturer,
                  Model
```

### Resultado simulado

```text
Name         : GG-WS-FIN-07
Domain       : gglab.corp
Manufacturer : VirtualBox
Model        : Virtual Machine
```

---

## Número de Série

```powershell
Get-CimInstance Win32_BIOS |
    Select-Object SerialNumber
```

### Resultado

```text
SerialNumber
------------
GG-FIN-WS-007
```

---

## IP e MAC

```powershell
Get-NetIPConfiguration |
    Where-Object IPv4Address -ne $null |
    Select-Object InterfaceAlias,
                  IPv4Address,
                  NetAdapter.MacAddress
```

### Resultado simulado

```text
InterfaceAlias : Ethernet
IPv4Address    : 10.10.10.107
MacAddress     : 00-50-56-A4-27-91
```

---

# 10. Identificação da Evidência

A evidência foi localizada no seguinte caminho:

```text
C:\Users\financeiro07\Downloads\NF_093821\NF_093821_visualizador.exe
```

## Informações registradas

```text
Evidence ID:
EVD-001

Nome:
NF_093821_visualizador.exe

Tipo:
Arquivo executável suspeito

Extensão:
.exe

Tamanho:
1.847.296 bytes
```

---

# 11. Contexto da Evidência

O arquivo foi identificado após um alerta de endpoint relacionado à execução incomum de um executável localizado no diretório de downloads do usuário.

O contexto inicial registrado foi:

```text
O usuário recebeu uma mensagem de phishing simulada
contendo uma suposta nota fiscal.

Após extrair o conteúdo recebido, um executável foi
identificado no diretório de downloads.

O endpoint registrou tentativa de execução.

A máquina foi isolada da rede antes da coleta.

O arquivo foi preservado para análise posterior.
```

---

# 12. Metadados

Os metadados foram obtidos utilizando:

```powershell
Get-ItemProperty `
    -Path "C:\Users\financeiro07\Downloads\NF_093821\NF_093821_visualizador.exe" |
    Select-Object FullName,
                  Length,
                  CreationTimeUtc,
                  LastWriteTimeUtc,
                  LastAccessTimeUtc |
    Format-List
```

---

## Resultado Simulado

```text
FullName:
C:\Users\financeiro07\Downloads\NF_093821\NF_093821_visualizador.exe

Length:
1847296

CreationTimeUtc:
04/09/2026 12:18:31

LastWriteTimeUtc:
04/09/2026 12:17:56

LastAccessTimeUtc:
04/09/2026 12:42:11
```

---

# 13. Registro MACB

```text
Created:
04/09/2026 12:18:31 UTC

Modified:
04/09/2026 12:17:56 UTC

Accessed:
04/09/2026 12:42:11 UTC
```

Essas informações foram registradas antes da movimentação da evidência.

---

# 14. Cálculo do SHA-256

O hash foi calculado antes da coleta.

```powershell
Get-FileHash `
    -Path "C:\Users\financeiro07\Downloads\NF_093821\NF_093821_visualizador.exe" `
    -Algorithm SHA256
```

---

## Resultado Simulado

```text
Algorithm:
SHA256

Hash:
A51842E74B4F681349983A3E41AA3695909BF31884D156873961C777978AE620
```

> O valor acima é utilizado apenas como dado fictício desta simulação.

---

# 15. Hash MD5 Complementar

Também foi registrado um identificador MD5 complementar.

```powershell
Get-FileHash `
    -Path "C:\Users\financeiro07\Downloads\NF_093821\NF_093821_visualizador.exe" `
    -Algorithm MD5
```

Resultado fictício:

```text
D973815DA7B91FD7614D16426F391F63
```

---

# 16. Registro de Integridade

```text
SHA-256:
A51842E74B4F681349983A3E41AA3695909BF31884D156873961C777978AE620

MD5:
D973815DA7B91FD7614D16426F391F63

Integrity Status:
VERIFIED

Original Preserved:
YES
```

---

# 17. Preparação para Coleta

Antes de transferir o artefato, foram confirmados:

- [x] Case ID criado
- [x] Evidence ID criado
- [x] Host identificado
- [x] Caminho original registrado
- [x] Tamanho registrado
- [x] Timestamps registrados
- [x] SHA-256 calculado
- [x] Custodiante identificado
- [x] Estação isolada
- [x] Destino da coleta definido

---

# 18. Destino da Evidência

A evidência foi transferida para mídia destinada ao laboratório DFIR.

```text
Media ID:
GG-DFIR-MEDIA-02

Tipo:
Storage de Evidências

Finalidade:
Preservação e transporte para estação forense

Acesso:
Restrito à equipe DFIR
```

---

# 19. Cópia de Trabalho

A evidência original foi preservada.

Para análise, foi utilizada uma cópia de trabalho.

```text
ORIGINAL
   │
   ├── Preservado
   │
   ├── Hash registrado
   │
   └── Acesso restrito
   │
   ▼
WORKING COPY
   │
   └── Utilizada na análise
```

---

# 20. Acondicionamento

A cópia destinada ao laboratório foi armazenada em um contêiner criptografado.

Nome:

```text
evidence_INC-2026-004_EVD-001.7z
```

Formato:

```text
7-Zip encrypted container
```

Media ID:

```text
GG-DFIR-MEDIA-02
```

---

# 21. Renomeação Defensiva

Sobre a cópia destinada ao laboratório, foi realizada uma alteração defensiva de extensão para reduzir risco de execução acidental.

Exemplo conceitual:

```text
NF_093821_visualizador.exe
```

transformado na cópia de trabalho em:

```text
NF_093821_visualizador.exe.bin
```

A evidência original permaneceu preservada.

---

# 22. Hash do Contêiner

Após o acondicionamento:

```powershell
Get-FileHash `
    "evidence_INC-2026-004_EVD-001.7z" `
    -Algorithm SHA256
```

Resultado fictício:

```text
3E2D1E8CF16C3D5A7732D88DD027D982C11E929BDE67E5658FA8DB63DD230927
```

---

# 23. Diferenciação dos Hashes

É importante destacar:

```text
SHA-256 DA EVIDÊNCIA ORIGINAL

A51842E74B4F681349983A3E41AA3695909BF31884D156873961C777978AE620
```

e:

```text
SHA-256 DO CONTÊINER

3E2D1E8CF16C3D5A7732D88DD027D982C11E929BDE67E5658FA8DB63DD230927
```

São hashes de objetos diferentes.

Portanto, não se espera que sejam iguais.

---

# 24. Verificação Pós-Coleta

Após a transferência para a mídia DFIR, o arquivo foi novamente verificado.

Fluxo:

```text
ORIGINAL SHA-256
        │
        ▼
      CÓPIA
        │
        ▼
NEW SHA-256
        │
        ▼
   COMPARAÇÃO
```

Resultado:

```text
ORIGINAL HASH:
A51842E74B4F681349983A3E41AA3695909BF31884D156873961C777978AE620

COPY HASH:
A51842E74B4F681349983A3E41AA3695909BF31884D156873961C777978AE620
```

Conclusão:

```text
MATCH
```

Status:

```text
INTEGRITY VERIFIED
```

---

# 25. Histórico de Custódia

## Transferência 01 — Coleta Inicial

```text
Data:
04/09/2026

Hora:
10:02

Entregue por:
Geovanni Andrade
Analista de Segurança / DFIR

Recebido por:
Geovanni Andrade
Analista de Segurança / DFIR

Finalidade:
Coleta e preservação inicial

Local:
GG-DFIR-MEDIA-02

Validação:
GG-DFIR-01
```

---

## Transferência 02 — Laboratório Forense

```text
Data:
04/09/2026

Hora:
10:15

Entregue por:
Geovanni Andrade
Analista de Segurança / DFIR

Recebido por:
Marina Costa
Analista Forense

Finalidade:
Análise técnica da cópia da evidência

Local:
GG-FOR-WKS-01

Validação:
GG-FOR-02
```

---

## Transferência 03 — Arquivamento

```text
Data:
04/09/2026

Hora:
15:00

Entregue por:
Marina Costa
Analista Forense

Recebido por:
Geovanni Andrade
Custodiante do Caso

Finalidade:
Arquivamento após conclusão da análise

Local:
GG-EVIDENCE-VAULT-01

Validação:
GG-DFIR-01
```

---

# 26. Tabela de Custódia

| Nº | Data/Hora | Entregue por | Recebido por | Finalidade / Local | Validação |
|---:|---|---|---|---|---|
| **01** | 04/09/2026 10:02 | Geovanni Andrade / DFIR | Geovanni Andrade / DFIR | Coleta inicial / GG-DFIR-MEDIA-02 | GG-DFIR-01 |
| **02** | 04/09/2026 10:15 | Geovanni Andrade / DFIR | Marina Costa / Forense | Análise / GG-FOR-WKS-01 | GG-FOR-02 |
| **03** | 04/09/2026 15:00 | Marina Costa / Forense | Geovanni Andrade / Custodiante | Arquivamento / GG-EVIDENCE-VAULT-01 | GG-DFIR-01 |

---

# 27. Análise Técnica

A análise foi realizada exclusivamente sobre uma cópia de trabalho.

Durante a triagem foram observadas características consideradas incompatíveis com o comportamento esperado para um visualizador legítimo de nota fiscal.

O objetivo deste projeto não é detalhar técnicas de engenharia reversa de malware, portanto o caso registra apenas as conclusões relevantes para o processo de custódia.

---

# 28. Resultado da Análise

Classificação do artefato:

```text
SUSPICIOUS / MALICIOUS BEHAVIOR
```

Origem provável:

```text
Phishing Simulation
```

Vetor:

```text
User Download
```

Impacto:

```text
Execução interrompida durante a simulação
```

Persistência identificada:

```text
Não aplicável à simulação
```

Exfiltração:

```text
Não identificada
```

---

# 29. Medidas de Contenção

Durante o incidente foram registradas as seguintes ações:

- isolamento da estação;
- bloqueio da execução do artefato;
- preservação da evidência;
- coleta de informações do host;
- cálculo do hash;
- criação de cópia para análise;
- registro da cadeia de custódia;
- análise em ambiente controlado;
- arquivamento da evidência.

---

# 30. Observações Forenses

```text
O endpoint foi isolado antes da transferência da evidência.

O SHA-256 foi calculado enquanto o arquivo ainda estava
em sua localização original.

A evidência original foi preservada.

Uma cópia foi criada para análise.

O hash da cópia foi comparado ao hash original.

Os valores permaneceram idênticos.

A evidência foi transferida para a estação forense
com registro formal da mudança de custódiante.

Após a análise, o material foi arquivado em storage
destinado às evidências do laboratório GG.
```

---

# 31. Estado Final

```text
CASE ID:
INC-2026-004

EVIDENCE ID:
EVD-001

FINAL STATUS:
CLOSED

EVIDENCE STATUS:
ARCHIVED

INTEGRITY:
VERIFIED

FINAL STORAGE:
GG-EVIDENCE-VAULT-01
```

---

# 32. Resultado do Incidente

O procedimento permitiu demonstrar:

```text
✓ Identificação do incidente

✓ Identificação do ativo

✓ Identificação da evidência

✓ Registro de metadados

✓ Cálculo SHA-256

✓ Preservação do original

✓ Criação de cópia de análise

✓ Acondicionamento

✓ Verificação de integridade

✓ Histórico de custódia

✓ Transferência controlada

✓ Arquivamento
```

---

# 33. Evidência Original

```text
CASE
INC-2026-004

EVIDENCE
EVD-001

FILE
NF_093821_visualizador.exe

SHA-256
A51842E74B4F681349983A3E41AA3695909BF31884D156873961C777978AE620

STATUS
PRESERVED
```

---

# 34. Pacote de Evidências

```text
PACKAGE
evidence_INC-2026-004_EVD-001.7z

PACKAGE SHA-256
3E2D1E8CF16C3D5A7732D88DD027D982C11E929BDE67E5658FA8DB63DD230927

MEDIA
GG-DFIR-MEDIA-02

FINAL STORAGE
GG-EVIDENCE-VAULT-01
```

---

# 35. Diagrama do Caso

```text
┌─────────────────────────────┐
│    PHISHING SIMULADO        │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ GG-WS-FIN-07                │
│ Usuário Financeiro          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ ARQUIVO SUSPEITO            │
│ NF_093821_visualizador.exe  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ ALERTA DE SEGURANÇA         │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ ISOLAMENTO DO ENDPOINT      │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ INCIDENTE INC-2026-004      │
│ EVIDÊNCIA EVD-001           │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ METADADOS + SHA-256         │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ GG-DFIR-MEDIA-02            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ CÓPIA DE ANÁLISE            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ ESTAÇÃO FORENSE             │
│ GG-FOR-WKS-01               │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ ARQUIVAMENTO                │
│ GG-EVIDENCE-VAULT-01        │
└─────────────────────────────┘
```

---

# 36. Cadeia de Custódia Resumida

```text
GG-WS-FIN-07
       │
       │ IDENTIFICAÇÃO
       ▼
EVD-001
       │
       │ COLETA
       ▼
Geovanni Andrade
       │
       │ TRANSFERÊNCIA
       ▼
GG-DFIR-MEDIA-02
       │
       │ TRANSFERÊNCIA
       ▼
Marina Costa
       │
       │ ANÁLISE
       ▼
GG-FOR-WKS-01
       │
       │ ARQUIVAMENTO
       ▼
GG-EVIDENCE-VAULT-01
```

---

# 37. Checklist Final

- [x] Case ID criado
- [x] Evidence ID criado
- [x] Ativo identificado
- [x] Usuário registrado
- [x] Evidência identificada
- [x] Caminho original registrado
- [x] Tamanho registrado
- [x] Metadados coletados
- [x] SHA-256 inicial calculado
- [x] MD5 complementar registrado
- [x] Original preservado
- [x] Cópia criada
- [x] Integridade validada
- [x] Mídia identificada
- [x] Contêiner identificado
- [x] Hash do contêiner registrado
- [x] Transferências documentadas
- [x] Análise realizada sobre cópia
- [x] Evidência arquivada
- [x] Caso encerrado

---

# 38. Mapeamento para o Formulário GG

Os dados deste caso podem ser utilizados diretamente no formulário:

```text
templates/chain-of-custody.html
```

Correspondência:

| Formulário | Dados do Caso |
|---|---|
| **Case Information** | INC-2026-004 |
| **Source System** | GG-WS-FIN-07 |
| **Digital Evidence** | NF_093821_visualizador.exe |
| **Cryptographic Integrity** | SHA-256 / MD5 |
| **Collection & Preservation** | GG-DFIR-MEDIA-02 |
| **Custody History** | 3 transferências |
| **Forensic Notes** | Observações do incidente |
| **Responsibility** | Custodiante / Validação |

---

# 39. Conclusão

A simulação demonstra que a cadeia de custódia não consiste apenas na obtenção de um hash ou na assinatura de um documento.

Ela envolve todo o processo de:

```text
IDENTIFICAR

REGISTRAR

COLETAR

PRESERVAR

VERIFICAR

TRANSFERIR

ANALISAR

ARQUIVAR
```

A combinação de registro técnico, integridade criptográfica e histórico cronológico permite reconstruir o ciclo de vida da evidência.

---

# 40. Documentos Relacionados

```text
docs/coleta-evidencias.md

docs/cadeia-de-custodia.md

docs/guia-preenchimento.md

docs/referencias.md

templates/chain-of-custody.html
```

---

<div align="center">

## GG // DIGITAL FORENSICS

### INCIDENT CASE STUDY

`INC-2026-004 • EVD-001`

**PRESERVE. VERIFY. TRACE.**

**Geovanni Andrade • 2026**

</div>
