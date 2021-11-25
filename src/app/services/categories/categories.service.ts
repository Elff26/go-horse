import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: {category: string, subcategories: { subcategory: string }[]}[] = [
    {
      category: "PNEUS",
      subcategories: [
        {
          subcategory: "Pneu Carro"
        },
        {
          subcategory: "Pneu Moto"
        },
        {
          subcategory: "Pneu Van"
        },
        {
          subcategory: "Pneu Quadriciclo"
        }
      ]
    },
    {
      category: "AUTOPEÇAS",
      subcategories: [
        {
          subcategory: "Amortecedor"
        },
        {
          subcategory: "Motor"
        },
        {
          subcategory: "Embreagem"
        },
        {
          subcategory: "Freio"
        },
        {
          subcategory: "Suspensão"
        }
      ]
    },
    {
      category: "FERRAMENTAS/EQUIPAMENTOS",
      subcategories: [
        {
          subcategory: "Chave de Roda"
        },
        {
          subcategory: "Compressor de Ar"
        },
        {
          subcategory: "Macaco"
        }
      ]
    },
    {
      category: "ACESSÓRIOS EXTERNOS",
      subcategories: [
        {
          subcategory: "Calota"
        },
        {
          subcategory: "Bagageiro"
        },
        {
          subcategory: "Capas Automotivas"
        },
        {
          subcategory: "Para-Choque"
        },
        {
          subcategory: "Limpador Parabrisa"
        },
        {
          subcategory: "Retrovisor"
        }
      ]
    },
    {
      category: "ACESSÓRIOS INTERNOS",
      subcategories: [
        {
          subcategory: "Cadeira para Bebê"
        },
        {
          subcategory: "Maçanetas e Puxadores"
        },
        {
          subcategory: "Tapetes"
        },
        {
          subcategory: "Volante"
        }
      ]
    },
    {
      category: "LUBRIFICANTES E ADITIVOS",
      subcategories: [
        {
          subcategory: "Aditivos"
        },
        {
          subcategory: "Fluido de Freio"
        },
        {
          subcategory: "Silicone"
        },
        {
          subcategory: "Óleo de Motor"
        }
      ]
    }
  ]

  constructor() { }

  getCategories(): {category: string, subcategories: { subcategory: string }[]}[] {
    return [...this.categories];
  }
}