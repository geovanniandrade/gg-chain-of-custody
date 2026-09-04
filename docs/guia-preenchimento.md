<div align="center">

# 📘 GG // DIGITAL FORENSICS

## Guia de Preenchimento — Chain of Custody

**Digital Evidence Record User Guide**

`GG-DFIR-GUIDE-01 • REV 1.0`

---

**PRESERVE • VERIFY • TRACE**

</div>

---

# 1. Objetivo

Este guia explica como preencher corretamente o formulário:

```text
templates/chain-of-custody.html
```

O formulário faz parte do projeto:

> **GG Digital Evidence & Chain of Custody**

e foi desenvolvido para registrar informações relacionadas à:

- identificação do incidente;
- identificação do ativo;
- identificação da evidência;
- integridade criptográfica;
- coleta;
- preservação;
- armazenamento;
- transferências de custódia;
- observações técnicas;
- responsabilidade e encerramento.

---

# 2. Estrutura do Formulário

O formulário GG é dividido em oito blocos principais:

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

Cada seção deve ser preenchida conforme as informações disponíveis no momento da coleta.

---

# 3. Regras Gerais de Preenchimento

Antes de iniciar, siga estas recomendações:

- utilizar informações objetivas;
- evitar abreviações ambíguas;
- registrar datas e horários corretamente;
- informar o fuso horário;
- não deixar campos técnicos importantes sem justificativa;
- utilizar identificadores únicos;
- manter consistência entre os registros;
- não apagar informações históricas;
- registrar exceções no campo de observações.

---

# 4. Section 01 — Case Information

Esta seção identifica o incidente e o responsável inicial pela coleta.

---

## 4.1 Case ID

Campo:

```text
Case ID
```

Utilize um identificador único.

Padrão sugerido:

```text
INC-ANO-NÚMERO
```

Exemplo:

```text
INC-2026-001
```

---

## 4.2 Evidence ID

Campo:

```text
Evidence ID
```

Identifica individualmente a evidência dentro do incidente.

Padrão:

```text
EVD-NÚMERO
```

Exemplo:

```text
EVD-001
```

Se o incidente possuir várias evidências:

```text
INC-2026-001

├── EVD-001
├── EVD-002
├── EVD-003
└── EVD-004
```

---

## 4.3 Status

Selecione o status atual da evidência.

Opções do formulário:

```text
ACTIVE

UNDER ANALYSIS

ARCHIVED

CLOSED
```

### ACTIVE

Utilize quando a evidência ainda estiver sendo coletada ou tratada.

### UNDER ANALYSIS

Utilize quando a evidência estiver em análise.

### ARCHIVED

Utilize quando a evidência estiver armazenada após a análise.

### CLOSED

Utilize quando o ciclo de tratamento estiver encerrado.

---

## 4.4 Severidade

Campo utilizado para indicar a criticidade do incidente.

Opções:

```text
Baixa

Média

Alta

Crítica
```

Caso a severidade ainda não tenha sido determinada:

```text
Não definida
```

---

## 4.5 Data do Incidente

Registre a data conhecida ou estimada do evento de segurança.

Exemplo:

```text
03/09/2026
```

---

## 4.6 Data da Coleta

Registre a data em que a evidência foi formalmente coletada.

Exemplo:

```text
03/09/2026
```

---

## 4.7 Hora da Coleta

Registre o horário da coleta.

Exemplo:

```text
14:32
```

Sempre informe também o fuso horário.

Exemplo:

```text
UTC-03:00 / Brasília
```

---

## 4.8 Custodiante Inicial

Informe o nome do profissional responsável pela primeira coleta ou registro formal da evidência.

Exemplo:

```text
João da Silva
```

---

## 4.9 Cargo / Equipe

Exemplo:

```text
Analista DFIR / CSIRT
```

ou:

```text
Analista de Segurança / Blue Team
```

---

## 4.10 Organização / Departamento

Exemplo:

```text
Segurança da Informação
```

ou:

```text
CSIRT Corporativo
```

---

# 5. Section 02 — Source System

Nesta seção devem ser registradas informações sobre o sistema onde a evidência foi identificada.

---

# 6. Hostname

Campo:

```text
Hostname
```

Exemplo:

```text
WS-FINANCE-01
```

PowerShell:

```powershell
hostname
```

ou:

```powershell
Get-CimInstance Win32_ComputerSystem |
    Select-Object Name, Domain
```

---

# 7. Endereço IPv4

Campo:

```text
IPv4
```

Exemplo:

```text
192.168.10.25
```

PowerShell:

```powershell
Get-NetIPConfiguration
```

Para visualizar apenas interfaces com IPv4:

```powershell
Get-NetIPConfiguration |
    Where-Object IPv4Address -ne $null
```

---

# 8. Endereço MAC

Campo:

```text
MAC Address
```

Exemplo:

```text
00:1A:2B:3C:4D:5E
```

PowerShell:

```powershell
Get-NetIPConfiguration |
    Where-Object IPv4Address -ne $null |
    Select-Object InterfaceAlias,
                  IPv4Address,
                  NetAdapter.MacAddress
```

---

# 9. Sistema Operacional / Build

Exemplo:

```text
Windows 11 Enterprise
Build 26100
```

PowerShell:

```powershell
Get-ComputerInfo |
    Select-Object WindowsProductName,
                  WindowsVersion,
                  OsBuildNumber
```

---

# 10. Número de Série / Asset Tag

Campo utilizado para identificar fisicamente o equipamento.

PowerShell:

```powershell
Get-CimInstance Win32_BIOS |
    Select-Object SerialNumber
```

Exemplo:

```text
ABC123XYZ
```

---

# 11. Usuário Logado

Exemplo:

```text
CORP\usuario
```

PowerShell:

```powershell
whoami
```

---

# 12. Localização Física / Lógica

Exemplos:

```text
Matriz / 4º Andar / Financeiro
```

ou:

```text
Datacenter Principal / Rack 04
```

ou:

```text
VLAN 20 / Servers
```

Evite preencher apenas:

```text
Servidor
```

Prefira informações específicas.

---

# 13. Section 03 — Digital Evidence

Esta seção registra as características do artefato coletado.

---

# 14. Nome Original do Artefato

Exemplo:

```text
suspicious_payload.exe
```

Utilize o nome existente no momento da identificação.

---

# 15. Tipo de Evidência

Escolha o tipo que melhor representa o artefato.

Exemplos:

```text
Arquivo suspeito

Malware

Documento

Imagem de disco

Memória RAM

Log

E-mail

Outro
```

---

# 16. Caminho Original

Registre o caminho completo do arquivo.

Exemplo:

```text
C:\Windows\Temp\suspicious_payload.exe
```

Esse campo é importante porque identifica onde a evidência estava localizada originalmente.

---

# 17. Tamanho em Bytes

O tamanho deve ser registrado preferencialmente em bytes.

PowerShell:

```powershell
(Get-Item "C:\Evidence\suspicious.exe").Length
```

Exemplo:

```text
1482752
```

---

# 18. Data de Criação

PowerShell:

```powershell
(Get-Item "C:\Evidence\suspicious.exe").CreationTimeUtc
```

---

# 19. Última Modificação

PowerShell:

```powershell
(Get-Item "C:\Evidence\suspicious.exe").LastWriteTimeUtc
```

---

# 20. Último Acesso

PowerShell:

```powershell
(Get-Item "C:\Evidence\suspicious.exe").LastAccessTimeUtc
```

---

# 21. Coleta Completa dos Metadados

Um comando único pode obter várias informações:

```powershell
Get-ItemProperty -Path "C:\Evidence\suspicious.exe" |
    Select-Object FullName,
                  Length,
                  CreationTimeUtc,
                  LastWriteTimeUtc,
                  LastAccessTimeUtc |
    Format-List
```

Exemplo de saída:

```text
FullName          : C:\Evidence\suspicious.exe
Length            : 1482752
CreationTimeUtc   : 03/09/2026 16:10:02
LastWriteTimeUtc  : 03/09/2026 16:10:02
LastAccessTimeUtc : 03/09/2026 17:32:14
```

---

# 22. Descrição / Contexto da Evidência

Utilize este campo para explicar:

- como o artefato foi encontrado;
- em qual alerta;
- qual processo estava relacionado;
- qual usuário estava envolvido;
- comportamento observado;
- contexto inicial do incidente.

Exemplo:

```text
Arquivo identificado após alerta de endpoint relacionado
à execução incomum no diretório C:\Windows\Temp.

A máquina foi isolada antes da coleta.

O artefato foi registrado antes de qualquer análise dinâmica.
```

---

# 23. Section 04 — Cryptographic Integrity

Essa seção registra os hashes da evidência.

---

# 24. SHA-256

O SHA-256 é o principal hash utilizado no projeto.

PowerShell:

```powershell
Get-FileHash `
    -Path "C:\Evidence\suspicious.exe" `
    -Algorithm SHA256
```

Exemplo:

```text
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

O valor deve possuir:

```text
64 caracteres hexadecimais
```

---

# 25. MD5 Complementar

PowerShell:

```powershell
Get-FileHash `
    -Path "C:\Evidence\suspicious.exe" `
    -Algorithm MD5
```

Exemplo:

```text
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

O MD5 possui:

```text
32 caracteres hexadecimais
```

No projeto GG, o SHA-256 deve ser utilizado como mecanismo principal de verificação.

---

# 26. Integrity Verification

O formulário exibe conceitualmente:

```text
PENDING / VERIFIED
```

Utilize:

```text
PENDING
```

quando a verificação ainda não tiver sido concluída.

Utilize:

```text
VERIFIED
```

quando o valor de hash tiver sido validado.

---

# 27. Original Preserved

Indique conceitualmente:

```text
YES
```

quando o original estiver preservado.

Utilize:

```text
NO
```

quando houver alguma condição que impeça essa afirmação.

Qualquer exceção deve ser registrada nas observações.

---

# 28. Section 05 — Collection & Preservation

Esta seção documenta como a evidência foi armazenada após a coleta.

---

# 29. Contêiner / Pacote

Exemplo:

```text
evidence_INC-2026-001_EVD-001.7z
```

Utilize um nome que permita relacionar claramente:

```text
INCIDENTE
+
EVIDÊNCIA
```

---

# 30. Formato

O formulário permite opções como:

```text
.7z criptografado

.zip criptografado

E01

RAW / DD

Outro
```

Escolha conforme o método utilizado.

---

# 31. ID da Mídia / Storage

Exemplo:

```text
DFIR-MEDIA-01
```

ou:

```text
FORENSIC-STORAGE-01
```

Esse identificador deve permitir localizar onde a evidência foi armazenada.

---

# 32. Hash do Contêiner

Depois de criar o pacote:

```powershell
Get-FileHash `
    "evidence_INC-2026-001_EVD-001.7z" `
    -Algorithm SHA256
```

Importante:

```text
SHA-256 do arquivo original
```

e:

```text
SHA-256 do contêiner
```

são valores de objetos diferentes.

Não devem ser confundidos.

---

# 33. Write-Blocker

Marque:

```text
Write-Blocker utilizado
```

quando um bloqueador de escrita tiver sido utilizado no processo.

Também informe:

```text
modelo

software

equipamento
```

ou:

```text
N/A
```

quando não aplicável.

---

# 34. Mídia Dedicada

Marque quando a evidência estiver sendo armazenada em mídia destinada especificamente ao procedimento.

Exemplo:

```text
DFIR-MEDIA-01
```

---

# 35. Contêiner Criptografado

Marque quando o pacote estiver protegido por criptografia.

Exemplo:

```text
.7z encrypted
```

---

# 36. Acesso Restrito

Marque quando o local de armazenamento possuir controle de acesso.

Exemplo:

```text
Storage DFIR restrito à equipe de Incident Response
```

---

# 37. Hash Pós-Coleta Validado

Marque após confirmar que a cópia coletada corresponde ao material esperado.

Fluxo:

```text
HASH ORIGINAL

      ↓

COLETA

      ↓

HASH DA CÓPIA

      ↓

COMPARAÇÃO
```

Resultado esperado:

```text
MATCH
```

---

# 38. Lacre / Identificador de Segurança

Quando houver:

```text
LACRE-DFIR-0001
```

Quando não houver:

```text
N/A
```

---

# 39. Local Inicial de Guarda

Exemplos:

```text
Storage DFIR

Cofre Digital

DFIR-MEDIA-01

Laboratório Forense

Estação Forense DFIR-02
```

---

# 40. Section 06 — Custody History

Essa é uma das seções mais importantes do formulário.

Toda mudança de posse deve ser registrada.

---

# 41. Data / Hora

Registre o momento da transferência.

Exemplo:

```text
03/09/2026 16:10
```

---

# 42. Entregue Por

Informe:

```text
Nome
Cargo
Equipe
```

Exemplo:

```text
João da Silva
Analista DFIR
```

---

# 43. Recebido Por

Informe o novo responsável.

Exemplo:

```text
Maria Oliveira
Analista Forense
```

---

# 44. Finalidade / Local

Exemplo:

```text
Finalidade:
Análise estática do artefato

Local:
Estação Forense DFIR-02
```

---

# 45. Validação

Pode representar:

```text
Assinatura

Rubrica

Identificador interno

Registro eletrônico
```

Exemplo:

```text
JS-DFIR
```

---

# 46. Exemplo de Histórico

| Nº | Data/Hora | Entregue por | Recebido por | Finalidade |
|---:|---|---|---|---|
| 01 | 03/09/2026 14:30 | Analista DFIR | Analista DFIR | Coleta inicial |
| 02 | 03/09/2026 16:10 | Analista DFIR | Analista Forense | Análise |
| 03 | 04/09/2026 09:00 | Analista Forense | Custodiante | Armazenamento |

> Dados fictícios utilizados para demonstração.

---

# 47. Adicionar Transferência

Na interface do formulário existe o botão:

```text
+ Adicionar transferência
```

Utilize sempre que houver uma nova movimentação da evidência.

Não substitua uma linha antiga.

Adicione um novo registro.

---

# 48. Section 07 — Forensic Notes

Utilize para registrar qualquer informação relevante que não esteja contemplada nos campos anteriores.

Exemplos:

```text
A máquina permaneceu ligada durante a coleta inicial.

A evidência foi identificada após alerta do EDR.

O equipamento foi isolado da rede.

Não foi utilizado write-blocker devido ao tipo de aquisição.

A análise foi executada sobre uma cópia de trabalho.

O hash foi recalculado após a transferência.
```

---

# 49. Registro de Exceções

Sempre documente situações fora do processo esperado.

Exemplo:

```text
Não foi possível obter o último acesso do arquivo
devido à configuração do sistema de arquivos.
```

ou:

```text
O host foi reiniciado antes da chegada da equipe DFIR.
```

Nunca esconda uma limitação do processo.

---

# 50. Section 08 — Responsibility & Approval

A última seção formaliza a responsabilidade sobre o registro.

O documento possui espaço para:

```text
Custodiante Inicial
/
Responsável pela Coleta
```

e:

```text
Responsável pela Validação
/
Liderança DFIR
```

Preencher:

```text
Nome

Assinatura

Data
```

quando aplicável.

---

# 51. Uso do Botão Limpar

O formulário possui:

```text
Limpar
```

Ao clicar, é exibida uma confirmação.

Utilize apenas quando desejar apagar o conteúdo atual do registro.

---

# 52. Salvamento Local

O formulário utiliza o navegador para manter dados localmente durante o preenchimento.

Isso significa que informações podem permanecer armazenadas no navegador utilizado.

O recurso existe para evitar perda acidental do preenchimento durante testes.

> Para ambientes reais, políticas internas de segurança e privacidade devem ser consideradas antes de armazenar informações sensíveis no navegador.

---

# 53. Imprimir / Gerar PDF

No topo do formulário:

```text
Imprimir / Gerar PDF
```

O botão utiliza a função de impressão do navegador.

Alternativamente:

```text
Ctrl + P
```

Depois selecione:

```text
Destino
↓
Salvar como PDF
```

---

# 54. Configuração Recomendada de Impressão

Utilize:

```text
Papel:
A4

Orientação:
Retrato

Escala:
Padrão

Margens:
Padrão
```

Caso o documento ultrapasse uma página, o navegador realizará a divisão automaticamente.

---

# 55. O que Não Deve Aparecer na Impressão

A versão impressa foi preparada para remover:

```text
Barra de navegação

Botão Limpar

Botão Voltar

Botão Imprimir

Elementos da interface
```

O PDF final deve apresentar apenas o documento de cadeia de custódia.

---

# 56. Nome do PDF

Sugestão de convenção:

```text
CASEID_EVIDENCEID_Chain-of-Custody.pdf
```

Exemplo:

```text
INC-2026-001_EVD-001_Chain-of-Custody.pdf
```

---

# 57. Organização de Arquivos

Estrutura sugerida para um caso:

```text
INC-2026-001/
│
├── evidence/
│   └── EVD-001/
│
├── reports/
│   └── INC-2026-001_EVD-001_Chain-of-Custody.pdf
│
├── hashes/
│   └── hashes.txt
│
└── notes/
    └── forensic-notes.txt
```

---

# 58. Checklist de Preenchimento

Antes de gerar o PDF:

- [ ] Case ID preenchido
- [ ] Evidence ID preenchido
- [ ] Status definido
- [ ] Data do incidente registrada
- [ ] Data e hora da coleta registradas
- [ ] Fuso horário registrado
- [ ] Custodiante inicial identificado
- [ ] Hostname registrado
- [ ] IPv4 registrado
- [ ] MAC registrado
- [ ] Sistema operacional registrado
- [ ] Usuário registrado
- [ ] Nome da evidência registrado
- [ ] Caminho original registrado
- [ ] Tamanho registrado
- [ ] Timestamps registrados
- [ ] SHA-256 registrado
- [ ] Contêiner identificado
- [ ] Storage identificado
- [ ] Hash do contêiner registrado
- [ ] Local de guarda registrado
- [ ] Transferências registradas
- [ ] Observações adicionadas quando necessário
- [ ] Responsáveis identificados

---

# 59. Exemplo Resumido

```text
CASE ID
INC-2026-001

EVIDENCE ID
EVD-001

STATUS
UNDER ANALYSIS

HOSTNAME
WS-FINANCE-01

IP
192.168.10.25

ARTIFACT
suspicious_payload.exe

PATH
C:\Windows\Temp\suspicious_payload.exe

SHA-256
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

CONTAINER
evidence_INC-2026-001_EVD-001.7z

STORAGE
DFIR-MEDIA-01

INTEGRITY
VERIFIED
```

---

# 60. Erros Comuns

Evite:

```text
Deixar Evidence ID em branco

Utilizar apenas o nome do arquivo

Não registrar o caminho original

Esquecer o fuso horário

Não calcular o SHA-256

Confundir hash original com hash do contêiner

Editar uma transferência antiga em vez de adicionar nova

Não registrar o destino da evidência

Não documentar exceções
```

---

# 61. Fluxo de Preenchimento

```text
ABRIR FORMULÁRIO
       │
       ▼
CASE INFORMATION
       │
       ▼
SOURCE SYSTEM
       │
       ▼
DIGITAL EVIDENCE
       │
       ▼
CRYPTOGRAPHIC INTEGRITY
       │
       ▼
COLLECTION & PRESERVATION
       │
       ▼
CUSTODY HISTORY
       │
       ▼
FORENSIC NOTES
       │
       ▼
RESPONSIBILITY
       │
       ▼
IMPRIMIR / GERAR PDF
```

---

# 62. Documentos Relacionados

```text
docs/coleta-evidencias.md

docs/cadeia-de-custodia.md

docs/exemplo-caso.md

docs/referencias.md

templates/chain-of-custody.html
```

---

# 63. Aviso

Este guia foi desenvolvido para:

- fins acadêmicos;
- laboratórios controlados;
- estudo de DFIR;
- resposta a incidentes simulada;
- demonstração técnica;
- portfólio profissional.

Em ambientes reais, o preenchimento deve seguir também:

```text
Políticas internas

Procedimentos do CSIRT

Requisitos jurídicos

Requisitos regulatórios

Classificação da informação

Políticas de retenção
```

---

<div align="center">

## GG // DIGITAL FORENSICS

### CHAIN OF CUSTODY USER GUIDE

`PRESERVE. VERIFY. TRACE.`

**Geovanni Andrade • 2026**

</div>
