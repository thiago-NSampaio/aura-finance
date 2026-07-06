import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categories } from '../utils/categories';
import { CategoryConfig } from '../types/category-config';
import { SvgIconComponent } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';

interface Transaction {
  id: number; // ✅ necessário pro @for track
  category: string;
  categoriaLabel: string;
  nome: string;
  data: string;
  hora: string;
  status: 'concluido' | 'pendente';
  valor: string;
  tipo: 'entrada' | 'saida';
  alerta?: boolean;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, FormsModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
  // ✅ loading state (skeleton)
  isLoading = true;

  filtroAtivo: 'todos' | 'entradas' | 'saidas' = 'todos';

  readonly categories: Record<string, CategoryConfig> = categories;

  periodSelecionado = '30d';

  readonly periods = [
    { value: 'hoje', label: 'Hoje' },
    { value: 'ontem', label: 'Ontem' },
    { value: '7d', label: 'Últimos 7 dias' },
    { value: '15d', label: 'Últimos 15 dias' },
    { value: '30d', label: 'Últimos 30 dias' },
    { value: '90d', label: 'Últimos 90 dias' },
    { value: 'mes_atual', label: 'Este mês' },
    { value: 'mes_passado', label: 'Mês passado' },
    { value: 'ano_atual', label: 'Este ano' },
    { value: 'personalizado', label: 'Personalizado' },
  ] as const;

  transacoes: Transaction[] = [
    {
      id: 1,
      category: 'food',
      categoriaLabel: 'Alimentação',
      nome: 'iFood *Delivery',
      data: 'Hoje',
      hora: '19:45',
      status: 'concluido',
      valor: '- R$ 85,90',
      tipo: 'saida',
    },
    {
      id: 2,
      category: 'salary',
      categoriaLabel: 'Salário',
      nome: 'TechCorp S.A.',
      data: 'Ontem',
      hora: '08:00',
      status: 'concluido',
      valor: '+ R$ 12.450,00',
      tipo: 'entrada',
    },
    {
      id: 3,
      category: 'transport',
      categoriaLabel: 'Transporte',
      nome: 'Uber *Trip',
      data: '12 Out 2023',
      hora: '14:20',
      status: 'concluido',
      valor: '- R$ 32,50',
      tipo: 'saida',
    },
    {
      id: 4,
      category: 'electronics',
      categoriaLabel: 'Eletrônicos',
      nome: 'Magazine Luiza',
      data: '10 Out 2023',
      hora: '03:00',
      status: 'pendente',
      valor: '- R$ 899,00',
      tipo: 'saida',
      alerta: true,
    },
  ];

  resumoBarras = [40, 55, 95, 35, 60, 30];
  saidasTotais = 'R$ 3.450,00';

  // ✅ getter otimizado
  get transacoesFiltradas(): Transaction[] {
    switch (this.filtroAtivo) {
      case 'entradas':
        return this.transacoes.filter((t) => t.tipo === 'entrada');
      case 'saidas':
        return this.transacoes.filter((t) => t.tipo === 'saida');
      default:
        return this.transacoes;
    }
  }

  getCategoryConfig(category: string): CategoryConfig {
    return (
      this.categories[category] ?? {
        icon: 'default.svg',
        bgClass: '#F3F4F610',
        color: '#9CA3AF',
      }
    );
  }

  setFiltro(filtro: 'todos' | 'entradas' | 'saidas') {
    this.filtroAtivo = filtro;
  }

  setPeriodo(periodo: string) {
    this.periodSelecionado = periodo;
    this.simularLoading();
  }

  carregarMais() {
    this.simularLoading();
  }

  private simularLoading() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  constructor() {
    this.simularLoading();
  }
}