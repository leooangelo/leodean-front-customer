import { ContaResponse } from "../contas/conta-response";

export class AgendamentoResponse{
    id_transacao?: string;
    conta_origem?: ContaResponse;
    conta_destino?: ContaResponse;
    tipo_transacao?: string;
    valor?: number;
    valor_taxa?: number;
    valor_total?: number;
    data_transacao?: string;
    data_agendamento?: string;
    totalElements?: number;
    totalPages?: number;
    size?: number;
}
