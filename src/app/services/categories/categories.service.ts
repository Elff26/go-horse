import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: {category: string, subcategories: { subcategory: string, link: string }[]}[] = [
    {
      category: "PNEUS",
      subcategories: [
        {
          subcategory: "Carro de Passeio",
          link: ""
        },
        {
          subcategory: "Moto",
          link: ""
        },
        {
          subcategory: "Van",
          link: ""
        },
        {
          subcategory: "Quadriciclo",
          link: ""
        }
      ]
    },
    {
      category: "AUTOPEÇAS",
      subcategories: [
        {
          subcategory: "Amortecedor",
          link: ""
        },
        {
          subcategory: "Motor",
          link: ""
        },
        {
          subcategory: "Embreagem",
          link: ""
        },
        {
          subcategory: "Freio",
          link: ""
        },
        {
          subcategory: "Suspensão",
          link: ""
        }
      ]
    },
    {
      category: "FERRAMENTAS/EQUIPAMENTOS",
      subcategories: [
        {
          subcategory: "Chave de Roda",
          link: ""
        },
        {
          subcategory: "Compressor de Ar",
          link: ""
        },
        {
          subcategory: "Macaco",
          link: ""
        }
      ]
    },
    {
      category: "ACESSÓRIOS EXTERNOS",
      subcategories: [
        {
          subcategory: "Calota",
          link: ""
        },
        {
          subcategory: "Bagageiro",
          link: ""
        },
        {
          subcategory: "Capas Automotivas",
          link: ""
        },
        {
          subcategory: "Para-Choque",
          link: ""
        },
        {
          subcategory: "Limpador Parabrisa",
          link: ""
        },
        {
          subcategory: "Retrovisor",
          link: ""
        }
      ]
    },
    {
      category: "ACESSÓRIOS INTERNOS",
      subcategories: [
        {
          subcategory: "Cadeira para Bebê",
          link: ""
        },
        {
          subcategory: "Maçanetas e Puxadores",
          link: ""
        },
        {
          subcategory: "Tapetes",
          link: ""
        },
        {
          subcategory: "Volante",
          link: ""
        }
      ]
    },
    {
      category: "LUBRIFICANTES E ADITIVOS",
      subcategories: [
        {
          subcategory: "Aditivos",
          link: ""
        },
        {
          subcategory: "Fluido de Freio",
          link: ""
        },
        {
          subcategory: "Silicone",
          link: ""
        },
        {
          subcategory: "Óleo de Motor",
          link: ""
        }
      ]
    }
  ]

  constructor() { }

  getCategories(): {category: string, subcategories: { subcategory: string, link: string }[]}[] {
    return [...this.categories];
  }
}