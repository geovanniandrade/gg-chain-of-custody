<div align="center">

# GG // DIGITAL FORENSICS

### Digital Evidence & Chain of Custody

**DFIR • Incident Response • Evidence Preservation • Forensic Integrity**

Projeto prático voltado à coleta, preservação, documentação e rastreabilidade de evidências digitais durante investigações e processos de resposta a incidentes.

---

</div>

## 🔎 Sobre o projeto

O **GG Digital Evidence & Chain of Custody** foi desenvolvido como um projeto prático de **Digital Forensics & Incident Response (DFIR)**, com foco no processo de coleta de artefatos digitais suspeitos e na manutenção de uma cadeia de custódia documentada.

O projeto apresenta um fluxo estruturado para registrar:

- origem da evidência;
- identificação do ativo;
- responsável pela coleta;
- data e horário;
- características do artefato;
- integridade criptográfica;
- método de armazenamento;
- transferências de custódia;
- responsáveis pela posse da evidência;
- encerramento e documentação do caso.

Além da documentação técnica, o projeto disponibiliza uma **interface web própria para criação e impressão do registro de cadeia de custódia**.

---

## 🎯 Objetivo

Criar um processo reutilizável para cenários de investigação de incidentes de segurança envolvendo arquivos maliciosos ou outras evidências digitais.

O objetivo é garantir os principais pilares de preservação da evidência:

| Pilar | Objetivo |
|---|---|
| **Identificação** | Registrar claramente o artefato e sua origem |
| **Integridade** | Demonstrar que a evidência não sofreu alteração |
| **Rastreabilidade** | Registrar todas as mudanças de custódia |
| **Preservação** | Manter o artefato protegido durante a investigação |
| **Documentação** | Permitir auditoria e reconstrução do processo |

---

## 🔄 Evidence Lifecycle

```text
[ INCIDENTE ]
      │
      ▼
[ IDENTIFICAÇÃO ]
      │
      ▼
[ COLETA ]
      │
      ▼
[ HASH / INTEGRIDADE ]
      │
      ▼
[ PRESERVAÇÃO ]
      │
      ▼
[ REGISTRO DE CUSTÓDIA ]
      │
      ▼
[ TRANSFERÊNCIA ]
      │
      ▼
[ ANÁLISE FORENSE ]
      │
      ▼
[ ARMAZENAMENTO / ENCERRAMENTO ]
