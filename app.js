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

document.getElementById('submitTextInput').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    // هنا يمكنك إضافة منطق التعامل مع المدخلات النصية
    console.log('User Input:', textInput);
    const response = handleUserInput(textInput); // قم بإنشاء دالة لمعالجة المدخلات النصية
    document.getElementById('generatedCode').textContent = response;
    document.getElementById('resultSection').style.display = 'block';
});

function handleUserInput(input) {
    // هنا يتم التعامل مع المدخلات النصية
    // يمكنك إضافة منطق لتحليل المدخلات وإنتاج الأكواد بناءً عليها
    const response = `
    // Example Response Code
    console.log('User Input:', '${input}');
    // Add your processing logic here
    `;
    return response;
}
