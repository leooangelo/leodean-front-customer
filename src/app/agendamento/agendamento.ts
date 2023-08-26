import { ContaResponse } from "../contas/conta-response";

export class Agendamento{
    conta_origem?: ContaResponse;
    conta_destino?: ContaResponse;
    tipo_transacao?: string;
    valor: number;
    data_transacao?: string;
    data_agendamento?: string;
}
