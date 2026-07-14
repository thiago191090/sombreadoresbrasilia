// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura o formulário de orçamento pelo ID
    const orcamentoForm = document.getElementById('orcamentoForm');

    // Validação para evitar erros caso o script rode antes do formulário existir
    if (orcamentoForm) {
        
        // Adiciona um evento que escuta o momento em que o formulário é enviado
        orcamentoForm.addEventListener('submit', function(event) {
            
            // Impede o recarregamento automático da página
            event.preventDefault(); 
            
            // Exibe um alerta de sucesso (Aqui seria a conexão com banco de dados ou envio de e-mail no futuro)
            alert('Mensagem enviada com sucesso! Em breve retornaremos o contato.');
            
            // Limpa todos os campos digitados após o envio
            orcamentoForm.reset(); 
        });
    }
});