<div align="center">

# 🧪 GG // DIGITAL FORENSICS

## Procedimento de Coleta de Evidências Digitais

**Digital Evidence Collection Procedure**

`GG-DFIR-PROC-01 • REV 1.0`

---

**PRESERVE • VERIFY • TRACE**

</div>

---

# 1. Objetivo

Este documento define um processo prático para **identificação, registro, coleta, preservação e verificação de integridade de evidências digitais** durante atividades de Digital Forensics & Incident Response (DFIR).

O objetivo é reduzir riscos de:

- alteração da evidência;
- perda de informações relevantes;
- execução acidental de arquivos suspeitos;
- ausência de rastreabilidade;
- contaminação da análise;
- inconsistências no registro técnico.

O processo apresentado faz parte do projeto:

> **GG Digital Evidence & Chain of Custody**

---

# 2. Escopo

Este procedimento pode ser utilizado em cenários acadêmicos, laboratoriais ou corporativos envolvendo evidências como:

- arquivos suspeitos;
- possíveis malwares;
- documentos;
- logs;
- mensagens de e-mail;
- imagens forenses;
- dumps de memória;
- arquivos compactados;
- scripts;
- executáveis;
- artefatos coletados durante resposta a incidentes.

> Este projeto não distribui amostras reais de malware.

---

# 3. Princípios da Coleta

Toda coleta deve buscar preservar quatro propriedades fundamentais.

| Princípio | Descrição |
|---|---|
| **Identificação** | Determinar exatamente qual artefato está sendo coletado |
| **Integridade** | Garantir mecanismos para identificar alterações |
| **Preservação** | Proteger a evidência contra modificação ou perda |
| **Rastreabilidade** | Registrar responsáveis e movimentações da evidência |

---

# 4. Fluxo Operacional

```text
┌─────────────────────────┐
│   INCIDENTE DETECTADO   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ IDENTIFICAR O SISTEMA   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ IDENTIFICAR A EVIDÊNCIA │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ REGISTRAR METADADOS     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ CALCULAR HASH IN SITU   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│     COLETAR ARTEFATO    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│       PRESERVAR         │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ VALIDAR INTEGRIDADE     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ REGISTRAR NA CUSTÓDIA   │
└─────────────────────────┘
```

---

# 5. Preparação para a Coleta

Antes de manipular o artefato, o responsável deve registrar o contexto inicial do incidente.

## Informações mínimas

```text
Case ID
Evidence ID
Data
Hora
Fuso horário
Responsável pela coleta
Cargo / equipe
Sistema de origem
Localização da evidência
```

Exemplo:

```text
Case ID:      INC-2026-001
Evidence ID:  EVD-001
Timezone:     UTC-03:00 / Brasília
Status:       ACTIVE
```

---

# 6. Identificação do Sistema de Origem

O equipamento onde a evidência foi localizada deve ser identificado antes da coleta.

Registrar:

- hostname;
- endereço IPv4;
- endereço MAC;
- sistema operacional;
- versão ou build;
- número de série;
- usuário ativo;
- domínio;
- localização física ou lógica.

---

## 6.1 Hostname e domínio

PowerShell:

```powershell
Get-CimInstance Win32_ComputerSystem |
    Select-Object Name, Domain, Manufacturer, Model
```

---

## 6.2 Número de série

```powershell
Get-CimInstance Win32_BIOS |
    Select-Object SerialNumber
```

---

## 6.3 Endereço IP e MAC

```powershell
Get-NetIPConfiguration |
    Where-Object IPv4Address -ne $null |
    Select-Object InterfaceAlias,
                  IPv4Address,
                  NetAdapter.MacAddress
```

---

# 7. Identificação da Evidência

Antes de mover, copiar, renomear ou analisar o arquivo, devem ser registradas suas características originais.

Registrar:

```text
Nome do arquivo
Caminho completo
Extensão
Tamanho
Data de criação
Última modificação
Último acesso
Tipo de evidência
```

Exemplo:

```text
Nome:
suspicious_payload.exe

Caminho:
C:\Windows\Temp\suspicious_payload.exe

Tipo:
Arquivo executável suspeito
```

---

# 8. Coleta de Metadados

Os metadados auxiliam na reconstrução da linha do tempo do incidente.

PowerShell:

```powershell
Get-ItemProperty -Path "C:\Caminho\Do\Arquivo\malware.exe" |
    Select-Object FullName,
                  Length,
                  CreationTimeUtc,
                  LastWriteTimeUtc,
                  LastAccessTimeUtc |
    Format-List
```

Os principais atributos registrados são:

| Campo | Descrição |
|---|---|
| `FullName` | Caminho completo |
| `Length` | Tamanho em bytes |
| `CreationTimeUtc` | Data de criação |
| `LastWriteTimeUtc` | Última modificação |
| `LastAccessTimeUtc` | Último acesso |

---

# 9. Integridade Criptográfica

Antes da movimentação da evidência, deve ser calculado um hash do artefato original.

## SHA-256

```powershell
Get-FileHash `
    -Path "C:\Caminho\Do\Arquivo\malware.exe" `
    -Algorithm SHA256
```

O valor obtido deve ser registrado no formulário de cadeia de custódia.

Exemplo:

```text
Algorithm:
SHA-256

Hash:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 9.1 Hash complementar MD5

O projeto também permite registrar MD5 como identificador complementar.

```powershell
Get-FileHash `
    -Path "C:\Caminho\Do\Arquivo\malware.exe" `
    -Algorithm MD5
```

> O SHA-256 deve ser tratado como o principal mecanismo de verificação de integridade neste projeto.

---

# 10. Registro In Situ

O termo **In Situ** indica que as informações foram obtidas enquanto o artefato ainda se encontrava em sua localização original.

Antes da extração, registrar:

```text
Original Path
Original Filename
File Size
Creation Time
Modification Time
Access Time
SHA-256
MD5
```

Exemplo:

```text
Source Path:
C:\Windows\Temp\suspicious_payload.exe

SHA-256:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

# 11. Coleta do Artefato

Após o registro inicial e cálculo do hash, o artefato pode ser transferido para o meio destinado à investigação.

A coleta deve evitar ações desnecessárias sobre o arquivo original.

Evitar:

- abrir o arquivo;
- executar o arquivo;
- modificar seu conteúdo;
- editar seus atributos;
- mover sem registrar;
- enviar por canais não controlados;
- realizar análise diretamente sobre a única cópia existente.

---

# 12. Acondicionamento

Após a coleta, a evidência pode ser armazenada em um contêiner destinado ao transporte ou preservação.

Exemplo:

```text
evidence_INC-2026-001_EVD-001.7z
```

O material-base utilizado no projeto apresenta o uso de contêiner `.7z` criptografado e posterior cálculo do SHA-256 do pacote. :contentReference[oaicite:2]{index=2}

---

## 12.1 Renomeação defensiva

Em laboratório, um artefato executável pode ser renomeado para reduzir o risco de execução acidental.

Exemplo:

```powershell
Rename-Item `
    "C:\temp\malware.exe" `
    "malware.exe.bin"
```

> Essa alteração deve ocorrer somente sobre a cópia destinada à análise, nunca silenciosamente sobre a evidência original.

---

## 12.2 Criação de contêiner criptografado

Exemplo utilizando 7-Zip:

```powershell
7z a `
    -p"infected" `
    -mhe=on `
    "evidence_INC-2026-001.7z" `
    "C:\temp\malware.exe.bin"
```

No contexto deste laboratório, a senha convencional utilizada para o pacote é:

```text
infected
```

---

# 13. Hash do Contêiner

Após criar o pacote de evidência, calcular também seu SHA-256.

```powershell
Get-FileHash `
    "evidence_INC-2026-001.7z" `
    -Algorithm SHA256
```

Registrar separadamente:

```text
HASH ORIGINAL
SHA-256 do artefato original

HASH DO CONTÊINER
SHA-256 do pacote de armazenamento
```

Esses dois valores representam objetos diferentes e não devem ser confundidos.

---

# 14. Mídia de Armazenamento

A evidência pode ser destinada a:

- storage DFIR;
- estação forense;
- mídia dedicada;
- cofre digital;
- repositório de evidências;
- ambiente controlado de análise.

Quando aplicável, registrar:

```text
Media ID
Fabricante
Modelo
Número de série
Responsável
Local de guarda
```

Exemplo:

```text
Media ID:
DFIR-MEDIA-01
```

---

# 15. Write-Blocker

Quando aplicável ao tipo de aquisição realizado, deve ser registrado o uso de mecanismo de proteção contra escrita.

Registrar:

```text
Write-Blocker:
YES / NO / N/A

Modelo:
____________________
```

O uso ou não dessa tecnologia depende do tipo de evidência, mídia e procedimento adotado.

---

# 16. Verificação Pós-Coleta

Após a transferência da evidência, a integridade deve ser verificada novamente.

Fluxo:

```text
HASH ORIGINAL
      │
      ▼
   COLETA
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
HASH ORIGINAL = HASH DA CÓPIA VERIFICADA
```

Se os valores forem diferentes:

```text
INTEGRITY STATUS:
FAILED
```

A divergência deve ser registrada e investigada antes de continuar a análise.

---

# 17. Cadeia de Custódia

Após a coleta e preservação, toda mudança de posse deve ser registrada.

Campos recomendados:

```text
Data
Hora
Entregue por
Recebido por
Cargo / função
Finalidade
Local de guarda
Validação
```

Exemplo:

| Nº | Data/Hora | Entregue por | Recebido por | Finalidade |
|---:|---|---|---|---|
| 01 | 03/09/2026 14:30 | Analista DFIR | Analista DFIR | Coleta |
| 02 | 03/09/2026 16:10 | Analista DFIR | Analista Forense | Análise |
| 03 | 04/09/2026 09:00 | Analista Forense | Custodiante | Armazenamento |

> Dados fictícios utilizados somente para demonstração.

---

# 18. Identificação da Evidência

O projeto utiliza uma convenção simples para facilitar a organização.

## Incidente

```text
INC-ANO-NÚMERO
```

Exemplo:

```text
INC-2026-001
```

## Evidência

```text
EVD-NÚMERO
```

Exemplo:

```text
EVD-001
```

## Pacote

```text
evidence_CASEID_EVIDENCEID.7z
```

Exemplo:

```text
evidence_INC-2026-001_EVD-001.7z
```

---

# 19. Checklist Operacional

Antes de concluir a coleta, verificar:

- [ ] Caso possui identificador único
- [ ] Evidência possui identificador único
- [ ] Host de origem foi registrado
- [ ] Caminho original foi documentado
- [ ] Tamanho do arquivo foi registrado
- [ ] Timestamps foram registrados
- [ ] SHA-256 original foi calculado
- [ ] Evidência foi coletada de forma controlada
- [ ] Meio de armazenamento foi identificado
- [ ] Contêiner foi criado, quando aplicável
- [ ] SHA-256 do contêiner foi calculado
- [ ] Integridade pós-coleta foi validada
- [ ] Custodiante inicial foi identificado
- [ ] Local de guarda foi registrado
- [ ] Cadeia de custódia foi iniciada

---

# 20. Exemplo Resumido

```text
CASE ID
INC-2026-001

EVIDENCE ID
EVD-001

SOURCE HOST
WS-FINANCE-01

SOURCE PATH
C:\Windows\Temp\suspicious_payload.exe

COLLECTOR
Analista DFIR

HASH ALGORITHM
SHA-256

INTEGRITY
VERIFIED

STORAGE
DFIR-MEDIA-01

STATUS
UNDER ANALYSIS
```

---

# 21. Pontos de Atenção

Durante a coleta:

> Não executar a evidência apenas para verificar seu comportamento.

> Não trabalhar diretamente sobre a única cópia disponível.

> Não registrar apenas o nome do arquivo; o caminho original também é importante.

> Não realizar transferência sem registro quando a posse da evidência mudar.

> Não confundir o hash do arquivo original com o hash do contêiner que o armazena.

> Não considerar a cadeia de custódia apenas como assinatura final; ela representa todo o histórico de posse e tratamento.

---

# 22. Integração com o Projeto GG

Após realizar o procedimento descrito neste documento, os dados devem ser registrados no formulário:

```text
templates/chain-of-custody.html
```

O formulário possui campos para:

```text
01  Case Information
02  Source System
03  Digital Evidence
04  Cryptographic Integrity
05  Collection & Preservation
06  Custody History
07  Forensic Notes
08  Responsibility & Approval
```

---

# 23. Documentos Relacionados

Consulte também:

```text
docs/cadeia-de-custodia.md
docs/guia-preenchimento.md
docs/exemplo-caso.md
docs/referencias.md
```

---

# 24. Aviso de Uso

Este procedimento foi desenvolvido para:

- fins acadêmicos;
- estudos de DFIR;
- laboratórios controlados;
- simulações de resposta a incidentes;
- desenvolvimento de portfólio técnico.

Procedimentos reais devem respeitar as políticas da organização, requisitos jurídicos aplicáveis, escopo da investigação e orientação dos responsáveis pelo processo.

---

<div align="center">

## GG // DIGITAL FORENSICS

### DIGITAL EVIDENCE COLLECTION

`PRESERVE. VERIFY. TRACE.`

**Geovanni Andrade • 2026**

</div>
