document.getElementById('generateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const appName = document.getElementById('appName').value;
    const appType = document.getElementById('appType').value;

    const generatedCode = `
    // Example Generated Code
    const app = '${appName}';
    const type = '${appType}';
    console.log('Application Name:', app);
    console.log('Application Type:', type);
    `;
    
    document.getElementById('generatedCode').textContent = generatedCode;
    document.getElementById('resultSection').style.display = 'block';
});
