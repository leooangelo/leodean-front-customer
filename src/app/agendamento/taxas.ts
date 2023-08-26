export interface Taxa{
    value: string;
    viewValue: string;

}

export var taxas: Taxa[] = [
    {value:'TRANS_DIA', viewValue:'Transferências no mesmo dia do agendamento'},
    {value:'TRANS_DIA_10', viewValue:'Transferências até 10 dias da data de agendamento'},
    {value:'TRANS_TIPO_VALOR', viewValue: 'Transferências dependendo do valor da transferência'},
    {value:'TRANS_RESGRESSIVA', viewValue:'Transferências regressivas conforme a data de transferência'},
]
