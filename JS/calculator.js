document.addEventListener('DOMContentLoaded', () => {
    const loanAmountInput = document.getElementById('loanAmount');
    const loanAmountSlider = document.getElementById('loanAmountSlider');
    
    const interestRateInput = document.getElementById('interestRate');
    const interestRateSlider = document.getElementById('interestRateSlider');
    
    const loanTenureInput = document.getElementById('loanTenure');
    const loanTenureSlider = document.getElementById('loanTenureSlider');
    
    const emiResult = document.getElementById('emiResult');
    const totalInterestResult = document.getElementById('totalInterestResult');
    const totalAmountResult = document.getElementById('totalAmountResult');
    
    function formatCurrency(num) {
        return '₹' + Math.round(num).toLocaleString('en-IN');
    }
    
    function calculateEMI() {
        if(!loanAmountInput) return; // safeguard if not on loans page

        let p = parseFloat(loanAmountInput.value);
        let r = parseFloat(interestRateInput.value);
        let n = parseFloat(loanTenureInput.value) * 12; // months
        
        if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
            emiResult.innerText = '₹0';
            totalInterestResult.innerText = '₹0';
            totalAmountResult.innerText = '₹0';
            return;
        }

        let monthlyRate = r / 12 / 100;
        let emi = p * monthlyRate * (Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
        
        let totalAmount = emi * n;
        let totalInterest = totalAmount - p;
        
        emiResult.innerText = formatCurrency(emi);
        totalInterestResult.innerText = formatCurrency(totalInterest);
        totalAmountResult.innerText = formatCurrency(totalAmount);
    }
    
    function syncInputs(slider, input) {
        if(!slider || !input) return;
        
        slider.addEventListener('input', () => {
            input.value = slider.value;
            calculateEMI();
        });
        
        input.addEventListener('input', () => {
            slider.value = input.value;
            calculateEMI();
        });
    }
    
    syncInputs(loanAmountSlider, loanAmountInput);
    syncInputs(interestRateSlider, interestRateInput);
    syncInputs(loanTenureSlider, loanTenureInput);
    
    // Initial calculation
    calculateEMI();
});
