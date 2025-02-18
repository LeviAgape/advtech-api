export interface Process {
  id?: string;
  numberProcess: string;
  forumName: string;
  courtName: string; // Nome da vara
  courtNumber: string;
  author: string; // Advogado líder do processo
  defendantName: string; // Réu
  processStatus?: string | null; // Situação processual (opcional)
  status: "available" | "archived" | "processing"; // Situação de status
  pending?: string | null; // Pendências (opcional)
  note?: string | null; // Observação (opcional)
  processDate: string; // Data do processo
  partner: string; // Parceiro
  department: string; // Departamento
  processOutcome: "won" | "lost" | "undefined"; // Resultado do processo
  value: number; // Valor
  portion: number; // Parcela
  createdAt: Date; // Data de criação
  updatedAt: Date; // Data de atualização
}

export interface FilterProcessFinance {
  id?: string;
  numberProcess: string;
  defendantName: string;
  value: number;
  portion: number;
}