// URL da API
const API_URL = 'http://localhost:3000';

// Elementos do DOM
const corpoTabela = document.getElementById('corpoTabela');
const totalMatriculas = document.getElementById('totalMatriculas');
const matriculasAtivas = document.getElementById('matriculasAtivas');
const receitaTotal = document.getElementById('receitaTotal');
const modalidadePopular = document.getElementById('modalidadePopular');
const formMatricula = document.getElementById('formMatricula');
const buscarAluno = document.getElementById('buscarAluno');
const btnBuscar = document.getElementById('btnBuscar');
const btnLimparBusca = document.getElementById('btnLimparBusca');
const modalEditar = document.getElementById('modalEditar');
const formEditar = document.getElementById('formEditar');
const editarId = document.getElementById('editarId');
const editarStatus = document.getElementById('editarStatus');
const modalConfirmar = document.getElementById('modalConfirmar');
const btnConfirmarExclusao = document.getElementById('btnConfirmarExclusao');
const btnCancelarExclusao = document.getElementById('btnCancelarExclusao');
const toast = document.getElementById('toast');

// Valor mensal por modalidade
const valoresMensais = {
    'Musculação': 90,
    'Funcional': 120,
    'Dança': 100
};

// Desconto por plano
const descontos = {
    'Mensal': 0,
    'Trimestral': 0.10,
    'Semestral': 0.15
};

let matriculaIdExcluir = null;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarMatriculas();
    configurarEventListeners();
    definirDataAtual();
});

// Configurar event listeners
function configurarEventListeners() {
    formMatricula.addEventListener('submit', criarMatricula);
    formEditar.addEventListener('submit', atualizarMatricula);
    btnBuscar.addEventListener('click', buscarMatricula);
    btnLimparBusca.addEventListener('click', limparBusca);
    buscarAluno.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') buscarMatricula();
    });
    
    document.querySelectorAll('.fechar-modal').forEach(btn => {
        btn.addEventListener('click', fecharModais);
    });
    
    btnConfirmarExclusao.addEventListener('click', confirmarExclusao);
    btnCancelarExclusao.addEventListener('click', () => {
        modalConfirmar.classList.remove('ativo');
        matriculaIdExcluir = null;
    });
    
    // Fechar modal ao clicar fora
    [modalEditar, modalConfirmar].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) fecharModais();
        });
    });
    
    // Atualizar resumo ao mudar modalidade ou plano
    document.getElementById('modalidade').addEventListener('change', atualizarResumoValor);
    document.getElementById('plano').addEventListener('change', atualizarResumoValor);
}

// Definir data atual no campo de data
function definirDataAtual() {
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('dataMatricula').value = hoje;
}

// Carregar matrículas
async function carregarMatriculas() {
    try {
        const response = await fetch(`${API_URL}/matriculas`);
        const data = await response.json();
        
        if (response.ok) {
            renderizarMatriculas(data.matricula);
            atualizarDashboard(data.matricula);
        } else {
            mostrarToast('Erro ao carregar matrículas', 'erro');
        }
    } catch (error) {
        console.error('Erro ao conectar com a API:', error);
        mostrarToast('Erro ao conectar com o servidor', 'erro');
    }
}

// Renderizar matrículas na tabela
function renderizarMatriculas(matriculas) {
    corpoTabela.innerHTML = '';
    
    if (matriculas.length === 0) {
        corpoTabela.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 2rem; color: #666;">
                    Nenhuma matrícula encontrada
                </td>
            </tr>
        `;
        return;
    }
    
    matriculas.forEach(matricula => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${matricula.nomeAluno}</strong></td>
            <td>${matricula.idade}</td>
            <td>${matricula.modalidade}</td>
            <td>${matricula.plano}</td>
            <td>${formatarData(matricula.dataMatricula)}</td>
            <td>R$ ${matricula.valorMensal?.toFixed(2) || '0,00'}</td>
            <td>R$ ${matricula.valorTotal?.toFixed(2) || '0,00'}</td>
            <td><span class="status-badge status-${matricula.status?.toLowerCase()}">${matricula.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-editar" onclick="abrirModalEditar('${matricula._id}', '${matricula.status}')">
                        Editar
                    </button>
                    <button class="btn-excluir" onclick="abrirModalConfirmar('${matricula._id}')">
                        Excluir
                    </button>
                </div>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}

// Atualizar dashboard
function atualizarDashboard(matriculas) {
    totalMatriculas.textContent = matriculas.length;
    
    const ativas = matriculas.filter(m => m.status === 'Ativa').length;
    matriculasAtivas.textContent = ativas;
    
    const receita = matriculas.reduce((total, m) => total + (m.valorTotal || 0), 0);
    receitaTotal.textContent = `R$ ${receita.toFixed(2)}`;
    
    // Modalidade mais popular
    const contagemModalidades = {};
    matriculas.forEach(m => {
        contagemModalidades[m.modalidade] = (contagemModalidades[m.modalidade] || 0) + 1;
    });
    
    let modalidadeMax = '-';
    let maxCount = 0;
    for (const [modalidade, count] of Object.entries(contagemModalidades)) {
        if (count > maxCount) {
            maxCount = count;
            modalidadeMax = modalidade;
        }
    }
    modalidadePopular.textContent = modalidadeMax;
}

// Criar matrícula
async function criarMatricula(e) {
    e.preventDefault();
    
    const formData = new FormData(formMatricula);
    const dados = Object.fromEntries(formData);
    
    // Calcular valores
    const valorMensal = valoresMensais[dados.modalidade];
    const desconto = descontos[dados.plano];
    const valorTotal = valorMensal * (1 - desconto) * (dados.plano === 'Mensal' ? 1 : dados.plano === 'Trimestral' ? 3 : 6);
    
    dados.valorMensal = valorMensal;
    dados.valorTotal = valorTotal;
    
    try {
        const response = await fetch(`${API_URL}/matriculas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            mostrarToast('Matrícula criada com sucesso!', 'sucesso');
            formMatricula.reset();
            definirDataAtual();
            document.getElementById('resumoValor').style.display = 'none';
            carregarMatriculas();
        } else {
            mostrarToast(data.mensagem || 'Erro ao criar matrícula', 'erro');
        }
    } catch (error) {
        console.error('Erro ao criar matrícula:', error);
        mostrarToast('Erro ao conectar com o servidor', 'erro');
    }
}

// Atualizar matrícula
async function atualizarMatricula(e) {
    e.preventDefault();
    
    const id = editarId.value;
    const dados = { status: editarStatus.value };
    
    try {
        const response = await fetch(`${API_URL}/matricula/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            mostrarToast('Matrícula atualizada com sucesso!', 'sucesso');
            fecharModais();
            carregarMatriculas();
        } else {
            mostrarToast(data.mensagem || 'Erro ao atualizar matrícula', 'erro');
        }
    } catch (error) {
        console.error('Erro ao atualizar matrícula:', error);
        mostrarToast('Erro ao conectar com o servidor', 'erro');
    }
}

// Excluir matrícula
async function excluirMatricula(id) {
    try {
        const response = await fetch(`${API_URL}/matricula/${id}`, {
            method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (response.ok) {
            mostrarToast('Matrícula excluída com sucesso!', 'sucesso');
            carregarMatriculas();
        } else {
            mostrarToast(data.mensagem || 'Erro ao excluir matrícula', 'erro');
        }
    } catch (error) {
        console.error('Erro ao excluir matrícula:', error);
        mostrarToast('Erro ao conectar com o servidor', 'erro');
    }
}

// Buscar matrícula
async function buscarMatricula() {
    const nome = buscarAluno.value.trim();
    
    if (!nome) {
        carregarMatriculas();
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/matriculas/buscar?nome=${encodeURIComponent(nome)}`);
        const data = await response.json();
        
        if (response.ok) {
            renderizarMatriculas(data.matricula);
            mostrarToast(`Encontradas ${data.matricula.length} matrícula(s)`, 'sucesso');
        } else {
            mostrarToast(data.mensagem || 'Erro ao buscar matrícula', 'erro');
        }
    } catch (error) {
        console.error('Erro ao buscar matrícula:', error);
        mostrarToast('Erro ao conectar com o servidor', 'erro');
    }
}

// Limpar busca
function limparBusca() {
    buscarAluno.value = '';
    carregarMatriculas();
}

// Abrir modal de edição
function abrirModalEditar(id, status) {
    editarId.value = id;
    editarStatus.value = status;
    modalEditar.classList.add('ativo');
}

// Abrir modal de confirmação
function abrirModalConfirmar(id) {
    matriculaIdExcluir = id;
    modalConfirmar.classList.add('ativo');
}

// Confirmar exclusão
function confirmarExclusao() {
    if (matriculaIdExcluir) {
        excluirMatricula(matriculaIdExcluir);
        modalConfirmar.classList.remove('ativo');
        matriculaIdExcluir = null;
    }
}

// Fechar modais
function fecharModais() {
    modalEditar.classList.remove('ativo');
    modalConfirmar.classList.remove('ativo');
    matriculaIdExcluir = null;
}

// Atualizar resumo do valor
function atualizarResumoValor() {
    const modalidade = document.getElementById('modalidade').value;
    const plano = document.getElementById('plano').value;
    
    if (modalidade && plano) {
        const valorMensal = valoresMensais[modalidade];
        const desconto = descontos[plano];
        const meses = plano === 'Mensal' ? 1 : plano === 'Trimestral' ? 3 : 6;
        const valorTotal = valorMensal * meses * (1 - desconto);
        
        document.getElementById('valorMensalDisplay').textContent = `R$ ${valorMensal.toFixed(2)}`;
        document.getElementById('descontoDisplay').textContent = `${(desconto * 100).toFixed(0)}%`;
        document.getElementById('valorTotalDisplay').textContent = `R$ ${valorTotal.toFixed(2)}`;
        document.getElementById('resumoValor').style.display = 'block';
    } else {
        document.getElementById('resumoValor').style.display = 'none';
    }
}

// Formatar data
function formatarData(dataString) {
    if (!dataString) return '-';
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
}

// Mostrar toast
function mostrarToast(mensagem, tipo = 'sucesso') {
    toast.textContent = mensagem;
    toast.className = `toast ${tipo} ativo`;
    
    setTimeout(() => {
        toast.classList.remove('ativo');
    }, 3000);
}
