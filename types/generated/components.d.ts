import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoaddInformacoesAdicionais extends Schema.Component {
  collectionName: 'components_infoadd_informacoes_adicionais';
  info: {
    displayName: 'Informacoes_adicionais';
    icon: 'check-circle';
  };
  attributes: {
    Descreva: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'infoadd.informacoes-adicionais': InfoaddInformacoesAdicionais;
    }
  }
}
